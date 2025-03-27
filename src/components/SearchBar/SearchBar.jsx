import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.target;
    const searchInput = searchForm.elements.text.value.trim();
    if (searchInput === '') {
      toast('Please enter something', { position: 'top-right', icon: '✍️' });
      return;
    }
    onSearch(searchInput);
    searchForm.reset();
  };

  return (
    <header>
      <Toaster />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
