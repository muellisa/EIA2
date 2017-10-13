function Eingabefeld(): void {
  let eingabe: string = prompt("Nenn mir deinen Namen, Bitte!.", "");
  if (eingabe != null) {
    document.getElementById("Type").innerHTML =
      "Herzlichen Dank, " + eingabe + ". Du bist cool :) ";
  }
}