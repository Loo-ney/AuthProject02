
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## DOCUMENTING PROJECT

### setup
- mkdir project folder
    - mkdir client server
- cd client 
    - `npx create-react-app .`

- remove git repository from client folder 
 - `rm -rf .git`    

- initialize git in main project folder
    - `git init `

- have to do remote add to git repo 
 - i follow guide from gpt 

- restructure src folder
- install `npm install -D tailwindcss postcss autoprefixer` in client folder
- execute `npx tailwindcss init -p` this creates tailwind and postcss config js


## Routes

- for different routes we specify different components
- install library called `react-router-dom`
    - with this we create all the routes of this project

- for this variable router we will create component for each router
```javascript
    const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element :<Profile ></Profile>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
    ])    
 ```

- cd src
    - mkdir components
        - touch Username.js Register.js P
assword.js Recovery.js Reset.js Profile.js PageNotFound.js

- import components to `App.js` and specify to each path 

## Login UI

- create assests folder 
 - inside assests we put images for UI

- create folder styles 
 - create file `Username.module.css`
 - import to `Username.js` and apply accordingly


- add google fonts 

## FORMIK , REACT HOT TOAST
- makes the ui completely interactive
- react hot toast gives pop up errors and success messages
- `npm i formik react-hot-toast` in client directory

- for creating validate
 - creater folder helper in src
  - inside create validate.js file 



## RESET REC0VERY PASSWORD UI
- create password ui
- create recovery ui
- create reset ui
- create validate for reset component

## REGSISTER UI
- create register ui 
- new file  `convert.js` is created for image conversion

## PROFILE UI
- create profile page functionality
- create profile page validation
- create profile.module.css
    - extend styles


# BACKEND    

- working in server directory for backend
- `npm init -y`
 - initialize the server as node package 
- `npm i express cors mongoose mongodb-memory-server multer nodemon` 
    - express - backend routes
    - cors - connect between two domains
    - mongoose - creating database
    - mongodb-memory-server :- to create mongodb in the memory
    - multer : to log every request inside the console
    - nodemon - to start development server

- `npm i morgan`    

- create backend application server in `server.js`

### MONGODB
-  creating database connection 

### ENDPOINT - BACKEND API
- create endpoint for all route for application
- create controller folder
 - controller for each route

## THUNDER CLIENT
- using thunder client for testing route 

### creating controller one by one
- before creating controller we need to define a structure of the document 
    - for this create a folder `model` 
        - inside model define the database structure create `User.model.js`

### creating /register controller
- `npm i bcrypt` for hashing password

- 500 internal server error : when sending post request in thunder client 
    - resolve this by downgrading mongoose to version 6

## creating /login controller
- `openssl rand -base64 32` : generating secret key
- and also verify user
