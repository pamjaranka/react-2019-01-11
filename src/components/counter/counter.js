import React, {Component} from 'react'
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.countProp}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }
}

const mapStateToProps = (store) => ({
    countProp: store.count
})

export default connect(
    mapStateToProps
)(Counter)
