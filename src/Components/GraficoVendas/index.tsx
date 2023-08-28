import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../../Context/DataContext";

const dadosGrafico = [
  {
    data: "2023-05-02",
    pago: 4500,
    processando: 4200,
    falha: 1000,
  },
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 4000,
    falha: 2000,
  },
  {
    data: "2023-06-13",
    pago: 1200,
    processando: 3300,
    falha: 934,
  },
];
const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={2}/>
        <Line type="monotone" dataKey="processando" stroke="#387908" strokeWidth={2}/>
        <Line type="monotone" dataKey="falha" stroke="#382098" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
