import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import  BookDetails from './components/BookDetails'
import { useSelector } from 'react-redux';
import EditBook from './components/EditBook';
function App() {
  let selected=useSelector(st=>st.selectBookToShow)
  let selectedToEdit=useSelector(st=>st.selectedToEdit)

  return (
   <><Library/>
   {selected&&<BookDetails/>}
   {selectedToEdit&&<EditBook/>}

   </>

  );
}

export default App;
