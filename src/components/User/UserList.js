import {useState} from "react";
import UserCard from "./UserCard";
import Card from "../UI/Card";
import "./UserList.css";



const UserList = (props) => {
    const [searchValue,setSearchValue] = useState("");
    const filteredUsers = props.users.filter((user) =>{
        return ( user.name.indexOf(searchValue)>-1 || user.phone.indexOf(searchValue)>-1
    );
});
    const onSearchChange=(event)=>{
        setSearchValue(event.target.value);
    };
    return (
        <Card className="user-list">
            <input
                type="text"
                className="user-list_search"
                placeholder="Search ..."
                value={searchValue}
                onChange={onSearchChange}
            />
            {filteredUsers.map((user) => {
                return (
                    <UserCard
                        key={user.phone}
                        /*name={user.name}
                        phone={user.phone}
                        avatar={user.avatar}*/
                        user={user}
                    />
                );
            })}
        </Card>
    )
};
export default UserList;