import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/
import userImage from '../../assets/images/user.png'
import demoUser1 from '../../assets/images/demouser1.jpg'
import Profile from "././../side-components/profile";
import ChatList from "../side-components/chat";
import Connection from "../side-components/connecton";



export  class SideChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:2
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({tab:nextProps.selected})
    }

    componentDidMount() { }

    render() {
        return (
            <div className={'chat-leftsidebar mr-lg-1'}>
                <div className="tab-content">
                    <div className={'tab-pane '+ (this.state.tab === 1 ? 'active' : '')}>
                        <Profile />
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 2 ? 'active' : '')}>
                        <ChatList />
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 3 ? 'active' : '')}>
                        <Connection />
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 5 ? 'active' : '')}>
                        <div>
                            <div className={'px-4 pt-4'}>
                                <div className="user-chat-nav float-end">
                                    <div className={'dropdown b-dropdown btn-group'}>
                                        <button aria-haspopup="true" aria-expanded="false" type="button"
                                                className="btn  btn-white font-size-18 text-muted p-0">
                                            <Icon icon="ri:more-2-fill" className={'nav-icon'}  width={'20'} height={'20'} />
                                        </button>
                                    </div>
                                </div>
                                <h4 className="mb-0">Settings</h4>
                            </div>
                            <div className={'text-center p-4 border-bottom'}>
                                <div className={'mb-4 profile-user'}>
                                    <img src={userImage} alt="" className={'rounded-circle avatar-lg img-thumbnail'}/>
                                    <button type="button"className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <Icon icon="ri:pencil-fill" className={'nav-icon'}  width={'20'} height={'20'} />
                                    </button>
                                </div>
                                <h5 className="font-size-16 mb-1 text-truncate"> Patricia Smith </h5>
                                <p className="text-muted text-truncate mb-1">
                                    <Icon icon="ri:record-circle-fill" className={'nav-icon font-size-10 text-success mr-1 d-inline-block'}  width={'10'} height={'10'} /> &nbsp;
                                    Active
                                </p>
                            </div>
                            <div className={'p-4 user-profile-desc'}>
                                <div className={'custom-accordion'}>
                                    <div className="custom-accordion-header">
                                        <div>
                                            <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'18'} height={'18'} />
                                            <span>Personal Information</span>
                                        </div>
                                        <div className={'arrow'}>
                                            <Icon icon="akar-icons:chevron-right" color="#a6b0cf" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="custom-accordion-body">
                                        <div>
                                            <p className="text-muted mb-1"> Name </p>
                                            <h5 className="font-size-14"> Patricia Smith </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Email </p>
                                            <h5 className="font-size-14"> adc@123.com </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Time </p>
                                            <h5 className="font-size-14">11:40 AM</h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Location </p>
                                            <h5 className="font-size-14">California, USA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={'custom-accordion'}>
                                    <div className="custom-accordion-header">
                                        <div>
                                            <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'18'} height={'18'} />
                                            <span>Privacy</span>
                                        </div>
                                        <div className={'arrow'}>
                                            <Icon icon="akar-icons:chevron-right" color="#a6b0cf" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="custom-accordion-body">
                                        <div>
                                            <p className="text-muted mb-1"> Name </p>
                                            <h5 className="font-size-14"> Patricia Smith </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Email </p>
                                            <h5 className="font-size-14"> adc@123.com </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Time </p>
                                            <h5 className="font-size-14">11:40 AM</h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Location </p>
                                            <h5 className="font-size-14">California, USA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={'custom-accordion'}>
                                    <div className="custom-accordion-header">
                                        <div>
                                            <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'18'} height={'18'} />
                                            <span>Security</span>
                                        </div>
                                        <div className={'arrow'}>
                                            <Icon icon="akar-icons:chevron-right" color="#a6b0cf" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="custom-accordion-body">
                                        <div>
                                            <p className="text-muted mb-1"> Name </p>
                                            <h5 className="font-size-14"> Patricia Smith </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Email </p>
                                            <h5 className="font-size-14"> adc@123.com </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Time </p>
                                            <h5 className="font-size-14">11:40 AM</h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Location </p>
                                            <h5 className="font-size-14">California, USA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={'custom-accordion'}>
                                    <div className="custom-accordion-header">
                                        <div>
                                            <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'18'} height={'18'} />
                                            <span>Help</span>
                                        </div>
                                        <div className={'arrow'}>
                                            <Icon icon="akar-icons:chevron-right" color="#a6b0cf" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="custom-accordion-body">
                                        <div>
                                            <p className="text-muted mb-1"> Name </p>
                                            <h5 className="font-size-14"> Patricia Smith </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Email </p>
                                            <h5 className="font-size-14"> adc@123.com </h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Time </p>
                                            <h5 className="font-size-14">11:40 AM</h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted mb-1"> Location </p>
                                            <h5 className="font-size-14">California, USA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SideChats