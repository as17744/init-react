import React from 'react';

class Check extends React.Component {
    render() {
        const innerDom = this.props.checked ? <div>123</div> : <div>567</div>
        return innerDom;
    }
}
export default Check;
