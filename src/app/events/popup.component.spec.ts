// TypeScript functions to open and close the pop-up
const openPopup = (): void => {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
};

const closePopup = (): void => {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
};

// Event listener for RSVP button
const rsvpButton = document.getElementById("rsvpButton");
if (rsvpButton) {
    rsvpButton.addEventListener("click", openPopup);
}

// Event listener for close button
const closeButton = document.getElementById("closeButton");
if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}
