namespace L07_DOM {
    window.addEventListener("load", init);

    function init(): void {
        for (let i: number = 0; i < 10; i++) {
            let h: HTMLHeadingElement = document.createElement("h2");
            //console.log(h);
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3) 
                h.style.color = "red";
        }
    }
}