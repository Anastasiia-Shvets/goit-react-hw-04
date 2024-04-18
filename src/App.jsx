import './App.css'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import { getGallery } from './API/apiServer';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMore/LoadMore';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urls, setUrls] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) return;
    const fatchData = async () => {
      setIsLoading(true)
      try {
        const { results, total_pages } = await getGallery(query, page)
        console.log(results, total_pages);
        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => ([...prevImages, ...results]));
        setShowBtn(total_pages && total_pages !== page)
      } catch (error) {
        setError(error)
        toast.error("This didn't work.");
      } finally {
        setIsLoading(false)
      }
    };
    fatchData()
  }, [query, page])


  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setShowBtn(false);
  };

  const onLoadeMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  const openModal = (urls, alt) => {
    setShowModal(true);
    setAlt(alt);
    setUrls(urls);
  }

  const closeModal = () => {
    setShowModal(false);
    setAlt('');
    setUrls('');
  }

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {!images && !isEmpty && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onLoadeMore={onLoadeMore} disabled={isLoading} />}
      <ImageModal urls={urls} alt={alt} modalIsOpen={showModal} closeModal={closeModal} />
    </>
  )
}

export default App
