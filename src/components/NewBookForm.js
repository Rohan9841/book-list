import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {useState} from 'react'

const NewBookForm = () => {

    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_BOOK", book: {title, author}});
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "title">Title</label>
            <input type = "text" id = "title" value = {title} onChange = { (e) => {setTitle(e.target.value)}} />

            <label htmlFor = "author">Author</label>
            <input type = "text" id = "author" value = {author} onChange = {(e) => {setAuthor(e.target.value)}}/>

            <button>Add book</button>
        </form>
     );
}
 
export default NewBookForm;