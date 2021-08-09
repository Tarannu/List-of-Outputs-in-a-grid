import React,{useState} from 'react'
import './styles.css'

const Post = ({listObjects}) => {
  
  const listItem = listObjects.map((value,index)=>{
  return (
  listObjects.length<2?
  null:
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
