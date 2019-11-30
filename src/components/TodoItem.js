import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                color: '#332'
            }
        } else {
            return {
                textDecoration: 'none',
                color: '#B32'
            }
        }
    }

    render() {
        return (
            <div style={ this.getStyle() }>
                <h3>{this.props.todo.title}</h3>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
