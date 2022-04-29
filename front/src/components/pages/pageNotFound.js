import React, {Component} from "react";
import {  NavLink} from 'react-router-dom'

/*IMAGES*/


export  class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className={'pageNotFound'}>
                    <h1>404!</h1>
                    <NavLink to={'/'}>Back to Login</NavLink>
                </div>
            </div>
        );
    }
}
export default PageNotFound