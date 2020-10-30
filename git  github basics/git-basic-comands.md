# Basic Git commands

https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository

## Cloning an Existing Repository

If you want to get a copy of an existing Git repository — for example, a project you’d like to contribute to — the command you need is **git clone**.

You clone a repository with git clone **`<url>`**. For example, if you want to clone the Git linkable library called libgit2, you can do so like this:

`$ git clone https://github.com/libgit2/libgit2`

That creates a directory named libgit2, initializes a .git directory inside it, pulls down all the data for that repository, and checks out a working copy of the latest version. If you go into the new libgit2 directory that was just created, you’ll see the project files in there, ready to be worked on or used.

If you want to clone the repository into a directory named something other than libgit2, you can specify the new directory name as an additional argument at the end

`$ git clone https://github.com/libgit2/libgit2 mylibgit`

## Checking the Status of Your Files

The main tool you use to determine which files are in which state is the **`git status`** command. If you run this command directly after a clone, you should see something like this

`$ git status`
output in terminal :
`On branch master`
`Your branch is up-to-date with 'origin/master'.`
`nothing to commit, working directory clean`

This means you have a clean working directory; in other words,
none of your tracked files are modified.
Git also doesn’t see any untracked files, or they would be listed here.
Finally, the command tells you which branch you’re on and informs you that it has not diverged from the same branch on the server.

## Adding new file

you can do thus in your editor or via terminal.

`$ echo 'My Project' > README`

terminal command - My Project is the git tracked folder (or the path) where my project is **`>`** sign than followed by the file name

now if we check status we will see git advise :
`Untracked files: (use "git add <file>..." to include in what will be committed)`
` README`
`nothing added to commit but untracked files present (use "git add" to track)`

## Tracking New Files

In order to begin tracking a new file, you use the command git add. To begin tracking the README file, you can run this

`$ git add README`

we can add files to be commited one by one or if we want to add all (modified not staged for commit) files we can add _`.`_ operator instead of the file name.

## Staging New/Modified Files

Once we added all the necessary files for commit it means files are staged and will go into our next commit

BUT

after adding files to your stage you remembered that you need to do more changes to one of your files
you make the changes and if you will run git status again you will see the file edited will apear in both sections - Staged and Not Staged

**IMPORTANT** : If you modify a file after you run git add, you have to run git add again to stage the latest version of the file!

## Short Status

While the git status output is pretty comprehensive, it’s also quite wordy. Git also has a short status flag so you can see your changes in a more compact way. If you run git status -s or git status --short you get a far more simplified output from the command:

`$ git status -s`
` M README`
`MM Rakefile`
`A lib/git.rb`
`M lib/simplegit.rb`
`?? LICENSE.txt`

New files that aren’t tracked have a `??` next to them,
new files that have been added to the staging area have an `A`,
modified files have an `M` and so on.

There are two columns to the output — the left-hand column indicates the status of the staging area and the right-hand column indicates the status of the working tree. So for example in that output, the README file is modified in the working directory but not yet staged, while the lib/simplegit.rb file is modified and staged. The Rakefile was modified, staged and then modified again, so there are changes to it that are both staged and unstaged.

## Ignoring Files

`$ cat .gitignore`
`*.[oa]`
`*~`

The first line tells Git to ignore any files ending in “.o” or “.a” — object and archive files that may be the product of building your code. The second line tells Git to ignore all files whose names end with a tilde (~), which is used by many text editors such as Emacs to mark temporary files. You may also include a log, tmp, or pid directory; automatically generated documentation; and so on. Setting up a .gitignore file for your new repository before you get going is generally a good idea so you don’t accidentally commit files that you really don’t want in your Git repository.

The rules for the patterns you can put in the .gitignore file are as follows:

Blank lines or lines starting with # are ignored.
Standard glob patterns work, and will be applied recursively throughout the entire working tree.
You can start patterns with a forward slash (/) to avoid recursivity.
You can end patterns with a forward slash (/) to specify a directory.
You can negate a pattern by starting it with an exclamation point (!).

## Viewing Your Staged and Unstaged Changes

ou want to know exactly what you changed, not just which files were changed — you can use the **git diff** command
**`git diff`** shows you the exact lines added and removed — the patch, as it were

