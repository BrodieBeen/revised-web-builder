import Tools from "./tools";
import ActionType from "./action/actionType";
import MouseInfo from "./mouseInfo";
import Vector from "./vector";
import Action from "./action/action";
import Item from "./item/item";

type EventFunction = (event: MouseEvent) => void;

interface EventDict{
    move: EventFunction;
    down: EventFunction;
    up: EventFunction;
}

const emptyFunction = () => {};

class Mouse{
    private events: EventDict = {
        move: emptyFunction,
        down: emptyFunction,
        up: emptyFunction,
    };
    private isDown = false;
    private pos = Vector.ZERO;
    private virtualDisplacement = Vector.ZERO;

    addEventListeners(canvas: HTMLCanvasElement){
        canvas.addEventListener("mousemove", event => {
            this.pos = new Vector(event.offsetX, event.offsetY);
            this.events.move(event);
        }, false);
        canvas.addEventListener("mousedown", event => {
            this.isDown = true;
            this.events.down(event);
        }, false);
        canvas.addEventListener("mouseup", event => {
            this.isDown = false;
            this.events.up(event);
        }, false);
    }

    getVirtualPos(){
        return this.pos.add(this.virtualDisplacement);
    }

    getTruePos(){
        return this.pos;
    }

    virtuallyDisplaceX(displacement: number){
        this.virtualDisplacement.setX(displacement);
    }

    virtuallyDisplaceY(displacement: number){
        this.virtualDisplacement.setY(displacement);
    }

    resetVirtualDisplacement(){
        this.virtualDisplacement = Vector.ZERO;
    }

    onMove(event: EventFunction){
        this.events.move = event;
    }

    onDown(event: EventFunction){
        this.events.down = event;
    }

    onUp(event: EventFunction){
        this.events.up = event;
    }
}

export default class User{
    private static readonly DEFAULT_TOOL = Tools.Pointer;
    private static readonly RESIZE_NODE_RADIUS = 20;

    private static mouse = new Mouse();
    private static tool = User.DEFAULT_TOOL;
    private static action = new Action(ActionType.Nothing);
    private static selected: Item;

    static getMouse(){
        return this.mouse;
    }

    static getTool(){
        return this.tool;
    }

    static getAction(){
        return this.action;
    }

    static getSelected(){
        return this.selected;
    }

    static setTool(tool: Tools){
        this.tool = tool;
    }

    static setSelected(item: Item){
        this.selected = item;
    }

    static newAction(actionType: ActionType, keepInfo = false){
        if(keepInfo){
            this.action.setType(actionType);
        }else{
            this.action = new Action(actionType);
        }
    }
}