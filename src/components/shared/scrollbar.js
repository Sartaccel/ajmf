document.addEventListener("DOMContentLoaded", () => {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        if (!scrollProgress) {
            console.error('Element with ID "progress" not found.')
            return;
        }

        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);

        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }

        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        scrollProgress.style.background = `conic-gradient(#00bfff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    calcScrollValue(); // Call it initially to set the correct state on load
});