"use strict"
//"use strict" serve para corrigir os erros básicos



const disciplinas = [
    {nome: 'PE', cor: 'red', icon: 'ilha.png'},
    {nome: 'TO', cor: 'blue', icon:'jalapao.png'},
    {nome: 'MA', cor: 'yellow', icon: 'lencois.png'},
    {nome: 'RJ',  cor: 'pink', icon: 'redentor.png'},
    {nome: 'AM',  cor: 'pink', icon: 'teatro.png'}
 
]

function criarItemMenu(disciplinas){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplinas.nome
    novoLink.style = `--cor-hover: ${disciplinas.cor}`

    novoImagem.src = `./icons/${disciplinas.icon}`

    novoItem.appendChild(novoImagem)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

disciplinas.forEach(criarItemMenu)


const categorias = [
    
    {nome: 'Rio de Janeiro', titulo: 'Cristo Redentor', icon: 'rio.webp', descricao: 'A Estátua do Cristo Redentor não é apenas uma obra de arte monumental; é um testemunho da fé e da cultura brasileira. Erguida no topo do Morro do Corcovado, a 710 metros acima do nível do mar, esta estátua art déco de 38 metros de altura tem sido um símbolo de paz e acolhimento desde sua inauguração em 1931.'},
    {nome: 'Amazonas', titulo: 'Teatro Amazonas',  icon:'amazonia.jpeg', descricao: 'O edifício renascentista, que hoje é tombado como Patrimônio Histórico pelo IPHAN, foi construído em 1896 para atender a uma exigência da época: ser um lugar onde companhias de espetáculos estrangeiras pudessem se apresentar para a elite local.'},
    {nome: 'Tocantins', titulo: 'Jalapão', icon: 'tocantins.webp', descricao: 'O Jalapão  oferece as mais diversas paisagens naturais, entre elas fervedouros de águas cristalinas, cachoeiras e dunas. É um destino lindo e muito diferente, ideal para fugir dos grandes centros urbanos e relaxar dentre as belezas do cerrado.'},
    {nome: 'Pernambuco', titulo: 'Fernando de Noronha', icon: 'pe-fernando.avif', descricao: 'Com praias deslumbrantes e um atmosfera tranquila, é o tipo de lugar que você pode ir várias e várias vezes e sempre se impressionará com sua beleza. A natureza bem preservada, fora e dentro da água e a sensação de estar sempre seguro são qualidades que fazem os visitantes se apaixonarem por Fernando de Noronha.'},
    {nome: 'Maranhão', titulo: 'Lençóis Maranhenses',  icon: 'maranhao.png', descricao: 'As dunas de areia e lagoas com águas cristalinas formadas pelas chuvas nos Lençóis Maranhenses tornam o lugar tão belo que já foi várias vezes cenário de filmes. A região dos Lençóis oferece uma paisagem realmente única e surpreendente!'}

]
function criarItemMenu(local){
    const listaCategorias = document.getElementById('categorias')
    const novoCard = document.createElement('div')
    novoCard.classList.add('card') 
    
    novoLink.href = '#'
    novoLink.textContent = categorias.nome
    novoLink.style = `--cor-hover: ${local.cor}`

    novoImagem.src = `./icons/${local.icon}`

    novoItem.textContent = criarItemMenu.h3
    novoItem.textContent = criarItemMenu.h1


    novoItem.appendChild(novoImagem)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

local.forEach(criarItemMenu)


