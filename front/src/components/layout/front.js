import React, {Component} from "react";


export  class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }
    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}
export default Front;
