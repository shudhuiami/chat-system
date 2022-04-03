import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/
import userImage from '../../assets/images/user.png'

export  class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:1
        };
    }
     handleClick (val)  {
         this.props.changeSelected(val);
         this.setState({tab:val})
    }
    render() {
        return (
            <div className={'side-menu flex-lg-column mr-lg-1'}>
                <div className="navbar-brand-box">
                    <NavLink to={'dashboard'} activeClassName={'active'} aria-current="page" className="logo logo-light ">
                        <span  className="logo-sm">
                            <Icon icon="bi:chat-quote" color="#7269ef" width="30" height="30" />
                        </span>
                    </NavLink>
                </div>
                <div className={'flex-lg-column my-auto'}>
                    <ul className={'nav nav-pills side-menu-nav justify-content-center'}>
                        <li className={'nav-item '}>
                            <a  className={'nav-link'+ (this.state.tab === 1 ? ' active' : '')} onClick={() => this.handleClick(1)}>
                                <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'20'} height={'20'} />
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link'+ (this.state.tab === 2 ? ' active' : '')} onClick={() => this.handleClick(2)}>
                                <Icon icon="ri:message-3-line" className={'nav-icon'}  width={'20'} height={'20'} />
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link' + (this.state.tab === 3 ? ' active' : '')} onClick={() => this.handleClick(3)}>
                                <Icon icon="ri:group-line" className={'nav-icon'} width={'20'} height={'20'} />
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link' + (this.state.tab === 4 ? ' active' : '')} onClick={() => this.handleClick(4)}>
                                <Icon icon="ri:contacts-line" className={'nav-icon'} width={'20'} height={'20'} />
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link' + (this.state.tab === 5 ? ' active' : '')} onClick={() => this.handleClick(5)}>
                                <Icon icon="ri:settings-2-line" className={'nav-icon'} width={'20'} height={'20'} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'flex-lg-column d-none d-lg-block'}>
                    <ul className={'nav side-menu-nav justify-content-center'}>
                        <li className={'nav-item'}>
                            <a className={'nav-link'}>
                                <Icon icon="ri:sun-line" className={'nav-icon'}  width={'20'} height={'20'} />
                            </a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link has-image'}>
                                <span className="user-image">
                                    <img src={userImage} alt=""/>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default SideMenu