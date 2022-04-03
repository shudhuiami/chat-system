import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {  NavLink} from 'react-router-dom'
import config from "../../config";
import $ from 'jquery'

/*IMAGES*/


export  class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            successMsg:false,
            param: {
                name:'',
                email:'',
                username:'',
                password:'',
            }
        };
    }

    changeHandler = (event, type) => {
        let param = this.state.param;
        if(type === 'name'){
            param.name = event.target.value;
        }else if(type === 'username') {
            param.username = event.target.value;
        }else if(type === 'email') {
            param.email = event.target.value;
        }else if(type === 'password') {
            param.password = event.target.value;
        }
        this.setState({
            param: param
        })
    }


     Register = (event) => {
         this.setState({isLoaded:true})
        event.preventDefault()
        try{
            let result  =  fetch('http://localhost:3030/app/v1/secure/registration', {
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state.param)
            }) .then(response => response.json())
                .then(data => {
                    if(data.status === 200){
                        this.setState({successMsg:true})
                        this.setState({isLoaded:false})
                        let param = {
                            name:'',
                            email:'',
                            username:'',
                            password:'',
                        }
                        this.setState({param:param})
                    }else{
                        this.setState({isLoaded:false})
                    }
                });
        } catch (error){
            console.log(error)
        }
    }

    ErrorHandler = (error) => {
        error.forEach((v, i) =>{
            $('[name=' + i + ']').closest('.form-group').find('.invalid-feedback').html(v);
        })

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
                                <form onSubmit={this.Register}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text border-light text-muted">
                                                    <Icon icon="ant-design:user-outlined" color="#9aa1b9" width="16" height="16" />
                                                </span>
                                            </div>
                                            <input type="text" value={this.state.name}  onChange={(e) => this.changeHandler(e, 'name')} placeholder="Enter your name" className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback d-block text-danger"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text border-light text-muted">
                                                    <Icon icon="ant-design:user-outlined" color="#9aa1b9" width="16" height="16" />
                                                </span>
                                            </div>
                                            <input type="text" value={this.state.username}  onChange={(e) => this.changeHandler(e, 'username')} placeholder="Enter your username" className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback d-block text-danger"></div>
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
                                            <input type="email" placeholder="Enter your email"  value={this.state.email} onChange={(e) => this.changeHandler(e, 'email')} className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback d-block text-danger"></div>
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
                                            <input type="password" placeholder="Enter your password"  value={this.state.password} onChange={(e) => this.changeHandler(e, 'password')} className="form-control bg-soft-light border-light"/>
                                            <div className="invalid-feedback d-block text-danger"></div>
                                        </div>
                                    </div>
                                    <div className=" d-grid gap-2">
                                        <button className="btn btn-theme btn-block" disabled={this.state.isLoaded === true}>
                                            {this.state.isLoaded  === false? `Sign up` :   <Icon icon="eos-icons:loading" color="#a6b0cf" width="20" height="20" />}
                                        </button>
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