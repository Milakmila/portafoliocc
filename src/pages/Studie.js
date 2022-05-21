import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router-dom";
import {getStudie} from "../studies";



function Studie(){
    const params=useParams();
    const  study=getStudie(parseInt(params.id));
    return(
        <div>
            {params.id}
            <Header />
            <div>
                <img src={study.image} alt="imagen"></img>
            </div>
            <div>
                {params.id}
                <h1>Detalle de </h1>
                <p><strong>Instituto: </strong>{study.instituto}</p>
                <p><strong>Titulo: </strong>{study.titulo}</p>
                <p><strong>Año: </strong>{study.anio}</p>
            </div>
            <Footer />
        </div>
    )
}
export default Studie