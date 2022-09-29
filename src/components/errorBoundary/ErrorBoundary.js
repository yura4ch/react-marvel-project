import { Component } from "react/cjs/react.development";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(err, info) {
        console.log(err, info);
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return <h2> Щось пішло не так </h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary; 
