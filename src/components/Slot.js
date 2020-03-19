import React from 'react';

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
                    <div>
                        {this.props.left}
                    </div>
                    <div>
                        {this.props.right}
                    </div>
                </div>)
    }
};

export default Slot;
