var L08_Events;
(function (L08_Events) {
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeydown);
    //document.onkeydown = handleKeydown;
    document.addEventListener("click", handleClick);
    function handleClick(_event) {
        console.log("Target: " + _event.target);
        console.log("currentTarget: " + _event.currentTarget);
    }
    function handleKeydown(_event) {
        console.log(_event);
    }
    function init(_event) {
        console.log("Hallo");
        console.log(_event);
        var h1 = document.getElementsByTagName("h1")[0];
        h1.addEventListener("mouseover", handleMouseOverH1);
        h1.addEventListener("click", handleClick);
    }
    function handleMouseOverH1(_event) {
        console.log(_event.target);
        var h1 = _event.target;
        h1.style.color = "#ff0000";
    }
})(L08_Events || (L08_Events = {}));
//# sourceMappingURL=Main.js.map