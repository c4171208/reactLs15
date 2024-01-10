export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}


export const deleteBook=(bookId)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookId
    }
}


export const   selecteBookToShow=(book)=>{
    return{
        type:"SELECT_BOOK_TO_SHOW",
        payload:book
    }
}

export const   selectedBookToEdit=(book)=>{
    return{
        type:"SELECT_BOOK_TO_EDIT",
        payload:book
    }
}


export const   saveEditedBook=(editedbook)=>{
    return{
        type:"SAVE_EDITED_BOOK",
        payload:editedbook
    }
}