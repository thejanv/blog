---
title: Essential Linux Shell Commands and SSH Basics
editUrl: false
description: A concise guide covering key Linux shell commands, SSH login
  methods, private key permissions, and command-line editing shortcuts.
---

## Introduction to Linux Shell

### User Shell Prompts

* **Regular User**: `$`

* **Root User**: `#`

***

## Logging into a Remote System

### Using SSH with Password

```bash

[user@host ~]$ ssh remoteuser@remotehost

```

### Using SSH with Private Key

* Ensure the private key has the correct permissions:

```bash

[user@host ~]$ chmod 600 privatekey.pem

```

* Connect using the private key:

```bash

[user@host ~]$ ssh -i privatekey.pem remoteuser@remotehost

```

***

## Logging Out from a Remote System

* Use the `exit` command:

```bash

exit

```

* Alternatively, press `Ctrl + D`.

***

## Executing Commands in the Bash Shell

### Basic Commands

* Display current user:

```bash

whoami

```

* Display file contents:

```bash

cat

```

* Display the first few lines of a file:

```bash

head -n {number}

```

* Display the last few lines of a file:

```bash

tail -n {number}

```

### Date Command Options

* Display date in RFC-2822 format:

```bash

date -R

```

* Display date as seconds since 1970-01-01 00:00:00 UTC:

```bash

date -s

```

* Display date in a specific format (customizable):

```bash

date -x

```

### Running Multi-Line Commands

Use a backslash (`\`) to continue a command on the next line:

```bash

echo "This is a long command" \

"that spans multiple lines."

```

### Viewing Command History

* List previously executed commands:

```bash

[user@host ~]$ history

```

* Re-run a command by number:

```bash

!number

```

* Re-run the most recent command starting with a specific string:

```bash

!string

```

* Insert the last word of the previous command:

* Use `Esc + .` or `Alt + .`

***

## Editing Commands on the Command Line

### Useful Keyboard Shortcuts

| Shortcut             | Description                                |
| -------------------- | ------------------------------------------ |
| `Ctrl + A`           | Move to the beginning of the line          |
| `Ctrl + E`           | Move to the end of the line                |
| `Ctrl + U`           | Clear from beginning to cursor             |
| `Ctrl + K`           | Clear from cursor to the end               |
| `Ctrl + Left Arrow`  | Move to the beginning of the previous word |
| `Ctrl + Right Arrow` | Move to the end of the next word           |
| `Ctrl + R`           | Search through command history             |
