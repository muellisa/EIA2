function Eingabefeld() {
    var eingabe = prompt("Nenn mir deinen Namen, Bitte!.", "");
    if (eingabe != null) {
        document.getElementById("Type").innerHTML =
            "Herzlichen Dank, " + eingabe + ". Du bist cool :) ";
    }
}
//# sourceMappingURL=index.js.map