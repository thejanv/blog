---
title: SQL Basic
description:
---
## **1. SQL Data Types**

MySQL provides various data types categorised into:

### **Numeric Data Types**
| **Data Type**   | **Description**                          |
|-----------------|------------------------------------------|
| `INT`           | Integer value (4 bytes)                 |
| `TINYINT`       | Small integer (1 byte)                  |
| `SMALLINT`      | Small integer (2 bytes)                 |
| `MEDIUMINT`     | Medium integer (3 bytes)                |
| `BIGINT`        | Large integer (8 bytes)                 |
| `DECIMAL`/`NUMERIC` | Fixed-point number                   |
| `FLOAT`         | Floating-point number (4 bytes)         |
| `DOUBLE`        | Floating-point number (8 bytes)         |

### **String Data Types**
| **Data Type**   | **Description**                          |
|-----------------|------------------------------------------|
| `CHAR(n)`       | Fixed-length string                     |
| `VARCHAR(n)`    | Variable-length string                  |
| `TEXT`          | Large text field                        |
| `BLOB`          | Binary large object                     |

### **Date and Time Data Types**
| **Data Type**   | **Description**                          |
|-----------------|------------------------------------------|
| `DATE`          | Stores date (`YYYY-MM-DD`)              |
| `DATETIME`      | Stores date and time (`YYYY-MM-DD HH:MM:SS`) |
| `TIMESTAMP`     | Stores UNIX timestamp                   |
| `TIME`          | Stores time (`HH:MM:SS`)                |
| `YEAR`          | Stores year (`YYYY`)                    |

---

## **2. SQL Command Categories**
| **Category** | **Full Form**               | **Purpose**                                      | **Keywords**                          |
|--------------|-----------------------------|--------------------------------------------------|---------------------------------------|
| **DDL**      | Data Definition Language    | Defines database schema                          | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML**      | Data Manipulation Language  | Modifies data                                    | `INSERT`, `UPDATE`, `DELETE`          |
| **DQL**      | Data Query Language         | Retrieves data                                   | `SELECT`                              |
| **TCL**      | Transaction Control Language| Controls transactions                            | `COMMIT`, `ROLLBACK`, `SAVEPOINT`     |
| **DCL**      | Data Control Language       | Manages permissions                              | `GRANT`, `REVOKE`                     |

---

## **3. Common SQL Commands**

### **DDL Commands**
- **Create Database**
  ```sql
  CREATE DATABASE mydb;
  ```

