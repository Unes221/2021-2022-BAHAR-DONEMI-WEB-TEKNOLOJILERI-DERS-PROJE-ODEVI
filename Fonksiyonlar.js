function form_denetleme()
{   var form2="";
    var form1= document.forms["formum"]["ad"].value;
    form2= document.forms["formum"]["mail"].value;
    var form3= document.forms["formum"]["mesaj"].value;
    var form4= document.forms["formum"]["adres"].value;
    var cevap= true;
    if(form1=="")
    {
        alert("Ad soyad girin !!!");
        cevap= false;
    }
    
    else if(form3=="")
    {
        alert("Mesaj girin !!!");
        cevap= false;
    }
    else if(form4=="")
    {
        alert("Adres girin !!!");
        cevap= false;
    }
    else if (form2.indexOf('@')== -1)
    {
        alert("Geçerli Email girin !!!");
        cevap= false;
    }
   
   return cevap;

}
function giris_kontrol()
{
    var cevap2=true;
    var giris2="";
    var giris1="";
    giris1= document.forms["Giriş"]["sifre"].value;
    giris2= document.forms["Giriş"]["Kullanıcı"].value;
    if(giris1=="")
    {
        alert("Şifre girin !!!");
        cevap2= false;
    }
    else if(giris1.length<6)
    {
        alert("Şifre en az 6 haneli olmalı !!!");
        cevap2= false;
    }
    else if (giris2.indexOf('@')== -1)
    {
        alert("Geçerli Email girin !!!");
        cevap2= false;
    }
    return cevap2;
}