import { useState, useRef, useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory, useLocation} from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchMovie.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as api from '../../Service/Service-api';
import infiniteScroll from '../../Service/infinite-scroll-service';
import Loader from '../Loader/Loader';
import NoImage from '../../images/no-poster-s.jpg'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

function SearchMovie() {
    const history = useHistory();
    const location = useLocation();
    const { url } = useRouteMatch();
    const [inputQuery, setInputQuery] = useState('');
    const [searchMovieArr, setSearchMovieArr] = useState([]);
    const [totalMovie, setTotalMovie] = useState(0);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');

    const inputRef = useRef();

    useEffect(() => {

        const newQuery = location.search.slice(7, location.search.length)

        async function fetchData() {
            if (!location.search) return;
            setStatus('pending');
            let newRequest;
            try {
                newRequest = await api.getMovie(newQuery, 1);
                // newRequest = await movieApiService.fetchMovie(newQuery, 1);
                
                setSearchMovieArr([...newRequest.data.results]);
                setTotalMovie(newRequest.data.total_results);
                setStatus(() => {
                    return (
                        newRequest.data.results === 0 ?
                            'rejected' :
                            'resolved'
                    )
                });
            }
            catch (error) {
                console.log('Error: request failed');
                return setStatus('failed')
            };
        };

        fetchData();
    }, [location, history]);

    const handleInputChange = e => setInputQuery(e.currentTarget.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (inputQuery.trim() === '') {
            toast.warn('Введи что-то!', {
                autoClose: 2000,
                theme: "colored",
                icon: false,
                }
            );
            return;
        };
        // setSearchQuery(inputQuery);
        history.push({
                    search: `query=${inputQuery}`,
                })
        inputRef.current.placeholder = inputQuery;
        setInputQuery('');
    };

           // подгрузку последующих страниц, кроме первой

    useEffect(() => {
        if (page === 1) return;
        const newQuery = location.search.slice(7, location.search.length)
        async function nextFetch() {
            let newRequest;
            try {
                newRequest = await api.getMovie(newQuery, page);
                if (newRequest.data.results.length === 0) return;
                setSearchMovieArr(prevState => [...prevState, ...newRequest.data.results]);
                setTotalMovie(newRequest.data.total_results);
            }
            catch (error) {
                console.log('Error: request failed');
                return setStatus('failed')
            };       
        };
        nextFetch();
    }, [page, location]);

    // бесконечный скрол

    useEffect(() => {
        infiniteScroll(searchMovieArr, 600, 0.2, () => setPage(prevState => prevState + 1));
    }, [searchMovieArr]);

    return (
    <>
        <div className={s.Searchbar} >
            <span className={s.SearchTitle}>Search:</span>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <ImSearch />
                </button>
                <label >
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        name="searchInput"
                        ref={inputRef}
                        placeholder="Type movie name"
                        value={inputQuery}
                        onChange={handleInputChange}
                        pattern="^[0-9a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Поисковое слово может состоять только из букв, апострофа, тире, цифр и пробелов."
                    // required
                    />
                </label>
            </form>
        </div>
        
        {(status === 'pending') && <Loader />}

        {(status === 'rejected') && <h2 className="galleryTitle">По запросу ничего не найдено</h2>}
        
        {(status === 'failed') && <h2 className="galleryTitle">Error: request failed. Нет соединения с интернетом или сервером</h2>}
        
        {(status === 'resolved' && location.search) && (
            <>
                <ul id="search-gallery" className={s.SearchList}>
                    {searchMovieArr.map(item => {
                        const { id, backdrop_path, title,  vote_average } = item;
                        return (
                            <li key={id}  id={id}>
                                <Link
                                    to={{
                                        pathname: `${url}/${id}`,
                                        state: { from: location },
                                    }}   
                                    className={s.SearchListItem} >
                                {backdrop_path && <img src={`${BASE_IMG_URL}${backdrop_path}`} alt={title} className={s.SearchListItemImage} />}
                                {!backdrop_path && <img src={NoImage} alt="NoImage" className={s.SearchListItemImage} />}
                                    <span className={s.SearchedMovieTitle}>{title}</span>
                                    <span className={s.SearchedMovieTitle}>Raiting: {vote_average}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </> 
            )}
            
        {((page * 20 >= totalMovie) && (status === 'resolved')) && <h2 className="galleryTitle">Запрос успешно выполнен</h2>}

        <ToastContainer/>
    </>
        
    )
};
 
SearchMovie.propTypes = {
    searchQuery: PropTypes.string,
};

export default SearchMovie;