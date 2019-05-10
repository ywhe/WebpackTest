import React from 'react'
import LoginPage from './loginPage';
import { stringify } from 'querystring';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            color: '',
            isStudent: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChagne = this.handleChagne.bind(this);
        this.ref = React.createRef();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChagne}></input>
                </label>
                <label>{this.state.name}</label><br />
                <label>
                    Pick you favorite color:
                    <select name="color" value={this.state.color} onChange={this.handleChagne} defaultValue="test">
                        <option value="none"></option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </label><br />
                <label>Is Student:
                    <input name="isStudent" type="checkbox" checked={this.state.isStudent} onChange={this.handleChagne} ></input>
                </label><br />
                <input type="text" ref={this.ref} defaultValue={this.state.name}></input>
                <input type="submit" value="Submit"></input>
                <input type="file"></input>
            </form>
        );
    }
    handleChagne(e) {
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        alert(stringify(this.state) + "&ref=" + this.ref.current.value);
        event.preventDefault();
    }
}
export default LoginForm;