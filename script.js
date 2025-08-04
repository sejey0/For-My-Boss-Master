// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Start with intro sequence
  initializeIntroSequence();
});

function initializeIntroSequence() {
  const openLetterBtn = document.getElementById("openLetterBtn");
  const introOverlay = document.getElementById("introOverlay");
  const mainContent = document.getElementById("mainContent");

  // Create intro sparkles
  createIntroSparkles();

  // Add click event to open letter button
  openLetterBtn.addEventListener("click", function () {
    // Add opening animation
    this.style.transform = "scale(0.95)";
    this.innerHTML = "<span>Opening...</span>";

    // Create heart burst effect
    createIntroHeartBurst();

    setTimeout(() => {
      // Hide intro overlay
      introOverlay.classList.add("hidden");

      // Show main content
      mainContent.classList.add("visible");

      // Initialize the main love letter after intro
      setTimeout(() => {
        initializeLoveLetter();
      }, 500);
    }, 800);
  });
}

// Create sparkles for intro
function createIntroSparkles() {
  const introOverlay = document.getElementById("introOverlay");

  setInterval(() => {
    if (!introOverlay.classList.contains("hidden")) {
      const sparkle = document.createElement("div");
      sparkle.innerHTML = "✨";
      sparkle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${Math.random() * 15 + 10}px;
        pointer-events: none;
        z-index: 5;
        animation: introSparkle 3s ease-out forwards;
        color: #98D8C8;
      `;

      introOverlay.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 3000);
    }
  }, 1500);
}

// Create heart burst for intro button click
function createIntroHeartBurst() {
  const btn = document.getElementById("openLetterBtn");
  const rect = btn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "♥";
    heart.style.cssText = `
      position: fixed;
      left: ${centerX}px;
      top: ${centerY}px;
      color: #98D8C8;
      font-size: 20px;
      pointer-events: none;
      z-index: 1001;
      animation: introHeartBurst 1.5s ease-out forwards;
    `;

    const angle = (i / 12) * 2 * Math.PI;
    const distance = 80 + Math.random() * 40;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    heart.style.setProperty("--endX", endX + "px");
    heart.style.setProperty("--endY", endY + "px");

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

function initializeLoveLetter() {
  // Set current date
  setCurrentDate();

  // Initialize interactive elements
  setupInteractiveHearts();

  // Add floating animation to letter
  addLetterFloatEffect();

  // Create additional animated elements
  createSparkles();

  // Add typing effect to message
  addTypingEffect();

  // Setup click to play romantic sounds
  setupRomanticSounds();

  // Add additional falling petals periodically
  createMorePetals();

  // Add parallax effect to floating flowers
  addParallaxEffect();
}

// Set current date in a romantic format
function setCurrentDate() {
  const dateElement = document.getElementById("current-date");
  // Always show August 1, 2025
  dateElement.textContent = "August 1, 2025";
}

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// Setup interactive hearts with messages
function setupInteractiveHearts() {
  const hearts = document.querySelectorAll(".interactive-heart");

  hearts.forEach((heart, index) => {
    heart.addEventListener("click", function () {
      const message = this.getAttribute("data-message");
      showLoveMessage(message, this);
      createHeartBurst(this);
    });

    // Add hover effect with gentle pulse
    heart.addEventListener("mouseenter", function () {
      this.style.animation = "heartPulse 0.6s ease-in-out infinite";
    });

    heart.addEventListener("mouseleave", function () {
      this.style.animation = "";
    });
  });
}

// Show love message when heart is clicked
function showLoveMessage(message, heartElement) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll(".love-message");
  existingMessages.forEach((msg) => msg.remove());

  // Create new message element
  const messageElement = document.createElement("div");
  messageElement.className = "love-message";
  messageElement.textContent = message;
  messageElement.style.cssText = `
        position: fixed;
        background: linear-gradient(45deg, #98D8C8, #7BC3B3);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    `;

  // Position above the heart
  const rect = heartElement.getBoundingClientRect();
  messageElement.style.left = rect.left + rect.width / 2 + "px";
  messageElement.style.top = rect.top - 60 + "px";
  messageElement.style.transform = "translateX(-50%) translateY(20px)";

  document.body.appendChild(messageElement);

  // Animate in
  setTimeout(() => {
    messageElement.style.opacity = "1";
    messageElement.style.transform = "translateX(-50%) translateY(0)";
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    messageElement.style.opacity = "0";
    messageElement.style.transform = "translateX(-50%) translateY(-20px)";
    setTimeout(() => messageElement.remove(), 300);
  }, 3000);
}

// Create heart burst animation
function createHeartBurst(heartElement) {
  const rect = heartElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const miniHeart = document.createElement("div");
    miniHeart.innerHTML = "♥";
    miniHeart.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            color: #ff6b9d;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            animation: heartBurst 1s ease-out forwards;
        `;

    // Random direction for each mini heart
    const angle = (i / 8) * 2 * Math.PI;
    const distance = 50 + Math.random() * 30;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    miniHeart.style.setProperty("--endX", endX + "px");
    miniHeart.style.setProperty("--endY", endY + "px");

    document.body.appendChild(miniHeart);

    setTimeout(() => miniHeart.remove(), 1000);
  }
}

// Add CSS for heart burst animation
const heartBurstCSS = `
@keyframes heartBurst {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0);
        opacity: 0;
    }
}

@keyframes heartPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
`;

// Add the CSS to the document
const style = document.createElement("style");
style.textContent = heartBurstCSS;
document.head.appendChild(style);

// Add floating effect to the main letter
function addLetterFloatEffect() {
  const letter = document.querySelector(".love-letter");
  let isFloating = false;

  const float = () => {
    if (!isFloating) {
      isFloating = true;
      letter.style.transform = "translateY(-10px)";
      setTimeout(() => {
        letter.style.transform = "translateY(0)";
        setTimeout(() => {
          isFloating = false;
        }, 2000);
      }, 2000);
    }
  };

  // Float every 8 seconds
  setInterval(float, 8000);
}

// Create sparkle effects
function createSparkles() {
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            font-size: ${Math.random() * 10 + 15}px;
            pointer-events: none;
            z-index: 5;
            animation: sparkle 2s ease-out forwards;
        `;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }, 3000);
}

