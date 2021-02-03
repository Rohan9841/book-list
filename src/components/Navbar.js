import { BookContext } from "../contexts/BookContext";
import { useContext } from 'react';

const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className = "navbar">
            <h1>Rohan's Reading List</h1>
            <p>Currently, you have {books.length} to read...</p>
        </div>
     );
}
 
export default Navbar;