namespace L08_DOMEvent {
    window.addEventListener("load", init);

    function init(): void {
        document.body.addEventListener("mousedown", handleMouseDown);
        for (let i: number = 0; i < 10; i++) {
            let h: HTMLHeadingElement = document.createElement("h2");
            //console.log(h);
            h.addEventListener("mousedown", handleMouseDown);
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3)
                h.style.color = "red";
        }
    }

    function handleMouseDown(_event: MouseEvent): void {
        console.log(_event.target);
        let h: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
        console.log(h.innerText);
    }
}