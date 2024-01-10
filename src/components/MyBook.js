import { useDispatch } from "react-redux";
import {deleteBook,selecteBookToShow, selectedBookToEdit} from"../store/actions/book"

const MyBook = ({one}) => {
    let disptch=useDispatch()
    return (  <div>
        <h2>{one.name}</h2>
        <input onClick={()=>{disptch(deleteBook(one.id))}}type="button" value="מחק"/>
        <input onClick={()=>{disptch(selectedBookToEdit(one))}}type="button" value="ערוך"/>
        <input onClick={()=>{disptch(selecteBookToShow(one))}}type="button" value="הצג פרטים"/>
    </div>
       
    );
}
 
export default MyBook;
