import axios from "axios";
import { Qiita } from "./qiita";

export async function main() {
  const res = await axios.get<Qiita[]>("https://qiita.com/api/v2/items");
  const $target = document.querySelector(".js-target")!;
  
  $target.insertAdjacentHTML("beforeend", res.data[0].rendered_body);
  return res;
}

main();