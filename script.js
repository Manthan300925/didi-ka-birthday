const wishButton = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "A big virtual hug from India to Canada, di! ✨ Sending you all my love today and always.";
  wishButton.innerHTML = 'Birthday sparkle sent <span>♡</span>';
  wishButton.disabled = true;
  wishButton.style.opacity = "0.9";

  for (let i = 0; i < 24; i++) {
    const sparkle = document.createElement("span");
    sparkle.textContent = ["✦", "✧", "♡", "✿"][Math.floor(Math.random() * 4)];
    sparkle.className = "confetti";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    sparkle.style.animationDelay = `${Math.random() * 0.7}s`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2300);
  }
});
