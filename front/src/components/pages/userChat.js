import React, {Component} from "react";
import {Icon} from "@iconify/react";
/*IMAGES*/
import DemoUser from '../../assets/images/demouser1.jpg'
import DemoUser2 from '../../assets/images/demouser2.jpg'
import User from '../../assets/images/user.png'

export  class UserChat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={'d-lg-flex user-chat '}>
               <div className={'w-100 overflow-hidden position-relative'}>

                   {/*Header*/}
                   <div className={'p-3 p-lg-4 border-bottom'}>
                        <div className={'row align-items-center'}>
                            <div className={'col-sm-4 col-8'}>
                                <div className={'media align-items-center'}>
                                    <div className={'d-block d-lg-none me-2'}>
                                        <a className={'user-chat-remove text-muted font-size-16 p-2'}>
                                            <Icon icon="ri:arrow-left-s-line" className={'nav-icon'}  width={'20'} height={'20'} />
                                        </a>
                                    </div>
                                    <div className={'me-3'}>
                                        <img src={DemoUser} alt=""
                                             className="rounded-circle avatar-xs"/>
                                    </div>
                                    <div  className="media-body overflow-hidden">
                                        <h5  className="font-size-16 mb-0 text-truncate">
                                            <a  className="text-reset user-profile-show">Doris Brown</a>
                                            <Icon icon="ri:record-circle-fill" className={' font-size-10 text-success d-inline-block ms-1'}  width={'10'} height={'10'} />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-sm-8 col-4'}>
                                <ul className={'list-inline user-chat-nav text-end mb-0'}>
                                    <li className={'list-inline-item'}>
                                        <button className={'btn'}>
                                            <Icon icon="ri:search-line"   width={'20'} height={'20'} />
                                        </button>
                                    </li>
                                    <li className={'list-inline-item'}>
                                        <button className={'btn'}>
                                            <Icon icon="ri:phone-line"   width={'20'} height={'20'} />
                                        </button>
                                    </li>
                                    <li className={'list-inline-item'}>
                                        <button className={'btn'}>
                                            <Icon icon="ri:vidicon-line"   width={'20'} height={'20'} />
                                        </button>
                                    </li>
                                    <li className={'list-inline-item'}>
                                        <button className={'btn'}>
                                            <Icon icon="ri:user-2-line"   width={'20'} height={'20'} />
                                        </button>
                                    </li>
                                    <li className={'list-inline-item'}>
                                        <button className={'btn'}>
                                            <Icon icon="ri:more-fill"   width={'20'} height={'20'} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>

                   {/*Chat conversation*/}
                   <div className={'chat-conversation p-3 p-lg-4'}>
                        <div className={'simplebar-content-wrapper'}>
                            <div className={'simplebar-content'}>

                                {/*Receive*/}
                                <div>
                                    <ul className={'list-unstyled mb-0'}>
                                        <li>
                                            <div className={'conversation-list message-highlight'}>
                                                <div className="chat-avatar">
                                                    <img src={DemoUser} alt=""/>
                                                </div>
                                                <div className={'user-chat-content'}>
                                                    <div className="ctext-wrap">
                                                        <div className={'ctext-wrap-content'}>
                                                            <div>
                                                                <div>
                                                                    <span> Good morning </span>
                                                                </div>
                                                            </div>
                                                            <p  className="chat-time mb-0">
                                                                <Icon icon="ri:time-line" className={'align-middle me-1'}  width={'14'} height={'14'} />
                                                                <span className="align-middle">10:00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div  className="conversation-name">Doris Brown</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/*Sent*/}
                                <div>
                                    <ul className={'list-unstyled mb-0'}>
                                        <li className={'right'}>
                                            <div className={'conversation-list message-highlight'}>
                                                <div className="chat-avatar">
                                                    <img src={User} alt=""/>
                                                </div>
                                                <div className={'user-chat-content'}>
                                                    <div className="ctext-wrap">
                                                        <div className={'ctext-wrap-content'}>
                                                            <div>
                                                                <div>
                                                                    <span> Good morning </span>
                                                                </div>
                                                            </div>
                                                            <p  className="chat-time mb-0">
                                                                <Icon icon="ri:time-line" className={'align-middle me-1'}  width={'14'} height={'14'} />
                                                                <span className="align-middle">10:00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div  className="conversation-name">Patricia Smith</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                   </div>

                   {/*Footer*/}
                   <div className={'room-footer'}>
                        <div className={'box-footer chat-input-section p-3 p-lg-4 border-top mb-0'}>
                            <textarea className={'form-control form-control-lg bg-light border-light rounded'} placeholder={'Type message'}></textarea>
                            <div className={'icon-textarea'}>
                                <div className={'svg-button'}>
                                    <button className={' btn btn-link text-decoration-none font-size-16'}>
                                        <Icon icon="ri:emotion-happy-line" className={'nav-icon'}  width={'20'} height={'20'} />
                                    </button>
                                </div>
                                <div className={'svg-button'}>
                                    <button className={' btn btn-link text-decoration-none font-size-16'}>
                                        <Icon icon="ri:attachment-line" className={'nav-icon'}  width={'20'} height={'20'} />
                                    </button>
                                </div>
                                <div>
                                    <button className={'btn btn-primary font-size-16 btn-lg chat-send send-disabled'}>
                                        <Icon icon="ri:send-plane-2-fill" className={'nav-icon'}  width={'20'} height={'20'} />
                                    </button>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}
export default UserChat