---
title: Linux File Permission
description: Linux file permissions define who can read, write, or execute a file or directory, ensuring secure access control for users, groups, and others.
---
r :- Read\
w :- Write\
x :- Execute

Example:\
d rwx rwx r-x\
d :- directory {if its directory d else -}

Owner\
rwx :- read, write, execute

Group\
rwx :- read, write, execute

All other Users\
r-x :- read, execute 

## Change permission
### Change ownership
```
chown {new owner} {file name/ directory}
```
user and group change
```
chown {new owner}:{new group} {file name/ directory}
```
### Change permission / Change Mode
```
r=4
w=2
e=1
rwx rwx r-x
rwx = 4+2+1 = 7
r-x = 4+0+1 = 5
775 
```

```
chmod {new mode number} {file name}
```
ssh key pair:
```
chmod 400 vmPrivatekey.pem
```


## Further reading

- Read [Linux file permissions explained](https://www.redhat.com/en/blog/linux-file-permissions-explained) in Red Hat Blog
