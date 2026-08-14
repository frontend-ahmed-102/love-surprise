
/* =========================================================
   CONFIG
   كل البيانات الشخصية موجودة هنا
========================================================= */

const CONFIG = {
  recipientName: "Knoza",
  authorName: "kanoztyy",
  specialDate: "2/August/2026",

  // Passcode
  passcode: "210",
  passcodeHint: "Hint · our special date (MMDD)",


  /* =========================
     GIFT REVEAL
  ========================= */

  giftReveal: {
    caption: "Opening your gift...",
    title: "A little piece of my heart, just for you.",
    body: "Hidden inside is something special — a reminder that my heart will always choose you, and that you deserve all the love and happiness in the world. ✨❤️"
  },


  /* =========================
     FLOWER MESSAGES
  ========================= */

  flowerMessages: [
    "كل مرة بشوفك فيها، بحس إني محظوظ انك معايا مب يحس دا اكيد 🌸",
    "كل يوم بكون فيه معاكي بحس إن الدنيا والله جميلة موت ❤️.",
    "ضحكتك لوحدها كفيلة تغيري يومي والله بطريقه غبيه اللي هي من قلبك دي ❤️",
    "معاكي والله لو بشوفك دقيقه بتبقي احلي دقيقه ف يومي وربنا ❤️",
    "بتعرفي تهديني ودايما واقفه جمبي ووالله عمري منسي دا ينور عيني ❤️",
    "وجود جمبي والله بالدنيا وما فيها."
  ],


  /* =========================
     LETTER
  ========================= */

  letter: {
    to: "My dearest " + "knozaa,",

    paragraphs: [
     
  "I just want you to know how much you mean to me. Having you in my life has changed so many things in the most beautiful way. Even on the days when everything feels heavy, somehow, your presence makes things feel a little easier.",

  "I don't think you realize how much your smile, your laugh, and even the smallest moments with you mean to me. Sometimes, I find myself remembering the simplest things we've shared, and they end up becoming some of my favorite memories.",

  "Thank you for being exactly who you are. For your kindness, your heart, your way of making things feel better without even trying. I love the person you are, and I feel lucky to have you in my life.",

  "I don't know what the future holds, but one thing I know for sure is that I want to keep making memories with you, laughing with you, and being there for you through everything.",

  "You are, and will always be, one of the most beautiful parts of my life."
],





    

    ps: "P.S. No matter where life takes us, a part of my heart will always belong to you. ❤️ 🌸",

    signOff: "With all my love,"
  },


  /* =========================
     PHOTOS
  ========================= */

  photos: [
    {
      caption: "Our very first sunset together",
      emoji: "🌅",
      img: "./7.jpg"
    },

    {
      caption: "Our favourite café in the corner of the city",
      emoji: "☕",
      img: "./8.jpg"
    },

    {
      caption: "First time at the beach, just the two of us",
      emoji: "🐚",
      img: "./9.jpg"
    }
  ],


  /* =========================
     SONGS
  ========================= */

  songs: [
    {
      title: "Shape Of My Heart",
      artist: "Backstreet Boys",
      src: "./Shape Of My Heart.mp3"
    },

    {
      title: "i wanna be yours",
      artist: "Troye Sivan",
      src: "./I Wanna Be Yours.mp3"
    },

    {
      title: "Ana Wenta Sawa",
      artist: "Bahaa Sultan",
      src: "./انا وانت سوا.mp3"
    }
  ],


  /* =========================
     JAR NOTES
  ========================= */

jarNotes: [
  "مش فاكر إنك هتعرفي قد إيه أنا بحب ضحكتك، مجرد ما بسمعها يومي كله بيبقى أحلى.",

  "طريقتك في اهتمامك بيا، والحاجات الصغيرة اللي بتعمليها، دايمًا بتحسسني قد إيه أنا محبوب.",

  "في حاجة في ملامحك مستحيل أزهق من إني أبص عليها، كل تفصيلة فيكي بالنسبالي جميلة.",

  "بحب قد إيه إنتِ ناضجة وفاهمة، معاكي بحس إني أقدر أكون على طبيعتي وألاقي حد فاهمني.",

  "طيبتك من أكتر الحاجات اللي بحبها فيكي، عندك قلب حنين وجميل بشكل مميز.",

  "بحبك بكل الحاجات الصغيرة اللي بتخليكي إنتِ… ضحكتك، وقلبك، وعقلك، وكل حاجة فيكي."
],


  /* =========================
     FINALE
  ========================= */

  finale: {
    title: "Ba7ebak ya Koko ❤️!",
    sub: "The most special " + "Knoza" + " 🌸"
  }
};



