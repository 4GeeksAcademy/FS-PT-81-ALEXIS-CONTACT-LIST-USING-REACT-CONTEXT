import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext";
import {ContactCard} from "../component/contactCard.jsx";

import [store, actions]

export const Home = () => {
	const {store, actions } = useContext(Context)
	
	return(
	
	<div className="container">
{
	store.contacts?.map(contact=> <ContactCard key={contact.id}
		name={contact.name}
		phone={contact.phone}
		email={contact.email}
		adress={contact.adress}
		contactId={contact.id}
		/>)
		}
	</div>
	)
}
