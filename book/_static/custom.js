document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isDragging = false;
    var startX, startRight;

    // Calculate hidden and visible positions dynamically
    function getHiddenPosition() {
        return -1 * (window.innerWidth * 0.901);
    }

    function getVisiblePosition() {
        return -1 * (window.innerWidth * 0.025);
    }

    // Set initial position
    container.style.right = getHiddenPosition() + "px";

    // Dragging logic attached to the button
    toggleButton.addEventListener("mousedown", function (e) {
        isDragging = true;
        startX = e.clientX;
        startRight = parseFloat(container.style.right) || getHiddenPosition();

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
        if (isDragging) {
            let newRight = startRight - (e.clientX - startX);

            // Ensure the button cannot be dragged beyond limits
            if (newRight < getHiddenPosition()) newRight = getHiddenPosition();
            if (newRight > getVisiblePosition()) newRight = getVisiblePosition();

            container.style.right = newRight + "px";
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Adjust positioning dynamically on window resize
    window.addEventListener("resize", function () {
        container.style.right = getHiddenPosition() + "px";
    });
});
