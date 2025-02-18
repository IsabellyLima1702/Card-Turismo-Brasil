'use strict'

const estado = [
    {nome:'PE', cor: 'yellow', icon: 'ilha.png'},
    {nome:'TO', cor: 'purple', icon: 'jalapao.png'},
    {nome:'RJ', cor: 'blue', icon: 'redentor.png'}, 
    {nome:'AM', cor: 'pink', icon: 'teatro.png'},
    {nome:'MA', cor: 'orange', icon: 'lencois.png'}

]

function criarItemMenu (estados){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoLink = document.createElement('a')
    

    novoLink.href = '#'

    novoLink.textContent = estados.nome

    novoLink.style = `--cor-houver: ${estados.cor}`

    novoImagem.src = `./icons/${estados.icon}`

    novoItem.appendChild(novoImagem)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

estado.forEach(criarItemMenu)



const categorias = [
    {nome: 'Pernambuco',  img: 'pe-fernando.avif', titulo:'Fernando de Noronha', descricao: 'A natureza bem preservada, fora e dentro da água e a sensação de estar sempre seguro são qualidades que fazem os visitantes se apaixonarem por Fernando de Noronha. Tartarugas, arraias, golfinhos e tubarões de recife nadam em suas águas mornas. '},
    {nome:'Tocantins',  img: 'tocantins.webp', titulo: 'Jalapão', descricao: 'O Jalapão  oferece as mais diversas paisagens naturais, entre elas fervedouros de águas cristalinas, cachoeiras e dunas. É um destino lindo e muito diferente, ideal para fugir dos grandes centros urbanos e relaxar dentre as belezas do cerrado.'},
    {nome:'Rio de Janeiro', img: 'rio.webp', titulo: 'Cristo Redentor', descricao:'A Estátua do Cristo Redentor não é apenas uma obra de arte monumental; é um testemunho da fé e da cultura brasileira. Esta estátua art déco de 38 metros de altura tem sido um símbolo de paz e acolhimento desde sua inauguração em 1931.'},
    {nome:'Amazonas',  img: 'amazonia.jpeg', titulo: 'Teatro Amazonas', descricao: 'O edifício renascentista, que hoje é tombado como Patrimônio Histórico pelo IPHAN, foi construído em 1896 para atender a uma exigência da época: ser um lugar onde companhias de espetáculos estrangeiras pudessem se apresentar para a elite local.'},
    {nome:'Maranhão',  img: 'maranhao.png', titulo: 'Lençóis Maranhenses', descricao: 'É conhecido por sua vasta paisagem desértica de altas dunas de areia branca e lagoas sazonais de águas pluviais. Lagoa Azul e Lagoa Bonita são duas das maiores lagoas. É o principal destino indutor do turismo no estado. '},

]
function novoCard(local){
    const listaCard = document.getElementById('argumentos')
    const localCard = document.createElement('div')
    localCard.classList.add('card')

    const novoImg = document.createElement('img')
    novoImg.src = `./img/${local.img}`

    const novaCobertura=document.createElement('h2')
    novaCobertura.textContent = local.titulo

    const novoLugar = document.createElement('h3')
    novoLugar.textContent= local.nome

    const novaDescricao = document.createElement('p')
    novaDescricao.textContent = local.descricao

    
    localCard.appendChild(novoImg)
    localCard.appendChild(novaCobertura)
    localCard.appendChild(novoLugar)
    localCard.appendChild(novaDescricao)

    listaCard.appendChild(localCard)
}
categorias.forEach(novoCard)


const botaoTeste = document.getElementById('teste')

function criarElementos(){
    const body = document.querySelector('body')
    const novoBotao = document.createElement('button')
    novoBotao.textContent = 'Saiba Mais'

    body.appendChild(novoBotao)
    console.log('teste')
    criarElementos()
        botaoTeste.addEventListener('click', criarElementos)

    }
      
                                           