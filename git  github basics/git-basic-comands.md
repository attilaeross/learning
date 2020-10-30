# Basic Git commands

## Cloning an Existing Repository

If you want to get a copy of an existing Git repository — for example, a project you’d like to contribute to — the command you need is **git clone**.

You clone a repository with git clone `<url>`. For example, if you want to clone the Git linkable library called libgit2, you can do so like this:

`$ git clone https://github.com/libgit2/libgit2`

That creates a directory named libgit2, initializes a .git directory inside it, pulls down all the data for that repository, and checks out a working copy of the latest version. If you go into the new libgit2 directory that was just created, you’ll see the project files in there, ready to be worked on or used.

If you want to clone the repository into a directory named something other than libgit2, you can specify the new directory name as an additional argument at the end

`$ git clone https://github.com/libgit2/libgit2 mylibgit`

## Checking the Status of Your Files

The main tool you use to determine which files are in which state is the git status command. If you run this command directly after a clone, you should see something like this

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

terminal command - My Project is the git tracked folder (or the path) where my project is `>` sign than followed by the file name

now if we check status we will see git advise :
`Untracked files: (use "git add <file>..." to include in what will be committed)`
` README`
`nothing added to commit but untracked files present (use "git add" to track)`

## Tracking New Files

In order to begin tracking a new file, you use the command git add. To begin tracking the README file, you can run this

`$ git add README`

we can add files to be commited one by one or if we want to add all (modified not staged for commit) files we can add `.` operator instead of the file name.

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

ou want to know exactly what you changed, not just which files were changed — you can use the git diff command
git diff shows you the exact lines added and removed — the patch, as it were

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

You can see that the default commit message contains the latest output of the git status command commented out and one empty line on top. You can remove these comments and type your commit message, or you can leave them there to help you remember what you’re committing.

Alternatively, you can type your commit message inline with the commit command by specifying it after a -m flag, like this:

```js
$ git commit -m "Story 182: fix benchmarks for speed"
[master 463dc4f] Story 182: fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

Skipping the Staging Area

Adding the `-a` option to the `git commit` command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the `git add` part.

## Removing Files

To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The `git rm` command does that, and also removes the file from your working directory so you don’t see it as an untracked file the next time around.\

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
