import React from 'react';

class Life extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps');
    }
    componentShouldUpdate() {
        console.log('Child componentShouldUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('Child componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }
    render() {
        console.log('Child Render');
        return <div onClick={this.props.event}>{this.props.content}</div>;
    }
}
export default Life;
