
const produtos=document.getElementById("produtos")
const produtosLista=document.getElementById("produtosLista")
const imagemProduto=[...document.querySelectorAll(".imagemProduto")]
const content_grid=document.getElementById("content_grid")
const caixaProdutos=document.getElementById("caixaProdutos")
const produtoSecao=[...document.querySelectorAll(".produtoSecao")]
const btn_close=document.getElementById("btn_close")

produtos.addEventListener("click",()=>{
    produtosLista.classList.toggle("ocultar")   
})
const arr=["baleia","bichinho_Verde","dinossauro","kirby","lula","patinho","pato","pokebola","sorvete","ursinho","vaca","pintinho"]


const mostrar=()=>{
    arr.map(el=>{
    const produtoSecao=document.createElement("produtoSecao")
    produtoSecao.setAttribute("class","produtoSecao")
    caixaProdutos.appendChild(produtoSecao)

    const h2=document.createElement("h2")
    h2.innerHTML=el.toLocaleUpperCase()
    produtoSecao.appendChild(h2)

    const div=document.createElement("div")
    produtoSecao.appendChild(div)
    
    const imgCroche=document.createElement("img")
    imgCroche.setAttribute("src","/img_croche/"+el+".jpg")
    imgCroche.setAttribute("class","imagemProduto")
    imgCroche.setAttribute("id","imagemProduto")
    imgCroche.addEventListener("click",(evt)=>{
        content_grid.innerHTML=""
        const pegarImg=evt.target.currentSrc

        content_grid.classList.remove("ocultar")
        // const evento=evt.target.parentNode.parentNode.firstChild.nextElementSibling.innerText
        // const eventoImagem=evt.target.currentSrc
        // const eventoH3=evt.target.parentNode.parentNode.firstChild.parentElement.lastElementChild.childNodes[1].innerText
        // const eventoP=evt.target.parentNode.parentNode.firstChild.parentElement.lastElementChild.childNodes[3].innerText

        const imgClose=document.createElement("imgClose")
        imgClose.setAttribute("class","imgClose")
        content_grid.appendChild(imgClose)
        
        const btnClose=document.createElement("img")
        btnClose.setAttribute("src","/img/close.svg")
        btnClose.addEventListener("click",()=>{
            content_grid.classList.add("ocultar")
        })
        imgClose.appendChild(btnClose)

        const seletor=document.createElement("section")
        seletor.setAttribute("class","produtoSecaoGrid")
        const h2=document.createElement("h2")
        seletor.appendChild(h2)


        const div=document.createElement("div")
        div.setAttribute("class","divImg")
        seletor.appendChild(div)
        const img=document.createElement("img")
        img.setAttribute("class","imagemProdutoGrid")
        img.setAttribute("src",pegarImg)
        div.appendChild(img)

        const artigo=document.createElement("article")
        artigo.setAttribute("class","classeArticleGrid")
        seletor.appendChild(artigo)
        const h3=document.createElement("h3")
        artigo.appendChild(h3)
        

        const p=document.createElement("p")
        artigo.appendChild(p)
        content_grid.appendChild(seletor)
        
    })
    div.appendChild(imgCroche)

    const classeArticle=document.createElement("article")
    classeArticle.setAttribute("class","classeArticle")
    produtoSecao.appendChild(classeArticle)

    })   
}
mostrar()
