import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const UserPage = () => {
    const { userId } = useParams()
    const { users } = useSelector(state => state.userR)
    const navigate  = useNavigate()
 
    const user = users.find( item => item.id === Number(userId)) 
    const { id, name , email } = user 

    return (
        <div>
            <h2> {id}번 {name} </h2>
            <h2> 이메일 : {email} </h2>
            <button onClick={ () =>navigate(`/user`) }>목록으로 </button>
        </div>
    );
};

export default UserPage;