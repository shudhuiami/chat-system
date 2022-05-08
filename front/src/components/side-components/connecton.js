import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";

/*IMAGES*/
import userImage from '../../assets/images/user.png'
import demoUser1 from "../../assets/images/demouser1.jpg";

export class Connection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.GetConnections()
    }

    ConnectionsNameFirstWord(data) {
        return data.charAt(0)
    }

    GetConnections = () => {
        try {
            let result = fetch('http://localhost:3030/app/v1/users/connections/all', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(this.state.param)
            }).then(response => response.json())
                .then(data => {
                    if (data.status === 300) {
                        this.setState({users: data.users})
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <div className={'px-3 pt-3'}>
                    <h4 className="mb-4">Connections</h4>
                    <div className={'search-box chat-search-box mb-4'}>
                        <div className={'input-group '}>
                            <div className={'input-group-prepend'}>
                                <button type="button" className="btn btn-link text-muted pr-1 text-decoration-none">
                                    <Icon icon="ri:search-line" className={'search-icon font-size-18'} width={'18'}
                                          height={'18'}/>
                                </button>
                            </div>
                            <input type="text" placeholder="Search  connections" className="form-control bg-light"/>
                        </div>
                    </div>
                    <div className={'px-2'}>
                        <div className={'chat-group-list'}>
                            <div className={'simplebar-content-wrapper'}>
                                {this.state.users.length > 0 ? (
                                    <ul className={'chat-list'}>
                                        {this.state.users.map((v, i) => {
                                            return <li key={i}>
                                                <a>
                                                    <div className="media align-items-center">
                                                        <div className={'chat-user-img me-3'}>
                                                            <div className="avatar-xs">
                                                                <span
                                                                    className="avatar-title ">{this.ConnectionsNameFirstWord(v.name)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-14 mb-0"> {v.name} </h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        })}

                                    </ul>
                                ) : (
                                    <ul className={'chat-list'}>
                                        <li>
                                            <a>
                                                <div className="media align-items-center">
                                                    <div className={'chat-user-img me-3'}>
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title ">N</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body overflow-hidden">
                                                        <h5 className="text-truncate font-size-14 mb-0">No connection
                                                            found </h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connection