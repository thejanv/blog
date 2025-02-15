---
title: Server-Side Web
description: PHP is a server-side scripting language used to process requests, interact with databases, and generate dynamic web content.
---
# PHP Expressions & Basics

## Variable Naming
- Use `$` to declare variables.
- Variables are case-sensitive.
- Variable names must start with a letter or an underscore (`_`).

## Strings
- **Double Quotes (`" "`):** Variables inside double quotes expand.
- **Single Quotes (`' '`):** Variables inside single quotes **do not** expand.

```php
$name = "John";
echo "Hello, $name!";  // Output: Hello, John!
echo 'Hello, $name!';  // Output: Hello, $name!
```

## Variables & Scope

### Static Variables
If you want to retain a variable's value after a function exits, use `static`:

```php
function counter() {
    static $count = 0;
    $count++;
    echo $count . "\n";
}
counter(); // 1
counter(); // 2
counter(); // 3
```

### Global Scope
A variable declared outside a function has **global scope** and can only be accessed outside a function.

### Global Keyword
The `global` keyword allows access to a global variable inside a function.

```php
$x = 5;
$y = 10;

function myTest() {
    global $x, $y;
    $y = $x + $y;
}

myTest();
echo $y; // Output: 15
```

Alternatively, use `$GLOBALS`:

```php
$x = 5;
$y = 10;

function myTest() {
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // Output: 15
```

### Local Scope
A variable declared inside a function is **local** to that function.

```php
function myFunction() {
    $x = 10;
    echo $x;
}
myFunction();
// echo $x; // Error! $x is not accessible here.
```

## Comments
- **Single-line comments**: `//` or `#`
- **HTML comment**: `<!-- comment -->`

---

## Increment/Decrement Operators

```php
$x = 12;
$y = 15 + $x++;
echo "x is $x and y is $y \n"; // x is 13 and y is 27
```

- `++$x` (pre-increment): Increments first, then uses the value.
- `$x++` (post-increment): Uses the value first, then increments.

## String Concatenation

```php
$a = 'Hello ' . 'World';
echo $a; // Hello World
```

## Ternary Operator

```php
$www = 123;
$msg = $www > 100 ? "Large" : "Small"; // condition ? True : False
echo $msg; // Large
```


## Side Effect Operator (`.=`)
```php
$out = "Hello";
$out .= " World";
echo $out; // Hello World
```
- Useful for growing strings efficiently.

## Type Casting
- `+` (math operator) converts values to numbers.
- `.` (string operator) converts values to strings.

```php
$value = "same" + 25; // 25 ("same" is treated as 0)
```

Explicit casting:

```php
$value = (int) 9.9 + 10; // 19
```

Boolean conversion examples:

```php
echo "A" . FALSE . "B"; // AB
echo "A" . TRUE . "B";  // A1B
```


## Comparison Operators

### Equality (`==`)
- Compares values without considering data types.

### Identity (`===`)
- Compares values **with** data type checking.

#### Caution:
- `FALSE` is treated as `0`, so functions returning `0` may be misinterpreted as `FALSE`.
- Always check function return values carefully.


## Control Structures

### [[Conditional Statements]]

```php
$ans = 42;
if ($ans == 42) {
    echo "Correct";
} elseif ($ans == 52) {
    echo "It's 52";
} else {
    echo "Wrong";
}
```

Shortened syntax:

```php
$ans = 42;
if ($ans == 42) echo "Correct";
elseif ($ans == 52) echo "It's 52";
else echo "Wrong";
```
#### Switch case
its only check for equals only its difficult to check greater than or less than.

```php
$favcolor = "red";
switch ($favcolor) {
	case "red":
		echo "Your favorite color is red!";
		break;
	case "blue":
		echo "Your favorite color is blue!";
		break;
	default:
		echo "Your favorite color is neither red",
}
```
we need to use break for stop evaluating other conditions. 
default use as a if no similar cases
## Loops

### While Loop
```php
$fuel = 10;
while ($fuel > 1) {
    echo "Broom broom";
    $fuel = $fuel - 1;
}
```

### Do-While Loop
```php
$fuel = 10;
do {
    echo "Broom broom";
    $fuel = $fuel - 1;
} while ($fuel > 1);
```

### For Loop
```php
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i\n";
}
```
### Foreach Loop
```php
foreach($colors as $value){
	echo "color :" . $value
}
```
### Loop Control
- Use `break` to exit a loop completely.
- Use `continue` to skip the current iteration and proceed to the next one.


## Arrays

### Key-Value Pair
```php
$stuff = array("name" => "John", "course" => "CS50");
```

### Creating an Empty Array and Appending Values
```php
$va = array();
$va[] = "Hello"; // Array([0] => "Hello")

$vaa = array();
$vaa["name"] = "John"; // Array(["name"] => "John")
```

### Looping Through an Array
```php
$stuff = array("name" => "John", "course" => "CS50");

foreach($stuff as $key => $value){
    echo "Key: " . $key . " Value: " . $value . "\n";
}
```

### Indexed Array Loop
```php
$stuff = array("John", "Michel");

for($i = 0; $i < count($stuff); $i++){
    echo "Index: " . $i . " Value: " . $stuff[$i] . "\n";
}
```

### Multi-dimensional Arrays
```php
$product = array(
    'paper' => array(
        'copier' => 'copier and multipurpose'
    )
);

echo $product['paper']['copier']; // copier and multipurpose
```


## Null Coalescing Operator
```php
$stuff = array("name" => "John", "course" => "CS50");

$name = $stuff['name'] ?? 'not found'; // PHP 7+
```

Equivalent to:
```php
$name = isset($stuff['name']) ? $stuff['name'] : 'not found';
```


## Sorting Arrays
### Sort by Values
```php
$values = array("b" => 3, "a" => 1, "c" => 2);
asort($values); // Sorts by values
```

### Sort by Keys
```php
ksort($values); // Sorts by keys
```

### Sort (Loses Keys)
```php
sort($values); // Drops key-value association
```


## Functions

### Call by Value
```php
function greet($name = "world") {
    return "Hello " . $name;
}
echo greet(); // Hello world
```

### Call by Reference
```php
function greet(&$name) {
    $name = "Alice";
}
$person = "John";
greet($person);
echo $person; // Alice
```

## Modularity
- `include` / `include_once`
- `require` / `require_once`

## MySQL
- `PDO` (PHP Data Objects) - preferred
- `MySQLi` (MySQL Improved)

## Forms
- Each form input must have a **unique** `name` attribute.

## Sessions
super global variable
``` isset ``` : check variable declared or not

```php
session_start();
```

