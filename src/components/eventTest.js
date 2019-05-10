import React from 'react';
class ActionLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("The link is clicked");
    }
    render() {
        return <a href="#" onClick={this.handleClick} >{this.props.children}</a>
    }
}


class EventTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handlerBtnClick1 = this.handlerBtnClick1.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Event Test</h1>
                <ActionLink>ActionLink</ActionLink><br></br>
                <button onClick={this.handlerBtnClick1}>Button1: {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <button onClick={this.handlerBtnClick2}>Button2:{this.state.isToggleOn ? 'On' : 'Off'}</button>
                <button onClick={(e) => { this.handleClick3(e); }}>Button3:{this.state.isToggleOn ? "on" : "off"}</button>
                <button onClick={(e) => { this.paramBtnClick(13, e); }}>PassParams</button>
            </div>
        );
    }
    paramBtnClick(id, e) {
        console.log("isToggleOn:" + this.state.isToggleOn);
        console.log("the param is " + id.toString());
    }
    handlerBtnClick2 = (e) => {
        this.setState((s, p) => {
            return { isToggleOn: !s.isToggleOn };
        })
    }
    handlerBtnClick1(e) {
        this.setState((s, p) => {
            return { isToggleOn: !s.isToggleOn };
        })
    }
    handleClick3(e) {
        this.setState(s => ({ isToggleOn: !s.isToggleOn }));
    }
}
export default EventTest;