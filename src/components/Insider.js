import React from 'react';
import {ColorContext} from '../utils/context';

class Insider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={{color: this.context}}>insider</div>
    }
};
Insider.contextType = ColorContext;
export default Insider;
