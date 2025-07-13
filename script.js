/* ==== Sticky Notes Logic ==== */
const messages = [
  "💖 Kamu hebat, jadi terus semangat ya!", 
  "🌺 You make even the little things feel big",
  "📆 Kita udah sejauh ini, jadi jangan menyerah ya sayaangnya abaang 💪",
  "🕰️ No matter how much time passes, it’s still you",
  "🎈 Hari-hari bareng Rere tuh nggak pernah ngebosenin!",
  "💌 Every word you say stays with me. I'll said Always", 
  "🌻 Rere itu perempuan paling kuat yang abang kenal",
  "🌹 You deserve the gentlest love this world can offer",
  "🧸 Makasih udah hadir di hidup abang!",
  "🐾 Many pets want to feel your affection ",
  "💌 Abang akan selalu do'ain yang terbaik untuk Rere",
  "🍓 Strawberries are sweet like you",
  "🌠 Mimpi kita pasti bisa kita wujudin bareng-bareng",
  "🎧 There is still a lot of music that will be a depiction of our story",
  "🍯 Semangat terus sayangku, Rere berharga banget buat abang!",
  "🎨 You color every grey part of my life",
  "🎁 Rere itu hadiah terbaik dari Allah buat abang!",
  "🧭 You are my direction when I feel lost",
  "👩‍❤️‍👨 Kita tim yang hebat, Kita tim yang GG gemink 🫶",
  "🌟 I’m proud of how far we’ve come together",
  "🌈 Semoga hari-hari Rere penuh warna dan banyak senyumnya",
  "🫶 You are more than enough. Always have been",
  "🍃 Tetap enjoy ya, Rerenya abang itu kuat dan pasti bisa hadapin semuanya",
  "✨ Every little moment with you is magic",
  "🐻 Makasih udah sabar sama semua kekurangan abang",
  "🌻 You’re like sunshine on my darkest days",
  "🎯 Tujuan kita masih panjang, jadi tetap hidup ya!",
  "🎵 Your voice is the calm I never knew I needed",
  "📚 Banyak pelajaran hidup buat abang datang dari Rere",
  "💬 No matter what happens, you can talk to me. Always.",
  "🌍 Dunia abang terasa lebih berwarna semenjak dekat ma Rere",
  "🌙 You are my peace at the end of a long day",
  "🍯 Makasih udah jadi tempat pulang sekaligus rumahnya abang",
  "🎈 You and me? We’re the real adventurer!",
  "🦋 Rere bukan cuma istimewa, tapi juga menginspirasi",
  "🎁 Your love is the best gift I ever received",
  "🌼 Hari ini mungkin berat, tapi Rere nggak sendirian",
  "🥺 Ma'af ya kalau abang belum selalu bisa jadi yang terbaik",
  "🍁 With you, even silence feels full.",
  "🕊️ Jangan takut gagal ya sayang. Rere pasti terus belajar", 
  "🍀 You are the reason I believe in luck",
  "👣 Langkahmu selalu berarti buatku.",
  "🏡 I found home in your smile.",
  "🌷 Terima kasih karena udah selalu percaya sama abang",
  "🔥 You’re not just strong, you’re brave",
  "🪻 Hidup ini jadi lebih hidup karena ada Rere",
  "📸 One smile from you, and my whole world lights up",
  "🧠 Rere bukan hanya cantik, tapi juga pintar dan berani",
  "💞 You’re everything soft and everything strong in one",
  "🌼 Jangan menyerah sayaaang, kita masih punya banyak banget wishlist",
  "🌈 Our love is not perfect, but it’s real",
  "🫰 Rere bikin hari-hari biasa jadi luar biasa",
  "🌌 I’ll always be your person, in every universe",
  "🧡 Rere itu istimewa, dan akan selalu begitu",
  "💓 Loving you is my favorite feeling ever"
];

/*   "If you have 1000 people you love, I want to be one of them. If you have 1 lover, I hope it's me. \
  If you no longer feel affection, it means I have left this world. Even if the world is against you, I will always be with you",
 */



  
const colors = ["#fffacd", "#ffd3b6", "#d0f4de", "#fef9a7", "#ffc6ff", "#caffbf"];
const board = document.getElementById("board");

if (board) {
  messages.forEach((msg) => {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = msg;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const angle = `${Math.floor(Math.random() * 10 - 5)}deg`;

    note.style.setProperty("--color", randomColor);
    note.style.setProperty("--angle", angle);
    note.style.fontSize = `${Math.floor(Math.random() * 8 + 9)}px`;

    // Efek suara saat hover
    const hoverSound = document.getElementById("hoverSound");
    if (hoverSound) {
      note.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    }

    board.appendChild(note);
  });
}

