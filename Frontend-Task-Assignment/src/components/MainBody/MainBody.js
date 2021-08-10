import React,{useState,useEffect} from 'react'
import './MainBody.css'
import Posts from '../Posts/Posts.js'
import Form from '../Form/Form.js'
import {createStore} from 'redux'

function MainBody() {
    const [listObjects,setlistObjects] = useState([{}]);

    const handleSubmit=(header,subHeader,summary)=>{
        setlistObjects([...listObjects,{
            headers:header,
            subHeaders:subHeader,
            summaries:summary
        }]);
        console.log(listObjects);
    }
    
    return (
        <div>
            <div className="gridContainer">
            <div className="gridPost">
                <Posts listObjects={listObjects} />
            </div>
            <div className="gridForm">
                <Form onFormSubmit={handleSubmit} />
            </div>
            </div>
        </div>
    )
}

export default MainBody
