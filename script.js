// --- Navbar State Management ---
const desktopLikesCountEl = document.getElementById(
    "desktop-likes-count"
);
const desktopCoinsCountEl = document.getElementById(
    "desktop-coins-count"
);
const mobileLikesCountEl =
    document.getElementById("mobile-likes-count");
const mobileCoinsCountEl =
    document.getElementById("mobile-coins-count");
const desktopCopyCountEl =
    document.getElementById("desktop-copy-count");
const mobileCopyCountEl = document.getElementById("mobile-copy-count");

let likesCount = 0;
let coins = 100;
let copyCount = 0;
const callCost = 20;


// --- Heart Icon Functionality ---
const heartIcons = document.querySelectorAll(".fa-heart");
heartIcons.forEach((heart) => {
    heart.addEventListener("click", () => {
    likesCount++;
    desktopLikesCountEl.textContent = likesCount;
    mobileLikesCountEl.textContent = likesCount;
    });
});

// --- Copy Button Functionality ---
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const card = button.closest("[data-service-number]");

    const serviceNumber = card.getAttribute("data-service-number");

    navigator.clipboard
        .writeText(serviceNumber)
        .then(() => {
        alert(`Copied hotline number: ${serviceNumber}`);
        copyCount++;
        desktopCopyCountEl.textContent = copyCount;
        mobileCopyCountEl.textContent = copyCount;
        })
        .catch((err) => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy the number. Please try again.");
        });
    });
});