import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Projetos from "./Projetos";

function Home() {
	return (
    
		<div className="App">
			<Profile/>
			<Projetos/>
			<Footer/>
		</div>
	);
}

export default Home;