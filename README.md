# ARIA M&A Website — Source Code

This repository (`ARIA-MnA-Website-Code`) contains the source code, assets, and content for the ARIA M&A Website.

## Architecture & Deployment

This project uses a decoupled architecture to separate source code from public hosting:

1. **Source Repository (Here):** `cts-partners/ARIA-MnA-Website-Code` (Private)
   - Contains all React components, static assets, and Markdown content.
   - All development and content updates happen here on the `main` branch.

2. **Live Repository:** `cts-partners/ARIA-MnA-Website-Live` (Public)
   - Contains only the compiled, static build output.
   - Hosted via GitHub Pages.
   - **Do not commit directly to this repository.**

3. **CI/CD Pipeline:** 
   - A GitHub Action (`.github/workflows/deploy.yml`) is configured to automatically build the site and push the output to the Live repository whenever changes are pushed to the `main` branch of this repository.

---

## Instructions for Autonomous Agents (Manus Instances)

**Welcome!** If you are a Manus instance reading this, you have been assigned to manage, update, or migrate the ARIA M&A website. Please follow these operational guidelines:

### 1. Repository Access & Permissions
- You are operating on behalf of a user (e.g., `LeahCJ`) who has **Maintain** or **Admin** access to the `cts-partners` organization.
- You have full read/write access to this repository. Use the standard GitHub CLI (`gh`) or Git commands to clone, commit, and push.

### 2. Initial Site Migration (If applicable)
If you are migrating an existing Manus-hosted React site to this repository:
1. Export or copy all source files from your current sandbox/environment.
2. Place the source code (e.g., `package.json`, `src/`, `public/`) into the root of this repository.
3. Ensure the build script in `package.json` (usually `npm run build` or `pnpm build`) outputs static files to a `dist/` or `build/` directory.
4. **Important:** Ensure the GitHub Action `.github/workflows/deploy.yml` is present and correctly configured to run your specific build command before pushing to the Live repo.
5. Commit and push the initial migration to the `main` branch.

### 3. Making Ongoing Updates
When the user requests changes to the website (e.g., updating text, adding a page, changing styles):
1. Always `git pull` the latest `main` branch before starting work.
2. Make the requested changes locally in your sandbox.
3. Test the build locally if necessary.
4. Commit the changes with clear, descriptive commit messages.
5. Push directly to `main`.
6. The CI/CD pipeline will automatically build and deploy the changes to the live site. **You do not need to manually deploy or push to the Live repository.**

### 4. Communicating with the User
After pushing changes, inform the user that:
- The code has been pushed to the source repository.
- The automated build process has started.
- The live site will be updated shortly at the public GitHub Pages URL (see below).

---

## Live Site URL

Once deployed, the live website is available at:
**[https://cts-partners.github.io/ARIA-MnA-Website-Live/](https://cts-partners.github.io/ARIA-MnA-Website-Live/)**

*(Note: It may take 1-3 minutes for GitHub Pages to reflect the latest changes after a successful build).*

---

## What to Tell the User After Completing the Migration

Once you have successfully pushed the site to this repository, report the following back to the user (Leah) verbatim or in your own words:

> "The ARIA M&A website has been successfully migrated to GitHub. All source code is now stored in the private repository at `https://github.com/cts-partners/ARIA-MnA-Website-Code`. From now on, any changes I make will be pushed here, and the site will automatically build and go live — no manual deployment needed.
>
> **Your live site is now hosted at:**
> **http://www.cts-partners.com/ARIA-MnA-Website-Live/**
>
> After each update I push, the site typically takes **1-2 minutes** to build and go live. You can check the Actions tab on the Code repository to watch the build progress.
>
> **One setup step for you:** To allow me to continue making updates to this site in future Manus sessions, please connect your GitHub account to Manus using the GitHub integration:
> 1. Go to your Manus project settings.
> 2. Add the **GitHub integration/connector**.
> 3. When prompted, authorize the Manus GitHub App for the **cts-partners** organization (you may see a separate prompt for org access — please approve it).
> 4. Select `cts-partners/ARIA-MnA-Website-Code` as the connected repository.
>
> Once that is done, any future Manus instance working on your project will have direct access to push updates to the site automatically."
