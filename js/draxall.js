var selected = null,
    x_pos = 0,
    y_pos = 0,
    x_elem = 0,
    y_elem = 0;

function dragInitializer(element) {
    selected = element;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

function moveElement(event) {
    x_pos = document.all ? window.event.clientX : event.pageX;
    y_pos = document.all ? window.event.clientY : event.pageY;
    if (selected !== null) {
        selected.style.position = "absolute";
        selected.style.width = "23.3%";
        selected.style.zIndex = "5";
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

function unselect() {
    selected = null;
}

var setCreatable = function() {
    var creators = document.getElementsByClassName("new-draggable");
    for (var i = 0; i < creators.length; i++) {
        creators[i].onmousedown = function() {
            var loc = this.getAttribute("location") - 1;
            var sectors = document.getElementsByClassName("drag-sector");
            sectors[loc].innerHTML += "<div class=\"draggable-element\">Drag me!</div>";
            setDraggable();
        }
    }
}

var setDraggable = function() {
    var draggables = document.getElementsByClassName("draggable-element");
    for (var i = 0; i < draggables.length; i++) {
        draggables[i].onmousedown = function() {
            for (var j = 0; j < draggables.length; j++) {
                draggables[j].style.zIndex = 0;
            }
            dragInitializer(this);
            return false;
        }
    }
}

document.onmousemove = moveElement;
document.onmouseup = unselect;

window.onload = function() {
    setCreatable();
    setDraggable();
}
