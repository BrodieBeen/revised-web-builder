import Actions from "./actionType";
import User from "../user";
import ActionInfo from "./actionInfo";
import Transform from "../transform";

export default class Action{
    private type: Actions;
    private info: ActionInfo;

    constructor(type: Actions){
        this.type = type;
        this.info = { originPos: User.getMouse().getVirtualPos() };
    }

    getType(){
        return this.type;
    }

    setType(type: Actions){
        this.type = type;
    }

    getRawInfo(){
        return this.info;
    }

    getRect(){
        const mousePos = User.getMouse().getVirtualPos();
        const { originPos } = this.info;
        const dims = mousePos.sub(originPos);

        return new Transform(originPos, dims);
    }
}