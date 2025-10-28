// import { url } from "./api.js"
let formularioElemento = document.querySelector("form")

let tituloElemento = document.querySelector("#titulo")
let precoElemento = document.querySelector("#preco")
let categoriaElemento = document.querySelector("#categoria")
let descricaoElemento = document.querySelector("#descricao")
let listaProdutos = document.querySelector(".cards")

// "title": "Essence Mascara Lash Princess",
// "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
// "category": "beauty",
// "price": 9.99,

formularioElemento.addEventListener("submit", (event) => {
    event.preventDefault()
    // objetos
    let dados = {
        title: tituloElemento.value,
        description: descricaoElemento.value,
        category: categoriaElemento.value,
        price: +precoElemento.value,
    }   

   fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
    })
    .then((res) => {
        return res.json()
    })
    .then((produto) => {
        // console.log(produto)
        let estruturaProduto = `
            <div class="card-produto">
                <h3>${produto.title}</h3>
                <p>Valor R$: ${produto.price} <br> ${produto.description}</p>
            </div>
        `

        listaProdutos.innerHTML = estruturaProduto
    });
})