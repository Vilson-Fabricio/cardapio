import { useState } from "react";
export default function ListarProdutos(){
    const[ListaProdutos, setProdutos] = useState([
        {id:1, nome:'Wish You Were Here', preco:'R$ 123,00', banda:'Pink Floyd', genero:['Rock','RockPop'], lancamento: 1975},
        {id:2, nome:'The Dark Side of the Moon', preco:'R$ 343,00', banda:'Pink Floyd', genero:['Eletronica','Pop'], lancamento: 1973},
        {id:3, nome:'The Wall', preco:'R$ 433,00', banda:'Pink Floyd', genero:['Eletronica','Pop'], lancamento: 1979},
        {id:4, nome:'Pulse', preco:'R$ 543,00', banda:'Pink Floyd', genero:['Eletronica','Pop'], lancamento: 1995},
        {id:5, nome:'The Division Bell', preco:'R$ 333,00', banda:'Pink Floyd', genero:['MPB','Rock'], lancamento: 1994},
        {id:6, nome:'The Beatles', preco:'R$ 546,00', banda:'The Beatles', genero:['Rock','RockPop'], lancamento: 1973},
        {id:7, nome:'Abbey Road', preco:'R$ 431,00', banda:'The Beatles', genero:['Rock','RockPop'], lancamento: 1968},
        {id:8, nome:'Revolver', preco:'R$ 435,00', banda:'The Beatles', genero:['Rock','RockPop'], lancamento: 1966},
        {id:9, nome:'Let It Be', preco:'R$ 764,00', banda:'The Beatles', genero:['Rock','RockPop'], lancamento: 1970},
        {id:10, nome:'A Hard Days Night', preco:'R$ 646,00', banda:'The Beatles', genero:['Rock','RockPop'], lancamento: 1964},
        {id:11, nome:'Brothers in Arms', preco:'R$ 856,00', banda:'Dire Straits', genero:['Country','Rock'], lancamento: 1985},
        {id:12, nome:'Alchemy: Dire Straits Live', preco:'R$ 234,00', banda:'Dire Straits', genero:['Country','Rock'], lancamento: 1984},
        {id:13, nome:'Dire Straits', preco:'R$ 453,00', banda:'Dire Straits', genero:['Country','Rock'], lancamento: 1978},
        {id:14, nome:'On Every Street', preco:'R$ 754,00', banda:'Dire Straits', genero:['Country','Rock'], lancamento: 1991},
        {id:15, nome:'Making Movies', preco:'R$ 367,00', banda:'Dire Straits', genero:['Country','Rock'], lancamento: 1980},
        {id:16, nome:'Discovery', preco:'R$ 754,00', banda:'Daft Punk', genero:['Eletronica','Pop'], lancamento: 2001},
        {id:17, nome:'Random Access Memories', preco:'R$ 457,00', banda:'Daft Punk', genero:['Eletronica','Pop'], lancamento: 2013},
        {id:18, nome:'Homework', preco:'R$ 275,00', banda:'Daft Punk', genero:['Eletronica','Pop'], lancamento: 1997},
        {id:19, nome:'Alive 2007', preco:'R$ 173,00', banda:'Daft Punk', genero:['Eletronica','Pop'], lancamento: 2007},
        {id:20, nome:'Human After All', preco:'R$ 943,00', banda:'Daft Punk', genero:['Eletronica','Pop'], lancamento: 2005},
        {id:21, nome:'Gita', preco:'R$ 156,00', banda:'Raul Seixas', genero:['MPB','Rock'], lancamento: 1974},
        {id:22, nome:'O Dia em que a Terra Parou', preco:'R$ 976,00', banda:'Raul Seixas', genero:['MPB','Rock'], lancamento: 1977},
        {id:23, nome:'Há 10 Mil Anos Atrás', preco:'R$ 789,00', banda:'Raul Seixas', genero:['MPB','Rock'], lancamento: 1976},
        {id:24, nome:'Krig-ha, Bandolo!', preco:'R$ 967,00', banda:'Raul Seixas', genero:['MPB','Rock'], lancamento: 1973},
        {id:25, nome:'Abre-te Sésamo', preco:'R$ 521,00', banda:'Raul Seixas', genero:['MPB','Rock'],lancamento: 1980},
        {id:26, nome:'Master of Puppets', preco:'R$ 754,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'], lancamento: 1986},
        {id:27, nome:'Metallica', preco:'R$ 346,00', banda:'', banda:'Metallica', genero:['Heavy metal', 'thrash metal'], lancamento: 1991},
        {id:28, nome:'Ride the Lightning', preco:'R$ 742,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'], lancamento: 1984},
        {id:29, nome:'Kill Em All', preco:'R$ 234,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'], lancamento: 1983},
        {id:30, nome:'St. Anger', preco:'R$ 234,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'], lancamento: 2003}
    ]);
    
    const [ListaDiscos, setDiscos] = useState([]);
    const criarLista = (objeto) => {
        setDiscos([...ListaDiscos, objeto])
    }

}