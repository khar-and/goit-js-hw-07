import { galleryItems } from './gallery-items.js';


const ulElem = document.querySelector('.gallery');
const markupGalleryItems = createMarkupGallery(galleryItems);
ulElem.insertAdjacentHTML('beforeend', markupGalleryItems);

const lightbox = new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay: 250});


function createMarkupGallery(galleryItems) {
    const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;  
              
    });
    return (markup.join(''));
}
// Закриття модалки при натисненні Esc (публічні методи бібліотеки)
// document.addEventListener('keydown', onCloseGallery);
// function onCloseGallery(event) {
//     if (event.code !== "Escape") {
//         return;
//     }
//     lightbox.close();
//     console.log(event.code);
// }
