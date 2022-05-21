import {getAllStudies} from "../studies";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../components/Studies/studies.css";
import { Link } from "react-router-dom";


function Studies(){
    const studies=getAllStudies();
    return(
        <div>
          
            <Header />

                <h1 className="title-three">Studies</h1>
                <p>Mis estudios desde 2007-2022</p>
            <div className="studies">
               
                {studies.map(j=>
                    <div className="studie" key={j.id}>
                   
                    <h3> {j.instituto}</h3> 
        
                    <hr></hr>
                    <button>{j.anio}</button>
                    <hr></hr>
                    <h6>{j.titulo} </h6>
                    <div className="vermas"><Link to={`${j.id}`}>Ver mas </Link></div>
                   
                    </div>
                )};
            </div>
            <Footer />
        </div>

       
    )
}
export default Studies