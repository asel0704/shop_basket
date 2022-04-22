import React from "react";
import {Button} from "@mui/material";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: null
        }
    }

    interval = null

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    startCountdown = () => {
        clearInterval(this.interval)
        this.setState({
            count: 60
        })
        this.interval = setInterval(() => {
            console.log(this.state.count)
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            } else {
                clearInterval(this.interval)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                <Button onClick={this.startCountdown}>Start Countdown</Button>
                {this.state?.count}
                <br />
            </div>

        )
    }
}