// Add sparkle animation CSS
const sparkleCSS = `
@keyframes sparkle {
    0% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
}
`;

style.textContent += sparkleCSS;

// Add typing effect to the title
function addTypingEffect() {
  const title = document.querySelector(".title");
  const originalText = title.textContent;
  title.textContent = "";

  let i = 0;
  const typeChar = () => {
    if (i < originalText.length) {
      title.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeChar, 100);
    } else {
      // Add cursor blink effect
      title.innerHTML += '<span class="cursor">|</span>';
      setTimeout(() => {
        const cursor = title.querySelector(".cursor");
        if (cursor) cursor.remove();
      }, 2000);
    }
  };

  setTimeout(typeChar, 500);
}

// Add cursor blink CSS
const cursorCSS = `
.cursor {
    animation: blink 1s infinite;
    color: #98D8C8;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
`;

style.textContent += cursorCSS;

// Setup romantic sounds (simplified for demo)
function setupRomanticSounds() {
  let audioContext;

  const playTone = (frequency, duration) => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + duration
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  // Play gentle chime when hearts are clicked
  document.querySelectorAll(".interactive-heart").forEach((heart) => {
    heart.addEventListener("click", () => {
      playTone(523.25, 0.5); // C5 note
    });
  });
}

// Create more falling petals periodically
function createMorePetals() {
  setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.cssText = `
            position: fixed;
            width: ${Math.random() * 8 + 8}px;
            height: ${Math.random() * 8 + 8}px;
            background: linear-gradient(45deg, #ffb3ba, #ff8e9b);
            border-radius: 50% 0;
            left: ${Math.random() * 100}%;
            top: -50px;
            pointer-events: none;
            z-index: 2;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: fall ${Math.random() * 5 + 6}s linear forwards;
        `;

    document.querySelector(".petals-container").appendChild(petal);

    setTimeout(() => {
      if (petal.parentNode) {
        petal.remove();
      }
    }, 12000);
  }, 2000);
}

