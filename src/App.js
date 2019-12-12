import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="App">
        <PostForm/>
        <AllPost/>
      </div>
    );
  }
}

export default App;