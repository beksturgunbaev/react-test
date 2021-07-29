import './styles/header.css';
import { Menu } from './Menu'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from '../About/About';
import Products from '../Produts/Products';
import Contacts from '../Contacts/Contacts';
import Home from '../Home/Home';
import { Logo } from './Logo';

export const Header = () => {
    return (
        <>
            <Router>
                <header className="header">
                    <div className="header-container">
                        <div>
                            < Logo />
                        </div>
                        <ul>
                            < Menu menu='Home' link='/' />
                            < Menu menu='About us' link='/about' />
                            < Menu menu='Products' link='/products' />
                            < Menu menu='Contacts' link='/contacts' />
                        </ul>
                    </div>
                </header>
                <Switch>
                    <Route path='/about'>
                        < About />
                    </Route>
                    <Route path='/products'>
                        < Products />
                    </Route>
                    <Route path='/contacts'>
                        < Contacts />
                    </Route>
                    <Route path='/'>
                        < Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}