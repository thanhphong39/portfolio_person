function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Video Modal Functions
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");

  modal.style.display = "block";

  // Auto play video when modal opens
  setTimeout(() => {
    video.play().catch((e) => {
      console.log("Auto-play was prevented:", e);
    });
  }, 300);
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");

  modal.style.display = "none";

  // Pause and reset video when modal closes
  video.pause();
  video.currentTime = 0;
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideoModal();
  }
};

// Close modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("videoModal");
    if (modal.style.display === "block") {
      closeVideoModal();
    }
  }
});
