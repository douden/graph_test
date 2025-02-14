document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var isOpen = false;
    var isDragging = false;
    var wasDragged = false;
    var startX, startRight;
    
    // Get positions dynamically
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
        wasDragged = false;
        startX = e.clientX;

        // Ensure smooth positioning calculation
        startRight = parseFloat(window.getComputedStyle(container).right) || getHiddenPosition();

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    });

    function drag(e) {
        if (!isDragging) return;

        let newRight = startRight - (e.clientX - startX);

        // Limit movement within range
        newRight = Math.max(getHiddenPosition(), Math.min(getVisiblePosition(), newRight));

        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
            container.style.right = newRight + "px";
        });

        wasDragged = true;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Toggle visibility when clicking (but not dragging)
    toggleButton.addEventListener("click", function () {
        if (!wasDragged) {
            isOpen = !isOpen;
            container.style.right = isOpen ? getVisiblePosition() + "px" : getHiddenPosition() + "px";
        }
        wasDragged = false;
    });

    // Ensure iframe adjusts correctly on resize
    window.addEventListener("resize", function () {
        container.style.right = isOpen ? getVisiblePosition() + "px" : getHiddenPosition() + "px";
    });
});
