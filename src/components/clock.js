import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), total: 0 };
        this.tick.bind(this);
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    tick() {
        this.setState((s, p) => ({
            date: new Date(),
            total: s.total + parseInt(p.interval)
        }));
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <h1>Clock Component</h1>
                <h2>Current Time:{this.state.date.toLocaleTimeString()}</h2>
                <h3>Total: {this.state.total}</h3>
            </div>
        );
    }
}
export default Clock;