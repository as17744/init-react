import React from 'react';
import { connect } from 'react-redux';
import Double from './components/Double';
import Triple from './components/Triple';
import { setCount } from './actions/index';
import store from './store';

const mapStateToProps = (state) => {
    return {
        num: state.num,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch(setCount(1));
        },
        asyncAdd: () => {
            dispatch({ type: 'INCREMENT_ASYNC' });
        },
    }
};

class Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div onClick={() => {
                    this.props.add()
                }}>+</div>
                <div>{this.props.num}</div>
                <Double />
                <Triple />
                <div onClick={() => { this.props.asyncAdd() }}>async</div>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
