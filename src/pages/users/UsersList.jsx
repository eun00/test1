
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../../components/users/UserItem";
import { useEffect } from "react";
import { getUsers } from "../../store/modules/userSlice";

const UsersList = () => {
    const { users } = useSelector(state => state.userR)
    const dispatch  = useDispatch()
    
    useEffect( () => {
        dispatch( getUsers() )
    },[])

    return (
        <div>
            <h2> Users List </h2>
                {
                    users.map( item => <UserItem key={item.id} item={item}/> )
                }
        </div>
    );
};

export default UsersList;