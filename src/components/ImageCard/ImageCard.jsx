import css from './ImageCard.module.css';

export default function ImageCard({ card }) {
  return (
    <div className={css.wrp}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
      />
    </div>
  );
}