/* =========================================================
   PETAL BACKGROUND
========================================================= */

(function petals() {
  const field = document.getElementById("petalField");

  const emojis = [
    "🌸",
    "🌷",
    "✨",
    "💮"
  ];

  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("span");

    petal.className = "petal";

    petal.textContent =
      emojis[i % emojis.length];

    petal.style.left =
      Math.random() * 100 + "vw";

    petal.style.animationDuration =
      10 + Math.random() * 10 + "s";

    petal.style.animationDelay =
      Math.random() * 10 + "s";

    petal.style.fontSize =
      10 + Math.random() * 10 + "px";

    field.appendChild(petal);
  }
})();



/* =========================================================
   LOCK SCREEN
========================================================= */

document.getElementById("lockHint").textContent =
  CONFIG.passcodeHint;


const code =
  CONFIG.passcode.split("");

let entered = [];


const dotsEl =
  document.getElementById("dots");


/* Create passcode dots */

code.forEach(() => {
  const dot =
    document.createElement("div");

  dot.className = "dot";

  dotsEl.appendChild(dot);
});


/* Create keypad */

const keypadEl =
  document.getElementById("keypad");


const keys = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9",
  "", "0", "del"
];


keys.forEach((key) => {
  const button =
    document.createElement("div");


  /* Empty keypad space */

  if (key === "") {
    button.className =
      "key ghost";

    button.style.visibility =
      "hidden";
  }


  /* Delete button */

  else if (key === "del") {
    button.className =
      "key ghost";

    button.textContent =
      "⌫";

    button.addEventListener(
      "click",
      delDigit
    );
  }


  /* Number buttons */

  else {
    button.className =
      "key";

    button.textContent =
      key;

    button.addEventListener(
      "click",
      () => addDigit(key)
    );
  }


  keypadEl.appendChild(button);
});


/* Update dots */

function refreshDots() {
  [...dotsEl.children].forEach(
    (dot, index) => {
      dot.classList.toggle(
        "filled",
        index < entered.length
      );
    }
  );
}


/* Add digit */

function addDigit(digit) {
  if (entered.length >= code.length) {
    return;
  }

  entered.push(digit);

  refreshDots();


  if (entered.length === code.length) {
    setTimeout(
      checkCode,
      250
    );
  }
}


/* Delete digit */

function delDigit() {
  entered.pop();

  refreshDots();
}


/* Check passcode */

function checkCode() {
  const enteredCode =
    entered.join("");

  const correctCode =
    code.join("");


  if (enteredCode === correctCode) {
    goToGift();
  } else {
    [...dotsEl.children].forEach(
      (dot) => {
        dot.classList.add(
          "shake-anim"
        );
      }
    );


    setTimeout(() => {
      [...dotsEl.children].forEach(
        (dot) => {
          dot.classList.remove(
            "shake-anim"
          );
        }
      );

      entered = [];

      refreshDots();

    }, 420);
  }
}


/* Move to gift screen */

function goToGift() {
  document.getElementById(
    "giftCaption"
  ).textContent =
    CONFIG.giftReveal.caption;


  document.getElementById(
    "revealTitle"
  ).textContent =
    CONFIG.giftReveal.title;


  document.getElementById(
    "revealBody"
  ).textContent =
    CONFIG.giftReveal.body;


  document.getElementById(
    "screen-lock"
  ).classList.add(
    "hidden"
  );


  document.getElementById(
    "screen-gift"
  ).classList.remove(
    "hidden"
  );
}



/* =========================================================
   GIFT SCREEN
========================================================= */

