export default abstract class NonItem{
    static list: NonItem[] = [];

    static remove(nonItem: NonItem){
        const index = this.list.indexOf(nonItem);
        this.list.splice(index, 1);
    }

    static iterate(iter: (nonItem: NonItem) => void){
        for(let i = 0; i < this.list.length; i++){
            iter(this.list[i]);
        }
    }

    constructor(){
        NonItem.list.push(this);
    }

    draw(ctx: CanvasRenderingContext2D){}
}