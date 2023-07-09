import { galleryItems } from './gallery-items.js';


const ulElem = document.querySelector('.gallery');
const markupGalleryItems = createMarkupGallery(galleryItems);
ulElem.insertAdjacentHTML('beforeend', markupGalleryItems);
ulElem.addEventListener('click', onGalleryItemsClick);


function createMarkupGallery(galleryItems) {
    const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;  
              
    });
    return (markup.join(''));
}

function onGalleryItemsClick(event) {
  event.preventDefault();
  // перевірка кліку по зображенню
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
    // отримання посилання на оригінальне зображення
  const setOriginalSource = event.target.dataset.source;
  openModalLibrary(setOriginalSource);
}

function openModalLibrary(originalUrl) {
const instance = basicLightbox.create(
    `
		<img src="${originalUrl}">
    `,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      // onClose: (instance) => {
      //   window.removeEventListener('keydown', onEscKeyPress);
      // },
    }
  );
  instance.show();
  function onEscKeyPress(event) {
    if (event.code !== "Escape") {
      return      
    }
    instance.close();
  }
}



 


