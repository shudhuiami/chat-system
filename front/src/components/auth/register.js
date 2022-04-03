import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {  NavLink} from 'react-router-dom'

/*IMAGES*/


export  class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className={'text-center mb-4'}>
                    <h4>Sign Up</h4>
                    <p className={'text-muted mb-4'}>Get your Chatify account now.</p>
                </div>
                    <div className={'card'}>
                        <div className="card-body p-4">
                            <div className={'p-3'}>
                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text border-light text-muted">
                                            <Icon icon="ant-design:mail-outlined" color="#9aa1b9" width="16" height="16" />
                                        </span>
                                            </div>
                                            <input type="email" placeholder="Enter your username" className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback">Username is mandatory.</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
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
                                    <div className="form-group mb-4">
                                        <label>Password</label>
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text border-light text-muted">
                                            <Icon icon="ant-design:lock-outlined" color="#9aa1b9" width="16" height="16" />
                                        </span>
                                            </div>
                                            <input type="password" placeholder="Enter your password" className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback">Password is mandatory.</div>
                                        </div>
                                    </div>
                                    <div className=" d-grid gap-2">
                                        <button className="btn btn-theme btn-block">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={'text-center mt-5'}>
                        <p>Already have an account ? <NavLink to={'/'}  className="font-weight-medium ">Sign in now</NavLink>
                        </p>
                    </div>
            </div>
        );
    }
}
export default Register