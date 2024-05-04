// CSS
import styles from "./Menu.module.css";

// Lista do Menu 
const menuList = [
  {
      nome: "Café da Manhã simples",
      ingredientes: ["Pão com manteiga na Chapa", " e  Café tradicional"],
      imagem: "https://www.proteste.org.br/-/media/proteste/images-bis/home/dinheiro/pim_caf%C3%A9-da-manh%C3%A3_3.jpg?la=pt-br&rev=c5cc1434-8798-439c-af1b-374f2be6c3e6&hash=8EDDBD9D0C3B04BAC47D197AFA58FF83&mw=960"
  },
  {
      nome: "Café da manhã Completo",
      ingredientes: ["Pão com manteiga na Chapa", " , Café tradicional"," , Ovos mexidos com queijo"," e Suco de laranja natural"],
      imagem: "https://phfoodnut.com.br/wp-content/uploads/2022/08/ovo-mexido-com-torradas-e-bacon-no-cafe-da-manha_434193-1621.jpg"
  },
  {
      nome: "Especial de torta de frango",
      ingredientes: ["Torta de Frango caseira c/ requeijão cremoso", "e  Café tradicional"],
      imagem: "https://img.cybercook.com.br/receitas/166/torta-de-frango-da-palmirinha.jpeg"
  }
];

const Menu = () => { 
  return (
    <div className={styles.home}>
      <h1>Cardápio do BlueCoffe</h1>
        
          {menuList.map(item => (
            <>
            <h2>
              {item.nome}
            </h2>
            <img src={item.imagem} width="500" height="500"/>
            <p>
              {item.ingredientes}
            </p>
            </>
            
          ))}
    </div>
  );
};

export default Menu;