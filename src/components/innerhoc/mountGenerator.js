import React from 'react';

const mountGenerator = (WrapperComponents) => {
    class Item extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            console.log(this.props);
        }
        render() {
            return (<WrapperComponents {...this.props}></WrapperComponents>);
        }
    }
    return Item;
}
export default mountGenerator;
