var getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var variable = getURLParameter("variable");

window.addEventListener("load", function() {
    if (variable != null) {
        if (variable == "tf") {
            document.getElementById("x").innerHTML = "x";
            document.getElementById("x").onclick = "";
            document.getElementById("e").innerHTML = "E";
            document.getElementById("e").onclick = function() {
                location.href = "troxium/conxion.html";
            }
        }
    }
});
