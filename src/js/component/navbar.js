import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div clasName="container-fluid">
			<Link to = "/demo">

			
			<button className="btn btn-success" style={{marginLeft:"1200px"}}>Add new contact</button>
			</Link>
		</div>
		
	);
};
