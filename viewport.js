function adjustViewport() {
    var viewport = document.querySelector('meta[name="viewport"]');
    if (window.innerWidth < 480) { // Adjust for mobile devices
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.5');
    } else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

// Run the function on page load
window.addEventListener('load', adjustViewport);
// Run the function on window resize
window.addEventListener('resize', adjustViewport);
