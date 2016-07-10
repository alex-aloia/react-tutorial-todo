import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import * as actionCreators from '../action_creators';

class TodoApp extends React.Component {
    render() {
        return <div>
            <section className="todoapp">
                {/*<TodoList todos={this.props.todos} filter={this.props.filter} />*/}
                <TodoList  {...this.props} />
            </section>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);