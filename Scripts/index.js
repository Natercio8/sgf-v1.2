'use strict'
let SENHA = 0
let DataH = new Date()

let _url = ""

let hoje = `${DataH.getDate()}/${DataH.getMonth() + 1}/${DataH.getFullYear()}`
let horaHoje = `${DataH.getHours()}h:${DataH.getMinutes()}`

/******************************************************************************************/

const sp = document.querySelector('#sp')

const sub_menu = document.querySelector('.sub-menu')
const section = document.querySelector('section')

const dt_1 = document.querySelector('.dt_1')
const dt_2 = document.querySelector('.dt_2')

var _tipo = ""
var _nome_ = ""

function _sub_menu_(tipo, nome) {
    let element = document.querySelector('#tipo_normal').value
    SENHA++
    _url = "Backend/senha_normal.php"
    //alert(element)
    sub_menu.style.display = "none"
    section.style.display = "block"
    

    send(_url, tipo, SENHA)
    //console.log("Senha Normal "+tipo)
    Recibo(nome, hoje, horaHoje, tipo, SENHA)

}
function _sub_menu(tipo, nome) {
    let element = document.querySelector('#tipo_prioritaria').value
    SENHA++
    _url = "Backend/senha_prior.php"
    let _tipo_ = tipo+"1-"

    //alert(element)
    sub_menu.style.display = "none"
    section.style.display = "block"

    sp.textContent = "Senha prioritária"
    //console.log("Senha Prioritária " + tipo)
    send(_url, tipo, SENHA)
    Recibo(nome, hoje, horaHoje, _tipo_, SENHA)
}

function showTypeService(tipo, nome) {

    sub_menu.innerHTML = `
        <div class="btns">
            <h1>${tipo}</h1>
            <br>
            <input type="button" id="tipo_normal" value="SENHA NORMAL"  onclick="_sub_menu_('${tipo}','${nome}')">
            <input type="button" id="tipo_prioritaria" value="SENHA PRIORITÁRIA"  onclick="_sub_menu('${tipo}','${nome}')">
        </div>`
}
function TipoServico(letra, nome) {
    menu()
    Section()
    showTypeService(letra, nome)
}

function menu() {
    sub_menu.style.display = "block"
}

function Section() {
    section.style.display = "none"
}

/**********************************************************************************************************/
/** Função que envia as senhas no banco dados*/
function send(url, tipo, senha) {

    let enviar = {
        "Tipo": tipo,
        "Senha": senha
    }

    fetch(url,{
        "method": "POST",
        "headers": {
            "content-Type": "application/json; charset=utf-8"
        },
        "body": JSON.stringify(enviar)
    })
}

/**********************************************************************************************************/

function Recibo(snome, datah, HoraHoje,sletra, senha) {

    document.getElementById('Snome').innerHTML = snome
    document.getElementById('hoje').innerHTML = datah

    document.getElementById('horaHoje').innerHTML = HoraHoje
    document.getElementById('Sletra').innerHTML = sletra

    document.getElementById('Senha').innerHTML = senha
    window.print()
}

/******************************************************************************************************************************/
function buscar() {
    const url = fetch("./Backend/servicos.php")
    return url
}

async function main() {
    
    const url = buscar()
    const result = await url
    const data = await result.json()

    

    for (let i = 0; i < data.length; i++) {

        const element = data[i];

        const{
            id_area,
            id_servico, 
            tipo_servico,
            nome_servico,
        }=element

        if (id_area == '2') {
            dt_1.innerHTML += `
    
                <div>
                    <h2>${tipo_servico}</h2>
                    <button type="submit" onclick="TipoServico('${tipo_servico}','${nome_servico}')"><strong>${nome_servico}</strong></button>
                </div>
            `
        }
        else if (id_area == '3') {
            dt_2.innerHTML += `
    
                <div>
                    <h2>${tipo_servico}</h2>
                    <button type="submit" onclick="TipoServico('${tipo_servico}','${nome_servico}')"><strong>${nome_servico}</strong></button>
                </div>
            `
        }
    }
}

/***************************************************************************************************************************************/
function loading() {
    main()
}