import React, {Component} from "react";
import {Tooltip as STooltip} from "reactstrap";

export default class TooltipIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tooltipOpen: false
        }
    }

    toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen})

    render() {

        let width = this.props.width;
        let content = this.props.content;
        let img = this.props.img;

        return <>
            <span id="DisabledAutoHideExample">
                <img style={{pointerEvents: 'none'}} width={width}
                     src={img}
                     alt={''}/>
            </span>
            <STooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false}
                      target="DisabledAutoHideExample" toggle={this.toggle} id={'test'}
                      style={{color: "#000000", backgroundColor: "#ffffff", opacity: 1}}>
                {content}
            </STooltip>

        </>


    }


}