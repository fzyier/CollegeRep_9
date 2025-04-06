import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203675__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203675_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
];

const refs = {
  gallery: document.querySelector('.gallery'),
};

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
    )
    .join('');
}

refs.gallery.innerHTML = createMarkup(images);

const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
