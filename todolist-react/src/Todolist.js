import React from 'react';
import "./Todolist.css";
import TodoItem from './TodoItem';
//import logo from './logo.svg';
//import './App.css';


 

class todolist extends React.Component {
  //jsx语法
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        inputValue: ''
    }
  }



   handleBtnClick() {
    
     this.setState({
       list: [...this.state.list,this.state.inputValue],
       inputValue: ''
     })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState ({list})
  }


  render() {
    return(
      <div className="todolistMain">
        <div className="header">
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button> 
        </div>
        
        <ul className="theList">
          {
              this.state.list.map((item, index) => {
                return <TodoItem />
              //return <li key={index}>{item}<span className="iconfont finish" onClick={this.handleDelete.bind(this, index)}>&#xe8c5;</span></li>
              
              })
          }
        </ul>
      </div>
   )
  }
}

export default todolist;