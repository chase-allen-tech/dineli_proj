import {Component} from "react";

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            leftTime:  24 * 3600 * 1000-1,
            timeInterval: 1000
        };
    }

    handleTime = () => {
        this.setState({
            leftTime: this.state.leftTime - this.state.timeInterval
        });
    }

    render() {
        setTimeout(this.handleTime, this.state.timeInterval);
        if (this.state.leftTime >= 0) {
            return (
                <div>
                    <button style={{width: 100, borderColor: "#03ffa4", backgroundColor:"#ffffff", color: "#03ffa4"}} className='d-font-bold d-text-24'>
                        {(new Date(this.state.leftTime)).toISOString().substr(11, 8)}
                    </button>
                </div>
            )
        } else {
            return <>
            </>
        }
    }
}