# Qpayam Website Design

This project is created using MERN Stack.

## Front-End

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Folder Structure

> client
>
> > public
>
> > > index.html // the App HTML
>
> > src
>
> > > Components // Components used in the Pages
>
> > > Pages // Pages for the App
>
> > > Styles // Styling for Pages and Components
>
> > > App.tsx // File connected to index.tsx
>
> > > globalStyles // Styles used across the entire App
>
> > > index.tsx // Main Container HTML
>
> > > responsiveDesign.ts // Function for responsive design, Mobile

### Tech Used

#### `React`

React JS is used to run the front-end.

#### `Styled-Components`

A better CSS library than vanilla CSS.\
Can create components with custom naming,

#### `Material UI`

Can use Material Icons.\
Easier than implementing images and icons.

#### `TypeScript`

Used for development. Build files are in JS.\
.helper extensions are used for creating interfaces and types.

## Back-End

In the project directory, you can run:

#### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `npm start`

Builds the app for production to the `build` folder.

### Folder Structure

> client
>
> > src
>
> > > controllers // Methods used by Routes
>
> > > models // Schema for the DB, using mongoose
>
> > > routes // Routes used for various usages
>
> > > index.ts // Server entry point
>
> > types // Global types declaration
>
> > > express // For Express library
>
> > > > > index.d.ts // Use it before 'node_modules/@types' in tsconfig.json

### Tech Used

#### `NodeJS`

Server is managed by Node.

#### `mongoose`

Connection to Mongo DB is managed using the library.

#### `express`

Routing and CRUD operations.

#### `TypeScript`

Used for development. Build files are in JS.

#### `bcrypt`

Hashing password

#### `jsonwebtoken`

Tokens are given for sessions and Authorisation.

#### `morgan`

To console the CRUD operations.

#### `nodemon`

Restarting the Server after file changes.

#### `rimraf`

To eject the old build folder.\
Used in production.

#### `ts-node`

Compile .ts files without building the entire App.

#### `Mongo DB Atlas`

Storing the collections and data.

### Routes

#### `Auth`

Register

[localhost:8000/api/auth/register](localhost:8000/api/auth/register)

Login

[localhost:8000/api/auth/login](localhost:8000/api/auth/login)

#### `Users`

//Need Token validation for all

//Need authorisation

updateUser

[localhost:8000/api/users/:id](localhost:8000/api/users/:id)

//Need Admin privileges

getUser

[localhost:8000/api/users/:id](localhost:8000/api/users/:id)

getAllUsers

[localhost:8000/api/users/](localhost:8000/api/users/)

getUsersUsingQuery

[localhost:8000/api/users?new=true](localhost:8000/api/users?new=true) //Check file for details

deleteuser

[localhost:8000/api/users/:id](localhost:8000/api/users/:id)