- **Create Table**
  ```sql
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Alter Table**
  ```sql
  ALTER TABLE users ADD COLUMN phone VARCHAR(15);
  ```

- **Drop Table**
  ```sql
  DROP TABLE users;
  ```

### **DML Commands**
- **Insert Data**
  ```sql
  INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
  ```

- **Update Data**
  ```sql
  UPDATE users SET name = 'Jane Doe' WHERE id = 1;
  ```

- **Delete Data**
  ```sql
  DELETE FROM users WHERE id = 1;
  ```

### **DQL Commands**
- **Select All Data**
  ```sql
  SELECT * FROM users;
  ```

- **Select Specific Columns**
  ```sql
  SELECT name, email FROM users;
  ```

- **Select with Condition (WHERE)**
  ```sql
  SELECT * FROM users WHERE email = 'john@example.com';
  ```

---

## **4. PHP & MySQL Connection Methods**

### **4.1 MySQLi (Object-Oriented)**
```php
$mysqli = new mysqli("localhost", "username", "password", "mydb");
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
echo "Connected successfully!";
```

### **4.2 MySQLi (Procedural)**
```php
$conn = mysqli_connect("localhost", "username", "password", "mydb");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully!";
```

### **4.3 PDO (Object-Oriented)**
```php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=mydb", "username", "password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully!";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
```

---

## **5. Prepared Statements (Prevent SQL Injection)**

### **5.1 MySQLi - OOP**
```php
$stmt = $mysqli->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$name = "Alice";
$email = "alice@example.com";
$stmt->execute();
$stmt->close();
```

### **5.2 MySQLi - Procedural**
```php
$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $name, $email);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
```

### **5.3 PDO**
```php
$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->execute(["Bob", "bob@example.com"]);
```

---

## **6. Fetching Data**

### **6.1 MySQLi - OOP**
```php
$result = $mysqli->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {
    echo "Name: " . $row['name'] . "<br>";
}
```

### **6.2 MySQLi - Procedural**
```php
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo "Name: " . $row['name'] . "<br>";
}
```

### **6.3 PDO**
```php
$stmt = $pdo->query("SELECT * FROM users");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "Name: " . $row['name'] . "<br>";
}
```

---

## **7. Transactions (ACID Compliance)**

### **7.1 MySQLi - OOP**
```php
$mysqli->autocommit(FALSE);
$mysqli->begin_transaction();
try {
    $mysqli->query("UPDATE users SET name='Charlie' WHERE id=2");
    $mysqli->commit();
} catch (Exception $e) {
    $mysqli->rollback();
    echo "Transaction failed: " . $e->getMessage();
}
```

### **7.2 PDO**
```php
$pdo->beginTransaction();
try {
    $pdo->exec("UPDATE users SET name='Charlie' WHERE id=2");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollback();
    echo "Transaction failed: " . $e->getMessage();
}
```

---

## **8. Error Handling**

### **8.1 MySQLi - OOP**
```php
if (!$mysqli->query("INVALID SQL QUERY")) {
    echo "Error: " . $mysqli->error;
}
```

### **8.2 PDO**
```php
try {
    $pdo->exec("INVALID SQL QUERY");
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
```

---

## **9. Security Best Practices**
- ✅ Use **Prepared Statements** to prevent SQL Injection.
- ✅ Use **password_hash()** before storing passwords.
- ✅ Grant **least privileges** to MySQL users.
- ✅ Keep MySQL **updated** for security patches.
- ✅ Regularly **back up** your database:
  ```bash
  mysqldump -u root -p mydb > backup.sql
  ```

---

## **10. Commonly Used SQL Keywords**
| **Keyword**              | **Description**                                                                |
| ------------------------ | ------------------------------------------------------------------------------ |
| `SELECT`                 | Retrieves data from one or more tables.                                        |
| `FROM`                   | Specifies the table from which to retrieve data.                               |
| `WHERE`                  | Filters records based on a condition.                                          |
| `AND`/`OR`               | Combines multiple conditions in a WHERE clause.                                |
| `ORDER BY`               | Sorts the result set in ascending or descending order.                         |
| `GROUP BY`               | Groups records that have the same values in specified columns.                 |
| `HAVING`                 | Filters the result set after applying GROUP BY.                                |
| `INSERT INTO`            | Adds new records to a table.                                                   |
| `UPDATE`                 | Modifies existing records in a table.                                          |
| `DELETE`                 | Removes records from a table.                                                  |
| `JOIN`                   | Combines rows from two or more tables based on a related column.               |
| `LEFT JOIN`/`RIGHT JOIN` | Retrieves records from one table even if there is no match in the other table. |
| `INNER JOIN`             | Returns only the rows where there is a match in both tables.                   |
| `DISTINCT`               | Removes duplicate values from the result set.                                  |
| `LIMIT`                  | Specifies the number of records to return.                                     |
| `LIKE`                   | Searches for a specified pattern in a column.                                  |
| `IN`                     | Specifies multiple values for a column.                                        |
| `BETWEEN`                | Filters records within a specific range.                                       |
| `NULL`                   | Checks if a column contains a NULL value.                                      |
| `AS`                     | Renames a column or table for easier reference.                                |
| `EXISTS`                 | Checks if a subquery returns any results.                                      |
| `UNION`                  | Combines the result sets of two or more SELECT queries.                        |
| `CASE`                   | Adds conditional logic in queries.                                             |

---

## **Conclusion**
- ✅ Use **PDO** for better flexibility and database compatibility.
- ✅ Use **MySQLi** for MySQL-specific applications.
- ✅ Always **use prepared statements** for security.
- ✅ Use **transactions** for critical operations to ensure data integrity.