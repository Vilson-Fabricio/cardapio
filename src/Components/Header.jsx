import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
            <nav>
               
                <ul>
                <Link to="/home">
                <p>HOME</p>
                </Link>     
                <Link to="/produto">
                <p>PRODUTOS</p>
                </Link>
                <Link to="/oferta">
                <p>OFERTAS</p>
                </Link>
                </ul>
            </nav>


        </header>
    );
}