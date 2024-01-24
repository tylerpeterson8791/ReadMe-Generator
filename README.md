# README Generator
  
  ## Description
  
  My motivation for this project was to create a README document generator to help streamline the process of putting together README files.<br/>
  
  I built this because of all of the time I've spent on pas projects piecing together README files, making sure I'm entering all the required information and proofreading my structure.<br/>
  
  The problem that it will solve is saving all the time I spend editing README files and reallocating that time to studying, homework and family.<br/>
 
  I learned how dynamic command line applications can be.  There’s a ton of logic that goes into functionality that most people take for granted.
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Installation
  
  We began with some starter code for this project.  After installing the necessary NPM and requiring the packages I began with pseudocoding as I always do.  The first thing I tackled was the Inquirer prompt and questions.  I wanted to make some of the questions required so I looked up how to use a Validator Function to accomplish this and I applied it to the mandatory questions. 
  
  Once I had a structure for that as well as the .then function to call for the writing of the document using FS, I moved on to the logic in the generateMarkdown.js.  Rendering the License Badge was the next step.  This took some time researching what badges are and how generating svg files works.  This was the hardest part to figure out.  I used a VALUE from the choices in the list and connected them to the correct shields.io link.  I used the same logic for the link to the License information.  Licensing in general isn’t something we learned in class so it was interesting to take a deep dive on that.  
  
  Finally I built the markdown for writing the README.  There’s some quirks in markdown language so once I got my structure down there was a lot of trial and error and referencing to make sure it all behaved as I wanted it to.

  Here's a video showing functionality of application while building a dummy ReadMe: [Functionality Video](https://drive.google.com/file/d/17WiWt-R_nIMc459V5-o7f3dW1kq2JQuO/view?usp=drive_link)
  
  ## Usage
  
  The user begins and is prompted for the title of their project.  Then they are prompted one by one with straight-forward, bite-sized questions as the application takes care of the formatting.  
  
  ![Screenshot Questions](https://github.com/tylerpeterson8791/ReadMe-Generator/assets/75902133/2662b79c-83b7-404b-bd7b-c7669596d429)

  This way the user can focus on describing the project and not on making it look pretty.
 
  ![Screenshot MD Preview](https://github.com/tylerpeterson8791/ReadMe-Generator/assets/75902133/c3c7f2a2-4092-47d8-a085-aed364540090)

  
  ## Credits

  There’s a few resources I referenced during the course of creating this project.  
  
  Shout out to (https://shields.io/) for having a great, easy to use site.  
  
  For the use of the .trim method to negate multiple blanks counting as input I found this great doc on MDN WEB DOCS (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim.)

  Finally this GitHub Docs page was a great resource for syntax regarding populating the .md file (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


  ## License
  
  ![License Badge MIT](https://img.shields.io/badge/License-MIT-yellow.svg)   Licensed under MIT License  https://choosealicense.com/licenses/mit/
  
  ## Contributing

  I’d love for anyone who’s interested to contribute.  I don’t ask much but please fork the repo and create your own branch.  Make sure that you’ve tested your code before submitting and issue pull requests so I can see and evaluate changes before I merge.  Be sure to include a .gitignore file so the repo doesn’t become cumbersome. If you need to talk to me directly, my email address is below.
  
  ## Tests

  For testing I’d like all contributors to see how the code behaves and visually looks in the README file before submitting any changes.  Test it like you're trying to break it!!!
  
  ## Contact

  GitHub profile: [www.github.com/tylerpeterson8791/](https://www.github.com/tylerpeterson8791/)
  
  Email address: tylerpeterson8791@gmail.com
   
