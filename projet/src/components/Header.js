import React from 'react';
import './Header.css';

const Header = ({setNameSearch}) => {
    return (
        <div>
<div className="header">
                <h1 className="title">Movie-search</h1>

                {/*Search form*/}

                <div className="search">
                    <form className="search-form" >
                        <label
                            htmlFor="query"
                            className="name"
                        >
                        </label>
                        <input
                            type="text"
                            name="query"
                            placeholder="type movie name to search"
                            onChange={(e) => setNameSearch(e.target.value)}
                            
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            
             
        

        </div>

    )
}

export default Header;