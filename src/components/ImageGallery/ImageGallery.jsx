import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, onView }) {
  return (
    <ul className={css.list}>
      {items.map(item => {
        return (
          <li
            className={css.item}
            key={item.id}
            onClick={() => onView(item.urls.regular, item.description)}
          >
            <ImageCard card={item} />
          </li>
        );
      })}
    </ul>
  );
}
