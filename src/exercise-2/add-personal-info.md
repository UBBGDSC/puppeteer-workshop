# Add Personal Information

### Objective
The objective of this task is to update the `gdsc.txt` file in repositories owned by other participants with your personal information.

### Steps

1. **Create a New Branch:**
   - In your terminal, create a new branch for your changes using:
     `git checkout -b {your-name}`
     <details>
     <summary>What name should I use for my branch?</summary>
        You can use any name you want for your branch. 
        
        However, it's best practice to use a descriptive name that reflects the purpose of the branch. In this case, you can use your own name as the branch name, to avoid branch name clashes with the other participants.
    </details>

2. **Open `gdsc.txt`:**
   - Navigate to the repository of a fellow participant in your preferred code editor.

3. **Update `gdsc.txt`:**
   - Locate the `gdsc.txt` file and add your name, occupation, favorite hobby, and something you dislike in the existing format, similarly to how the repository owner has added their information.

4. **Save Changes:**
   - Save the modifications made to the `gdsc.txt` file.

5. **Stage Changes:**
   - In your terminal, add the modified file to the staging area using the command:
   ```bash
   git add gdsc.txt
   ```

6. **Commit Changes:**
   - Commit the changes with a descriptive message:
   ```bash
   git commit -m "Added personal information to gdsc.txt"
   ```

7. **Push to Repository:**
   - Push the changes to the repository using the command:
     `git push --set-upstream origin {branch-name}`
        <details>
        <summary> What is --set-upstream?</summary>
            The `--set-upstream` flag is used to set the default remote branch for the current local branch. This allows you to use `git push` without specifying the remote branch name.
        </details>