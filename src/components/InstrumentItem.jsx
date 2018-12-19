import React from 'react';

export default class InstrumentItem extends React.Component {
    render() {
        const { item, open } = this.props;

        return (
            <div className='card'>
                <div className='card-body'>
                    <div><b>ID : </b>{item.instrumentID}</div>
                    <div><b>Name : </b>{item.name}</div>
                    <div><b>Status: </b>{open ? 'Open' : 'Close'}</div>
                </div>
            </div>
        )
    }
}