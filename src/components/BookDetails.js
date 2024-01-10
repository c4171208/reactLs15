import { useSelector } from "react-redux";

const SongDetails = () => {
   const selected=useSelector(state=>state.selectBookToShow)
    return ( 
        <div>
            <h1>{selected.name}</h1>
            <h2>{selected.price}</h2>
            <h2>{selected.athur}</h2>
            <div><img src={selected.src}/></div>
        </div>
     );
}
 
export default SongDetails;