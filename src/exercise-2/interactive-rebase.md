# Commit History and Interactive Rebase

### Understanding Commit History

Git's `log` command offers a view of the commit history. It displays a list of commits in reverse chronological order, showcasing commit messages, authors, and commit hashes. Participants can enter `git log` in the terminal to view the commit history of a repository, gaining insights into the project's development timeline.

### Interactive Rebase Exercise

Let's explore the functionality of interactive rebase, focusing on squashing commits, changing messages, deleting, and picking commits in a simple exercise.

1. **Squashing Commits:**
   - Demonstrate squashing multiple commits into a single one using `git rebase -i HEAD~N`, where `N` is the number of commits to include.
  
2. **Changing Commit Messages:**
   - Show how to alter commit messages during an interactive rebase by marking commits as `reword`.

3. **Deleting Commits:**
   - Guide participants on how to delete specific commits from the commit history using `git rebase -i`.

4. **Picking Commits:**
   - Illustrate how to pick specific commits and rearrange their order using `git rebase -i`.
