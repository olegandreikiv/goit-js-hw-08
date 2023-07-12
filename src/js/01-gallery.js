// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// відстеження події
const galleryEL = document.querySelector('.gallery');

// додаєм зображення
const imagesListTemplate = ({preview, original, description}) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            title="${description}"
            alt="${description}"/>
            </a>`;
  };

const addImg = galleryItems.map(imagesListTemplate).join('');
galleryEL.insertAdjacentHTML("afterbegin", addImg);


// додаєм клік
galleryEL.addEventListener('click', oneGalleryImgClick );


function oneGalleryImgClick(evt) {
    evt.preventDefault();
  
    const imageSelected = evt.target.getAttribute("data-source");
   
    // перевірка кліка на зображенні
    if (!imageSelected) { return; }
};


// підключаєм SimpleLightbox
  new SimpleLightbox(".gallery a", {captionDelay: 250, showCounter:false });