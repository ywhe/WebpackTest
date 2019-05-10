import React from 'react';
import ReactDOM from 'react-dom'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './dashboard'
import About from './about';
import Inbox from './inbox';
import Message from './message';
import Clock from './clock';
import EventTest from './eventTest'
import LoginPage from '../page/loginPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <nav >
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/inbox'>Inbox</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <a href='#/clock'>Aclock</a><br>
                </br>
                <Link to='/clock'>Clock</Link>
                <Route path="/clock/:interval" component={Clock}></Route>
                <Route exact path='/' component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/inbox" component={Inbox}></Route>
                <Route path="/inbox/message/:id" component={Message}></Route>

                <Route path="/login" component={LoginPage}></Route>
                <EventTest></EventTest>
            </div>
        );
    }
}
export default App;