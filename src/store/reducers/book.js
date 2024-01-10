 const initialState={
    arr:[{id:1,name:"taluma",athur:"yona",price:100,src:"https://chabadshop.com/cdn/shop/products/134c154b7816eb79b09ad2d0945a00aa_738x738.png?v=1589292255"}
,{id:2,name:"meholamam",athur:"dina",price:50,src:"https://chabadshop.com/cdn/shop/products/134c154b7816eb79b09ad2d0945a00aa_738x738.png?v=1589292255"}]
    ,selectBookToShow:null,
    selectedBookToEdit:null
    
} 
//  //
//  export const bookReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_BOOK":
//             return {
//                 ...state,
//                 arr: [...state.arr, action.payload]
//             };
//         case "DELETE_BOOK":
//             return {
//                 ...state,
//                 arr: state.arr.filter(item => item.id !== action.payload)
//             };
//         case "SELECT_BOOK_TO_SHOW":
//             return {
//                 ...state,
//                 selectBookToShow: action.payload
//             };
//         default:
//             return state;
//     }
// };

 //
export const bookReducer=(state=initialState,action)=>{
     switch (action.type) {
        case "ADD_BOOK":
            return{
                selectBookToShow:state.selectBookToShow,
                selectedBookForEdit:state.selectedBookToEdit,
                arr:[...state.arr,action.payload]
                }  
         case "DELETE_BOOK":
            return{
                selectBookToShow:state.selectBookToShow,
                selectedBookForEdit:state.selectedBookToEdit,
                arr:state.arr.filter(item=>item.id!=action.payload)
            }
     
         case "SELECT_BOOK_TO_SHOW":
       
            return{
                selectBookToShow:action.payload,
                arr:state.arr,
                selectedBookForEdit:state.selectedBookToEdit
            }
            // return{
            //     selectBookToShow:action.payload,
            //     arr:state.arr,
            //     selectedBookToEdit:state.selectedBookToEdit
            // }    
            case "SELECT_BOOK_TO_EDIT":
       
            return{
                selectBookToShow:state.selectBookToShow,
                arr:state.arr,
                selectedBookToEdit:action.payload
            }    

            case "SAVE_EDITED_BOOK":
              let copy=state.arr.map(x=>{
                if(x.id!==action.payload.id)
                   return x;
                else
                  return action.payload
             }) 
             let newSelectBook
             if (state.selectBookToShow.id===action.payload.id) {
                newSelectBook=action.payload
             }
             else
             newSelectBook=state.selectBookToShow
            return{
                selectBookToShow:newSelectBook,
                arr:copy,
                selectedBookToEdit:null
            }    

            default :
            //return {state }אסור לעשות כחה 
            return state ;
          
            
       
       

        }
   

    }