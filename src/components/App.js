import React from 'react';
import Header from "./Header";
import Content from "./Content";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            randomNumber: 0
        };
    };

    forceRandom = () => {
        this.setState({
            randomNumber: Math.round(Math.random()*1000)
        });
    };

    toggleLeftSidebar = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    };

    getRandomNumber = () => {
        this.forceRandom();
    };

    stopRandom = () => {
        clearInterval(this.timerID);
    };

    componentDidMount() {
        this.timerID = setInterval(this.forceRandom, 2500);
    };

    render() {
        const {toggle, randomNumber}=this.state;

        return (
            <div className='wrapper'>
                <div className='content'>
                    <Header
                        toggle={toggle}
                        toggleLeftSidebar={this.toggleLeftSidebar}
                    />
                    <Content
                        toggle={toggle}
                        randomNumber={randomNumber}
                        getRandomNumber={this.getRandomNumber}
                        stopRandom={this.stopRandom}
                    />
                </div>
                <div className="text-muted footer">
                    <h5 className='font-weight-bold'>Footer</h5>
                </div>
            </div>
        )
    }
}