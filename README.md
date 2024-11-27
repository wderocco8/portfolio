# Portfolio Vanilla Template

Welcome to the **Portfolio Vanilla Template**! This repository is a template to help you quickly set up and customize your personal website or portfolio. Use this template as a base for showcasing your projects, skills, and experience.

## Getting Started

To get started, you’ll need to follow a few steps to set up and deploy this template on your own. This guide will walk you through the setup process, necessary prerequisites, and instructions for deploying to Netlify.

### Prerequisites

Before you begin, make sure you have the following:
- **A Netlify account**: [Sign up here](https://www.netlify.com/) if you don’t have one.
- **Basic HTML, CSS, and JavaScript knowledge**: This template uses vanilla HTML/CSS/JavaScript for customization.

### Installation

1. **Fork the Repository**
   - Click the "Fork" button on the top right of this repository page to create a copy under your GitHub account.
  
2. **Clone Your Forked Repository (optional)**
   - Clone the forked repository to your local machine to make edits:
     ```bash
     git clone https://github.com/YOUR-USERNAME/portfolio-vanilla-template.git
     ```

3. **Navigate to the Project Directory (optional)**
   - Enter the directory to access project files:
     ```bash
     cd portfolio-vanilla-template
     ```

4. **Customize Your Portfolio**
   - Open the HTML, CSS, and JavaScript files in the project to personalize your portfolio.
   - Update the content, links, and any other information specific to your profile.
  
### Project Structure

Here’s a quick overview of the project structure:

- **`src/`**: Contains all HTML, JavaScript, and CSS code for the application.
- **`index.html`**: The main HTML file for your portfolio.
- **`style.css`**: Contains all the styling for the template. Customize it to change the look and feel.
- **`script.js`**: JavaScript file to add interactivity.
- **`assets/`**: Folder containing images and other media assets.

### Deployment

Once your portfolio is set up locally, you can deploy it to Netlify.

1. **Login to Netlify**
   - Go to [Netlify](https://www.netlify.com/) and log in to your account.

2. **Create a New Site**
   - Select “Add new site” from the dashboard and choose “Import an existing project.”
   - Select “GitHub” as your deployment method and connect your GitHub account if prompted.

3. **Select Your Repository**
   - Choose your forked repository `portfolio-vanilla-template` from your GitHub account.

4. **Configure Build Settings**
   - Since this is a static site, you won’t need a build command or any advanced configuration.
   - Click “Deploy Site” to start the deployment process.

5. **Publish and Access Your Portfolio**
   - Once the deployment is complete, you’ll get a Netlify domain (e.g., `portfolio-vanilla-template.netlify.app`).
   - **However**, I'd suggest adding a `Site Name` (i.e. `firstname-lastname`) that will be displayed instead of `portfolio-vanilla-template`.

### Making Updates

To update your portfolio in the future:
1. Make changes in your local repository.
2. Commit and push changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Netlify will automatically redeploy your site when it detects changes to your `main` branch of the repository.

## License
This project is open source and available under the [MIT License](LICENSE).

