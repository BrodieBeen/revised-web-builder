import User from "./user";
import Tools from "./tools";
import ActionType from "./action/actionType";
import Item from "./item/item";
import Box from "./item/box";
import Vector from "./vector";
import DOMManager from "./DOMmanager";
import ActionHandler from "./action/actionHandler";
import Circle from "./item/circle";
import Transform from "./transform";
import Color from "./color";
import ResizeBox from "./resizeBox";
import NonItem from "./nonItem/nonItem";

const canvas = <HTMLCanvasElement>document.getElementsByClassName("page")[0];
const ctx = canvas.getContext("2d");





function updateSelected(){
    const mousePos = mouse.getVirtualPos();
    let selected: Item;
    Item.iterate(item => {
        if(item.getTransform().isCollidingVector(mousePos)){
            selected = item;
        }
    });

    ResizeBox.init(selected);
    User.setSelected(selected);
}

const mouse = User.getMouse();

mouse.onDown(event => {
    if(User.getTool() === Tools.Pointer){
        const isResizing = ResizeBox.checkNodeSelect();

        if(isResizing){
            User.newAction(ActionType.Resize);
        }else{
            updateSelected();
        }
    }
    else if(User.getTool() === Tools.Box){
        User.newAction(ActionType.BoxBlueprint);
    }
    else if(User.getTool() === Tools.Circle){
        User.newAction(ActionType.CircleBlueprint);
    }
});
mouse.onUp(event => {
    if(User.getAction().getType() === ActionType.BoxBlueprint) User.newAction(ActionType.BoxCreate, true);
    else if(User.getAction().getType() === ActionType.CircleBlueprint) User.newAction(ActionType.CircleCreate, true);
    else if(User.getAction().getType() === ActionType.Resize) User.newAction(ActionType.Nothing);
});
mouse.addEventListeners(canvas);







DOMManager.addToolButtonListener(tool => {
    User.setTool(tool);
});

function drawItems(){
    Item.iterate(item => {
        item.draw(ctx);
    });
}

function drawNonItems(){
    NonItem.iterate(nonItem => {
        nonItem.draw(ctx);
    });
}

ActionHandler.addEventListener(ActionType.Resize, actions => {
    ResizeBox.update();
});

ActionHandler.addEventListener(ActionType.BoxBlueprint, action => {
    const transform = action.getRect();
    ctx.fillStyle = Item.BLUEPRINT_COLOR.toRGBAString();
    Box.drawBlueprints(transform, ctx);
});
ActionHandler.addEventListener(ActionType.CircleBlueprint, action => {
    const transform = action.getRect();
    ctx.fillStyle = Item.BLUEPRINT_COLOR.toRGBAString();
    Circle.drawBlueprints(transform, ctx);
});

ActionHandler.addEventListener(ActionType.BoxCreate, action => {
    const transform = action.getRect();
    new Box(transform);
    User.newAction(ActionType.Nothing);
});
ActionHandler.addEventListener(ActionType.CircleCreate, action => {
    const transform = action.getRect();
    new Circle(transform);
    User.newAction(ActionType.Nothing);
});

/*
function snap(){
    mouse.resetVirtualDisplacement();

    Item.iterate(item => {
        if(item !== User.getSelected()){
            const mousePos = mouse.getTruePos();
            const transform = item.getTransform().get();

            const distA = transform.pos.sub(mousePos);
            const distB = transform.dims.add(transform.pos).sub(mousePos);

            if(distA.abs().getX() < 15){
                mouse.virtuallyDisplaceX(distA.getX());
            }else if(distB.abs().getX() < 15){
                mouse.virtuallyDisplaceX(distB.getX());
            }
            if(distA.abs().getY() < 15){
                mouse.virtuallyDisplaceY(distA.getY());
            }else if(distB.abs().getY() < 15){
                mouse.virtuallyDisplaceY(distB.getY());
            }
        }
    });
}*/

function main(){
    document.getElementById("debug").innerText = `Action=${User.getAction().getType().toString()}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    DOMManager.updateInfo(User.getSelected());

    drawItems();
    drawNonItems();
    
    ResizeBox.draw(ctx);

    //snap();

    ActionHandler.executeListeners();

    window.requestAnimationFrame(main);
}

main();