import React from 'react';
import data from '../Data/trading-hours'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tradingHoursList: []
        };
    };

    getTradingHoursList = () => {
        this.setState({
            tradingHoursList: []
        });

        // const link='./trading-hours.json';

        fetch(data)
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
        this.getTradingHoursList()
    };

    render() {
        console.log(data);
        return (
            <div>
                hello
            </div>
        )
    }
}