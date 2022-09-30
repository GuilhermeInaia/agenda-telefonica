fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) =>  {
        regioes.forEach((cadaRegiao) => {
            document.getElementById('region').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;        
        });
    }) 

    function buscarEstado(){
        let id_estado = document.getElementById('region').value
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id_estado}/estados`)
        .then((resposta) => resposta.json())
        .then((estado) => {
                document.getElementById('states').innerHTML = " "
                estado.forEach((cadaEstado) => {
                    document.getElementById('states').innerHTML += `
                    <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
                    `;

             });
        
        });
    }

    function buscarCidade(){
        let id_cidade = document.getElementById('states').value
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id_cidade}/microrregioes`)
        .then((resposta) => resposta.json())
        .then((cidade) => {
                document.getElementById('city').innerHTML = " "
                cidade.forEach((cadaCidade) => {
                    document.getElementById('city').innerHTML += `
                    <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
                    `;

             });
        
        });
    }

    function buscarBairro() {
        let id_bairro = document.getElementById('city').value 
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/${id_bairro}/subdistritos`) 
        .then((resposta) => resposta.json())
        .then((bairro) => {
            document.getElementById('district').innerHTML = " "
            bairro.forEach((cadaBairro) => {
                document.getElementById('district').innerHTML += `
                <option value="${cadaBairro.id}">${cadaBairro.nome}</option>
                `;
            });
        });
    }