import React, { Fragment } from 'react';

class Template extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        return (
            <div>
                {
                    list.map((item) => (
                        <Fragment>
                            <span>{item}</span><span>{item}123</span>
                        </Fragment>
                    ))
                }
            </div>
        );
    }
}
export default Template;