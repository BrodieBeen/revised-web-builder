import Item from "./item";
import Vector from "../vector";
import Transform from "../transform";
import blueprints from "./blueprints";

export default class Box extends Item{
    static drawBlueprints: blueprints = (transform, ctx) => {
        const { pos, dims } = transform.get();
        ctx.fillRect(pos.getX(), pos.getY(), dims.getX(), dims.getY());
        ctx.strokeRect(pos.getX(), pos.getY(), dims.getX(), dims.getY());
    }

    constructor(transform: Transform){
        super(transform);
    }

    draw(ctx: CanvasRenderingContext2D){
        this.setStyling(ctx);
        Box.drawBlueprints(this.transform, ctx);
    }
}