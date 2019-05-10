import React from 'react'
class ConditionalRending extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isLoggedIn) {
            return <h1>Loggedin</h1>;;
        }
        else {
            return <h1>Please Login</h1>;
        }
    }
}
export default ConditionalRending;