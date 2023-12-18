import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch } from "../../store/modules/postSlice";

 

const PostForm = () => {
    const [ text , setText ] = useState('')
    const dispatch = useDispatch()
 
    const onSubmit = e  => {
        e.preventDefault()
       dispatch( onSearch(text) )
        // setText('')    
    }
    const changeInput =(e) => {
        const { value} = e.target 
        setText( value )
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text"  value={text} onChange={ changeInput  }/>
        </form>
    );
};

export default PostForm;