let galleryItems = [
  {
    id: 1,
    favorite: false,
    path: "./assets/img/mountains-with-snow.jpg",
    title: "Winter Majesty",
    description:
      "Towering snow-capped peaks bask in crisp winter sunlight, their rugged faces glowing against the deep blue sky.",
  },
  {
    id: 2,
    favorite: false,
    path: "./assets/img/caucasus-mountains.jpg",
    title: "Caucasus Horizons",
    description:
      "The dramatic ridgelines of the Caucasus stretch into the distance, cloaked in shifting clouds and ancient mystery.",
  },
  {
    id: 3,
    favorite: false,
    path: "./assets/img/nature-waterfall.jpg",
    title: "Emerald Falls",
    description:
      "A graceful waterfall cascades into a jade-green pool, surrounded by lush forest and moss-covered rocks.",
  },
  {
    id: 4,
    favorite: false,
    path: "./assets/img/kirkjufell-waterfall.jpg",
    title: "Kirkjufell Serenity",
    description:
      "Iceland’s iconic Kirkjufell mountain rises beyond a gentle waterfall, a scene of timeless northern beauty.",
  },
  {
    id: 5,
    favorite: false,
    path: "./assets/img/beach.jpg",
    title: "Golden Shoreline",
    description:
      "Sunlight warms the sandy beach as gentle waves lap the coast, painting patterns in the tide’s retreat.",
  },
  {
    id: 6,
    favorite: false,
    path: "./assets/img/sea-cliff.jpg",
    title: "Edge of the Ocean",
    description:
      "Sheer cliffs drop into the endless sea, where turquoise waters crash in foamy bursts against the stone.",
  },
  {
    id: 7,
    favorite: false,
    path: "./assets/img/tindari-sicily.jpg",
    title: "Tindari’s View",
    description:
      "From the Sicilian heights of Tindari, sweeping vistas reveal golden shores meeting the sparkling Mediterranean.",
  },
  {
    id: 8,
    favorite: false,
    path: "./assets/img/nature-forest-mountain.jpg",
    title: "Verdant Peaks",
    description:
      "Dense forests climb the slopes of towering mountains, where morning mist clings to the emerald canopy.",
  },
  {
    id: 9,
    favorite: false,
    path: "./assets/img/nature-from-high-up.jpg",
    title: "Above the Wilds",
    description:
      "From high above, rivers snake through valleys and forests spread like a green ocean beneath the open sky.",
  },
  {
    id: 10,
    favorite: false,
    path: "./assets/img/road-glacier.jpg",
    title: "Between the trees",
    description:
      "A Road through mountains and trees, overviewing the magnificent view of a tall towering rock formation with an icy landscape behind it.",
  },
];

const starEmpty =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="star star-empty"><path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z" fill="gold"/></svg>';

const starFilled =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="star star-full"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" fill="gold"/></svg>';

let headline = document.getElementById('headline');
let images = document.getElementsByClassName("gallery-img");
let dialog = document.getElementById("imageDialog");
let dialogImg = document.getElementById("dialog-img");
let dialogTitle = document.getElementById("dialog-title");
let dialogDescription = document.getElementById("dialog-description");
let closeBtn = document.getElementById("close-btn");
let i = 0;
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let diashowBtn = document.getElementById("diashow-btn");
let dialogBody = document.querySelector(".dialog-body");
let renderFavoritesBtn = document.getElementById('show-favorites');
let favoritesActive = false;
let favoriteArray = [];

function render() {
  i = 0;
  let contentRef = document.getElementById("gallery");
  contentRef.innerHTML = "";
  if (contentRef.classList.contains('favorites')) {
    contentRef.classList.remove('favorites');
  }
  headline.innerHTML = 'Your personal photo album';
  galleryItems.forEach((item) => {
    contentRef.innerHTML +=
      `<div class="gallery-img"><img aria-haspopup="dialog" aria-controls="imageDialog" tabindex="0" src="${item.path}" alt="${item.title}"><button onclick="favorize(event)" class="favorite-btn` + (item.favorite === true ? ' favorized' : '') + `" value="${i}">` +
      (item.favorite === true ? starFilled : starEmpty) +
      `</button></div>`;
      i++;
  });
  groupImages();
  favoritesActive = false;
}

function renderFavorites() {
  i = 0;
  let contentRef = document.getElementById("gallery");
  contentRef.innerHTML = "";
  contentRef.classList.add('favorites');
  headline.innerHTML = 'Your favorites';
  galleryItems.forEach((item) => {
    if (item.favorite) {
      contentRef.innerHTML +=
        `<div class="gallery-img"><img aria-haspopup="dialog" aria-controls="imageDialog" tabindex="0" src="${item.path}" alt="${item.title}"><button onclick="favorize(event)" class="favorite-btn` + (item.favorite === true ? ' favorized' : '') + `" value="${i}">` +
        (item.favorite === true ? starFilled : starEmpty) +
        `</button></div>`;
    }
    i++;
  });
  groupImages();
  favoritesActive = true;
  searchForFavorites();
}

