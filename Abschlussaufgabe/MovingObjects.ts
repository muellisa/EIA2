namespace Abschlussaufgabe {
    export class MovingObjects {
        x: number;
        y: number;
        

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("Create shape");
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //abstract
        }

        draw(): void {
            //abstract
        }
    }
}