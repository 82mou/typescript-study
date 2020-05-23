import axios from "axios";
import { Qiita } from "./qiita";

export async function main() {
  const res = await axios.get<Qiita[]>("https://qiita.com/api/v2/items");
  console.log(res.data);
  return res;
}

main();
// if (require.main === module) {
// }