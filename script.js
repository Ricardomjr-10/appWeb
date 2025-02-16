const btnCadastro = document.getElementById("cadastro");
const btnMostrar = document.getElementById("mostrar");
const btnEditar = document.getElementById("editar");
const btnHome = document.getElementById("home");

const btns_cadastro_clientes = document.getElementById("btns_cadastro_clientes");
const btns_cadastro_produtos = document.getElementById("btns_cadastro_produtos");
const btns_cadastro_vendas = document.getElementById("btns_cadastro_vendas");

btnHome.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("display").style.display = "none";
});

btnCadastro.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "block";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("display").style.display = "none";
});

btnMostrar.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "block";
    document.getElementById("btns_editar").style.display = "none";
    document.getElementById("display").style.display = "none";
});

btnEditar.addEventListener("click", () => {
    document.getElementById("btns_cadastro").style.display = "none";
    document.getElementById("btns_mostrar").style.display = "none";
    document.getElementById("btns_editar").style.display = "block";
    document.getElementById("display").style.display = "none";
});

btns_cadastro_clientes.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "block";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "none";
    document.getElementById("display").style.display = "block";
});

btns_cadastro_produtos.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "block";
    document.getElementById("cadastro_vendas").style.display = "none";
    document.getElementById("display").style.display = "block";
});

btns_cadastro_vendas.addEventListener("click", () => {
    document.getElementById("cadastro_clientes").style.display = "none";
    document.getElementById("cadastro_produtos").style.display = "none";
    document.getElementById("cadastro_vendas").style.display = "block";
    document.getElementById("display").style.display = "block";
});