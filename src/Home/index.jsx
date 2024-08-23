import Header from "../Components/Header";
import ListarProdutos from "../Components/ListarProdutos";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const produtos = ListarProdutos();
  return (
    <>
      <Header />
      <h1>Home</h1>
      {Array.isArray(produtos) && produtos.slice(0, 5).map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <p>{produto.banda}/{produto.lancamento}</p>
          <Carousel/>
        </div>
))}       
</>
);
}