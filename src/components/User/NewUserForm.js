import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./NewUserForm.css";
const NewUserForm = (props) => {
    const [value, setValue] = useState({
        name: "",
        phone: "",
        imageUrl: "",
    });
    const onChange = (event) => {
        const newValue=event.target.value
        const field=event.target.name
        setValue(prev=>{
            return(
                {
                    ...prev,
                    [field] : newValue,
                }
            )
        })
    };
    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(value);
    };
    return (
        <Card className="user-form">
            <form onSubmit={onSubmit}>
                <div className="user-form_control">
                    <label className="user-form_label">Name</label>
                    <input className="user-form_input" type="text" value={value.name} onChange={onChange} name="name"/>
                </div>
                <div className="user-form_control">
                    <label className="user-form_label">Phone</label>
                    <input className="user-form_input" type="text" value={value.phone} onChange={onChange}  name="phone"/>
                </div>
                <div className="user-form_control">
                    <label className="user-form_label">Image URL</label>
                    <input className="user-form_input" type="text" value={value.imageUrl} onChange={onChange} name="imageUrl"/>
                </div>
                <div className="user-form_control">
                    <Button>Add</Button>
                </div>
            </form>
        </Card>
    )
}
export default NewUserForm;