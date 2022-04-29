import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/


export  class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div>
                    <div className={'text-center mb-4'}>
                        <h4>Reset Password</h4>
                        <p className={'text-muted mb-4'}>Reset Password With Chatify.</p>
                    </div>
                    <div className={'card'}>
                        <div className="card-body p-4">
                            <div className={'p-3'}>
                                <form>
                                    <div className="form-group mb-4">
                                        <label>Email</label>
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text border-light text-muted">
                                            <Icon icon="ant-design:mail-outlined" color="#9aa1b9" width="16" height="16" />
                                        </span>
                                            </div>
                                            <input type="email" placeholder="Enter your email" className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback">Email is mandatory.</div>
                                        </div>
                                    </div>
                                    <div className=" d-grid gap-2">
                                        <button className="btn btn-theme btn-block">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={'text-center mt-5'}>
                        <p> Remember it ? <NavLink to={'/'}  className="font-weight-medium ">Sign in now</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Reset