document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("sticky-iframe-container");
    var toggleButton = document.getElementById("toggle-iframe");
    var iframe = document.getElementById("sticky-iframe");
    var isOpen = false;
    var isDragging = false;
    var wasDragged = false;
    var startX, startRight;

    // Get hidden and visible positions dynamically
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

        // Disable transition during drag for instant movement
        container.style.transition = "none";
        iframe.style.pointerEvents = "none"; // Prevent iframe from blocking drag

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
        iframe.style.pointerEvents = "auto"; // Re-enable iframe interactions

        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);

        // Re-enable transition after dragging stops
        requestAnimationFrame(() => {
            container.style.transition = "right 0.3s ease-in-out";
        });
    }

    // Toggle visibility when clicking (but not dragging)
    toggleButton.addEventListener("click", function () {
        if (!wasDragged) {
            // Ensure transition is enabled for smooth sliding
            container.style.transition = "right 0.3s ease-in-out";
            
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
