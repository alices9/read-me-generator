// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license[0] === "MIT"){
    return `<img src="https://img.shields.io/badge/license-MIT-green" alt="MIT license badge"/>`
  } else if (license[0] === "APACHE 2.0"){
    return `<img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="Apache 2.0 license badge">`
  } else if (license[0] === "GPL 3.0"){
    return `<img src="https://img.shields.io/badge/license-GPL-blue" alt="GPL license badge">`
  } else if (license[0] === "BSD 3"){
    return `<img src="https://img.shields.io/badge/License-BSD_3--Clause-orange.svg" alt="BSD license badge">`
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "None"){
    return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== "None") {
    return `## License
  
  I used the ${license} license for this project.`
}
}

function confirmCollaborators(collaborators) {
  if (collaborators !== "No"){
    renderCollaborators(collaborators)
  }
}

function renderCollaborators(person) {
  return `## Credits
    
  ${person}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

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

${confirmCollaborators(data.collaborators)}

${renderLicenseSection(data.license)}

## Questions

My GitHub username is <a href="github.com/${data.username}" target="_blank"> ${data.username}</a>. If you have any questions, feel free to send me an email at ${data.email}.
    `;
}

module.exports = generateMarkdown;
