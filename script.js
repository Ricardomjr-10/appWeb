//ultilizar o indexdb
let db

const request =indexedDB.open("banco de dados", 1);

request.onerror =(event) => {
    console.error("erro ao abrir o banco de dados", event.target.error);
}

request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("clientes", {keyPath: "id", autoIncrement: true});
    db.createObjectStore("produtos", {keyPath: "id", autoIncrement: true});
    db.createObjectStore("vendas", {keyPath: "id", autoIncrement: true});
}

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("banco de dados aberto com sucesso", db);
}



const btnCadastro = document.getElementById("cadastro");
const btnMostrar = document.getElementById("mostrar");
const btnEditar = document.getElementById("editar");
const btnHome = document.getElementById("home");

const btns_cadastro_clientes = document.getElementById("btns_cadastro_clientes");
const btns_cadastro_produtos = document.getElementById("btns_cadastro_produtos");
const btns_cadastro_vendas = document.getElementById("btns_cadastro_vendas");

const btns_mostrar_clientes = document.getElementById("btns_mostrar_clientes");
const btns_mostrar_produtos = document.getElementById("btns_mostrar_produtos");
const btns_mostrar_vendas = document.getElementById("btns_mostrar_vendas");

const btns_editar_clientes = document.getElementById("btns_editar_clientes");
const btns_editar_produtos = document.getElementById("btns_editar_produtos");

btnHome.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "none";
    document.getElementById("mostrar_clientes").style.display = "none";
    document.getElementById("mostrar_produtos").style.display = "none";
    document.getElementById("mostrar_vendas").style.display = "none";
    document.getElementById("editar_clientes").style.display = "none";
    document.getElementById("editar_produtos").style.display = "none"; 
});

btnCadastro.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "block";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("cadastros").style.display = "block";
    document.getElementById("tela_mostrar").style.display = "none";
    document.getElementById("tela_editar").style.display = "none";
 
});

btnMostrar.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "block";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "none";
    document.getElementById("tela_mostrar").style.display = "block";
    document.getElementById("tela_editar").style.display = "none";
 
});

btnEditar.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "block";
    document.getElementById("tela_mostrar").style.display = "none";
    document.getElementById("cadastros").style.display = "none";
});

btns_cadastro_clientes.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "block";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "none";
    
});

btns_cadastro_produtos.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "block";
    document.getElementById("cadastro_vendas").style.display = "none";
   
});

btns_cadastro_vendas.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "block";
    
});

btns_mostrar_clientes.addEventListener("click", () => {
    document.getElementById("mostrar_clientes").style.display = "block";
    document.getElementById("mostrar_produtos").style.display = "none";
    document.getElementById("mostrar_vendas").style.display = "none";
    document.getElementById("cadastros").style.display = "none";
});

btns_mostrar_produtos.addEventListener("click", () => {
    document.getElementById("mostrar_clientes").style.display = "none";
    document.getElementById("mostrar_produtos").style.display = "block";
    document.getElementById("mostrar_vendas").style.display = "none";
    document.getElementById("cadastros").style.display = "none";
});

btns_mostrar_vendas.addEventListener("click", () => {
    document.getElementById("mostrar_clientes").style.display = "none";
    document.getElementById("mostrar_produtos").style.display = "none";
    document.getElementById("mostrar_vendas").style.display = "block";
    document.getElementById("cadastros").style.display = "none";
});

btns_editar_clientes.addEventListener("click", () => {
    document.getElementById("editar_clientes").style.display = "block";
    document.getElementById("editar_produtos").style.display = "none";
    document.getElementById("tela_editar").style.display = "block";
});

btns_editar_produtos.addEventListener("click", () => {
    document.getElementById("editar_clientes").style.display = "none";
    document.getElementById("editar_produtos").style.display = "block";
});
//conectando com o banco de dados


const btnCadastrarClientes = document.getElementById("cadastrar_clientes");
const btnCadastrarProdutos = document.getElementById("cadastrar_produtos");
const btnCadastrarVendas = document.getElementById("cadastrar_vendas");

btnCadastrarClientes.addEventListener("click", () => {
    const nome = document.getElementById("nome_clientes").value;
    const transaction = db.transaction(["clientes"], "readwrite");
    const objectStore = transaction.objectStore("clientes");
    objectStore.add({nome});
    document.getElementById("nome_clientes").value = "";
});

