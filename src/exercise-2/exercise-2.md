# Exercise 2

Welcome to the Git Essentials second exercise! In this exercise, you'll dive into resolving merge conflicts in a collaborative Git environment. The focus will be on updating personal information in a shared file, generating merge conflicts, and exploring different conflict resolution strategies. Here's the tasks you'll be performing:

- [Clone Repository](./clone-repo.md)
- [Add Personal Information](./add-personal-info.md)
- [Create Pull Requests](./create-pull-requests.md)
- [Resolve Merge Conflicts](./resolve-merge-conflicts.md)
- [Rebase, Squash, and Merge](./rebase-squash-merge.md)
- [Commit History and Interactive Rebase](./interactive-rebase.md)

### Instructions

1. **Updating Your Profile:**
   - Your task is to update the `gdsc.txt` file in repositories belonging to your fellow participants. Add your name, occupation, favorite hobby, and something you dislike to their `gdsc.txt`.

2. **Creating Pull Requests:**
   - Initiate a Pull Request in the repository you're modifying, aiming to update the `gdsc.txt` file.
   - Ensure your PR clearly states the purpose: "Adding Personal Information."

3. **Simulating Merge Conflicts:**
   - Your goal is to make changes to the same line or section of the `gdsc.txt` file in repositories of other participants.
   - When your PRs are submitted, try merging them into your repository. You may face merge conflicts due to changes in the same sections of the file.

4. **Resolving Conflicts:**
   - Use Git commands (`git status`, `git diff`, `git checkout --ours/--theirs`) to identify conflicting sections.
   - Discuss and communicate effectively with the repository owners to decide on retaining specific changes.
   - Resolve conflicts either by manual editing or using Git tools, ensuring file consistency and preventing data loss during conflict resolution.

5. **Exploring Git Strategies:**
   - Experiment with different merge strategies (merge, rebase, squash) while integrating changes from the main repository.
   - Consider the advantages and limitations of each strategy in managing conflicts and maintaining a clean commit history.

6. **Reviewing Commit History and Interactive Rebase:**
   - Analyze commit history using `git log`.
   - Learn about interactive rebase by renaming a commit, squashing, or rearranging commits based on a previous commit.
