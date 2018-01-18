var L07_DOM;
(function (L07_DOM) {
    window.addEventListener("load", init);
    function init() {
        for (var i = 0; i < 10; i++) {
            var h = document.createElement("h2");
            //console.log(h);
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3)
                h.style.color = "red";
        }
    }
})(L07_DOM || (L07_DOM = {}));
//# sourceMappingURL=Main.js.map