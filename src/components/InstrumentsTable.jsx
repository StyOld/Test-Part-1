import React from 'react';
import InstrumentItem from "./InstrumentItem";

export default class InstrumentsTable extends React.Component {
    render() {
        const {tradingHoursList, currentTime}=this.props;

        return (
            <div className='row mt-4'>
                {tradingHoursList.map(item => (
                    <div className='col-3 mb-2' key={item.instrumentID}>
                        <InstrumentItem item={item} currentTime={currentTime}/>
                    </div>
                ))}
                </div>
        )
    }
}