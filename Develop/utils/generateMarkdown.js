// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// How can there be no license?  Doesn't list force them to pick one?  Check into how the List type works?
//start by letting this variable = ""
//Do some research as to how to render a badge?
function renderLicenseBadge(license) {}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// It'll probably be best to do a if/else and have the links for all my options pop into a variable linkLicense.  This ties to #6 on previous page.
function renderLicenseLink(license) {}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Here is where we smash together a message 'Licensed by' + Link + Name of License
// Should be fairly straightforward
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
// Here's where we pop everything in to the document in order and formatted correctly.  Remember the ## for the headers and other formatting stuff
// Thinking I'll do this last and pseudo everything out before building it.
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
