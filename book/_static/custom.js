document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isOpen = false;
    var isDragging = false;
    var startX, startRight;

    // Calculate full hidden and visible positions dynamically
    function getHiddenPosition() {
        return -1 * (window.innerWidth * 0.901); // Slightly more than 90vw
    }

    function getVisiblePosition() {
        return -1 * (window.innerWidth * 0.025); // Fully visible position (small gap from right)
    }

    // Set the initial position
    container.style.right = getHiddenPosition() + "px";

    // Toggle iframe visibility
    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            container.style.right = getHiddenPosition() + "px"; // Hide
        } else {
            container.style.right = getVisiblePosition() + "px"; // Show
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

            // Ensure the iframe does not move beyond hidden or fully visible position
            if (newRight < getHiddenPosition()) newRight = getHiddenPosition(); // Fully hidden position
            if (newRight > getVisiblePosition()) newRight = getVisiblePosition(); // Fully visible position

            container.style.right = newRight + "px";
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Adjust positioning dynamically when window resizes
    window.addEventListener("resize", function () {
        if (!isOpen) {
            container.style.right = getHiddenPosition() + "px";
        }
    });
});
