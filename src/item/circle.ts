import Item from "./item";
import Vector from "../vector";
import Transform from "../transform";
import blueprints from "./blueprints";

export default class Circle extends Item{
    static drawBlueprints: blueprints = (transform, ctx) => {
        const { pos, dims } = transform.get();

        ctx.beginPath();
        ctx.ellipse(pos.getX() + dims.getX()/2, pos.getY() + dims.getY()/2, dims.getX()/2, dims.getY()/2, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    constructor(transform: Transform){
        super(transform);
    }

    draw(ctx: CanvasRenderingContext2D){
        this.setStyling(ctx);
        Circle.drawBlueprints(this.transform, ctx);
    }
}