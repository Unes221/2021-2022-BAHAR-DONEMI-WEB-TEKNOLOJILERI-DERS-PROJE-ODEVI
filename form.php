<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    
    <div class="container">
     <p class=" fw-bold fs-2">Adınız= <?php echo $_POST['ad']  ?> </p><br>
     <p class=" fw-bold fs-2">Mailiniz= <?php echo $_POST['mail']  ?> </p><br>
     <p class=" fw-bold fs-2">Adresiniz= <?php echo $_POST['adres']  ?> </p><br>
     <p class=" fw-bold fs-2">Sehriniz= <?php echo $_POST['sehir']  ?> </p><br>
     <p class=" fw-bold fs-2">Cinsiyetiniz= <?php echo $_POST['cins']  ?> </p><br>
     <p class=" fw-bold fs-2">Bilinen diller= <?php foreach( $_POST['dil']  $dil){echo $dil.",";
     }
       ?> </p><br>
     <a href="İletişim.html" class="text-decoration-none">Geri dönmek tıklayın</a>
      
    </div>
</body>
</html>