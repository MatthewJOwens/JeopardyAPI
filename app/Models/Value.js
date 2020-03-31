export default class Value {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question
        this.value = data.value
        this.category = data.category
    }

    get Template() {
        return /*html*/`
        <p>Category: ${this.category.title.toUpperCase()}</p>
        <p>For ${this.value} points.</p>
        <p>Answer: ${this.question}</p>

        <p>Response must include: ${this.answer}
        `
    }
}