import { useState } from "react";
import { PaperService } from "../service/paper.service";

export default function useTrade(): { onClick: any, trx: string } {
  const paperService = new PaperService();
  const [trx, setTrx] = useState("");

  const onClick = async () => {
    const trx = await paperService.trasfer(10);
    setTrx(String(trx));
  };

  return { onClick, trx };
}
