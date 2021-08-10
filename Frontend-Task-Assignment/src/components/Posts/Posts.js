import React,{useState} from 'react'
import './styles.css'

const Post = ({listObjects}) => {
  
  const filteredList = listObjects.filter(value => Object.keys(value).length !== 0)
  const listItem = filteredList.map((value,index)=>{
  return (
  (value.headers==="" || value.subHeaders===""||value.summaries==="")? 
  alert("No fields can be empty"):
  <li key={index}>
    <h2>{value.headers}</h2>
    <h3>{value.subHeaders}</h3>
    <p>{value.summaries}</p>
  </li>
  )})
  
  return (

  <React.Fragment>
     <ul className="cards" >
        {listItem}
      </ul>
  </React.Fragment>
  );
}

export default Post;
