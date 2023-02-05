import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(searchTerm);
    };

    return (
        <div className="search-bar">
            <GoSearch className="search-icon-svg"/>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} placeholder="Search for a Recipe"/>
            </form>
        </div>
    );
};

export default SearchBar;