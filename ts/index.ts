import { digestMessage } from "./util"
import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4)
console.log(await digestMessage("a"))