```js
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

```js
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

If you want to see what you’ve staged that will go into your next commit, you can use **git diff --staged**. This command compares your staged changes to your last commit:

```js
$ git diff --staged
diff --git a/README b/README
new file mode 100644
index 0000000..03902a1
--- /dev/null
+++ b/README
@@ -0,0 +1 @@
+My Project
```

## Committing Your Changes

IMPORTANT : Remember that anything that is still unstaged — any files you have created or modified that you haven’t run **git add** on since you edited them — won’t go into this commit.

`$ git commit`

The editor displays the following text (this example is a Vim screen):

```js
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Your branch is up-to-date with 'origin/master'.
#
# Changes to be committed:
#	new file:   README
#	modified:   CONTRIBUTING.md
#
~
~
~
".git/COMMIT_EDITMSG" 9L, 283C
```

You can see that the default commit message contains the latest output of the `git status` command commented out and one empty line on top. You can remove these comments and type your commit message, or you can leave them there to help you remember what you’re committing.

Alternatively, you can type your commit message inline with the commit command by specifying it after a -m flag, like this:

```js
$ git commit -m "Story 182: fix benchmarks for speed"
[master 463dc4f] Story 182: fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

Skipping the Staging Area

Adding the **`-a`** option to the **`git commit`** command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the **`git add`** part.

## Removing Files

To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The **`git rm`** command does that, and also removes the file from your working directory so you don’t see it as an untracked file the next time around.\

If you simply remove the file from your working directory, it shows up under the “Changes not staged for commit” (that is, unstaged) area of your git status output

Then, if you run git rm, it stages the file’s removal:

```js
$ git rm PROJECTS.md
rm 'PROJECTS.md'
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    deleted:    PROJECTS.md
```

## Viewing the Commit History

https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History

The most basic and powerful tool to do this is the **`git log`** command

If you have cloned a repository with an existing commit history, you’ll probably want to look back to see what has happened.

By default, with no arguments, git log lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first. As you can see, this command lists each commit with its SHA-1 checksum, the author’s name and email, the date written, and the commit message.

```js
$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit
```

### A huge number and variety of options to the git log command are available

One of the more helpful options is **`-p`** or **`--patch`**, which shows the difference (the patch output) introduced in each commit. You can also limit the number of log entries displayed, such as using -2 to show only the last two entries.

You can also use a series of summarizing options with git log. For example, if you want to see some abbreviated stats for each commit, you can use the **`--stat`** option. The --stat option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed. It also puts a summary of the information at the end.

Another really useful option is **`--pretty`**. This option changes the log output to formats other than the default. A few prebuilt option values are available for you to use. The **`oneline`** value for this option prints each commit on a single line, which is useful if you’re looking at a lot of commits. In addition, the **`short`, `full`, and `fuller`** values show the output in roughly the same format but with less or more information, respectively

## Undoing Things

At any stage, you may want to undo something. Here, we’ll review a few basic tools for undoing changes

One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the --amend option:

`$ git commit --amend`

As an example, if you commit and then realize you forgot to stage the changes in a file you wanted to add to this commit, you can do something like this:

```js
$ git commit -m 'Initial commit'
$ git add forgotten_file
$ git commit --amend
```

You end up with a single commit — the second commit replaces the results of the first.

## Unstaging a Staged File

**`git reset HEAD <file>`** ---if you don't know **`git status`** command reminds you

```js
$ git add *
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
    modified:   CONTRIBUTING.md
```

```js
$ git reset HEAD CONTRIBUTING.md
Unstaged changes after reset:
M	CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

The command is a bit strange, but it works. The CONTRIBUTING.md file is modified but once again unstaged.

## Unmodifying a Modified File

Luckily, `git status` tells you how to do that, too.

```js
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

```js
$ git checkout -- CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
```

You can see that the changes have been reverted.

## Showing Your Remotes

To see which remote servers you have configured, you can run the **`git remote`** command

You can also specify -v, which shows you the URLs that Git has stored for the shortname to be used when reading and writing to that remote: **`git remote -v`** command

## Adding Remote Repositories

We’ve mentioned and given some demonstrations of how the **`git clone`** command implicitly adds the origin remote for you. Here’s how to add a new remote explicitly. To add a new remote Git repository as a shortname you can reference easily, run **`git remote add <shortname> <url>`**:

```js
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

