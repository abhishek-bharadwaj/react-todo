import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #eee dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={ this.getStyle() }>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                {' '}{title}
                <button style={ btnStyle }>x</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%'
}

export default TodoItem
