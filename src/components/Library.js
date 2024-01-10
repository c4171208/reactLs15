
import React from 'react';
import { useSelector } from 'react-redux';
import MyBook from './MyBook';

const Library = () => {
    const arr = useSelector((state) =>{return state.arr});

    // if (!arr) {
    //     // Handle the case where arr is undefined
    //     return <p>Loading...</p>; // or any other appropriate handling
    // }

    return (
        <>
            <h1>רשימת ספרים</h1>
            <ul>
                {arr.map(item => (
                    <li key={item.id}>
                        <MyBook one={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Library;

