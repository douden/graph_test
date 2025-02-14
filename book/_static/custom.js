document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isOpen = false;
    var isDragging = false;
    var wasDragged = false;
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
        wasDragged = false; // Reset drag detection
        startX = e.clientX;
        startRight = parseInt(window.getComputedStyle(container).right, 10);

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
            wasDragged = true;
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Toggle visibility when clicking (but not dragging)
    toggleButton.addEventListener("click", function () {
        if (!wasDragged) {
            if (isOpen) {
                container.style.right = getHiddenPosition() + "px"; // Hide
            } else {
                container.style.right = getVisiblePosition() + "px"; // Show
            }
            isOpen = !isOpen;
        }
        wasDragged = false; // Reset flag after click
    });

    // Adjust positioning dynamically on window resize
    window.addEventListener("resize", function () {
        if (!isOpen) {
            container.style.right = getHiddenPosition() + "px";
        }
    });
});
