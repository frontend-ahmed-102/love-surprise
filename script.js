const introVideo = document.getElementById("introVideo");
const memoryVideo = document.getElementById("memoryVideo");
const startVideo = document.getElementById("startVideo");
const skipVideo = document.getElementById("skipVideo");

startVideo.addEventListener("click", () => {

    memoryVideo.style.display = "block";

    memoryVideo.play()
        .then(() => {
            startVideo.style.display = "none";
            skipVideo.style.display = "block";

            console.log("الفيديو اشتغل بنجاح");
        })
        .catch((error) => {
            console.error("خطأ في تشغيل الفيديو:", error);
        });

});

memoryVideo.addEventListener("ended", () => {
    introVideo.classList.add("hide");
});

skipVideo.addEventListener("click", () => {
    memoryVideo.pause();
    introVideo.classList.add("hide");
});

// لما الفيديو يخلص
memoryVideo.addEventListener("ended", () => {
introVideo.classList.add("hide");
});

// زر التخطي
skipVideo.addEventListener("click", () => {
memoryVideo.pause();
introVideo.classList.add("hide");
});

// الخط الذهبي أثناء الـ Scroll
const fill = document.getElementById("threadFill");
const heart = document.getElementById("threadHeart");

function updateThread() {
const scrollTop = window.scrollY;

const docHeight =
document.documentElement.scrollHeight - window.innerHeight;

const pct =
docHeight > 0
? (scrollTop / docHeight) * 100
: 0;

fill.style.height = pct + "%";
heart.style.top = pct + "%";
}

window.addEventListener("scroll", updateThread);

updateThread();

// إظهار فقرات الرسالة أثناء الـ Scroll
const paras = document.querySelectorAll(".letter p");

const io = new IntersectionObserver(
entries => {
entries.forEach(en => {
if (en.isIntersecting) {
en.target.classList.add("show");
}
});
},
{
threshold: 0.4
}
);

paras.forEach(p => io.observe(p));

// مشغل الموسيقى
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

// تشغيل وإيقاف الأغنية
playBtn.addEventListener("click", () => {
if (music.paused) {
music.play();
playBtn.innerHTML = "❚❚";
} else {
music.pause();
playBtn.innerHTML = "▶";
}
});

// تحديث شريط التقدم
music.addEventListener("timeupdate", () => {
if (!music.duration) return;

const percent =
(music.currentTime / music.duration) * 100;

progress.value = percent;

currentTime.textContent =
formatTime(music.currentTime);
});

// عند تحميل بيانات الأغنية
music.addEventListener("loadedmetadata", () => {
duration.textContent =
formatTime(music.duration);
});

// تحريك الأغنية من شريط التقدم
progress.addEventListener("input", () => {
if (!music.duration) return;

music.currentTime =
(progress.value / 100) * music.duration;
});

// تحويل الوقت
function formatTime(time) {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);

return `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

// بعد انتهاء الأغنية
music.addEventListener("ended", () => {
playBtn.innerHTML = "▶";
progress.value = 0;
});

// القلوب المتحركة في آخر الصفحة
const closing = document.querySelector(".closing");

setInterval(() => {
if (!closing) return;

const h = document.createElement("div");

h.className = "heart-float";
h.textContent = "♥";

h.style.left =
(10 + Math.random() * 80) + "%";

h.style.bottom = "0px";

h.style.fontSize =
(10 + Math.random() * 14) + "px";

closing.appendChild(h);

setTimeout(() => {
h.remove();
}, 6000);

}, 900);
