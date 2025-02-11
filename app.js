"use strict"
//"use strict" serve para corrigir os erros básicos

const categorias = [
    
    {nome: 'Rio de Janeiro', titulo: 'Cristo Redentor',cor: '#fff', icon: 'rio.webp', descricao: 'A Estátua do Cristo Redentor não é apenas uma obra de arte monumental; é um testemunho da fé e da cultura brasileira. Erguida no topo do Morro do Corcovado, a 710 metros acima do nível do mar, esta estátua art déco de 38 metros de altura tem sido um símbolo de paz e acolhimento desde sua inauguração em 1931.'},
    {nome: 'Amazonas', titulo: 'Teatro Amazonas', cor: 'blue', icon:'amazonia.jpeg', descricao: 'O edifício renascentista, que hoje é tombado como Patrimônio Histórico pelo IPHAN, foi construído em 1896 para atender a uma exigência da época: ser um lugar onde companhias de espetáculos estrangeiras pudessem se apresentar para a elite local.'},
    {nome: 'Tocantins', titulo: 'Jalapão', cor: 'yellow', icon: 'tocantins.webp', descricao: 'O Jalapão  oferece as mais diversas paisagens naturais, entre elas fervedouros de águas cristalinas, cachoeiras e dunas. É um destino lindo e muito diferente, ideal para fugir dos grandes centros urbanos e relaxar dentre as belezas do cerrado.'},
    {nome: 'Pernambuco', titulo: 'Fernando de Noronha', cor: 'pink', icon: 'pe-fernando.avif', descricao: 'Com praias deslumbrantes e um atmosfera tranquila, é o tipo de lugar que você pode ir várias e várias vezes e sempre se impressionará com sua beleza. A natureza bem preservada, fora e dentro da água e a sensação de estar sempre seguro são qualidades que fazem os visitantes se apaixonarem por Fernando de Noronha.'},
    {nome: 'Maranhão', titulo: 'Lençóis Maranhenses', cor: 'yellow', icon: 'maranhao.png', descricao: 'As dunas de areia e lagoas com águas cristalinas formadas pelas chuvas nos Lençóis Maranhenses tornam o lugar tão belo que já foi várias vezes cenário de filmes. A região dos Lençóis oferece uma paisagem realmente única e surpreendente!'}

]

function criarItemMenu(local){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = local.nome/*'PWBE' o texto dessa linha é mutável*/
    //document.documentElement.style.setProperty('--cor-hover', disciplinas.cor)
    novoLink.style = `--cor-hover: ${local.cor}`

    novoImagem.src = `./icon/${local.icon}`

    novoItem.textContent = criarItemMenu.titulo
    novoItem.textContent = criarItemMenu.descricao

    novoItem.appendChild(novoImagem)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}
//criarItemMenu()
local.forEach(criarItemMenu)


