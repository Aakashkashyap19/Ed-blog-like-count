import React, { Component } from 'react';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
// import{isArrayEmpty} from './Utils';//we can use alias here like  below i used. 
import{isArrayEmpty as ArrayEmpty} from './Utils';

// function App()
class App extends Component {
  // after define the class we dont need to define the datatype of varible 
   /* fname="Aakash";
   lname="Kashyap";
   age=20;
   city="Goa";
   inputPlaceHolder="Enter Your Details";
   detailInputBox=<input placeholder={inputPlaceHolder} autoComplete/>;
   arr=[1,2,3,4,5];
   arrObj={name:"Sham",subject:"math"}
   getFullName= (fname,lname) => `${fname} ${lname}`;
   */
    constructor(props){
      super(props);
      this.state={
        showBlogs:true,
        
        blogArr:[
          {
            id:1,
            title:"Blog Tilte 1",
            description:"lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.",
            likeCount:0,
          },
          {
            id:2,
            title:"Blog Tilte 2",
            description:"lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.",
            likeCount:0,
          },
          {
            id:3,
            title:"Blog Tilte 3",
            description:"lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.",
            likeCount:0,
          }
        ]
      }
      console.log('Inside Constructor');
    }
   
  
  onLikeBtnClick= (pos) =>{
    const updateBlogList= this.state.blogArr;
    const updatedBlogObj=updateBlogList[pos];
    updatedBlogObj.likeCount = updatedBlogObj.likeCount+1;
    updateBlogList[pos] = updatedBlogObj;
    this.setState({blogArr:updateBlogList});
  }  
   
   
  
   onHideClickButton=()=>{
    //  below two lines are used to show and hide the blogcads
    
    // let updateState= !this.state.showBlogs; // ! it gaves the opposite result.
    // this.setState({showBlogs:updateState});
    
    //its another way to hide and show the blogcards. 
    this.setState((prevState,prevProps)=>{
      return {showBlogs:!prevState.showBlogs}
    });
    console.log(this.state.showBlogs);
  }
    
  shouldComponentUpdate(){
    console.log('inside shouldComponentUpdate');
     return true;
  }

  componentDidMount(){
    console.log('Component Did Mount ');
  }
  componentWillUnmount(){
    console.log('component Will Unmount');
  }
  componentDidUpdate(){
    console.log('inside component DidUpdate');
  }
  render(){
    console.log("Render Called For App js!");
    console.log(this.state);

    const blogCards = ArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item , pos)=>{
    
      return(
        <BlogCard  key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id}
        onLikeBtnClick={ ()=> this.onLikeBtnClick(pos)}/> //its a way to call a component using its unique id key
        // <div class="blogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>  
        // </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.onHideClickButton}>{this.state.showBlogs? 'Hide List' : 'Show List'}</button>
        <br></br>
        {
          //this blogcads is hold the render blog list 
          this.state.showBlogs ? blogCards : null
        }
        
        {/* <div class="blogCard">
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>  
        </div> */}
      </div>
    );
    
  }
    // after defining the class can't use return method instead of that we can use render() method 
    //   return (
    //     <div className="App">
    //       <button onClick={onHideClickButton}>Hide List</button>
    //       <br></br>
    //       {blogCards}
          
    //       {/* <div class="blogCard">
    //         <h3>{blogObj.title}</h3>
    //         <p>{blogObj.description}</p>  
    //       </div> */}
    //     </div>
        
        
    //   );
}

export default App;
/* 
{ <h3>Name : {fullname}</h3> }
<h3>Name : {getFullName(fname,lname)}</h3>
{<p>Age : {age}</p> }
{ <p>Age : {age} {city}</p> }
{ <p>Age : {age +" "+city+" using Concatenate"}</p> }
<p>City : {city}</p>
 {detailInputBox}
 {"Array value is: "+arr[2]}
 {"Arrayobj value is: "+arrObj.name}
 {arr.map()}{ is used on the place of for , and on the palce of if/else it uses the ternary operator }
*/