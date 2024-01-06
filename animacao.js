const animacao=document.getElementById("animacao")
const divAnimacao=document.getElementById("divAnimacao")

const arr1=["baleia","bichinho_Verde","dinossauro","kirby","lula","patinho","pato","pokebola","sorvete","ursinho","vaca","pintinho"]

const div=document.createElement("div")
div.setAttribute("class","divAnimacao")
animacao.appendChild(div)
const img=document.createElement("img")
img.setAttribute("class","imgRedondo")
div.appendChild(img)
const criardiv=()=>{
    imgArr=Math.floor(Math.random()*arr1.length)
    img.setAttribute("src","/img_croche/"+arr1[imgArr]+".jpg")
}


const anima=()=>{
    criardiv()
}
anima()
setInterval(anima,1500)