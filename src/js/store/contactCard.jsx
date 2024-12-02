import React from "react";

export const ContactCard = (props) =>{
    const{store, actions}=useContext(context);
    const handleDelete = e => actions.deleteContact(props.contactId)
    const navigate = useNavigate();
    
    const handleEdit = () =>{
        const contact = store.contacts.filter(el => el.id === props.contactId)[0]
        actions.selectContact(contact)
        navigate('/edit'+props.contactId)
    }
    return(
        <div className= "d-flex">
           <p>name:{props.name}</p>
           <p>phone:{props.phone}</p>
           <p>email{props.email}</p>
           <p>adress{props.adress}</p>
           
        </div>
    )

}

