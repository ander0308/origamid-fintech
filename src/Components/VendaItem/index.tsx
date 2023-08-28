import { useNavigate } from "react-router-dom";
import { IVenda } from "../../Context/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const idVenda = venda.id
    navigate(`/venda-detalhe`, {state: idVenda})
  }

  return (
    <div className="venda box">
      <button style={{ fontFamily: "monospace" }} onClick={handleClick}>
        {venda.id}
      </button>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default VendaItem;
