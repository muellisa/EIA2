var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //  EventListener h�rt auf load,Seite wird vollst�ndig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    var turtle = [];
    var imgData;
    // Funktion f�r den Canvas
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Skifahrer
        for (var i = 0; i < 1; i++) {
            turtle[i] = new Abschlussaufgabe.Turtle(0, 50);
        }
        //Hintergrund speichern
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    function animate() {
        console.log("Timeout");
        //Schildkr�te
        for (var i = 0; i < turtle.length; i++) {
            var s = turtle[i];
            s.update(); // Move and Draw aufrufen
        }
    }
    window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu*/
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map