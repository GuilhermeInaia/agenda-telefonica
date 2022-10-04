const API_URL = 'http://localhost:8000';

function buscarParaEditar(id) {
    input_editar_id.value = id;
    fetch(API_URL+'/agenda/'+id)
    .then(res => res.json())
    .then(dados => {
        input_editar_nome.value = dados.nome;
        input_editar_telefone.value = dados.telefone;
        input_editar_cidade = dados.cidade;
    });
}

function atualizarLista() {
    tabela_agenda.innerHTML = '';

    fetch(API_URL+'/agenda')

    .then(function (criar){
        return criar.json();
    })
    .then(function (lista){
        tabela_agenda.innerHTML = ""
        lista.forEach(function (cadaContato) {
            tabela_agenda.innerHTML +=`
            <tr>
                <td>${cadaContato.id}</td>
                <td>${cadaContato.nome}</td>
                <td>${cadaContato.telefone}</td>
                <td>${cadaContato.cidade}</td>
                <td> 
                    <button onclick="buscarParaEditar(${cadaContato.id})"data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning">
                    Editar
                    </button>

                    <button onclick= "excluir(${cadaContato.id})" class="btn btn-danger">
                        Excluir
                    </button>
                </td>
            </tr>
        `});

    });
}   

async function excluir (id) {
    let res = confirm('Você deseja excluir o cadastro ?');
    if ( res != true){
        return;
    }
    await fetch(API_URL+'/agenda/'+id, {
        method: 'DELETE'
    });
    
    atualizarLista();
}

atualizarLista()

function editar(){
    event.preventDefault();

    let dados = {
       nome: input_editar_nome.value,
       telefone: input_editar_telefone.value,
       cidade: input_editar_cidade.value,
    };
    fetch(API_URL+'/agenda/'+input_editar_id.value, {
    method: 'PATCH',
    body: JSON.stringify(dados),
    headers: {
        'Content-Type' : 'application/json'
    }
    })
    .then(res => res.json())
    .then(() => atualizarLista());

    let x = document.querySelector('[data-bs-dismiss="offcanvas"]');

    x.dispatchEvent(new Event('click'));
    
}
 
function incluir() {

    event.preventDefault();

    let dados = {
        nome: input_nome.value,
        telefone: input_telefone.value,
        cidade: input_cidade.value,
    }

    fetch(API_URL+'/agenda', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
        'Content-Type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => atualizarLista());

    let y = document.querySelector('[data-bs-dismiss="modal"]');
    y.dispatchEvent(new Event('click'));

    form_add.reset();
}

