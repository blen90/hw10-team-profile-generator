# hw10-team-profile-generator

## Screenshot of Team Profile Generator 

![Team Profile Generator](./output/team-profile-generator.jpg)

---
## Demo of the app

To run the app you will need to add the following command to the terminal

```
node index.js
```
(Click on the image below to be redirected to the Youtube demo video)

[![Team Profile Generator file Demo](./output/demo-screenshot.jpg)](https://www.youtube.com/watch?v=kt0x8Xmc4Dk)

---
## Test demo

To run the test you will need to add the following command to the terminal

```
npm run test
```

(Click on the image below to be redirected to the Youtube demo video)

[![Team Profile Generator test Demo](./output/test-demo.jpg)](https://www.youtube.com/watch?v=6FcOg1TgJRc)

---
## My task

My task for this homework was to create a Team Profile Generator. 

The positions available to add new employees were Manager, Engineer and Intern. We have a series of questions that run through node and then the information that is provided is rendered in a final Html file that shows employee cards.

The finalHtml file gets added to the output folder

```
./output/finalHtml.html
```

No code or files were provided for me so everything was built from scratch. 

---
## Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---

Created by Blenda Orellana