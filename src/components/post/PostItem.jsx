

const PostItem = ( {item}) => {
    const { title, objectID }= item 
    return (
        <li>
           {objectID}  / {title} 
        </li>
    );
};

export default PostItem;