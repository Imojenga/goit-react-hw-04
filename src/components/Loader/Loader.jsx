import css from './Loader.module.css';
import { PacmanLoader } from 'react-spinners';

export default function Loader() {
  return (
    <PacmanLoader
      color="#000080"
      cssOverride={{
        display: 'block',
        margin: '0 auto',
      }}
    />
  );
}
