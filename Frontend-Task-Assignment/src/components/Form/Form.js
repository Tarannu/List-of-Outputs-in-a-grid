import React,{useState} from 'react'
import './styles.css';


const Form = (props) => {
  const [term,setTerm] = useState("");
  const [subHeader,setSubHeader] = useState("");
  const [summary,setSummary] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(term === '' && subHeader==='' && summary==='') return;

    props.onFormSubmit(term,subHeader,summary);

    setTerm("");
    setSubHeader("");
    setSummary("");
  }

 const addHeader=(e)=>{
    setTerm(e.target.value);
  }

  const addsubHeader=(e)=>{
    setSubHeader(e.target.value);
  }

  const addSummary=(e)=>{
    setSummary(e.target.value);
  }

  return (
    <React.Fragment>
      <form id="msform"  className="form-body" >
        <fieldset className="form-fields">
          <h2>Create Post</h2>
          <h3>Fill the all mention detail to submit the form</h3>
          <div className="form-input">
          <input type="text" name="heading" value={term} placeholder="Heading" onChange={addHeader}/>
          </div>
          <div className="form-input">
          <input type="text" name="pass" value={subHeader} placeholder="Sub-Heading" onChange={addsubHeader} />
          </div>
          <div className="form-input">
          <textarea value={summary} placeholder="Summary" onChange={addSummary} />
          </div>
          <div className="form-input">
          <input type="button" name="Submit" value="Submit"  onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  )
}

export default Form;