btnCadastrarProdutos.addEventListener("click", () => {
    const nome = document.getElementById("nome_produtos").value;
    const preco = document.getElementById("preco_produtos").value;
    const quantidade = document.getElementById("quantidade_produtos").value;
    
    const transaction = db.transaction(["produtos"], "readwrite");
    const objectStore = transaction.objectStore("produtos");
    objectStore.add({nome, preco, quantidade});

    document.getElementById("nome_produtos").value = "";
    document.getElementById("preco_produtos").value = "";
    document.getElementById("quantidade_produtos").value = "";
});

btnCadastrarVendas.addEventListener("click", () => {
    const nome_cliente = document.getElementById("nome_vendas").value;
    const nome_produto = document.getElementById("nome_produtos_vendas").value;
    const quantidade = document.getElementById("quantidade_vendas").value;
    const preco = document.getElementById("preco_vendas").value;
    
    const transaction = db.transaction(["vendas"], "readwrite");
    const objectStore = transaction.objectStore("vendas");
    objectStore.add({nome_cliente, nome_produto, quantidade, preco});

    document.getElementById("nome_vendas").value = "";
    document.getElementById("nome_produtos_vendas").value = "";
    document.getElementById("quantidade_vendas").value = "";
    document.getElementById("preco_vendas").value = "";
});

//mostrar o banco no console sem botao

const btnMostrarClientes = document.getElementById("btns_mostrar_clientes");
const btnMostrarProdutos = document.getElementById("btns_mostrar_produtos");
const btnMostrarVendas = document.getElementById("btns_mostrar_vendas");

btnMostrarClientes.addEventListener("click", () => {
    const transaction = db.transaction(["clientes"], "readonly");
    const objectStore = transaction.objectStore("clientes");
    const request = objectStore.getAll();
    request.onsuccess = () => {
        const clientes = request.result;
        //mostrar na tela div
        const resultado = document.querySelector(".resultadoClientes");
        resultado.innerHTML = "";
        clientes.forEach((cliente) => {
            const li = document.createElement("li");
            li.textContent = `${cliente.id} - ${cliente.nome}`;
            resultado.appendChild(li);
        });
    };
});

btnMostrarProdutos.addEventListener("click", () => {
    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.getAll();
    request.onsuccess = () => {
        const produtos = request.result;
        const resultado = document.querySelector(".resultadoProdutos");
        resultado.innerHTML = "";
        produtos.forEach((produto) => {
            const li = document.createElement("li");
            li.textContent = `${produto.id} - ${produto.nome} - Preço: ${produto.preco} - Quantidade: ${produto.quantidade}`;
            resultado.appendChild(li);
        });
    };
});

btnMostrarVendas.addEventListener("click", () => {
    const transaction = db.transaction(["vendas"], "readonly");
    const objectStore = transaction.objectStore("vendas");
    const request = objectStore.getAll();
    request.onsuccess = () => {
        const vendas = request.result;
        const resultado = document.querySelector(".resultadoVendas");
        resultado.innerHTML = "";
        vendas.forEach((venda) => {
            const li = document.createElement("li");
            li.textContent = `${venda.id} - ${venda.nome_cliente} - ${venda.nome_produto} - Quantidade: ${venda.quantidade} - Preço: ${venda.preco}`;
            resultado.appendChild(li);
        });
    };
});

// Function to delete a client by ID
function excluirCliente(id) {
    const transaction = db.transaction(["clientes"], "readwrite");
    const objectStore = transaction.objectStore("clientes");
    const request = objectStore.delete(id);
    request.onsuccess = () => {
        console.log(`Cliente com ID ${id} excluído com sucesso.`);
    };
    request.onerror = (event) => {
        console.error(`Erro ao excluir cliente com ID ${id}:`, event.target.error);
    };
}

// Function to delete a product by ID
function excluirProduto(id) {
    const transaction = db.transaction(["produtos"], "readwrite");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.delete(id);
    request.onsuccess = () => {
        console.log(`Produto com ID ${id} excluído com sucesso.`);
    };
    request.onerror = (event) => {
        console.error(`Erro ao excluir produto com ID ${id}:`, event.target.error);
    };
}

const btnExcluirClientes = document.getElementById("btn_excluir_clientes");
btnExcluirClientes.addEventListener("click", () => {
    const id = document.getElementById("excluir_nome_clientes").value;
    excluirCliente(id);
});

const btnExcluirProdutos = document.getElementById("btn_excluir_produtos");
btnExcluirProdutos.addEventListener("click", () => {
    const id = document.getElementById("excluir_nome_produtos").value;
    excluirProduto(id);
});

