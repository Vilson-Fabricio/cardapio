import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
            <nav>
               
                <ul>
                <Link to="/home">
                <li><img src="https://cdn.discordapp.com/attachments/744020182237839483/1276516541763948585/image.png?ex=66c9d02c&is=66c87eac&hm=eb0da516807a6be24a0d3d5944f33d1131084306555b709084e38ce247b28922&"/></li>
                </Link>     
                <Link to="/produto">
                <li>Produtos</li>
                </Link>
                <Link to="/oferta">
                <li>Ofertas</li>
                </Link>
                </ul>
            </nav>


        </header>
    );
}