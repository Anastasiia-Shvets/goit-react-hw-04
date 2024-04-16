import './App.css'
import { useEffect, useState } from 'react'
import { getGalerry } from './apiServer/apiServer'
import SearchBar from './components/SearchBar/SearchBar'


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fatchData = async () => {
      setIsLoading(true)
      try {
        const data = await getGalerry(query, page)
        console.log(data);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    };
    fatchData()
  }, [query, page])


  const onHandleSubmit = value => {
    setQuery(value);
  }
  
  return (
    <>
      <SearchBar onSubmit={onHandleSubmit}/>
      
    </>
  )
}

export default App
