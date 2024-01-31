function adjustAspectRatio() {
    const pageContainer = document.getElementById('pageContainer');
    const leftContainer = document.getElementById('leftContainer');
    const rightContainer = document.getElementById('rightContainer');

    const aspectRatio = 16 / 9; // Desired aspect ratio (16:9)

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    let newWidth = windowWidth * 0.35; // Initial width for left container

    if (windowHeight / windowWidth > aspectRatio) {
        // Window height is limiting factor
        newWidth = windowHeight * aspectRatio;
    }

    pageContainer.style.paddingTop = (1 / aspectRatio) * 100 + '%'; // Set aspect ratio for the container

    leftContainer.style.width = newWidth + 'px';
    rightContainer.style.left = newWidth + 'px';
}

// Call the function when the window is resized
window.addEventListener('resize', adjustAspectRatio);
adjustAspectRatio(); // Initial call
