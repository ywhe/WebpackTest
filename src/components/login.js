import React from 'react';

class LoginBtn extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <button onClick={this.props.onClick}>Login</button>
        );
    }
}
class LogoutBtn extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <button onClick={this.props.onClick}>Logout</button>
        );
    }
}
class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <h2>Welcomeback!</h2>
                </div>);
        }
        else {
            return <h2 >Please login.</h2>;
        }
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn
            ? <LogoutBtn onClick={() => { this.handleLogoutClick(); }}></LogoutBtn>
            : <LoginBtn onClick={() => { this.handleLoginClick(); }}></LoginBtn>

        return (
            <div>
                <h1>Login Component</h1>
                <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
                {button}
            </div>
        );
    }
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }
    handleLogoutClick() {
        this.setState(() => {
            return { isLoggedIn: false };
        });
    }
}
export default Login;