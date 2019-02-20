import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';
//'https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b'
class ListItem extends Component {
    handleComplete = completeTodo => {
        const {completeTodo} = this.props;
        completeTodo(completeTodo);
    };
    render() {
        const{todoId, todo} = this.props;
        return (
            <div key="toDoName">
                <h4>
                    {todo.title}
                    <span onClick={() => this.handleComplete(todoId)}>
                    }
                    export default connect(null, {completeTodo})(ListItem);
