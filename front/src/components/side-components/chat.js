import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/
import userImage from '../../assets/images/user.png'
import demoUser1 from "../../assets/images/demouser1.jpg";

export  class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className={'px-4 pt-3'}>
                    <h4 className="mb-4">Chats</h4>
                    <div className={'search-box chat-search-box mb-4'}>
                        <div className={'input-group '}>
                            <div  className={'input-group-prepend'}>
                                <button  type="button" className="btn btn-link text-muted pr-1 text-decoration-none">
                                    <Icon icon="ri:search-line" className={'search-icon font-size-18'}  width={'18'} height={'18'} />
                                </button>
                            </div>
                            <input type="text" placeholder="Search messages or users" className="form-control bg-light" />
                            <div  className={'input-group-append'}>
                                <button  type="button" className="btn btn-link text-muted pr-1 text-decoration-none">
                                    <Icon icon="ri:user-add-line" className={'search-icon font-size-18'}  width={'18'} height={'18'} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className={' pb-4'}>
                        <div className={'active-users'}>
                            <div className="each-user">
                                <div className={'avatar-xs mx-auto d-block chat-user-img online'}>
                                    <img src={demoUser1} alt="" className={'img-fluid rounded-circle'}/>
                                    <span className={'user-status'}></span>
                                </div>
                                <div className={'font-size-13 text-truncate mt-3 mb-1'}>Doris</div>
                            </div>
                            <div className="each-user">
                                <div className={'avatar-xs mx-auto d-block chat-user-img online'}>
                                    <img src={demoUser1} alt="" className={'img-fluid rounded-circle'}/>
                                    <span className={'user-status'}></span>
                                </div>
                                <div className={'font-size-13 text-truncate mt-3 mb-1'}>Pattrik</div>
                            </div>
                            <div className="each-user">
                                <div className={'avatar-xs mx-auto d-block chat-user-img online'}>
                                    <img src={demoUser1} alt="" className={'img-fluid rounded-circle'}/>
                                    <span className={'user-status'}></span>
                                </div>
                                <div className={'font-size-13 text-truncate mt-3 mb-1'}>Steve</div>
                            </div>
                            <div className="each-user">
                                <div className={'avatar-xs mx-auto d-block chat-user-img online'}>
                                    <img src={demoUser1} alt="" className={'img-fluid rounded-circle'}/>
                                    <span className={'user-status'}></span>
                                </div>
                                <div className={'font-size-13 text-truncate mt-3 mb-1'}>Emma</div>
                            </div>
                        </div>
                    </div>
                    <div className={'px-2'}>
                        <h4 className={'mb-3  font-size-16'}>Recent</h4>
                        <div className={'chat-message-list'}>
                            <div className={'simplebar-content-wrapper'}>
                                <ul className={'chat-user-list'}>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={demoUser1} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> Patrick Hendricks </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={userImage} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> John Doe </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={demoUser1} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> Patrick Hendricks </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={userImage} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> John Doe </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={demoUser1} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> Patrick Hendricks </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'chat'} >
                                            <div className="media">
                                                <div className={'chat-user-img online align-self-center me-3'}>
                                                    <div>
                                                        <img src={userImage} className={'rounded-circle avatar-xs'} alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>

                                                <div className={'media-body overflow-hidden'}>
                                                    <h5 className={'text-truncate font-size-15 mb-1'}> John Doe </h5>
                                                    <p className="chat-user-message text-truncate mb-0"> Hey! there I'm available </p>
                                                </div>
                                                <div  className="font-size-11 text-truncate">05 min</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChatList