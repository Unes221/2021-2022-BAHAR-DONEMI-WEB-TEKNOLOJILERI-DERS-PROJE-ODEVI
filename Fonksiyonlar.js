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
    else if (form2.indexOf('@')== 0)
    {
        alert("Geçerli Email girin !!!");
        cevap= false;
    }
   return cevap;

}
function giris_kontrol()
{
    var cevap2=false;
    return cevap2;
}