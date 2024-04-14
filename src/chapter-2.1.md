# Collaboration in Git

## Merging

Having multiple branches is extremely convenient to keep new changes separated and avoid pushing unapproved or broken changes to production. When the changes are approved, integrating them into the production branch is essential.

### Fast-forward (--ff)

A fast-forward merge occurs when the current branch has no additional commits compared to the branch being merged. Git prefers this as the easiest option: it merges the commit(s) from the branch being merged into the current branch without creating a new commit.

![Fast-forward Merge](https://res.cloudinary.com/practicaldev/image/fetch/s--cT4TSe48--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/894znjv4oo9agqiz4dql.gif)

### No-fast-forward (--no-ff)

In case the current branch has commits not present in the branch to be merged, Git performs a no-fast-forward merge. This creates a new merging commit on the active branch, integrating changes from both branches.

![No-fast-forward Merge](https://res.cloudinary.com/practicaldev/image/fetch/s--zRZ0x2Vc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rf1o2b6eduboqwkigg3w.gif)

### Merge Conflicts

Merging branches with conflicting changes in the same lines or with deleted files that were modified elsewhere can cause merge conflicts. Git highlights these conflicts, enabling manual resolution by removing unwanted changes, saving, re-adding the changed file, and committing the changes.

![Merge Conflicts](https://res.cloudinary.com/practicaldev/image/fetch/s--7lBksXwA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bcd5ajtoc0g5dxzmpfbq.gif)

### Rebasing

Git rebase copies commits from the current branch and places them on top of the specified branch. Unlike merging, rebasing doesn't attempt to decide which files to keep, maintaining the branch's latest changes and avoiding merging conflicts.

![Rebasing](https://res.cloudinary.com/practicaldev/image/fetch/s--EIY4OOcE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/dwyukhq8yj2xliq4i50e.gif)

Rebasing is ideal when integrating updates from the master branch into a feature branch, preventing future merging conflicts.

### Interactive Rebase

Interactive rebase allows modification of commits before rebasing, offering six actions:

- reword: Edit the commit message.
- edit: Amend the commit.
- squash: Combine the commit into the previous one.
- fixup: Merge the commit into the previous one without retaining the commit's log message.
- exec: Execute a command on each commit being rebased.
- drop: Remove the commit.

![Interactive Rebase](https://res.cloudinary.com/practicaldev/image/fetch/s--P6jr7igd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/msofpv7k6rcmpaaefscm.gif)

Feel free to use these actions for full control over your commits, whether removing or merging them. Interactive rebase facilitates the modification of commits.

### Soft Reset

A soft reset shifts HEAD to the specified commit without discarding changes introduced by the following commits. It preserves access to the changes made in the previous commits, enabling fixing and recommitting them later.

![Soft Reset](https://res.cloudinary.com/practicaldev/image/fetch/s---GveiZe---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/je5240aqa5uw9d8j3ibb.gif)

### Hard Reset

A hard reset returns Git's state to the specified commit, including changes in the working directory and staged files, discarding all changes introduced after the commit.

![Hard Reset](https://res.cloudinary.com/practicaldev/image/fetch/s--GqjwnYkF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlh0kowt3hov1xhcku38.gif)

### Reverting

Git revert creates a new commit that undoes the changes introduced by the specified commit, ensuring the commit history remains unaltered.

![Reverting](https://res.cloudinary.com/practicaldev/image/fetch/s--eckmvr2M--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/3kkd2ahn41zixs12xgpf.gif)

Git revert is useful for undoing a specific commit without altering the branch's history.
