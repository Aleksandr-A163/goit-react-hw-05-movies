import LoaderSpinner from "react-loader-spinner";
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.LoaderBox}>
    <LoaderSpinner
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={100000} 
    />
  </div>
);

export default Loader;
