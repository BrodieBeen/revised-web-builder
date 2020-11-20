import Vector from "../vector";
import Item from "../item/item";

export default interface ActionInfo{
    originPos: Vector;
    specific?: any;
}