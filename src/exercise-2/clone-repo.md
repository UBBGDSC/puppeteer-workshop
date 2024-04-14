# Cloning Repositories

In this section, we'll cover the process of cloning repositories from GitHub onto your local machine. 

### 1. Sharing Repository URLs
Each participant sitting at the same table should share their repository URL. This URL can be obtained from their GitHub repository. 

### 2. Accessing Private Repositories (If applicable)
If the repositories are private, participants need to grant access permissions to others. Ask the repository owner to grant access to you by having him follow these steps:

<details>
   <summary>Granting Permissions for Private Repositories on GitHub</summary>

   1. Go to the repository on GitHub.
   2. Click on "Settings" in the repository.
   3. Select `Collaborators and Teams` from the sidebar.
   4. Under `Manage access`, click on `Add people`.
   5. Enter the GitHub username or email of the person you want to grant access to.
   6. Select the write permission level.
   7. Finally, click on "Add [username/email] to this repository".
</details>

### 3. Cloning the Repository
For each participant, follow these steps to clone the repository to your local machine:

   a. Open your terminal or Git Bash.
   b. Use the `git clone` command followed by the repository URL:

      git clone <repository_URL>

   c. This will create a local copy of the repository on your machine.

If all went well with adding an SSH key in the previous exercise, you should be able to clone the repository without any issues. **If you're still having trouble, ask for a volunteer to help you out.**

### 4. Verifying the Clone
Once the cloning process is completed, navigate into the cloned directory using the `cd` command in the terminal to ensure the repository has been successfully cloned.

Following these steps will allow each participant to clone repositories onto their local machines, enabling them to contribute and collaborate effectively.
