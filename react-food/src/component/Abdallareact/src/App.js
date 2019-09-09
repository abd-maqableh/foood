import React,{Component} from 'react';
import './App.css';

import CreatePost from './components/CreatePost/CreatePost';
import Post from './components/SlicePost/Post'

class App extends Component{
  
  render(){
  
    return (
      <div className="App" style={{backgroundImage: "url(" + "C:\Users\abdul\Downloads\Food" + ")" }}>
        <CreatePost/>
       <Post/>
      
      </div>
    );
  }
}

export default App;
