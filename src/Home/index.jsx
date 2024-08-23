import Header from "../Components/Header";
import ListarProdutos from "../Components/ListarProdutos";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../Components/Footer";

export default function Home(){
  const produtos = ListarProdutos();
  return(
      <>
      <Header/>
      <Carousel
        infiniteloop={true}
        useKeyboardArrows
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
>
  
        <div className="um">
          <img className="imagens" src="https://img.freepik.com/fotos-premium/musica-de-fundo-com-discos-de-vinil-ilustracao-ai-generativexa_115919-9847.jpg"></img>
        </div>
        <div className="dois">
          <img className="imagens" src="https://ecoassist.com.br/wp-content/uploads/elementor/thumbs/vecteezy_spinning-record-player-with-vintage-vinyl_1990888-1-qbamt7rwnrbd7suc7gic5x3m6umpfaraj49g6xpr3c.jpg"></img>
        </div>
     </Carousel>
      <h1>HOME</h1>
      {Array.isArray(produtos) && produtos.slice(0, 5).map((produto) => (
      <div className="card" key={produto.id}>
        <img src={produto.imagem}/>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        <button>comprar</button>
        <p>{produto.banda}/{produto.lancamento}</p>

      </div>
))} 
      <Footer/>
      </>
     
      
  );
}