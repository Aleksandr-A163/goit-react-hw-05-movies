import LoaderSpinner from "react-loader-spinner";
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.loaderBox}>
    <LoaderSpinner
      type="ThreeDots"
      color="pink"
      height={100}
      width={100}
      timeout={10000}
    />
  </div>
);

export default Loader;
