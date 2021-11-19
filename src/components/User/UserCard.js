import Card from "../UI/Card";
import "./UserCard.css";

const UserCard=(props)=>{
    return(
        <Card className="user-card">
            <img
                className="user-card_avatar"
                alt="avatar"
                src={props.user.avatar}
            />
            <div className="user-card_info">
                <div className="user-card_name">{props.user.name}</div>
                <div className="user-card_phone">{props.user.phone}</div>
            </div>
        </Card>
    )
}
export default UserCard;