/****************************************************************************************************************/
/********************************************** AJAX CONTEUDO ***************************************************/

function atualizarConteudo() {
    var content = document.getElementById('content');
    var url = document.querySelectorAll('.list p');

    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    for(var i = 0; i < url.length; i++){
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

    menuMobile.addEventListener('click', function(){
        menuMobile.classList.toggle('menu-active');
    });
}

toggleMenu();

/****************************************************************************************************************/
/********************************************** HEADER FIXADO ***************************************************/