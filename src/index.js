import helloworld from './helloworld.js';
console.log(helloworld());
import buttonCreator from "./scripts/button_creator";
let button_handle = new buttonCreator();
button_handle.render();
console.log(button_handle);