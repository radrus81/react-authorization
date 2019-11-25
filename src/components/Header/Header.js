import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import './Header.scss'


const Header = ({ isAuthenticated, login, fio, logout, history }) => {

    return (
        <header>
            <div className="header wrap">
                {isAuthenticated ?
                    <>
                        <NavLink
                            className="mainLink"
                            to={'/'}
                            activeClassName="active">
                            <h1>App name</h1>
                        </NavLink>
                        <div className="header__infoUser">
                            <label>login: {login}</label>
                            <label>userName: {fio}</label>
                            <button className="btn-primary"
                                onClick={() => {
                                    history.push('/')
                                    logout()
                                }}>Выход</button>
                        </div>
                    </>
                    : <h1>App name</h1>}

            </div>
        </header>
    )
}

export default withRouter(Header)