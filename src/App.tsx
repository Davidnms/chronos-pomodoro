import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Oi");

  return (
    <div>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        recusandae quas aliquid! Itaque soluta dolores ipsum ullam, excepturi
        modi, sequi quo cum voluptatibus expedita at adipisci nam dicta harum
        eveniet?
      </p>
    </div>
  );
}
