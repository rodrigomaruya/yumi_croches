const produtos=document.getElementById("produtos")
const produtosLista=document.getElementById("produtosLista")

produtos.addEventListener("click",()=>{
    produtosLista.classList.toggle("ocultar")
    
})
// produtos.addEventListener("mousedown",()=>{
//     produtosLista.classList.add("ocultar")
// })