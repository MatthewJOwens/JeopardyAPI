import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
  let template = `<h1>Results</h1>`
  values.forEach(a => template += a.Template)
  document.getElementById('results').innerHTML = template
}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
  }

  getAnswers() {
    ValuesService.getAnswers()
  }
}
