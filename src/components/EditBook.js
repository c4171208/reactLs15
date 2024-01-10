import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveEditedBook } from "../store/actions/book";
const EditBook = () => {

   
   let disp=useDispatch()
    let forEdit=useSelector(st=>st.selectedBookToEdit)
    const [detail, setDetail] = useState({...forEdit});
    const change=(e)=>{
     setDetail({...detail,[e.targrt.name]:e.target.value})
    }
    const save =(e)=>{
        e.preventDefault();
       disp(saveEditedBook(detail)) 
    }
    return ( <form onSubmit={save}>
<label>name</label>
<input type="text" onChange={change} value={forEdit.name}/>

<label>athur</label>
<input type="text" onChange={change}/>

<label>price</label>
<input type="Number" onChange={change}/>
<input type="submit"/>
    </form> );
}
 
export default EditBook;