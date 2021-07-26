import { useSelector } from "react-redux";
import CalculatorHeader from "../components/CalculatorHeader";

export default function CalculatorScreen() {
  const { current } = useSelector((state) => state.reducer);

  return <CalculatorHeader current={current} />;
}
