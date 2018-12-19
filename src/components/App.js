import React from 'react';
import InstrumentsTable from "./InstrumentsTable";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tradingHoursList: [],
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

    getTradingHoursListByOpen = () =>
        this.state.onlyOpen
            ? this.state.tradingHoursList.filter(item =>
                item.tradingHours.some(
                    hour =>
                        this.state.currentTime <= hour.to &&
                        this.state.currentTime >= hour.from
                )
            )
            : this.state.tradingHoursList;

    componentDidMount() {
        this.getTradingHoursList();
        setInterval(this.getTime, 1000);
    };

    render() {
        const { currentTime, onlyOpen } = this.state;
        const tradingHoursListByOpen = this.getTradingHoursListByOpen();

        return (
            <div>
                <input
                    id="only-open"
                    checked={onlyOpen}
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onChange={this.onChange}
                />
                <label htmlFor="only-open">Open only</label>
                <div className="container">
                    <InstrumentsTable
                        tradingHoursList={tradingHoursListByOpen}
                        currentTime={currentTime}
                    />
                </div>
            </div>
        );
    }
}