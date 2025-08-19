function placeBid(button) {
    alert("Bid placed! (This is just a demo)");
}
// a simple timer --> can be used for backend if needed
function startCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach(span => {
        let seconds = parseInt(span.getAttribute('data-time'));
        const interval = setInterval(() => {
            if (seconds <= 0) {
                span.textContent = "Ended";
                clearInterval(interval);
            } else {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                span.textContent = `${mins}m ${secs}s`;
                seconds--;
            }
        }, 1000);
    });
}

startCountdowns();