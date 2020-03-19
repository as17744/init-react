import React from 'react';
import LifeChild from './LifeChild';

class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    componentWillReceiveProps() {
        console.log('Father componentWillReceiveProps');
    }
    componentShouldUpdate() {
        console.log('Father componentShouldUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('Father componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Father componentDidUpdate');
    }
    render() {
        console.log('Father Render');
        return <LifeChild content={this.state.count} event={this.handleClick}></LifeChild>;
    }
}
export default Life;
