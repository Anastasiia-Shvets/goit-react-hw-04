import { useState } from "react";
import toast from "react-hot-toast";
import style from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            return toast.error('Please enter correct value.');
        }
        onSubmit(query);
        setQuery('');
    }
    return (
        <header>
            <form onSubmit={handleSubmit} className={style.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    className={style.input}
                />
                <button type="submit" className={style.btn} >Search</button>
            </form>
        </header>
    );
};
export default SearchBar;