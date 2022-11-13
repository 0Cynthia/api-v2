<h1>api</h1>

**about**  
- written by Refaat 🌻  
- this project is an expansion of the api-v1 repository
- added pagination to the log resource
- added json-web-token authentication
- added an emailing service usng nodemailer

**prerequisites**
1. node.js must be installed
2. must have access to a mongodb database (locally or cloud)

**build instructions**
1. clone repo
2. run npm install in the root directory
3. create a .env file in the root directory
4. set MONGODB_URI to your connection uri
5. set EMAIL_HOST to your email host
6. set EMAIL_PORT to your email port
7. set EMAIL_SENDER_USERNAME to your sending emails username
8. set EMAIL_SENDER_PASSWORD to your sending emails password

- more information about senders credentials: https://nodemailer.com/smtp/
- more information about setting up gmail with an app password: https://support.google.com/mail/answer/185833?hl=en-GB

```
# running npm install in the root directory...
C:/Users/Refaat/Desktop/api> npm install
```
```
# example with a local mongodb connection
MONGODB_URI="mongodb://localhost:27017/yourdatabase"
```
```
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=465
EMAIL_SENDER_USERNAME="elhajj.refaat@gmail.com"
EMAIL_SENDER_PASSWORD="your app password here"
```

**run instructions**
1. change to the src directory
2. run node .\index.js

```
C:/Users/Refaat/Desktop/api/src> node .\index.js
```
