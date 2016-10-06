# interview-x
Please fork the repo and do a pull request with your changes

# Overview
I administer a soccer league and I'd like a web application to track team names and match scores.  

# Project Scope and Requirements

* As an admin I need to enter the team names, the final score and match date
* As a public user, I need to see the league standings
* Project needs to be created using node.js with MySQL backend and Angular 1.* frontend
* Please make at least 3 commits to github
* Optional: host your website and database with AWS

# Steps to setup Project and testing functionality
* Have MySql,node installed and running then clone the repository
* Edit the SQL connection values in server.js file with correct credentials
* From MySQL work bench run the create_table.sql file
	- This will create a new table tournament_standings with teams A - J initialized values(all 0's)
* Install npm modules using command "npm install"
* Now since table is create in DB and dependant modules are installed we can start the server using `node server.js`
* Following steps can be viewed from the browser:
* The default public view is present under home "localhost:3000" or "localhost:3000/index.html"
* Admin view is present under "localhost:3000/input.html"
* In admin view the admin can select a drop down of teams(fixed set of teams in create_table for simplicity) played the match and can also enter the score for simplicity not considering boundary cases like penality shootouts
* The admin user can then click on the `Submit` button
* The admin or the evaluator can check for the change in the team standings in the public view "localhost:3000"

* Note: Tournament Scoring is like this Win => 2 points, Loss => 0, Draw => 1 point