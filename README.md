# LABORATORY REACT LOGIN SESSION

## Goal

This project is a minimum example of how to manage a login with a session token.

I wanted to create a simple tutorial for some of my colleague to understand the logic. It uses `react-hook-form` for managing the login form and `react-cookie` for managing the connection cookie.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| hooks         | Regroup the react hooks                                 |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services for calling API                    |
| styles        | Regroup the scss files                                  |


## Development
#### Logic

Inside the App.js, we get the token using the useToken hook.
If the token exist, we let the user going wherever he want excepted login. In case the user want to go to the login page with a valid token, we redirect him to the private dashboard.
If the token does not exist, we redirect the user to the login page.
The public pages does not check the token at all.

Inside the useToken, we can do 3 things, set the token, get the token and check the token. When the user successfully login, we save his token. The checkToken check that the token exist and check using the backend that this one is good (in this minimal version, I am just checking his value). In case the token has been changed manually, the token is invalid and the user is considered without a token.


#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page
- **react-cookie**: For managing the cookie of the user
- **react-hook-form**: For managing the login form

## Running

For running the API, a single command is needed.

```
npm run start
```

## Commands

- **npm run dev**: Run the linter and then the project in development mode
