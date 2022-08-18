# Getting started

- Download and setup postgresql database on local (https://postgresapp.com/downloads.html)

- Download the repository

- Create .env file based on .env.example file

- Install dependencies
```
npm install
```
- Build and run the project
```
npm run migrate up
npm run build
npm start
```

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

# Deploying the app

### Build the app

- execute `npm run build` from a terminal window

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected. 

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

### Run migrate
Run `npm run migrate create my first migration`. It will create file `xxx_my-first-migration.js` in migrations folder.
Run `npm run migrate up` to install.
