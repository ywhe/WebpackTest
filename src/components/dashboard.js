import React from 'react';
import Clock from './clock';
import ConditionalRending from './conditionalRending';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>this is home page</h1>
                <Clock interval="10"></Clock>
                <ConditionalRending isLoggedIn={true}></ConditionalRending>
            </div>
        );
    }
}
export default Home;