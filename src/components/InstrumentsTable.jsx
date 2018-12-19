import React from 'react';
import InstrumentItem from "./InstrumentItem";

export default class InstrumentsTable extends React.Component {
    getStatusItem = hour => {
        return (
            this.props.currentTime <= hour.to && this.props.currentTime >= hour.from
        );
    };

    render() {
        const { tradingHoursList } = this.props;

        return (
            <div className="row mt-4">
                {tradingHoursList.map(item => (
                    <div className="col-3 mb-2" key={item.instrumentID}>
                        <InstrumentItem
                            item={item}
                            open={item.tradingHours.some(this.getStatusItem)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}