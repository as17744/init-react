import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        num: state.num,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

class Double extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.num * 2}</div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Double);