const giftBox =
  document.getElementById(
    "giftBox"
  );

const giftStage =
  document.getElementById(
    "giftStage"
  );

const revealText =
  document.getElementById(
    "revealText"
  );

const sparksEl =
  document.getElementById(
    "sparks"
  );


/* Create spark particles */

const sparkEmojis = [
  "✨",
  "💫",
  "⭐",
  "🌟"
];


for (let i = 0; i < 14; i++) {
  const spark =
    document.createElement(
      "span"
    );

  spark.textContent =
    sparkEmojis[
      i % sparkEmojis.length
    ];


  const angle =
    (Math.PI * 2 * i) / 14;


  const distance =
    70 + Math.random() * 40;


  spark.style.setProperty(
    "--dx",
    Math.cos(angle) *
      distance +
      "px"
  );


  spark.style.setProperty(
    "--dy",
    Math.sin(angle) *
      distance +
      "px"
  );


  spark.style.animationDelay =
    Math.random() * 0.2 +
    "s";


  sparksEl.appendChild(
    spark
  );
}


let opened = false;


/* Open gift */

giftBox.addEventListener(
  "click",
  () => {

    if (opened) {
      return;
    }

    opened = true;


    giftBox.classList.add(
      "shaking"
    );


    setTimeout(() => {

      giftBox.classList.remove(
        "shaking"
      );


      giftBox.classList.add(
        "opened"
      );


      giftStage.classList.add(
        "bursting"
      );


      setTimeout(() => {

        revealText.classList.add(
          "show"
        );

      }, 500);

    }, 550);

  }
);


/* Continue to main site */

document.getElementById(
  "continueBtn"
).addEventListener(
  "click",
  () => {

    document.getElementById(
      "screen-gift"
    ).classList.add(
      "hidden"
    );


    document.getElementById(
      "site"
    ).classList.remove(
      "hidden"
    );


    window.scrollTo(0, 0);
  }
);



/* =========================================================
   HERO
========================================================= */

document.getElementById(
  "heroDate"
).textContent =
  CONFIG.specialDate +
  " · The Most Special Day";


document.getElementById(
  "heroTitle"
).innerHTML =
  "To The Most Beautiful Part of My World,<br>" +
  CONFIG.recipientName;



/* =========================================================
   BOUQUET
========================================================= */

const bouquetField =
  document.getElementById(
    "bouquetField"
  );


const flowerEmojis = [
  "🌸",
  "🌷",
  "🌹",
  "🌻",
  "💮",
  "🌺"
];


const positions = [
  { top: "4%", left: "46%" },
  { top: "18%", left: "12%" },
  { top: "18%", left: "78%" },
  { top: "42%", left: "4%" },
  { top: "42%", left: "88%" },
  { top: "58%", left: "50%" }
];


const msgCard =
  document.getElementById(
    "msgCard"
  );


CONFIG.flowerMessages
  .slice(0, 6)
  .forEach((message, index) => {

    const button =
      document.createElement(
        "button"
      );


    button.className =
      "flower-btn";


    button.textContent =
      flowerEmojis[
        index %
        flowerEmojis.length
      ];


    const position =
      positions[
        index %
        positions.length
      ];


    button.style.top =
      position.top;

    button.style.left =
      position.left;


    button.style.animationDelay =
      index * 0.3 +
      "s";


    button.addEventListener(
      "click",
      () => {

        msgCard.textContent =
          `"${message}"`;

        msgCard.classList.add(
          "show"
        );

      }
    );


    bouquetField.appendChild(
      button
    );
  });



/* =========================================================
   LETTER
========================================================= */

const letterCard =
  document.getElementById(
    "letterCard"
  );


letterCard.innerHTML = `
  <div class="to">
    My dearest ${CONFIG.recipientName},
  </div>

  ${CONFIG.letter.paragraphs
    .map(
      (paragraph) =>
        `<p>${paragraph}</p>`
    )
    .join("")}

  <div class="ps">
    ${CONFIG.letter.ps}
  </div>

  <div class="sign">
    ${CONFIG.letter.signOff}
    <br>
    ${CONFIG.authorName}
  </div>
`;



