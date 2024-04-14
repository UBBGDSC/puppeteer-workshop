# Rebase, Squash, and Merge

### GitHub Pull Request UI Options

In the GitHub Pull Request UI, when merging a pull request, three distinct options are available:

1. **Create Merge Commit:**
   - This option generates a merge commit to incorporate changes. It retains the commit history of the merged branch, clearly marking the point where the branches were merged. 

2. **Squash and Merge:**
   - Choosing this option condenses multiple commits from the feature branch into a single commit before merging. It helps maintain a clean commit history, especially for branches with numerous smaller commits.

3. **Rebase and Merge:**
   - The rebase and merge option applies the changes from the feature branch onto the base branch by restructuring the commit history. It produces a linear history, placing the feature branch's commits atop the base branch's latest changes. 

Each option offers a distinct approach to integrating changes from a pull request, allowing contributors to select the method that best aligns with the project's version control and commit history preferences. These options significantly influence the resulting commit history and repository structure.