// Add parallax effect to floating flowers
function addParallaxEffect() {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    const flowers = document.querySelectorAll(
      ".floating-flowers .tulip, .floating-flowers .rose"
    );
    flowers.forEach((flower, index) => {
      const speed = ((index % 3) + 1) * 0.5;
      const x = (mouseX - 0.5) * speed * 20;
      const y = (mouseY - 0.5) * speed * 20;

      flower.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Add window resize handler
window.addEventListener("resize", () => {
  // Adjust any position-dependent elements
  const messages = document.querySelectorAll(".love-message");
  messages.forEach((msg) => msg.remove());
});

// Add keyboard interactions
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ":
      // Spacebar creates heart burst at center
      e.preventDefault();
      createHeartBurst({
        getBoundingClientRect: () => ({
          left: window.innerWidth / 2,
          top: window.innerHeight / 2,
          width: 0,
          height: 0,
        }),
      });
      break;
    case "Enter":
      // Enter key creates sparkles
      e.preventDefault();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createSparkles(), i * 200);
      }
      break;
  }
});

// Smooth scroll behavior for any internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add touch support for mobile devices
if ("ontouchstart" in window) {
  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.classList.contains("interactive-heart")) {
      element.click();
    }
  });
}

// Performance optimization: Clean up old elements
setInterval(() => {
  // Remove old petals
  const petals = document.querySelectorAll(".petal");
  if (petals.length > 20) {
    for (let i = 0; i < 5; i++) {
      if (petals[i]) petals[i].remove();
    }
  }

  // Remove old messages
  const oldMessages = document.querySelectorAll(".love-message");
  oldMessages.forEach((msg) => {
    if (parseFloat(msg.style.opacity) === 0) {
      msg.remove();
    }
  });
}, 30000); // Clean up every 30 seconds

// Music Player Functionality
let currentSongIndex = 0;
let isPlaying = false;
let musicPlayer;
let musicAudio;
let songs = [];

function initializeMusicPlayer() {
  musicPlayer = document.getElementById("musicPlayer");
  musicAudio = document.getElementById("musicAudio");
  const musicToggle = document.getElementById("musicToggle");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const songItems = document.querySelectorAll(".song-item");
  const progressBar = document.querySelector(".progress-bar");
  const volumeBar = document.querySelector(".volume-bar");

  // Initialize songs array
  songs = Array.from(songItems).map((item) => ({
    element: item,
    src: item.dataset.src,
    title: item.dataset.title,
    duration: item.dataset.duration,
  }));

  // Toggle music player visibility
  musicToggle.addEventListener("click", () => {
    musicPlayer.classList.toggle("open");
  });

  // Show music player automatically after 3 seconds to make it visible
  setTimeout(() => {
    musicPlayer.classList.add("open");
  }, 3000);

  // Song selection
  songItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      selectSong(index);
      if (isPlaying) {
        playCurrentSong();
      }
    });
  });

  // Control buttons
  playPauseBtn.addEventListener("click", togglePlayPause);
  prevBtn.addEventListener("click", playPreviousSong);
  nextBtn.addEventListener("click", playNextSong);

  // Progress bar interaction
  progressBar.addEventListener("click", (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    musicAudio.currentTime = musicAudio.duration * percentage;
  });

  // Volume bar interaction
  volumeBar.addEventListener("click", (e) => {
    const rect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    musicAudio.volume = percentage;
    document.querySelector(".volume-fill").style.width = percentage * 100 + "%";
  });

  // Audio event listeners
  musicAudio.addEventListener("loadedmetadata", updateDuration);
  musicAudio.addEventListener("timeupdate", updateProgress);
  musicAudio.addEventListener("ended", playNextSong);

  // Initialize first song
  selectSong(0);
}

