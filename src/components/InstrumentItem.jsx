import React from 'react';

export default class InstrumentItem extends React.Component {
    getStatusItem = (it) => {
        return (this.props.currentTime<=it.to && this.props.currentTime>=it.from)
    };

    render() {
        const {item} = this.props;

        return (
            <div className='card'>
                <div className='card-body'>
                    <div><b>ID : </b>{item.instrumentID}</div>
                    <div><b>Name : </b>{item.name}</div>
                    <div><b>Status: </b>{item.tradingHours.some(this.getStatusItem) ? 'Open' : 'Close'}</div>
                </div>
            </div>
        )
    }
}