/* =========================================================
   GALLERY
========================================================= */

const galleryEl =
  document.getElementById(
    "gallery"
  );


CONFIG.photos.forEach(
  (photo) => {

    const figure =
      document.createElement(
        "figure"
      );


    figure.className =
      "polaroid";


    const frameStyle =
      photo.img
        ? `
          background-image:
            url('${photo.img}');
          background-size:
            cover;
          background-position:
            center;
        `
        : "";


    figure.innerHTML = `
      <div
        class="frame"
        style="${frameStyle}"
      >
        ${photo.img
          ? ""
          : photo.emoji}
      </div>

      <figcaption>
        ${photo.caption}
      </figcaption>
    `;


    galleryEl.appendChild(
      figure
    );
  }
);



/* =========================================================
   MUSIC PLAYER
========================================================= */

let curTrack = 0;

let isPlaying = false;

let seekTimer = null;

let seekPct = 0;


const audioEl =
  new Audio();


const discEl =
  document.getElementById(
    "disc"
  );

const trackTitleEl =
  document.getElementById(
    "trackTitle"
  );

const trackArtistEl =
  document.getElementById(
    "trackArtist"
  );

const seekFill =
  document.getElementById(
    "seekFill"
  );

const seekDot =
  document.getElementById(
    "seekDot"
  );

const playBtn =
  document.getElementById(
    "playBtn"
  );

const rowsEl =
  document.getElementById(
    "playlistRows"
  );


/* Render playlist */

function renderRows() {

  rowsEl.innerHTML = "";


  CONFIG.songs.forEach(
    (song, index) => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "track-row" +
        (
          index === curTrack
            ? " active"
            : ""
        );


      row.innerHTML = `
        <span class="num">
          ${index + 1}
        </span>

        <div class="info">
          <div class="t">
            ${song.title}
          </div>

          <div class="a">
            ${song.artist}
          </div>
        </div>

        <span>🎵</span>
      `;


      row.addEventListener(
        "click",
        () => loadTrack(
          index,
          true
        )
      );


      rowsEl.appendChild(
        row
      );
    }
  );
}


/* Load track */

function loadTrack(
  index,
  autoplay
) {

  curTrack =
    (
      index +
      CONFIG.songs.length
    ) %
    CONFIG.songs.length;


  const song =
    CONFIG.songs[
      curTrack
    ];


  trackTitleEl.textContent =
    song.title;

  trackArtistEl.textContent =
    song.artist;


  seekPct = 0;

  seekFill.style.width =
    "0%";

  seekDot.style.left =
    "0%";


  renderRows();


  clearInterval(
    seekTimer
  );


  if (song.src) {
    audioEl.src =
      song.src;
  }


  if (autoplay) {
    playTrack();
  } else {
    pauseTrack();
  }
}


/* Play track */

function playTrack() {

  isPlaying = true;


  playBtn.textContent =
    "⏸";


  discEl.classList.add(
    "playing"
  );


  if (
    CONFIG.songs[curTrack].src
  ) {
    audioEl.play()
      .catch(() => {});
  }


  clearInterval(
    seekTimer
  );


  seekTimer =
    setInterval(() => {

      seekPct =
        (seekPct + 0.4) %
        100;


      seekFill.style.width =
        seekPct + "%";


      seekDot.style.left =
        seekPct + "%";

    }, 120);
}


/* Pause track */

function pauseTrack() {

  isPlaying = false;


  playBtn.textContent =
    "▶";


  discEl.classList.remove(
    "playing"
  );


  audioEl.pause();


  clearInterval(
    seekTimer
  );
}


/* Player buttons */

playBtn.addEventListener(
  "click",
  () => {
    isPlaying
      ? pauseTrack()
      : playTrack();
  }
);


document.getElementById(
  "nextBtn"
).addEventListener(
  "click",
  () => {
    loadTrack(
      curTrack + 1,
      isPlaying
    );
  }
);


document.getElementById(
  "prevBtn"
).addEventListener(
  "click",
  () => {
    loadTrack(
      curTrack - 1,
      isPlaying
    );
  }
);


