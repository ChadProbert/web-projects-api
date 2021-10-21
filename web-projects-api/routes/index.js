const express = require("express");
const router = express.Router();
const fs = require("fs");

const projects = JSON.parse(fs.readFileSync("./web-projects.json"));

// generates a random id number for a new project
const generateID = () => {
	return Math.floor(Math.random() * Date.now());
};

/* when the user sends a get request to http://localhost:8080/api 
the response will be all the projects stored inside of web-projects.json
in json format */
router.get("/", (req, res) => {
	res.json(projects);
});

/* when the user sends a post request to localhost:8080/api/create
it will add the raw json input into the array of projects stored 
inside of web-projects.json */
router.post("/create", (req, res) => {
	const id = generateID();

	/* assigns new object with a random id number and the body
	input from postman */
	const newProject = Object.assign({ id }, req.body);

	// adds the new project to the array of projects
	projects.push(newProject);

	// writes the new array to web-projects.json
	// converts projects from an object to json string
	fs.writeFileSync("web-projects.json", JSON.stringify(projects));

	// sends a response to the user when a new project is added to the array
	res.json(projects);
});

// edit an existing project stored inside of web-projects.json
router.put("/update/:id", (req, res) => {
	const id = Number(req.params.id);

	// assigns the parameter id with the updated json body input
	const newProject = Object.assign({ id }, req.body);

	// looping through the projects to find the requested parameter id
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id === id) {
			projects[i] = newProject;
		}

		// writes the updated project to web-projects.json
		fs.writeFileSync("web-projects.json", JSON.stringify(projects));
	}

	// responds to the user when a project is updated successfully
	res.json(projects);
});

// deletes a project with the specified parameter id
router.delete("/delete/:id", (req, res) => {
	const id = Number(req.params.id);

	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id === id) {
			// removes a project from the array with the specified parameter id
			projects.splice(i, 1);
		}

		// writes the updated project to web-projects.json
		fs.writeFileSync("web-projects.json", JSON.stringify(projects));
	}
	// used "\n \n" for line breaks
	res.json(projects);
});

module.exports = router;

//TODO review references
/* references
 
https://www.youtube.com/watch?v=nX7jGHgD9t8

https://stackoverflow.com/questions/52857105/how-to-post-data-to-json-file-using-postman-in-node-js

https://www.youtube.com/watch?v=3Nvx0mNXPc4

https://stackoverflow.com/questions/51150956/how-to-fix-this-error-typeerror-err-invalid-callback-callback-must-be-a-funct/51151244

https://stackoverflow.com/questions/52857105/how-to-post-data-to-json-file-using-postman-in-node-js

https://stackoverflow.com/questions/26236180/how-do-i-add-a-line-break-in-a-string
*/
