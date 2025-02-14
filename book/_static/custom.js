document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isOpen = false;
    var isDragging = false;
    var startX, startRight;

    // Toggle iframe visibility
    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            container.style.right = "-310px"; // Hide
        } else {
            container.style.right = "10px"; // Show
        }
        isOpen = !isOpen;
    });

    // Restrict dragging to horizontal movement
    container.addEventListener("mousedown", function (e) {
        isDragging = true;
        startX = e.clientX;
        startRight = parseInt(window.getComputedStyle(container).right, 10);
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
        if (isDragging) {
            let newRight = startRight - (e.clientX - startX);

            // Ensure the iframe does not move away from the right edge
            if (newRight < -310) newRight = -310; // Fully hidden position
            if (newRight > 10) newRight = 10; // Fully visible position

            container.style.right = newRight + "px";
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }
});
