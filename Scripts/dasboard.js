'use strict'
const itemMenu = document.querySelectorAll('.item-menu')

const btnExp = document.querySelector('#btn-exp')
const menuLateral = document.querySelector('.menu-lateral')

function selectLink() {
    itemMenu.forEach((item)=>item.classList.remove('ativo'))
    this.classList.add('ativo')
}

itemMenu.forEach((item)=>item.addEventListener('click',selectLink))

//Expandir o menu

btnExp.addEventListener('click',function(){
    menuLateral.classList.toggle('expandir')

})