function copyData() {
    var text = document.getElementById("textArea").value;
    var listener = function(ev) {
	 ev.clipboardData.setData("text/plain", text);
	 ev.preventDefault();
    };
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    navigator.clipboard.writeText(text.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + text.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}