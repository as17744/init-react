import React from 'react';
import { connect } from 'react-redux';
import { reduceCount } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        num: state.num,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduce: () => {
            dispatch(reduceCount());
        },
    }
};

class Triple extends React.PureComponent {
    render() {
        return (
            <div onClick={() => { this.props.reduce() }}>{this.props.num * 3}</div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Triple);
