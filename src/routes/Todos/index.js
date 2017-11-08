import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../../actions'

class Todos extends Component {
  handleSubmit = (e) => {
    console.log(this.props.todos);
    if (e.which === 13) {
      this.props.actions.addTodo(e.target.value);
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          onKeyDown={this.handleSubmit}
        />
        < ul >
          {
            todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

/**
 * mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
 */
const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Todos);