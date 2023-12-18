import { Link, useNavigate } from "react-router-dom";

const UserItem = ({ item }) => {
   const { id , name } = item 
   const navigate  = useNavigate()
    return (
        <li>
           <Link to ={ `/user/${id}` } > {name} </Link> 
           {/* <button onClick ={ () => navigate(`/user/${id}`)} > {name} </button>  */}
        </li>
    );
};

export default UserItem;