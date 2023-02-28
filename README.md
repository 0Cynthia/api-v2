# api-v2 #
[![MongoDB](https://custom-icon-badges.demolab.com/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://custom-icon-badges.demolab.com/badge/-Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black)](https://expressjs.com/)

<hr></hr>

### About ###
This web application is an expansion of the api-v1 repository. It features:
- simple CRUD operations against a database model
- json-web-token authentication
- email service using the nodemailer libraru
- pagination 

### Prerequisites ###
1. node.js must be installed
2. must have access to a mongodb database (locally or cloud)
3. must have access to an email account with oauth/app or api communication enabled

### installation instructions ###
1. clone repository
2. run npm install in the root directory
3. create a .env file in the root directory
4. set `MONGODB_URI` to your mongodb connection uri
5. set `EMAIL_HOST` to your email host
6. set `EMAIL_PORT` to your email port
7. set `EMAIL_SENDER_USERNAME` to your sending emails username
8. set `EMAIL_SENDER_PASSWORD` to your sending emails password

- information about senders credentials: https://nodemailer.com/smtp/
- information about setting up gmail with an app password: https://support.google.com/mail/answer/185833?hl=en-GB

```
# running npm install in the root directory...
C:/Users/Refaat/Desktop/api> npm install
```
```
# example with a local mongodb connection
MONGODB_URI="mongodb://localhost:27017/yourdatabase"
```
```
# example of working credentials
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=465
EMAIL_SENDER_USERNAME="your email address here"
EMAIL_SENDER_PASSWORD="your app password here"
```

**Run instructions**
1. change to the src directory
2. run node `.\index.js`

```
C:/Users/Ether/Desktop/api/src> node .\index.js
```
