import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { IVenda } from "../../Context/DataContext";
import Loading from "../../Components/Loading";

type IVendaSemData = Omit<IVenda, "data">;
const VendaDetalhe = () => {
  const location = useLocation();
  const idVenda = location.state;

  const { data, loading } = useFetch<IVendaSemData>(
    `https://data.origamid.dev/vendas/${idVenda}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default VendaDetalhe;
