let total = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let nomePrato="";
let nomeBebida="";
let nomeSobremesa="";

function selecionap1() {
    let deselect = document.querySelector(".p1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".p2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".p3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".p4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".p1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".p2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".p3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".p4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".p1");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".p1 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorPrato = 14.90;
    nomePrato = "Frango Yin YangP";
}
function selecionap2() {
    let deselect = document.querySelector(".prato div");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".p2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".p3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".p4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".p1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".p2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".p3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".p4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".p2");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".p2 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorPrato = 15.90;
    nomePrato = "Frango Yin YangM";
}
function selecionap3() {
    let deselect = document.querySelector(".prato div");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".p2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".p3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".p4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".p1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".p2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".p3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".p4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".p3");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".p3 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorPrato = 16.90;
    nomePrato = "Frango Yin YangG";
}
function selecionap4() {
    let deselect = document.querySelector(".prato div");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".p2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".p3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".p4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".p1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".p2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".p3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".p4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".p4");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".p4 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorPrato = 17.90;
    nomePrato = "Frango Yin YangGG";
}
function selecionab1() {
    let deselect = document.querySelector(".b1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".b2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".b3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".b4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".b1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".b2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".b3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".b4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".b1");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".b1 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorBebida = 4.90;
    nomeBebida = "Coquinha gelada, mesmo";
}
function selecionab2() {
    let deselect = document.querySelector(".b1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".b2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".b3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".b4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".b1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".b2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".b3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".b4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".b2");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".b2 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorBebida = 5.90;
    nomeBebida = "Coquinha ainda mais gelada";
}
function selecionab3() {
    let deselect = document.querySelector(".b1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".b2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".b3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".b4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".b1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".b2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".b3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".b4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".b3");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".b3 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorBebida = 6.90;
    nomeBebida = "Coquinha geladíssima";
}
function selecionab4() {
    let deselect = document.querySelector(".b1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".b2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".b3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".b4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".b1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".b2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".b3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".b4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".b4");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".b4 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorBebida = 7.90;
    nomeBebida = "Coquinha ultra mega gelada";
}

function selecionas1() {
    let deselect = document.querySelector(".s1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".s2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".s3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".s4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".s1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".s2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".s3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".s4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".s1");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".s1 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorSobremesa = 7.90;
    nomeSobremesa = "Pudim calda ruim";
}
function selecionas2() {
    let deselect = document.querySelector(".s1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".s2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".s3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".s4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".s1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".s2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".s3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".s4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".s2");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".s2 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorSobremesa = 8.90;
    nomeSobremesa = "Pudim";
}
function selecionas3() {
    let deselect = document.querySelector(".s1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".s2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".s3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".s4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".s1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".s2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".s3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".s4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".s3");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".s3 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorSobremesa = 9.90;
    nomeSobremesa = "Pudim semi-bom";
}
function selecionas4() {
    let deselect = document.querySelector(".s1");
    deselect.classList.remove("selecionaBox");
    let deselect2 = document.querySelector(".s2");
    deselect2.classList.remove("selecionaBox");
    let deselect3 = document.querySelector(".s3");
    deselect3.classList.remove("selecionaBox");
    let deselect4 = document.querySelector(".s4");
    deselect4.classList.remove("selecionaBox");
    let deselectimg = document.querySelector(".s1 img:nth-child(5)");
    deselectimg.classList.add("hidden");
    let deselectimg2 = document.querySelector(".s2 img:nth-child(5)");
    deselectimg2.classList.add("hidden");
    let deselectimg3 = document.querySelector(".s3 img:nth-child(5)");
    deselectimg3.classList.add("hidden");
    let deselectimg4 = document.querySelector(".s4 img:nth-child(5)");
    deselectimg4.classList.add("hidden");
    let select = document.querySelector(".s4");
    select.classList.add("selecionaBox");
    let selectImg = document.querySelector(".s4 img:nth-child(5)");
    selectImg.classList.remove("hidden");
    valorSobremesa = 10.90;
    nomeSobremesa = "Pudim do bom";
}

function mudaBotao() {
    let p1 = document.querySelector(".p1");
    let checkp1 = p1.classList.contains("selecionaBox");
    let p2 = document.querySelector(".p2");
    let checkp2 = p2.classList.contains("selecionaBox");
    let p3 = document.querySelector(".p3");
    let checkp3 = p3.classList.contains("selecionaBox");
    let p4 = document.querySelector(".p4");
    let checkp4 = p4.classList.contains("selecionaBox");
    let b1 = document.querySelector(".b1");
    let checkb1 = b1.classList.contains("selecionaBox");
    let b2 = document.querySelector(".b2");
    let checkb2 = b2.classList.contains("selecionaBox");
    let b3 = document.querySelector(".b3");
    let checkb3 = b3.classList.contains("selecionaBox");
    let b4 = document.querySelector(".b4");
    let checkb4 = b4.classList.contains("selecionaBox");
    let s1 = document.querySelector(".s1");
    let checks1 = s1.classList.contains("selecionaBox");
    let s2 = document.querySelector(".s2");
    let checks2 = s2.classList.contains("selecionaBox");
    let s3 = document.querySelector(".s3");
    let checks3 = s3.classList.contains("selecionaBox");
    let s4 = document.querySelector(".s4");
    let checks4 = s4.classList.contains("selecionaBox");
    if ((checkp1===true||checkp2===true||checkp3===true||checkp4===true) && (checkb1===true||checkb2===true||checkb3===true||checkb4===true) && (checks1===true||checks2===true||checks3===true ||checks4===true)){
        let botao = document.querySelector(".bottom button");
        botao.classList.remove("hiddenButton");
    };
}
function fechaPedido(){
    total = valorPrato+valorBebida+valorSobremesa;
    let mensagemZipZop=`Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total.toFixed(2)}`;
    
    mensagemZipZop = window.encodeURIComponent(mensagemZipZop);
    window.open("https://wa.me/5561991796354?text=" + mensagemZipZop, "_blank");
}