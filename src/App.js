import {useState} from "react";
import NewUserForm from "./components/User/NewUserForm";
import UserList from "./components/User/UserList";


const defaultImageUrl = "https://w7.pngwing.com/pngs/78/488/png-transparent-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-face-head-cartoon.png";
function App() {
  const [users,setUsers] = useState([
    { name: "Alice", phone: "0123456789", avatar: defaultImageUrl },
    { name: "Bob", phone: "987456321", avatar: defaultImageUrl },
    { name: "Cris", phone: "5647889132", avatar: defaultImageUrl },
]);
const handleAddUser=(value)=>{
  setUsers(prev=>{
    return(
      [
        ...prev,
        {
          name:value.name,
          phone:value.phone,
          avatar:value.imageUrl,
        }
      ]
    )
  })
}
  return (
    <div className="App">
        <NewUserForm onSubmit={handleAddUser}/>
        <UserList users={users}/> 
    </div>
  );
}

export default App;
