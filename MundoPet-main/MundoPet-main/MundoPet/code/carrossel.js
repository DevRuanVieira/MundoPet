
let imagens=['img/dog1.jpeg','img/dog2.jpeg','img/dog3.jpeg'];
let index =0;
let time=5000;
function slideShow(){
    
    document.getElementById('cabecalho-img-dog1').src=imagens[index];
    
    index++;

    if(index == imagens.length){
        index=0;
    }

    setTimeout('slideShow()',time);
    
}

slideShow();