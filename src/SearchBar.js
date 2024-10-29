import React from 'react';

function SearchBar({ onSearch }) {
    return (
        <nav>
            <form>
                <input
                    type="text"
                    placeholder="搜索博客..."
                    onInput={(event) => onSearch(event.target.value)}
                />
            </form>
        </nav>
    );
}

export default SearchBar;