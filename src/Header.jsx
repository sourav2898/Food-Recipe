import React from 'react';

const Header = (props) => {

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-1">
                    <span class="material-icons food">
                        fastfood
                    </span> Food Recipe
                </h1>

                <div className="input">
                    <input type="text"
                     placeholder="Search Your favourite dish recipe" 
                     className="form-control"
                     name="search"
                     value={props.search}
                     onChange = {props.onChange}
                     />
                    <div className="input-group-append">
                        <button className="btn btn-dark" onClick={props.onSearch}>Search Recipe</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;