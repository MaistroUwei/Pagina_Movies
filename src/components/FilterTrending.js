import React from 'react'

export const FilterTrending = ({filter, setFilter}) => {

    const changeFilter = (interFilter) => {
        if (interFilter === filter) {
            return;
        } else setFilter(interFilter);
    };

    return (
        <div className="dropdown" style={{marginLeft: "1400px"}}> 
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" onClick={() => changeFilter("all")}>Todos</a></li>
                <li><a className="dropdown-item" onClick={() => changeFilter("movie")}>Películas</a></li>
                <li><a className="dropdown-item" onClick={() => changeFilter("tv")}>Series</a></li>
                {/*En caso de querer agregar más cosas:
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>*/}
            </ul>
        </div>
    )
}
