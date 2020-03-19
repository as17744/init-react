import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5],
        };
    }
    itemClick(item) {
        console.log(item);
    }
    render() {
        return (
            <div>
                {this.state.list.map((item) => <div onClick={() => {this.itemClick(item)}} key={item}>{item}</div>)}
            </div>
        );
    }
}
export default List;
