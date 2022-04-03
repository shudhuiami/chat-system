import React, {Component} from "react";
import { Icon } from '@iconify/react';

export  class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className={'Auth '}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className={'col-md-8 col-lg-6 col-xl-5'}>
                                <div className="text-center ">
                                    <a  className={'auth-logo mb-5 d-block router-link-active'}>
                                        <Icon icon="bi:chat-quote" color="#7269ef" width="40" height="40" />
                                        &nbsp;
                                        <span className={'title'}>Chatify</span>
                                    </a>
                                </div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Auth;