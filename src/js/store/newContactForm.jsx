import React, {useState} from "react";
import {useNavigate} from "react-router";

export const NewContactForm = () =>{
    const navigate= useNavigate();
    const {store, actions} = useContext(Context);
    const[formData, setFormData] = useState({
        name:"",
        phone:"",
        email:"",
        adress:"",

        
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setFormData({...formData,  [name]: value})
    }

    const handleCancel=() => navigate('/')

    const handleSubmit = e =>{
        e.preventDefault();
        actions.createContact(formData)
    }
    return (
        <form className="card form-control" onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name" require />
            <input type="text" className="form-control" value={formData.phone} onChange={handleChange} name="phone" require />
            <input type="text" className="form-control" value={formData.email} onChange={handleChange} name="email" require />
            <input type="text" className="form-control" value={formData.adress} onChange={handleChange} name="adress" require />
            <input className="btn btn-success" type="submit" value="enviar" />
            <button className="btn btn-danger" onClick={handleCancel}>
                cancel

            </button>

        

        </form>
    )
}