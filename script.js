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