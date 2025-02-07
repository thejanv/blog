---
title: Manage Local Users and Groups
description: Use the useradd, usermod, passwd, and groupadd commands to manage local users and groups in Linux.
---
## User and Group Concept

### User
A **user** is an account used to log in and operate a Linux system.

#### User Information Commands
- `id` → Show details of the currently logged-in user.
- `id {username}` → Show details of a specific user.
- `/etc/passwd` → Stores information about all system users.

#### Super User (Root)
- **UID:** `0`
- **Other Name:** `root`

#### Regular User
- Non-root users created for daily tasks.

#### System User
- Used for system services and processes, not for login.

### Group
A **group** is a collection of users that share permissions.

#### Group Information Commands
- `gid` → Show the group ID of the current user.
- `/etc/group` → Stores information about groups, including supplementary groups.

#### Primary Group
- The default group assigned to a user when created.

#### Supplementary Groups
- Additional groups a user can be part of for extra permissions.

## Gain Superuser Access
### Switch user account

```bash
sudo su - user2 #switch user without knowing user2 password
su - #try to login as root user
su - user3 #swtich to user3 with his password
```
### Run command with root

```bash
sudo
```
wheel group use for give administrator access to users.

### Get interactive Root shell with sudo
```bash
sudo -i
```
