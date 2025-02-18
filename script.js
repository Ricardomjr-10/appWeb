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

db.onupgradeneeded = function() {
    const db = event.target.result;
    db.createObjectStore("clientes", {keyPath: "id", autoIncrement: true});
    db.createObjectStore("produtos", {keyPath: "id", autoIncrement: true});
    db.createObjectStore("vendas", {keyPath: "id", autoIncrement: true});
};  

const cadastros = db.transaction(["clientes", "produtos", "vendas"], "readwrite");
const clientes = cadastros.objectStore("clientes");
const produtos = cadastros.objectStore("produtos");
const vendas = cadastros.objectStore("vendas");

const btnCadastrarClientes = document.getElementById("cadastrar_clientes");
const btnCadastrarProdutos = document.getElementById("cadastrar_produtos");
const btnCadastrarVendas = document.getElementById("cadastrar_vendas");

btnCadastrarClientes.addEventListener("click", () => {
    const nome = document.getElementById("nome_clientes").value;
    cadastros.objectStore("clientes").add({nome});
    document.getElementById("nome_clientes").value = "";
});

btnCadastrarProdutos.addEventListener("click", () => {
    const nome = document.getElementById("nome_produtos").value;
    const preco = document.getElementById("preco_produtos").value;
    const quantidade = document.getElementById("quantidade_produtos").value;
    cadastros.objectStore("produtos").add({nome, preco, quantidade});
    document.getElementById("nome_produtos").value = "";
    document.getElementById("preco_produtos").value = "";
    document.getElementById("quantidade_produtos").value = "";
});

btnCadastrarVendas.addEventListener("click", () => {
    const nome_cliente = document.getElementById("nome_vendas").value;
    const nome_produto = document.getElementById("nome_produtos_vendas").value;
    const quantidade = document.getElementById("quantidade_vendas").value;
    const preco = document.getElementById("preco_vendas").value;
    cadastros.objectStore("vendas").add({nome_cliente, nome_produto, quantidade, preco});
    document.getElementById("nome_vendas").value = "";
    document.getElementById("nome_produtos_vendas").value = "";
    document.getElementById("quantidade_vendas").value = "";
    document.getElementById("preco_vendas").value = "";
});

console.log(cadastros, clientes, produtos, vendas);