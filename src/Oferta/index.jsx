import Header from "../Components/Header";
import ListarProdutos from "../Components/ListarProdutos";

export default function Oferta(){
    const produtos = ListarProdutos();
    return(
        <>
        <Header/>
        <h1>OFERTA</h1>
        {Array.isArray(produtos) && produtos.slice(5, 20).map((produto) => (
        <div className="card" key={produto.id}>
          <img src={produto.imagem}/>        
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <p>{produto.banda}/{produto.lancamento}</p>
        </div>
))} 
        </>
       
        
    );
}