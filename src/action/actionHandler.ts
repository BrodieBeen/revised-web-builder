import Action from "./action";
import User from "../user";
import Actions from "./actionType";

type ActionListener = (action: Action) => void;

type ActionListenerDict = {
    [action in Actions] : ActionListener
}

export default class ActionHandler{
    private static listeners: ActionListenerDict = {
        [Actions.Nothing]: (action: Action) => {},
        [Actions.BoxBlueprint]: (action: Action) => {},
        [Actions.BoxCreate]: (action: Action) => {},
        [Actions.CircleBlueprint]: (action: Action) => {},
        [Actions.CircleCreate]: (action: Action) => {},
        [Actions.TextBlueprint]: (action: Action) => {},
        [Actions.TextCreate]: (action: Action) => {},
        [Actions.ImageBlueprint]: (action: Action) => {},
        [Actions.ImageCreate]: (action: Action) => {},
        [Actions.TableBlueprint]: (action: Action) => {},
        [Actions.TableCreate]: (action: Action) => {},
        [Actions.Resize]: (action: Action) => {},
    };

    static addEventListener(action: Actions, listener: ActionListener){
        this.listeners[action] = listener;
    }

    static executeListeners(){
        const action = User.getAction();
        const listener = this.listeners[action.getType()];
        listener(action);
    }
}