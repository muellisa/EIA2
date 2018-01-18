var L08_DOMEvent;
(function (L08_DOMEvent) {
    window.addEventListener("load", init);
    function init() {
        document.body.addEventListener("mousedown", handleMouseDown);
        for (var i = 0; i < 10; i++) {
            var h = document.createElement("h2");
            //console.log(h);
            h.addEventListener("mousedown", handleMouseDown);
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3)
                h.style.color = "red";
        }
    }
    function handleMouseDown(_event) {
        console.log(_event.target);
        var h = _event.target;
        console.log(h.innerText);
    }
})(L08_DOMEvent || (L08_DOMEvent = {}));
//# sourceMappingURL=Main.js.map