import React from 'react';
const Inner = React.forwardRef((props, ref) => {
    <div ref={ref}>Refs example</div>
});

class RefsExample extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div ref={this.props.forwardRef}>Refs example</div>;
    }
}
export default RefsExample;
