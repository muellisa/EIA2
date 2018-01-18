namespace L08_Events {
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeydown);
    //document.onkeydown = handleKeydown;
    document.addEventListener("click", handleClick);

    function handleClick(_event: MouseEvent): void {
        console.log("Target: " + _event.target);
        console.log("currentTarget: " + _event.currentTarget);
    }

    function handleKeydown(_event: KeyboardEvent): void {
        console.log(_event);
    }

    function init(_event: Event): void {
        console.log("Hallo");
        console.log(_event);

        let h1: HTMLHeadingElement = document.getElementsByTagName("h1")[0];
        h1.addEventListener("mouseover", handleMouseOverH1);
        h1.addEventListener("click", handleClick);
    }

    function handleMouseOverH1(_event: MouseEvent): void {
        console.log(_event.target);
        let h1: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
        h1.style.color = "#ff0000";
    }
}