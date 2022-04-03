import React, {Component} from "react";
import SideMenu from "../includes/sideMenu";
import SideChats from "../includes/sideChats";

export  class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        };
    }
    changeSelected = (val) => {
        this.setState({selected: val})
    }

    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
                <div className={'layout-wrapper d-lg-flex'}>
                    <SideMenu changeSelected = {(val)=> {this.changeSelected(val)}} />
                    <SideChats selected={this.state.selected} />
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
export default Front;
