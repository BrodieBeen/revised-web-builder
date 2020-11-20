import Vector from "../vector";
import Color from "../color";
import Transform from "../transform";

export default abstract class Item{
    static readonly BLUEPRINT_COLOR = new Color(0, 0, 0, 0.3);
    static readonly DEFAULT_FILL_COLOR = new Color(70, 70, 70);
    static readonly DEFAULT_STROKE_COLOR = new Color(40, 40, 40);

    private static list: Item[] = [];

    static remove(item: Item){
        const index = this.list.indexOf(item);
        this.list.splice(index, 1);
    }

    static iterate(iter: (item: Item) => void){
        for(let i = 0; i < this.list.length; i++){
            iter(this.list[i]);
        }
    }

    protected transform: Transform;
    protected fillColor: Color;
    protected strokeColor: Color;
    protected fillColorEnabled: boolean;
    protected strokeColorEnabled: boolean;

    protected setStyling(ctx: CanvasRenderingContext2D){
        if(this.fillColorEnabled){
            ctx.fillStyle = this.fillColor.toRGBAString();
        }else{
            ctx.fillStyle = Color.CLEAR.toRGBAString();
        }

        if(this.strokeColorEnabled){
            ctx.strokeStyle = this.strokeColor.toRGBAString();
        }else{
            ctx.strokeStyle = Color.CLEAR.toRGBAString();
        }
    }

    constructor(transform: Transform, fillColor = Item.DEFAULT_FILL_COLOR, strokeColor = Item.DEFAULT_STROKE_COLOR){
        this.transform = transform;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;

        this.fillColorEnabled = true;
        this.strokeColorEnabled = false;

        Item.list.push(this);
    }

    getTransform(){
        return this.transform;
    }

    setTransform(transform: Transform){
        this.transform = transform;
    }

    setFillColor(color: Color){
        this.fillColor = color;
    }

    setStrokeColor(color: Color){
        this.strokeColor = color;
    }

    getFillColor(){
        return this.fillColor;
    }

    getStrokeColor(){
        return this.strokeColor;
    }

    hasFillColor(){
        return this.fillColorEnabled;
    }

    hasStrokeColor(){
        return this.strokeColorEnabled;
    }

    abstract draw(ctx: CanvasRenderingContext2D): void;
}