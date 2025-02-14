document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isOpen = false;

    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            container.style.right = "-310px"; // Hide
        } else {
            container.style.right = "10px"; // Show
        }
        isOpen = !isOpen;
    });

    // Drag functionality
    var isDragging = false;
    var offsetX, offsetY;

    container.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
        if (isDragging) {
            container.style.left = e.clientX - offsetX + "px";
            container.style.top = e.clientY - offsetY + "px";
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }
});
