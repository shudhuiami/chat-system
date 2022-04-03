import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/
import userImage from '../../assets/images/user.png'
import demoUser1 from '../../assets/images/demouser1.jpg'



export  class SideChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:1
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
                                <h4 className="mb-0">My Profile</h4>
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
                                <div className={'text-muted mb-4'}>
                                    <p >If several languages coalesce, the grammar of
                                        the resulting language is more simple and regular than that of
                                        the individual.</p>
                                </div>
                                <div className={'custom-accordion'}>
                                    <div className="custom-accordion-header">
                                        <div>
                                            <Icon icon="ri:user-2-line" className={'nav-icon'}  width={'18'} height={'18'} />
                                            <span>About</span>
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
                                            <Icon icon="ri:attachment-line" className={'nav-icon me-2 align-middle d-inline-block'}  width={'18'} height={'18'} />
                                            <span> Attached Files </span>
                                        </div>
                                        <div className={'arrow'}>
                                            <Icon icon="akar-icons:chevron-right" color="#a6b0cf" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="custom-accordion-body ">
                                        <div className={'each-attachment p-2  mb-2'}>
                                            <div className={'media align-items-center'}>
                                                <div className={'avatar-sm me-3'}>
                                                    <div className={'avatar-title bg-soft-primary text-primary rounded font-size-20'}>
                                                        <Icon icon="ri:file-text-fill" color="#a6b0cf" width="20" height="20" />
                                                    </div>
                                                </div>
                                                <div className="media-body" >
                                                    <div className="text-left">
                                                        <h5 className="font-size-14 mb-1"> Admin-A.zip </h5>
                                                        <p className="text-muted font-size-13 mb-0"> 12.5 MB </p>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <ul className="list-inline mb-0 font-size-18">
                                                        <li className="list-inline-item">
                                                            <a className="text-muted px-1">
                                                                <Icon icon="ri:download-2-line" color="#a6b0cf" width="18" height="18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'each-attachment p-2  mb-2'}>
                                            <div className={'media align-items-center'}>
                                                <div className={'avatar-sm me-3'}>
                                                    <div className={'avatar-title bg-soft-primary text-primary rounded font-size-20'}>
                                                        <Icon icon="ri:image-fill" color="#a6b0cf" width="20" height="20" />
                                                    </div>
                                                </div>
                                                <div className="media-body" >
                                                    <div className="text-left">
                                                        <h5 className="font-size-14 mb-1"> Image-1.jpg </h5>
                                                        <p className="text-muted font-size-13 mb-0"> 12.5 MB </p>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <ul className="list-inline mb-0 font-size-18">
                                                        <li className="list-inline-item">
                                                            <a className="text-muted px-1">
                                                                <Icon icon="ri:download-2-line" color="#a6b0cf" width="18" height="18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'each-attachment p-2  mb-2'}>
                                            <div className={'media align-items-center'}>
                                                <div className={'avatar-sm me-3'}>
                                                    <div className={'avatar-title bg-soft-primary text-primary rounded font-size-20'}>
                                                        <Icon icon="ri:file-text-fill" color="#a6b0cf" width="20" height="20" />
                                                    </div>
                                                </div>
                                                <div className="media-body" >
                                                    <div className="text-left">
                                                        <h5 className="font-size-14 mb-1"> Admin-A.zip </h5>
                                                        <p className="text-muted font-size-13 mb-0"> 12.5 MB </p>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <ul className="list-inline mb-0 font-size-18">
                                                        <li className="list-inline-item">
                                                            <a className="text-muted px-1">
                                                                <Icon icon="ri:download-2-line" color="#a6b0cf" width="18" height="18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'each-attachment p-2  mb-2'}>
                                            <div className={'media align-items-center'}>
                                                <div className={'avatar-sm me-3'}>
                                                    <div className={'avatar-title bg-soft-primary text-primary rounded font-size-20'}>
                                                        <Icon icon="ri:file-text-fill" color="#a6b0cf" width="20" height="20" />
                                                    </div>
                                                </div>
                                                <div className="media-body" >
                                                    <div className="text-left">
                                                        <h5 className="font-size-14 mb-1"> Admin-A.zip </h5>
                                                        <p className="text-muted font-size-13 mb-0"> 12.5 MB </p>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <ul className="list-inline mb-0 font-size-18">
                                                        <li className="list-inline-item">
                                                            <a className="text-muted px-1">
                                                                <Icon icon="ri:download-2-line" color="#a6b0cf" width="18" height="18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 2 ? 'active' : '')}>
                        <div>
                            <div className={'px-3 pt-3'}>
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
                                <div className={'px-4 pb-4'}>
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
                                    <h4 className={'mb-3 px-3 font-size-16'}>Recent</h4>
                                    <div className={'chat-message-list'}>
                                        <div className={'simplebar-content-wrapper'}>
                                            <ul className={'chat-user-list'}>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
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
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 3 ? 'active' : '')}>
                        <div>
                            <div className={'px-3 pt-3'}>
                                <h4 className="mb-4">Chats</h4>
                                <div className={'search-box chat-search-box mb-4'}>
                                    <div className={'input-group '}>
                                        <div  className={'input-group-prepend'}>
                                            <button  type="button" className="btn btn-link text-muted pr-1 text-decoration-none">
                                                <Icon icon="ri:search-line" className={'search-icon font-size-18'}  width={'18'} height={'18'} />
                                            </button>
                                        </div>
                                        <input type="text" placeholder="Search messages or users" className="form-control bg-light" />

                                    </div>
                                </div>
                                <div className={'px-2'}>
                                    <div className={'chat-group-list'}>
                                        <div className={'simplebar-content-wrapper'}>
                                            <ul className={'chat-list'}>
                                                <li>
                                                    <a >
                                                        <div className="media align-items-center">
                                                            <div className={'chat-user-img me-3'}>
                                                                <div className="avatar-xs">
                                                                    <span className="avatar-title ">A</span>
                                                                </div>
                                                            </div>
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-0"> #Aeneral </h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <div className="media align-items-center">
                                                            <div className={'chat-user-img me-3'}>
                                                                <div className="avatar-xs">
                                                                    <span className="avatar-title ">G</span>
                                                                </div>
                                                            </div>
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-0"> #General </h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'tab-pane '+ (this.state.tab === 4 ? 'active' : '')}>
                        <div>
                            <div className={'px-3 pt-3'}>
                                <h4 className="mb-4">Chats</h4>
                                <div className={'search-box chat-search-box mb-4'}>
                                    <div className={'input-group '}>
                                        <div  className={'input-group-prepend'}>
                                            <button  type="button" className="btn btn-link text-muted pr-1 text-decoration-none">
                                                <Icon icon="ri:search-line" className={'search-icon font-size-18'}  width={'18'} height={'18'} />
                                            </button>
                                        </div>
                                        <input type="text" placeholder="Search users..." className="form-control bg-light" />

                                    </div>
                                </div>
                                <div className={'px-2'}>
                                    <div className={'chat-contact-list'}>
                                        <div className={'simplebar-content-wrapper'}>
                                            <div className={'each-word'}>
                                                <div className="p-3 font-weight-bold text-primary"> A</div>
                                                <ul className={'contact-list'}>
                                                    <li>
                                                        <a>
                                                            <div className="media align-items-center">
                                                                <div className="media-body">
                                                                    <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                                                                </div>
                                                                <div className="btn-group">
                                                                    <button aria-haspopup="true" aria-expanded="false" type="button" className="btn  btn-white text-muted p-0">
                                                                        <Icon icon="ri:more-2-fill" className={'nav-icon'}  width={'20'} height={'20'} />
                                                                    </button>

                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
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