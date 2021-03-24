var eklebtn=document.getElementById("ekleBtn") //buton
var secilen

var audio = new Audio("images/check1.mp3");

function sescal(){
    audio.play();
}



function ekle(){

var yeniLi; // ilerde create ile oluşturacağımız liste elemanı. 
var check;  // checkbox

    var liste1=document.getElementById("yapılacakLi")
    var todo=document.getElementById("todo").value // txt
    
    yeniLi=document.createElement("li") //liste elemanı oluşturduk
    liste1.appendChild(yeniLi)  // listenin sonuna ekledik.
    yeniLi.innerHTML=todo; // ve içeriğine kullanıcının girdiği "yapılacak" şeyi atadık.
    yeniLi.style.marginTop="20px"


 // checkbox //
    check=document.createElement("INPUT")
    check.setAttribute("type","checkbox")
    check.style.width="25px"
    check.style.height="25px"
    check.style.marginLeft="210px"
    check.style.marginRight="150px"
    check.style.textAlign="center"

    yeniLi.appendChild(check) // yeni eklediğimiz elemana check box ekledik.
    
    check.addEventListener("click",tamamla)  // check edildiğinde tamamla fonksiyonu ve sescal fonksiyonu çalışsın.
    check.addEventListener("click",sescal)
 // checkbox //


 // iptal resmini oluşturup yeniLi ye ekledik.
    var iptal=document.createElement("img")
    iptal.setAttribute("src","images/sil.png")
    iptal.setAttribute("id","iptalBtn")
    iptal.style.width="35px"
    yeniLi.appendChild(iptal)
    iptal.addEventListener("click",sil)
    
}
//////////////////////

function sil()
{

    //O anda tıklanan aktif butonun kapsayıcısını yani liste elemanını sil
    var secilen=event.currentTarget.parentNode;
    secilen.remove();
    
}




function tamamla(){

    var tamamlananli=document.createElement("li")
    var liste2=document.getElementById("bitenlerLi")
    liste2.appendChild(tamamlananli)
    secilen=event.currentTarget.parentNode;  //O anda tıklanan aktif butonun kapsayıcısını yani liste elemanını sil.

   

    secilen.childNodes[1].setAttribute("checked","true") // tamamlandı kısmında checked halde dursun.

    secilen.childNodes[1].setAttribute("disabled","true") // ve tekrar checke basılmaması için tıklamayı kapattık.

    secilen.childNodes[2].setAttribute("onclick","sil();");  // childnode[2] çarpı resmi olduğundan ona basınca sil fonk çalıştırdım.
    tamamlananli.innerHTML=secilen.innerHTML
    
    //console.log(secilen.childNodes[1])   1. indis checkbox mı diye kontrol ettim.
    


    sil()

    
   


}

