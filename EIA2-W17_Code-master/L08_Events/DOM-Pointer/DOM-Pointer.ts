/**
 * @author Jirka
 */
namespace DOM_Pointer {
    window.addEventListener("load", initDomPointer);
    var domPointerDiv: HTMLElement;

    function initDomPointer(): void {
        // install function reference to node "ref"
        domPointerDiv = document.createElement("div");
        domPointerDiv.className = "DOM-Pointer";
        document.addEventListener("mousemove", moveDomPointer);
        document.body.appendChild(domPointerDiv);
        document.head.innerHTML += "<link rel='stylesheet' href='DOM-Pointer.css'>";
    }

    //*/ move: Ausgabe von Eigenschaften des Event-Objektes beim mousemove-Event
    function moveDomPointer(_event: MouseEvent): void {
        var target: HTMLElement = <HTMLElement>_event.target;
        var outString: string = "";
        outString += "PagePos: " + _event.pageX + "|" + _event.pageY + "<br>";
        outString += "ScreenPos: " + _event.screenX + "|" + _event.screenY + "<br>";
        outString += "LayerPos: " + _event.layerX + "|" + _event.layerY + "<br>";
        outString += _event.target + "<br>";
        outString += "id = " + target.id + "<br>";
        outString += "class = " + target.className;
        domPointerDiv.innerHTML = outString;
        domPointerDiv.style.left = 20 + _event.pageX + "px";
        domPointerDiv.style.top = 20 + _event.pageY + "px";
    }
}