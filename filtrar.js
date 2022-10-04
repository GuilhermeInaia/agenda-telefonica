function filtrar() {
    //valor que o usuario digitou
    let expressao = input_pesquisa.value.toLowerCase();

    //pegando todas as linhas da tabela_compras
    let linhas = tabela_agenda.getElementsByTagName('tr');
    
    for (let posicao in linhas){
        if(isNaN(posicao)){
            continue;
        }
        //se dentro da linha(<tr>) existir a expressao
        // digitada pelo usuario, mostra a linha
        //se nao, econde a linha

        let coluna1 = linhas [posicao].children[1].innerText.toLowerCase();
        let coluna2 = linhas [posicao].children[2].innerText.toLowerCase();

        let colunas = coluna1 + coluna2
        
        if(colunas.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }

}