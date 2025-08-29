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

// --- Call Button and History Functionality ---
const callButtons = document.querySelectorAll(".call-btn");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");

callButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const card = button.closest("[data-service-name]");

    const serviceName = card.getAttribute("data-service-name");
    const serviceNumber = card.getAttribute("data-service-number");

    if (coins < callCost) {
        alert("You don't have enough coins to make a call.");
        return;
    }

    coins -= callCost;
    desktopCoinsCountEl.textContent = coins;
    mobileCoinsCountEl.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const historyItem = document.createElement("div");
    historyItem.className =
        "flex justify-between items-center p-3 rounded-[8px] bg-[#FAFAFA]";
    historyItem.innerHTML = `
        <div>
        <h2 class="font-semibold text-[18px]">${serviceName}</h2>
        <h3 class="font-medium text-[#5C5C5C]">${serviceNumber}</h3>
        </div>
        <h3 class="text-base">${timeString}</h3>
    `;
    historyList.appendChild(historyItem);
    });
});

// --- Clear History Button Functionality ---
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
    });
}