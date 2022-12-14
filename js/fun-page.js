/****************************************************************************************************************/
/********************************************** AJAX CONTEUDO ***************************************************/

function atualizarConteudo() {
    const content = document.getElementById('content');
    const url = document.querySelectorAll('.list p');

    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    for(let i = 0; i < url.length; i++){
        let urlAtual = url[i].getAttribute('value');

        url[i].addEventListener('click', function(){
            xhr.open('GET', urlAtual);

            xhr.send();
        
            xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200){
                content.innerHTML = xhr.response;
            }}
        })
    }
}

atualizarConteudo();

/****************************************************************************************************************/
/*********************************************** MENU MOBILE ****************************************************/

function toggleMenu(){

    const menuMobile = document.getElementById('menu-mobile');
    console.log(menuMobile);

    menuMobile.addEventListener('click', function(){
        menuMobile.classList.toggle('menu-active');
    });
}

toggleMenu();

/****************************************************************************************************************/
/********************************************** HEADER FIXADO ***************************************************/

function fixarMenu() {
    const header2 = document.getElementById("header-2");
    const list = document.getElementById('list');

    window.onscroll = function() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            header2.classList.add('header-fixed');
            list.classList.add("list-fixed");
        } else {
            header2.classList.remove('header-fixed');
            list.classList.remove('list-fixed');
        }
    }
}

fixarMenu();