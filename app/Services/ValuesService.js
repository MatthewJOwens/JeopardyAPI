import store from "../store.js";
import Value from "../Models/Value.js"

// @ts-ignore
let _api = new axios.create({
  baseURL: 'http://jservice.io/api',
  timeout: 10000
})

class ValuesService {
  constructor() {
    this.getAnswers()
  }

  getAnswers() {
    _api.get('random')
      .then(res => {
        console.log(res.data)
        let answers = res.data.map(rawAnswerData => new Value(rawAnswerData))
        store.commit("values", answers)
      }).catch(err => {
        console.error(err)
      })
  }
  // getCharacters() {
  //   _api.get('people')
  //     .then(res => {
  //       // console.log(res.data.results)
  //       let characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
  //       store.commit("characters", characters)
  //       // console.log(people)
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }
}

const service = new ValuesService();
export default service;
