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
   <?php 
         $yaz="";
   if($_POST['Kullanıcı'] == 'can@sakarya.edu.tr' && $_POST['sifre'] == 'sakarya54')
   {
       $yaz="Hoşgeldiniz CAN Bey ...";
   }
   elseif($_POST['Kullanıcı'] == 'enesisik221@gmail.com' && $_POST['sifre'] == 'sakarya54')
   {
       $yaz="Hoşgeldiniz ENES Bey ...";
   }
   else
   {
       $yaz="Hatali Giriş !!!"
   }
    ?>
   <p class="fw-bold fs-2"><?php echo $yaz;?></p>
   <a href="index.html">Anasayfaya dönmek için tıklayın</a>

                
</body>
</html>