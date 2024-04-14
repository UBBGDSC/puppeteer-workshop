# Resolve Merge Conflicts

### Scenario
Ideally, each repository should have at least two Pull Requests (PRs) modifying the same `gdsc.txt` file with contact information. Merging one PR may cause a conflict in the other PR due to changes in the same file.

### Steps to Solve Conflicts

The primary difference between the merge and rebase approaches lies in how they integrate changes. 

**Merge** combines the commit histories of the divergent branches, creating a new commit that reflects the combined changes. It retains the original commit history but may result in "merge commits," which explicitly mark where the branches were merged. 

**Rebase**, on the other hand, rewrites the commit history by placing the local branch's commits on top of the latest changes from the main branch. This creates a linear and cleaner history but alters commit timestamps.


#### Merge Approach:

1. **Checkout the Branch:**
   - Navigate to the branch with the conflicting changes:
     `git checkout branch-name`

2. **Pull the Latest Changes:**
   - Fetch the latest changes from the remote repository:
     `git pull origin main`

3. **Resolve Conflicts Locally:**
   - Open the `gdsc.txt` file in your code editor.
   - Resolve conflicts using the editor's conflict resolution tool or manually by editing the file.
     - The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) denote conflicting sections.
     - Use the editor's tool to choose and retain the desired changes from both versions.
     - Ensure the file reflects the intended information after conflict resolution.

4. **Stage and Commit Changes:**
   - After resolving conflicts, stage the modified file:
     `git add gdsc.txt`
   - Commit the changes:
     `git commit -m "Resolved merge conflict in gdsc.txt"`

5. **Push Changes to the Branch:**
   - Push the changes to the branch:
     `git push origin branch-name`

6. **Merge the PR:**
   - Proceed to merge the conflicted PR through the repository interface.

#### Rebase Approach:

1. **Checkout the Branch:**
   - Navigate to the branch with the conflicting changes:
     `git checkout branch-name`

2. **Rebase from Main:**
   - Rebase the branch with the latest changes from the main branch:
     `git rebase main`

3. **Resolve Conflicts:**
   - Address any conflicts encountered during the rebase process by following the prompts in your terminal.

4. **Continue Rebase:**
   - After conflicts are resolved, continue the rebase:
     `git rebase --continue`

5. **Push the Rebased Changes:**
   - Push the rebased changes to the remote branch:
     `git push --force origin branch-name`
    <details>
    <summary>What is --force?</summary>
        The `--force` flag is used to force push the rebased changes to the remote branch. This is required because the rebase process rewrites the commit history of the branch.
    </details>

6. **Merge the PR:**
   - Proceed to merge the rebased PR through the repository interface.
