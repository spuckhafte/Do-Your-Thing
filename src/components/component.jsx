import React from 'react';

class Counter extends React.Component {
    
    buttonStyle = {
        fontWeight: 'bold',
        boxShadow: 'none'
    }

    render() {


        return(
            <React.Fragment>

            </React.Fragment>
        )
    }

    getBadgeClass() {
        let class_badge = 'badge m-2 bg-';
        return class_badge += this.props.counter.value === 0 ? 'secondary' : 'primary';
    }
}
 
export default Counter;