export default class Color{
    static readonly CLEAR = new Color(0, 0, 0, 0);

    private r: number;
    private g: number;
    private b: number;
    private a: number;

    constructor(r: number, g: number, b: number, a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    getR(){
        return this.r;
    }

    getG(){
        return this.g;
    }

    getB(){
        return this.b;
    }

    getA(){
        return this.a;
    }

    toArray(){
        return [this.r, this.g, this.b, this.a];
    }

    toRGBAString(){
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
}