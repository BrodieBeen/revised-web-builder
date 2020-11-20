import Tools from "./tools";
import Item from "./item/item";

export default class DOMManager{
    private static tools = document.getElementsByClassName("tool");

    private static deselectToolButtons(){
        for(let i = 0; i < this.tools.length; i++){
            const el = <HTMLElement>this.tools[i];
            el.classList.remove("tool-selected");
        }
    }
    
    static addToolButtonListener(listener?: (tool: Tools) => void){
        for(let i = 0; i < this.tools.length; i++){
            const el = <HTMLElement>this.tools[i];
            
            el.addEventListener("mousedown", event => {
                this.deselectToolButtons();
                el.classList.add("tool-selected");
                
                const toolStr = el.dataset.toolType;
                const tool = Tools[toolStr as keyof typeof Tools];

                listener(tool);
            }, false);
        }
    }

    static updateInfo(item: Item){
        const x = <HTMLElement>document.querySelectorAll("[data-info-name='x']")[0];
        const y = <HTMLElement>document.querySelectorAll("[data-info-name='y']")[0];
        const width = <HTMLElement>document.querySelectorAll("[data-info-name='width']")[0];
        const height = <HTMLElement>document.querySelectorAll("[data-info-name='height']")[0];

        const r = <HTMLElement>document.querySelectorAll("[data-info-name='r']")[0];
        const g = <HTMLElement>document.querySelectorAll("[data-info-name='g']")[0];
        const b = <HTMLElement>document.querySelectorAll("[data-info-name='b']")[0];
        const a = <HTMLElement>document.querySelectorAll("[data-info-name='a']")[0];

        if(item === undefined){
            x.innerText = "0";
            y.innerText = "0";
            width.innerText = "0";
            height.innerText = "0";

            r.innerText = "0";
            g.innerText = "0";
            b.innerText = "0";
            a.innerText = "0";
        }else{
            const { pos, dims } = item.getTransform().get();

            const fill = item.getFillColor();
            const stroke = item.getStrokeColor();

            x.innerText = pos.getX().toString();
            y.innerText = pos.getY().toString();
            width.innerText = dims.getX().toString();
            height.innerText = dims.getY().toString();

            r.innerText = fill.getR().toString();
            g.innerText = fill.getG().toString();
            b.innerText = fill.getB().toString();
            a.innerText = fill.getA().toString();
        }
    }
}