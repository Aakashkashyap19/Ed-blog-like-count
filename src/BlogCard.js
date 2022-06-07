import React from "react";
// import {dumpLogs} from'./Utils';
// import './BlogCard.css';

import classes from'./BlogCard.module.css';


class BlogCard extends React.Component {
  /* 
  onLikeBtnClick= () =>{
    this.setState((prevState,prevProps)=>{
      return{likeCount : prevState.likeCount+1}
    })
  } */
  componentWillUnmount(){
    console.log('Unmouting Blog Cards');
  }
  render(){
    console.log('BlogCard Rednderd');
  // dumpLogs(props); 
   
  return(
        <div class={classes.NewblogCard}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        
        <p> Like Count:<span className={classes.likeCount}>{this.props.likeCount}</span></p>
        <button onClick={this.props.onLikeBtnClick}>Like</button>  
      </div>
    )
  }
    
    
}
export default BlogCard;

// below the code i used class  

/* import React,{ Component } from "react";
import {dumpLogs} from'./Utils';
// import './BlogCard.css';

import classes from'./BlogCard.module.css';


class BlogCard extends Component{
  state={
    likeCount:0
  }
  
  onLikeBtnClick=()=>{
    this.setState((prevState,prevProps)=>{
      return{likeCount : prevState.likeCount+1}
    })
  }

  render(){
    dumpLogs(this.props);
    return(
        <div class={classes.NewblogCard}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        
        <p> Like Count:<span className={classes.likeCount}>{this.state.likeCount}</span></p>
        <button onClick={this.onLikeBtnClick}>Like</button>  
      </div>
    )
  }
    
}
export default BlogCard; */