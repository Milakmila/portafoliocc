import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Skill from "../components/Skills/Skills";
import Aboutme from "../components/Aboutme/Aboutme"
import Tool from "../components/Tools/Tools";
import Project from "../components/Projects/Projects"
import { Link } from "react-router-dom";
function Home(){
return(
    <div>
        <Header />
        <h1>Página home del portafolio</h1>
        <Aboutme />
        <Skill />
        <h3><Link to="./Studie.js"> Go to studies</Link></h3>
        <Tool />
        <Project />
        <Footer />
    </div>
)
}

export default Home;