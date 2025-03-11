---
title: PHP
description: PHP is a server-side scripting language used to process requests, interact with databases, and generate dynamic web content.
---
# PHP Expressions & Basics

## Prerequisite
- [[HTML Basic]]
- [[CSS Basic]]
- [[SQL Basics]]

## Short Tags
```php
<?php echo "$variable"; ?>

<?= $variable; ?> // This always works in PHP 5.4 and up
```

## Prevent HTML Injection
Use `htmlentities()` to prevent HTML injection.

## Comments
- **Single-line comments**: `//` or `#`
- **HTML comment**: `<!-- comment -->`

## Variables
### Strings
- **Double Quotes (`" "`)**: Variables inside double quotes expand.
- **Single Quotes (`' '`)**: Variables inside single quotes **do not** expand.

```php
$name = "John";
echo "Hello, $name!";  // Output: Hello, John!
echo 'Hello, $name!';  // Output: Hello, $name!
```

### Variable Naming
- Use `$` to declare variables.
- Variables are case-sensitive.
- Variable names must start with a letter or an underscore (`_`).
- Can only contain alphanumeric characters and `_`.

### Variable Scope
#### Static Variables
Retain a variable's value after a function exits using `static`:

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

#### Global Scope
A variable declared outside a function has global scope and **can only be accessed outside a function**.

##### Global Keyword
Access global variables inside a function using `global`:

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

#### Local Scope
A variable declared inside a function is **local** to that function.

```php
function myFunction() {
    $x = 10;
    echo $x;
}
myFunction();
// echo $x; // Error! $x is not accessible here.
```

## Arrays
### Array Types
#### Key-Value Pair (Associative Arrays)
```php
$stuff = array("name" => "John", "course" => "CS50");
```

#### Indexed Arrays
```php
$stuff = array("John", "Michel"); // Index always starts at 0
```

#### Multi-dimensional Arrays
```php
$product = array(
    'paper' => array(
        'copier' => 'copier and multipurpose'
    )
);

echo $product['paper']['copier']; // copier and multipurpose
```

### Creating an Empty Array and Appending Values
```php
$va = array();
$va[] = "Hello"; // Array([0] => "Hello")
$va[1] = "world"; // Index can be assigned manually

$vaa = array();
$vaa["name"] = "John"; // Array(["name"] => "John")
```

### Looping Through an Array
#### Associative Array
```php
$stuff = array("name" => "John", "course" => "CS50");

foreach($stuff as $key => $value){
    echo "Key: " . $key . " Value: " . $value . "\n";
}
```

#### Indexed Array Loop
```php
$stuff = array("John", "Michel");

for($i = 0; $i < count($stuff); $i++){
    echo "Index: " . $i . " Value: " . $stuff[$i] . "\n";
}
```

### Array Functions
#### Array Length `count()`
```php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
```

#### `isset()`
Determine if a variable is declared and is different than `null`.

### Null Coalescing Operator
```php
$stuff = array("name" => "John", "course" => "CS50");

$name = $stuff['name'] ?? 'not found'; // PHP 7+
```

Equivalent to:
```php
$name = isset($stuff['name']) ? $stuff['name'] : 'not found';
```

### Sorting Arrays
#### Sort by Values
```php
$values = array("b" => 3, "a" => 1, "c" => 2);
asort($values); // Sorts by values
```

#### Sort by Keys
```php
ksort($values); // Sorts by keys
```

#### Sort (Loses Keys)
```php
sort($values); // Drops key-value association
```

## Control Structures
### Loops
#### While Loop
```php
$fuel = 10;
while ($fuel > 1) {
    echo "Broom broom";
    $fuel = $fuel - 1;
}
```

#### Do-While Loop
```php
$fuel = 10;
do {
    echo "Broom broom";
    $fuel = $fuel - 1;
} while ($fuel > 1);
```

#### For Loop
```php
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i\n";
}
```

#### Foreach Loop
```php
foreach($colors as $value){
    echo "color :" . $value;
}
```

#### Loop Control
- Use `break` to exit a loop completely.
- Use `continue` to skip the current iteration and proceed to the next one.

### Conditional Statements
#### If-Else
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

#### Switch Case
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
        echo "Your favorite color is neither red nor blue";
}
```

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

### Identity (`===`) (Strict comparison)
- Compares values **with** data type checking.

#### Caution:
- `FALSE` is treated as `0`, so functions returning `0` may be misinterpreted as `FALSE`.
- Always check function return values carefully.

## Functions

Global function and block function 
if we didn't pass param value it will be null. Its will be show error
### Call by Value
```php
// Function constuction 
function greet($name = "world") {
    return "Hello " . $name;
}
echo greet(); // Hello world
```

### Call by Reference
```php
//
function greet(&$name) {
    $name = "Alice";
}
$person = "John";
greet($person);
echo $person; // Alice
```

## Modularity
- `include` / `include_once`
	- Show warning
- `require` / `require_once`
	- Stop execution and fatal error

## Database Interaction (MySQL)
- `PDO` (PHP Data Objects) - preferred
- `MySQLi` (MySQL Improved)

### Querying
Here are some syntax rules to follow:
- The SQL query must be quoted in PHP.
- String values inside the SQL query must be quoted.
- Numeric values must not be quoted.
- The word `NULL` must not be quoted.

## Forms
- Each form input must have a **unique** `name` attribute.
```html
<form action="welcome.php" method="post">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
</form>
```

### Super Global Variables
These are always accessible:
- `$GLOBALS` - All global variables in this variable.
- `$_FILES`
- `$_ENV`
- `$_SERVER`
- `$_COOKIE`
- `$_REQUEST`
- `$_SESSION`
- `$_POST` - Use for form POST method data collection.
- `$_GET` - Use for form GET method data collection and `a` tag.

### Data Validation
- Non-empty: `strlen($var) > 0`
- A number: `is_numeric($var)`
- An email address: `strpos($var, '@') > 0` or `filter_var($var, FILTER_VALIDATE_EMAIL) !== false`

## Sessions
Super global variable:
```php
session_start();
// Set session variables
$_SESSION["favcolor"] = "green";
// Remove all session variables
session_unset();
// Destroy the session
session_destroy();
```

## Error Handling
### Die Statement
```php
if(!file_exists("welcome.txt")) {
    die("File not found"); //if connection failed terminate connection.
} else {
    $file = fopen("welcome.txt", "r");
}
```

### Custom Error Handling
Create an error function with minimum error level and error message required:
```php
error_function(error_level, error_message, error_file, error_line, error_context)
```

Error types:
- `E_USER_ERROR`
- `E_USER_WARNING`
- `E_USER_NOTICE`

Set custom error handler:
```php
set_error_handler("customError");
```

Trigger error:
```php
$test = 2;
if ($test > 1) {
    trigger_error("Value must be 1 or below");
}
```