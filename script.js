let galleryItems = [
  {
    path: "./assets/img/mountains-with-snow.jpg",
    title: "Winter Majesty",
    description:
      "Towering snow-capped peaks bask in crisp winter sunlight, their rugged faces glowing against the deep blue sky.",
  },
  {
    path: "./assets/img/caucasus-mountains.jpg",
    title: "Caucasus Horizons",
    description:
      "The dramatic ridgelines of the Caucasus stretch into the distance, cloaked in shifting clouds and ancient mystery.",
  },
  {
    path: "./assets/img/nature-waterfall.jpg",
    title: "Emerald Falls",
    description:
      "A graceful waterfall cascades into a jade-green pool, surrounded by lush forest and moss-covered rocks.",
  },
  {
    path: "./assets/img/kirkjufell-waterfall.jpg",
    title: "Kirkjufell Serenity",
    description:
      "Iceland’s iconic Kirkjufell mountain rises beyond a gentle waterfall, a scene of timeless northern beauty.",
  },
  {
    path: "./assets/img/beach.jpg",
    title: "Golden Shoreline",
    description:
      "Sunlight warms the sandy beach as gentle waves lap the coast, painting patterns in the tide’s retreat.",
  },
  {
    path: "./assets/img/sea-cliff.jpg",
    title: "Edge of the Ocean",
    description:
      "Sheer cliffs drop into the endless sea, where turquoise waters crash in foamy bursts against the stone.",
  },
  {
    path: "./assets/img/tindari-sicily.jpg",
    title: "Tindari’s View",
    description:
      "From the Sicilian heights of Tindari, sweeping vistas reveal golden shores meeting the sparkling Mediterranean.",
  },
  {
    path: "./assets/img/nature-forest-mountain.jpg",
    title: "Verdant Peaks",
    description:
      "Dense forests climb the slopes of towering mountains, where morning mist clings to the emerald canopy.",
  },
  {
    path: "./assets/img/nature-from-high-up.jpg",
    title: "Above the Wilds",
    description:
      "From high above, rivers snake through valleys and forests spread like a green ocean beneath the open sky.",
  },
  {
    path: "./assets/img/road-glacier.jpg",
    title: "Between the trees",
    description:
      "A Road through mountains and trees, overviewing the magnificent view of a tall towering rock formation with an icy landscape behind it.",
  },
];

function render() {
  let contentRef = document.getElementById("gallery");
  galleryItems.forEach((item) => {
    contentRef.innerHTML += `<img aria-haspopup="dialog" aria-controls="imageDialog" tabindex="0" src="${item.path}" class="gallery-img" alt="${item.description}">`;
  });
}

let images = document.getElementsByClassName('gallery-img');
let dialog = document.getElementById('imageDialog');
let dialogImg = document.getElementById('dialog-img');
let dialogTitle = document.getElementById('dialog-title');
let dialogDescription = document.getElementById('dialog-description');
let closeBtn = document.getElementById('close-btn');
let i = 0;
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');


function openDialog(e) {
  dialog.showModal();
  searchGallery(e);
}

function closeDialog(e) {
  if (e.target === dialog || e.target === closeBtn || e.key === 'esc') {
    dialog.close();
  }
}

dialog.addEventListener("click", closeDialog);

window.addEventListener("load", (event) => {
  Array.from(images).forEach((image) => {
    image.addEventListener("click", openDialog);
    image.addEventListener("keyup", function(e) {
        if (e.key === 'Enter') {
          openDialog(e);
        }
    });
  });
});

function searchGallery(e) {
  galleryItems.forEach((item) => {
    if (e.target.getAttribute('src') == item.path) {
      dialogImg.setAttribute('src', item.path);
      dialogTitle.innerText = item.title;
      dialogDescription.innerText = item.description;
    }
  });
}

function changeDialogInfo(value, e) {
  i = 0;
  let currentImageSrc = dialogImg.getAttribute('src');
  galleryItems.forEach((item) => {
    if (currentImageSrc == item.path) {
      let currentIndex = i;
      if (currentIndex == galleryItems.length - 1 && e.target == nextBtn) {
        currentIndex = -1;
      } else if (currentIndex == 0 && e.target === prevBtn) {
        currentIndex = 10;
      }
      dialogImg.setAttribute('src', galleryItems[currentIndex + value].path);
      dialogTitle.innerText = galleryItems[currentIndex + value].title;
      dialogDescription.innerText = galleryItems[currentIndex + value].description;
    }
    i++;
  });
}

function clickControlButton(value, event) {
  changeDialogInfo(value, event);
}