Now you can use the string `pb` on the command line in lieu of the whole URL. For example, if you want to fetch all the information that Paul has but that you don’t yet have in your repository, you can run git fetch pb:

```js
$ git fetch pb
remote: Counting objects: 43, done.
remote: Compressing objects: 100% (36/36), done.
remote: Total 43 (delta 10), reused 31 (delta 5)
Unpacking objects: 100% (43/43), done.
From https://github.com/paulboone/ticgit
 * [new branch]      master     -> pb/master
 * [new branch]      ticgit     -> pb/ticgit
```

## Fetching and Pulling from Your Remotes

**`$ git fetch <remote>`** The command goes out to that remote project and pulls down all the data from that remote project that you don’t have yet. After you do this, you should have references to all the branches from that remote, which you can merge in or inspect at any time.

It’s important to note that the git fetch command only downloads the data to your local repository — it doesn’t automatically merge it with any of your work or modify what you’re currently working on. You have to merge it manually into your work when you’re ready.

## Pushing to Your Remotes

**`git push <remote> <branch>`**

When you have your project at a point that you want to share, you have to push it upstream. The command for this is simple: **`git push <remote> <branch>`**. If you want to push your master branch to your origin server (again, cloning generally sets up both of those names for you automatically), then you can run this to push any commits you’ve done back up to the server:

**`$ git push origin master`**

## Renaming and Removing Remotes

```js
$ git remote rename pb paul
$ git remote
origin
paul
```

It’s worth mentioning that this changes all your remote-tracking branch names, too. What used to be referenced at pb/master is now at paul/master.

If you want to remove a remote for some reason — you’ve moved the server or are no longer using a particular mirror, or perhaps a contributor isn’t contributing anymore — you can either use **`git remote remove`** or **`git remote rm`**:

```js
$ git remote remove paul
$ git remote
origin
```

Once you delete the reference to a remote this way, all remote-tracking branches and configuration settings associated with that remote are also deleted.

## Tagging

Like most VCSs, Git has the ability to tag specific points in a repository’s history as being important. Typically, people use this functionality to mark release points (v1.0, v2.0 and so on).

### Listing Your Tags

Listing the existing tags in Git is straightforward. Just type git tag (with optional -l or --list)

```js
$ git tag
v1.0
v2.0
```

### Creating Tags

Git supports two types of tags: **lightweight and annotated**.

#### Annotated Tags

Creating an annotated tag in Git is simple. The easiest way is to specify -a when you run the tag command:

```js
$ git tag -a v1.4 -m "my version 1.4"
$ git tag
v0.1
v1.3
v1.4
```

You can see the tag data along with the commit that was tagged by using the **git show** command

#### Lightweight Tags

Another way to tag commits is with a lightweight tag. This is basically the commit checksum stored in a file — no other information is kept. To create a lightweight tag, don’t supply any of the -a, -s, or -m options, just provide a tag name

```js
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
```

if you run git show on the tag, you don’t see the extra tag information. The command just shows the commit

Tagging Later

You can also tag commits after you’ve moved past them

Now, suppose you forgot to tag the project at v1.2, which was at the “Update rakefile” commit. You can add it after the fact. To tag that commit, you specify the commit checksum (or part of it) at the end of the command

**`$ git tag -a v1.2 9fceb02`**

### Sharing Tags

By default, the git push command doesn’t transfer tags to remote servers. You will have to explicitly push tags to a shared server after you have created them. This process is just like sharing remote branches — you can run **`git push origin <tagname>`**.

If you have a lot of tags that you want to push up at once, you can also use the `--tags` option to the `git push` command. This will transfer all of your tags to the remote server that are not already there.

### Deleting Tags

To delete a tag on your local repository, you can use **`git tag -d <tagname>`**. For example, we could remove our lightweight tag above as follows:

`$ git tag -d v1.4-lw`

Note that this does not remove the tag from any remote servers. There are two common variations for deleting a tag from a remote server.

The first variation is `git push <remote> :refs/tags/<tagname>`

The second (and more intuitive) way to delete a remote tag is with: `$ git push origin --delete <tagname>`