/* Load first track */

loadTrack(
  0,
  false
);



/* =========================================================
   GRATITUDE JAR
========================================================= */

const jarEl =
  document.getElementById(
    "jarEl"
  );

const noteCard =
  document.getElementById(
    "noteCard"
  );


let noteCount = 0;


/* Shake jar */

function shakeJar() {

  jarEl.classList.remove(
    "shaking"
  );


  void jarEl.offsetWidth;


  jarEl.classList.add(
    "shaking"
  );


  noteCard.classList.remove(
    "show"
  );


  setTimeout(() => {

    noteCount++;


    const message =
      CONFIG.jarNotes[
        Math.floor(
          Math.random() *
          CONFIG.jarNotes.length
        )
      ];


    noteCard.innerHTML = `
      <span class="note-num">
        #${noteCount}
      </span>

      "${message}" 💕
    `;


    noteCard.classList.add(
      "show"
    );

  }, 380);
}


jarEl.addEventListener(
  "click",
  shakeJar
);


document.getElementById(
  "shakeBtn"
).addEventListener(
  "click",
  shakeJar
);



/* =========================================================
   FINALE
========================================================= */

document.getElementById(
  "finaleTitle"
).textContent =
  CONFIG.finale.title;


document.getElementById(
  "finaleSub"
).textContent =
  CONFIG.finale.sub;


/* Finale button */

document.getElementById(
  "finaleBtn"
).addEventListener(
  "click",
  () => {

    document.getElementById(
      "finale"
    ).style.opacity =
      "0.4";

  }
);



/* =========================================================
   CONFETTI
========================================================= */

const canvas =
  document.getElementById(
    "confetti"
  );

const ctx =
  canvas.getContext("2d");


function resizeCanvas() {

  canvas.width =
    innerWidth;

  canvas.height =
    innerHeight;
}


resizeCanvas();


addEventListener(
  "resize",
  resizeCanvas
);


let confettiPieces = [];


/* Create confetti */

function burstConfetti() {

  const colors = [
    "#e8a0b4",
    "#f0d97a",
    "#f7dde5",
    "#c9526f"
  ];


  for (
    let i = 0;
    i < 80;
    i++
  ) {

    confettiPieces.push({
      x:
        Math.random() *
        canvas.width,

      y: -20,

      r:
        3 +
        Math.random() * 4,

      c:
        colors[
          Math.floor(
            Math.random() *
            colors.length
          )
        ],

      vy:
        2 +
        Math.random() * 3,

      vx:
        -1 +
        Math.random() * 2,

      rot:
        Math.random() * 360
    });
  }
}


/* Animate confetti */

function animateConfetti() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  confettiPieces.forEach(
    (piece) => {

      piece.y +=
        piece.vy;

      piece.x +=
        piece.vx;

      piece.rot += 4;


      ctx.save();


      ctx.translate(
        piece.x,
        piece.y
      );


      ctx.rotate(
        piece.rot *
        Math.PI /
        180
      );


      ctx.fillStyle =
        piece.c;


      ctx.fillRect(
        -piece.r,
        -piece.r,
        piece.r * 2,
        piece.r * 2
      );


      ctx.restore();
    }
  );


  confettiPieces =
    confettiPieces.filter(
      (piece) =>
        piece.y <
        canvas.height + 20
    );


  requestAnimationFrame(
    animateConfetti
  );
}


animateConfetti();


/* Trigger confetti
   when finale enters view */

let confettiFired =
  false;


const finaleObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting &&
            !confettiFired
          ) {

            confettiFired =
              true;


            burstConfetti();


            setTimeout(
              burstConfetti,
              500
            );
          }

        }
      );

    },

    {
      threshold: 0.5
    }
  );


finaleObserver.observe(
  document.getElementById(
    "finale"
  )
);



/* =========================================================
   AMBIENT MUSIC TOGGLE
========================================================= */

document.getElementById(
  "ambientMusicToggle"
).addEventListener(
  "click",
  () => {

    isPlaying
      ? pauseTrack()
      : playTrack();

  }
);

