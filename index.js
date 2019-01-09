import React, { Component } from 'react'
import ReactDom from 'react-dom'
import TodoBox from './todobox';
export default class Index extends Component {
  render() {
    return (
      <div>
        <TodoBox/>
      </div>
    )
  }
}
ReactDom.render(<Index/>, document.getElementById('root'));