function openDialog(e) {
  if (!e.target.classList.contains("star")) {
    let cloneFavoriteBtn = e.target.nextElementSibling.cloneNode(true);
    cloneFavoriteBtn.classList.add('dialog-favorite-btn');
    dialog.showModal();
    searchGallery(e);
    dialogBody.appendChild(cloneFavoriteBtn);
  }
}

function closeDialog(e) {
  let dialogFavoriteBtn = document.querySelector('.dialog-favorite-btn');
  if (e.target === dialog || e.target === closeBtn || e.key === "esc") {
    if (dialogBody.contains(dialogFavoriteBtn)) {
      dialogBody.removeChild(dialogFavoriteBtn);
    }
    dialog.close();
  }
}

dialog.addEventListener("click", closeDialog);

function groupImages() {
  Array.from(images).forEach((image) => {
    image.addEventListener("click", openDialog);
    image.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        openDialog(e);
      }
    });
  });
}

function searchForFavorites() {
  galleryItems.forEach((item) => {
    if (item.favorite) {
      favoriteArray.push(item);
    }
  });
}

window.addEventListener('load', groupImages);

function searchGallery(e) {
  
  galleryItems.forEach((item) => {
    if (e.target.getAttribute("src") == item.path) {
      dialogImg.setAttribute("src", item.path);
      dialogTitle.innerText = item.title;
      dialogDescription.innerText = item.description;
    }
  });
}

function changeDialogInfo(value, e, loop, array) {
  i = 0;
  let currentImageSrc = dialogImg.getAttribute("src");
  let targetBtn;
  if (e) {
    targetBtn = e.target;
  } else {
    targetBtn = false;
  }
  array.forEach((item) => {
    if (currentImageSrc == item.path) {
      let currentIndex = i;

      if (loop === true) {
        setTimeout(fadeOut, 2500);
      }

      if (
        (currentIndex == array.length - 1 && targetBtn == nextBtn) ||
        (currentIndex == array.length - 1 && loop === true)
      ) {
        currentIndex = -1;
      } else if (currentIndex == 0 && targetBtn === prevBtn && favoritesActive) {
        currentIndex = array.length;
      } else if (currentIndex == 0 && targetBtn === prevBtn) {
        currentIndex = 10;
      }
      changeElements(array[currentIndex + value], true);
    }
    i++;
  });
}

function changeElements(element, loop) {
  if (loop === true) {
    fadeIn();
  }
  dialogImg.setAttribute("src", element.path);
  dialogTitle.innerText = element.title;
  dialogDescription.innerText = element.description;
}

function clickControlButton(value, event) {
  if (favoritesActive) {
    changeDialogInfo(value, event, false, favoriteArray);
  } else {
    changeDialogInfo(value, event, false, galleryItems);
  }
}

function loopDiashow(e) {
  if (dialogBody.contains(document.querySelector('.dialog-favorite-btn'))) {
    dialogBody.removeChild(document.querySelector('.dialog-favorite-btn'));
  }
  setTimeout(() => {
    if (dialog.hasAttribute("open") === true) {
      if (favoritesActive) {
        changeDialogInfo(1, e, true, favoriteArray);
      } else {
        changeDialogInfo(1, e, true, galleryItems);
      }
      loopDiashow();
    }
  }, 3000);
}

diashowBtn.addEventListener("click", loopDiashow);

function fadeOut() {
  if (dialog.hasAttribute("open") === true) {
    if (dialogBody.classList.contains("fading-in")) {
      dialogBody.classList.remove("fading-in");
    }
    dialogBody.classList.add("fading-out");
  }
}

function fadeIn() {
  if (dialog.hasAttribute("open") === true) {
    if (dialogBody.classList.contains("fading-out")) {
      dialogBody.classList.remove("fading-out");
    }
    dialogBody.classList.add("fading-in");
  }
}

function favorize(e) {
  let btn = e.currentTarget;
  e.stopPropagation();
  if (dialog.open) {
    let mainBtn = document.querySelector('button[value="' + btn.value + '"]:not(.dialog-favorite-btn)');
    growEffect(mainBtn);
    growEffect(btn);
  } else {
    growEffect(btn);
  }
  
  galleryItems[btn.value].favorite = !galleryItems[btn.value].favorite;
  if (favoritesActive) {
    renderFavorites();
    dialog.close();
  }
}

function growEffect(target) {
  target.classList.add("grow");
  setTimeout(() => {
    target.classList.remove("grow");
  }, 500);
  
  if (target.classList.contains("favorized")) {
    target.innerHTML = starEmpty;
  } else {
    target.innerHTML = starFilled;
  }
  target.classList.toggle("favorized");
}
