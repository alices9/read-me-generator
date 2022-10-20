// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `## License
  
  I used the ${data.license} license for this project.`
}

function renderCollaborators(collaborators) {
  if (collaborators !== "No"){
    return (`## Credits
    
    ${data.collabURL}`)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description1} ${data.description2}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

${renderCollaborators(data.collaborators)}

${renderLicenseSection(data.license)}

## Questions

My GitHub username is <a href="github.com/${data.username}" target="_blank"> ${data.username}</a>. If you have any questions, feel free to send me an email at ${data.email}.
    `;
}

module.exports = generateMarkdown;
