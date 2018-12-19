import React from 'react';
import InstrumentsTable from "./InstrumentsTable";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tradingHoursList: [],
            openList: [],
            onlyOpen: false,
            currentTime: null
        };
    };

    getTime = () => {
        this.setState({
            currentTime: +new Date
        });
    };

    onChange = () => {
        this.setState(prevState => ({
            onlyOpen: !prevState.onlyOpen
        }))
    };

    getTradingHoursList = () => {
        fetch('trading-hours.json')
            .then(response => {
                return response.json();
            })
            .then(result => {
                    this.setState({
                        tradingHoursList: result
                    })
                }
            )
    };

    componentDidMount() {
        this.getTradingHoursList();
        setInterval(this.getTime, 1000);
    };

    render() {
        const {tradingHoursList, currentTime, onlyOpen, openList}=this.state;

        return (
            <div>
                <input
                    type='checkbox'
                    aria-label="Checkbox for following text input"
                    onChange={this.onChange}
                />
                Open only
                <div className='container'>
                    {onlyOpen ? (
                        <InstrumentsTable tradingHoursList={openList} currentTime={currentTime}/>
                    ) : (
                        <InstrumentsTable tradingHoursList={tradingHoursList} currentTime={currentTime}/>
                    )}
                </div>
            </div>
        )
    }
}