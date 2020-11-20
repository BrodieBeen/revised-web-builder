import Vector from "./vector";
import Transform from "./transform";
import Color from "./color";
import Box from "./item/box";
import Circle from "./item/circle";
import Item from "./item/item";
import User from "./user";
import { indexedResizeRules, ResizeRules } from "./resizeRules";

export default class ResizeBox{
    private static readonly NODE_SELECT_RADIUS = 20;

    private static enabled = false;
    private static item: Item;
    private static pointPair: Vector[];
    private static activeNode: number;

    private static initPointPair(){
        this.pointPair = this.item.getTransform().getPointPair();
    }

    private static getNodes(){
        const { pointPair } = this;
        const posA = pointPair[0];
        const posB = pointPair[1];

        const dims = posB.sub(posA);

        return [
            new Vector(posA.getX(), posA.getY()),
            new Vector(posA.getX() + dims.getX()/2, posA.getY()),
            new Vector(posA.getX() + dims.getX(), posA.getY()),
            new Vector(posA.getX() + dims.getX(), posA.getY() + dims.getY()/2),
            new Vector(posA.getX() + dims.getX(), posA.getY() + dims.getY()),
            new Vector(posA.getX() + dims.getX()/2, posA.getY() + dims.getY()),
            new Vector(posA.getX(), posA.getY() + dims.getY()),
            new Vector(posA.getX(), posA.getY() + dims.getY()/2)
        ];
    }

    static init(item: Item){
        if(item !== undefined){
            this.enabled = true;

            this.item = item;
            this.initPointPair();
        }else{
            this.enabled = false;
        }
    }

    static checkNodeSelect(){
        if(!this.enabled) return;

        const nodes = this.getNodes();
        const mousePos = User.getMouse().getVirtualPos();

        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];

            if(mousePos.dist(node) < this.NODE_SELECT_RADIUS){
                this.activeNode = i;
                
                return true;
            }
        }
        return false;
    }

    private static conformItem(){
        const transform = Transform.fromPointPair(this.pointPair);
        this.item.setTransform(transform);
    }

    static update(){
        if(!this.enabled) return;

        const node = this.activeNode;
        const pair = this.pointPair;
        const mousePos = User.getMouse().getVirtualPos();
        const rule = indexedResizeRules[node];

        switch(rule){
            case ResizeRules.axay:
                pair[0] = mousePos.clone();
                break;
            case ResizeRules.ay:
                pair[0].setY(mousePos.getY());
                break;
            case ResizeRules.aybx:
                pair[0].setY(mousePos.getY());
                pair[1].setX(mousePos.getX());
                break;
            case ResizeRules.bx:
                pair[1].setX(mousePos.getX());
                break;
            case ResizeRules.bxby:
                pair[1] = mousePos.clone();
                break;
            case ResizeRules.by:
                pair[1].setY(mousePos.getY());
                break;
            case ResizeRules.axby:
                pair[0].setX(mousePos.getX());
                pair[1].setY(mousePos.getY());
                break;
            case ResizeRules.ax:
                pair[0].setX(mousePos.getX());
                break;
        }

        this.conformItem();
    }

    static draw(ctx: CanvasRenderingContext2D){
        if(!this.enabled) return;

        const transform = Transform.fromPointPair(this.pointPair);
        const nodes = this.getNodes();

        ctx.fillStyle = Color.CLEAR.toRGBAString();
        ctx.strokeStyle = "rgb(90, 150, 252)";
        ctx.lineWidth = 1;
        Box.drawBlueprints(transform, ctx);

        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i].sub(new Vector(3));
            const transform = new Transform(node, new Vector(6));

            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.lineWidth = 2;
            Circle.drawBlueprints(transform, ctx);
        }
    }
}