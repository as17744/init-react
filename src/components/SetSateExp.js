import React from 'react';

class SetSateExp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        this.setState({
            count: this.state.count + 1,
        });
        // console.log(this.state.count);
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1,
        //     })
        //     console.log(this.state.count);
        //     this.setState({
        //         count: this.state.count + 1,
        //     })
        //     console.log(this.state.count);
        // }, 0);
        // 函数式
        // this.setState((state) => {
        //     return {
        //         count: state.count + 1,
        //     };
        // });
        // console.log(this.state.count);
        this.setState((state) => {
            console.log(state);
            return {
                count: state.count + 1,
            };
        });
        // console.log(this.state.count);
    }
    render() {
        return <div>State exp: {this.state.count}</div>
    }
}
export default SetSateExp;
