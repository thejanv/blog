```php
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Week 04</title>

</head>

<body>

<!-- use get method without using form -->

<a href="samplegetmethod.php">Demo of the manual GET</a><br>

<!-- use get method without using form and passing parameter-->

<a href="samplegetmethod.php?par_1=Some value">Demo of the manual GET parameter passing</a><br>

<!-- use get method without using form and passing parameter-->

<a href="samplegetmethod.php?par_1=Some value&par_2=val2">Demo of the manual GET with 2 parameter passing</a>

  

<hr>

  

<!-- use get method without using form -->

<a href="math.php?opr=add">Add</a><br>

<!-- use get method without using form -->

<a href="math.php?opr=mpy">Multiply</a><br>

<?php

$num1 = 5;

$num2 = 2;

?>

</body>

</html>
```

```php
<?php

$opr = $_GET['opr'];

$num1 = 5;

$num2 = 2;

if ($opr == "add") {

$res = $num1 + $num2;

}elseif ($opr == 'mpy') {

$res = $num1 * $num2;

}else{

$res = "bad input";

}

echo "Result of " . $opr . " is : " . $res;

?>
```