function selectSong(index) {
  currentSongIndex = index;

  // Update active song styling
  songs.forEach((song) => song.element.classList.remove("active"));
  songs[currentSongIndex].element.classList.add("active");

  // Load the song (using placeholder for demo)
  musicAudio.src = songs[currentSongIndex].src;

  // Update display
  updateNowPlaying();
}

function togglePlayPause() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playCurrentSong();
  }
}

function playCurrentSong() {
  // Since we're using placeholder URLs, we'll simulate playback
  isPlaying = true;
  document.getElementById("playPauseBtn").textContent = "⏸";

  // Add visual feedback
  songs[currentSongIndex].element.querySelector(".play-btn").textContent = "⏸";

  // Simulate progress for demo
  simulateProgress();

  // Add playing animation to toggle button
  document.getElementById("musicToggle").style.animation =
    "musicTogglePulse 1s ease-in-out infinite";
}

function pauseMusic() {
  isPlaying = false;
  document.getElementById("playPauseBtn").textContent = "▶";
  songs[currentSongIndex].element.querySelector(".play-btn").textContent = "▶";

  // Remove playing animation
  document.getElementById("musicToggle").style.animation =
    "musicTogglePulse 2s ease-in-out infinite";
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  selectSong(currentSongIndex);
  if (isPlaying) {
    playCurrentSong();
  }
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  selectSong(currentSongIndex);
  if (isPlaying) {
    playCurrentSong();
  }
}

function updateNowPlaying() {
  // Update current time display
  document.querySelector(".total-time").textContent =
    songs[currentSongIndex].duration;
}

function updateDuration() {
  if (musicAudio.duration) {
    const minutes = Math.floor(musicAudio.duration / 60);
    const seconds = Math.floor(musicAudio.duration % 60)
      .toString()
      .padStart(2, "0");
    document.querySelector(".total-time").textContent = `${minutes}:${seconds}`;
  }
}

function updateProgress() {
  if (musicAudio.duration) {
    const percentage = (musicAudio.currentTime / musicAudio.duration) * 100;
    document.querySelector(".progress-fill").style.width = percentage + "%";

    const minutes = Math.floor(musicAudio.currentTime / 60);
    const seconds = Math.floor(musicAudio.currentTime % 60)
      .toString()
      .padStart(2, "0");
    document.querySelector(
      ".current-time"
    ).textContent = `${minutes}:${seconds}`;
  }
}

// Simulate progress for demo purposes (since we're using placeholder URLs)
function simulateProgress() {
  if (!isPlaying) return;

  let currentTime = 0;
  const duration = parseDuration(songs[currentSongIndex].duration);

  const interval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(interval);
      return;
    }

    currentTime += 1;
    const percentage = (currentTime / duration) * 100;
    document.querySelector(".progress-fill").style.width = percentage + "%";

    const minutes = Math.floor(currentTime / 60);
    const seconds = (currentTime % 60).toString().padStart(2, "0");
    document.querySelector(
      ".current-time"
    ).textContent = `${minutes}:${seconds}`;

    if (currentTime >= duration) {
      clearInterval(interval);
      playNextSong();
    }
  }, 1000);
}

function parseDuration(durationStr) {
  const [minutes, seconds] = durationStr.split(":").map(Number);
  return minutes * 60 + seconds;
}

// Add music player to initialization
function initializeLoveLetter() {
  // Set current date
  setCurrentDate();

  // Initialize interactive elements
  setupInteractiveHearts();

  // Add floating animation to letter
  addLetterFloatEffect();

  // Create additional animated elements
  createSparkles();

  // Add typing effect to message
  addTypingEffect();

  // Setup click to play romantic sounds
  setupRomanticSounds();

  // Add additional falling petals periodically
  createMorePetals();

  // Add parallax effect to floating flowers
  addParallaxEffect();

  // Initialize music player
  initializeMusicPlayer();
}

console.log(
  "💕 Monthly Anniversary Love Letter with Music Player Loaded Successfully! 💕"
);
