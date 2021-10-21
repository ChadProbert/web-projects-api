# Web Projects API

## Setting Up The API

1. Download the web-projects-api from [here](https://github.com/ChadProbert/web-projects-api "https://github.com/ChadProbert/web-projects-api") and extract to desktop.
2. Navigate to the 'web-projects-api' folder inside the terminal and type 'npm install'.
3. Once the dependency installation is completed, type 'npm start' into the terminal (ensure that you are still typing commands into the web-projects-api folder).

![Setup](/web-projects-api/readme_images/Setup.png)

## Testing API With Postman

### Setting Up Postman To Run Tests

1. Navigate to the [Postman homepage](https://www.postman.com/).
2. Ensure that you have Postman's desktop application running so that you can send requests to local URL's.
3. Create a new HTTP request.

![Start new request](/web-projects-api/readme_images/Start-new-request-postman.png)

![Setup](/web-projects-api/readme_images/Create-http-request.png)

### Testing:

#### Get Request

1. Set the request type to 'GET'.
2. Set the request URL to http://localhost:8080/api
3. Click 'Send'.
4. Review JSON response.
   ![Get request](/web-projects-api/readme_images/Get-request.png)

#### Post Request

1. Set the request type to 'POST'.
2. Set the request URL to http://localhost:8080/api/create
3. Navigate from 'Params' to 'Body' tab.
4. Select the 'raw' radio button.
5. Select 'JSON' from the dropdown.
6. Insert the new project information (i.e Title, description, URL, repository) in JSON format. Do not insert an ID. A random ID number will be assigned to the new project.
7. Click 'Send'.
   ![Post request](/web-projects-api/readme_images/Post-request.png)

8. Review JSON response with new project added. This will be the new array of web projects stored inside of the web-projects.json file.
   ![Post response](/web-projects-api/readme_images/Post-response.png)

#### Put Request

1. Set the request type to 'PUT'.
2. Set the request URL to http://localhost:8080/api/update/1 where '1' is the ID value of the project you want to change/update.
3. Navigate from 'Params' to 'Body' tab.
4. Select the 'raw' radio button.
5. Select 'JSON' from the dropdown.
6. Insert the changes you want to make to the project information in JSON format.
7. Click 'Send'.
   ![Put request](/web-projects-api/readme_images/Put-request.png)

8. Review JSON response which will show the new web projects array with the updated changes. The updated array will now be stored inside of the web-project.json file.
   ![Put response](/web-projects-api/readme_images/Put-response.png)

#### Delete Request

1. Set the request type to 'DELETE'.
2. Set the request URL to http://localhost:8080/api/delete/2 where '2' is the ID value of the project you want to delete.
3. Click 'Send'.
   ![Delete request](/web-projects-api/readme_images/Delete-request.png)
4. Review JSON response which will now show the web projects array without the deleted project. The projects array will no longer store the deleted project inside of the web-project.json file.
   ![Delete response](/web-projects-api/readme_images/Delete-response.png)
