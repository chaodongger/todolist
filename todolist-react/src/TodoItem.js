import React from 'react'




class TodoItem extends React.Component {
    handleDelete() {
        this.props.Delete(this.props.index);
      }

      //子组件如果想要和父组件通信，子组件要调用父组件传递的方法


    render() {
        return (
        <li>{this.props.item}<span className="iconfont finish" onClick={this.handleDelete.bind(this)}>&#xe8c5;</span></li>
        )
    }
}

export default TodoItem;