// Menambahkan sticky note baru dari form
function addStickyNote() {
  const input = document.getElementById("noteInput").value.trim();
  const color = document.getElementById("colorPicker").value;

  if (input === "") {
    alert("Tulis dulu pesannya ya!");
    return;
  }

  const note = document.createElement("div");
  note.className = "sticky-note";
  note.style.backgroundColor = color;
  note.textContent = input;

  const hoverSound = document.getElementById("hoverSound");
  note.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  board.appendChild(note);
  document.getElementById("noteInput").value = "";
}

// Modal sticky kosong
const createNoteBtn = document.getElementById("createNoteBtn");
if (createNoteBtn) {
  createNoteBtn.addEventListener("click", () => {
    document.getElementById("noteModal").classList.remove("hidden");
  });
}

function closeModal() {
  document.getElementById("noteModal").classList.add("hidden");
}

function submitModalNote() {
  const text = document.getElementById("modalNoteInput").value.trim();
  const color = document.getElementById("modalColorPicker").value;

  if (text === "") {
    alert("Isi dulu pesannya ya!");
    return;
  }

  const note = document.createElement("div");
  note.className = "sticky-note";
  note.style.backgroundColor = color;
  note.textContent = text;

  const hoverSound = document.getElementById("hoverSound");
  note.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  board.appendChild(note);
  closeModal();
}

/* ==== Playlist Audio ==== */
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const title = document.getElementById("title");
const thumbnail = document.getElementById("thumbnail");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Playlist
const playlist = [
  {
    title: "Yung Kai - Blue",
    file: "audio/yung kai - blue.mp3",
    image: "audio/yung kai - blue.png"
  },
  {
    title: "The Afters - Moments Like This",
    file: "audio/The Afters - Moments Like This.mp3",
    image: "audio/The Afters - Moments Like This.jpg"
  },
  {
    title: "Bruno Mars - Marry You",
    file: "audio/Bruno Mars - Marry You.mp3",
    image: "audio/Bruno Mars - Marry You.jpg"
  },
  {
    title: "Novo Amor - Carry You",
    file: "audio/Novo Amor - Carry You.mp3",
    image: "audio/Novo Amor - Carry You.jpg"
  }
];

let currentTrack = 0;

// Load track
function loadTrack(index) {
  const track = playlist[index];
  title.textContent = track.title;
  thumbnail.src = track.image;
  audio.src = track.file;
}

loadTrack(currentTrack);

// Play/Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Next track
nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = "⏸️";
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;

  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
});

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Auto play next track when current ends
audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length; // loop back to first if end
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = "⏸️";
});

// Autoplay saat halaman dibuka (dengan fallback interaksi user jika diblokir browser)
document.addEventListener("DOMContentLoaded", function () {
  const tryPlay = () => {
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playPauseBtn.textContent = "⏸️";
          console.log("Audio autoplay berhasil!");
        })
        .catch(() => {
          console.log("Autoplay diblokir, menunggu interaksi pengguna...");

          function startAudioOnUserInteraction() {
            audio.play();
            playPauseBtn.textContent = "⏸️";
            document.removeEventListener("click", startAudioOnUserInteraction);
            document.removeEventListener("scroll", startAudioOnUserInteraction);
            document.removeEventListener("mousemove", startAudioOnUserInteraction);
          }

          document.addEventListener("click", startAudioOnUserInteraction);
          document.addEventListener("scroll", startAudioOnUserInteraction);
          document.addEventListener("mousemove", startAudioOnUserInteraction);
        });
    }
  };

  tryPlay();
});


/* ==== Carousel Galeri Cinta ==== */
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  // Geser container agar aktif di tengah
  const track = document.querySelector('.carousel-track');
  const slide = slides[currentIndex];

  if (track && slide) {
    const slideWidth = slide.offsetWidth + 4; // 32 = margin (16px kiri & kanan)
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const offset = slide.offsetLeft - (containerWidth / 2 - slideWidth / 2);

    track.style.transform = `translateX(-${offset}px)`;
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

// Jalankan otomatis pindah slide setiap 5 detik
function startAutoSlide() {
  setInterval(() => {
    nextSlide();
  }, 5000000); // Ganti angka jika ingin durasi lebih cepat/lambat
}

window.onload = () => {
  updateSlides();
  startAutoSlide();
};


// Membuat animasi bunga jatuh 🌸
function createFlower() {
    let flower = document.createElement("div");
    flower.innerHTML = "🧸"; // Emoji bunga
    flower.classList.add("flower");
    
    // Menentukan posisi random di layar
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (3 + Math.random() * 3) + "s"; // Kecepatan jatuh random
    flower.style.fontSize = (20 + Math.random() * 10) + "px"; // Ukuran bunga random
    
    document.getElementById("flower-container").appendChild(flower);
    
    // Menghapus bunga setelah selesai animasi
    setTimeout(() => {
        flower.remove();
    }, 5000);    
}    

// Loop untuk menambah bunga terus-menerus
setInterval(createFlower, 500);
