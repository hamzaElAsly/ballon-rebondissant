
let trn = document.getElementById("train");
let bln = document.getElementById("balon");
var id;
function game(){
    trnwidth =document.getElementById('latrn').value;
    trnheight =document.getElementById('hautrn').value;

    // document.querySelector('.train').style=`width:${trnwidth}px;height:${trnheight}px;`
    trn.style.width = trnwidth+'px';
    trn.style.height = trnheight+'px';
    trn.style.background = colorT;

    balltaill = document.getElementById('Demrblon').value;
    posX = (document.getElementById("posx").value * trnwidth)/100 ;
    posY = (document.getElementById("posy").value * trnheight)/100;
    bln.style.width = balltaill +'px';
    bln.style.height = balltaill +'px';
    bln.style.background = colorC;
    bln.style.borderColor = colorBlon;

    vtss = document.getElementById("speedV").value;
    if(vtss == "lent"){
        vtssX = 1;
        vtssY = 1; 
    }else if(vtss == "moyenne"){
        vtssX = 2;
        vtssY = 2;
    }else if(vtss == "rapide"){
        vtssX = 3;
        vtssY = 3;
    }   
}
function Démarrer(){
    clearInterval(id);
    id = setInterval(ballon, 2)
function ballon(){
    
    if(posX > trnwidth - balltaill){
        vtssX=-vtssX
    }
    if(posX < 0){
        vtssX=-vtssX
    }
    if(posY > trnheight - balltaill){
        vtssY=-vtssY
    }
    if(posY < 0){
        vtssY=-vtssY
    }
    bln.style.left = (posX+vtssX)+'px'
    bln.style.top = (posY+vtssY)+'px';
    posX += vtssX;
    posY += vtssY;
}
}
 function stopDémarrer(){
    clearInterval(id);
}
function Arrêter(){
    document.getElementById('posx').value="";
    document.getElementById("posy").value="";
    // trn.style="visibility:hidden;";
    trn.style.background = "white";
    bln.style.backgroundColor ="white";
    bln.style.borderColor = "white ";
    posX += vtssX=0;
    posY += vtssY=0;
    vtssX=0;
    vtssY=0;
    trn.style.width="";
    trn.style.height="";
  
}

