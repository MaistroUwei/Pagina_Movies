import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
export const NavBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', {
            replace: true
        })

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">MovieApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/top10">Top 10</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                            <ul className='navbar-collapse justify conter-end'>
                                <Link 
                                    className="nav-link"
                                    to="/login"
                                    onClick={handleLogout}
                                >
                                    Logout    
                                </Link>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
