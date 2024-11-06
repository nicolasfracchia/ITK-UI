# in-the-know-yyc-ui
Repository for front-end development of the InTheKnowYYC project.

# INDEX

1. [SET UP](#set-up)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Development environment](#development-environment)
    * [Production environment](#production-environment)
2. [PROJECT STRUCTURE](#project-structure)
3. [ENVIRONMENT VARIABLES CONFIGURATION](#environment-variables-configuration)
    * [.env.example](#envexample)
    * [.env](#env)

# SET UP

### Prerequisites
* Node.js and npm (https://nodejs.org/en)
    * Check Node version: `node -v` 
    * Check npm version: `npm -v` 
### Installation
1. Clone the project
2. Inside the project directory run `npm install` to install dependencies
### Development environment
`npm run dev`
### Production environment
* Run `npm run build` (minifies and optimizes code deploy the app)
    * To test locally before deployment: `npm run start`


# PROJECT STRUCTURE

```BASH
in-the-know-yyc-ui
│
├───public
│   └───images # Only general images for the site, not images for events uploaded by API
│
├───src
│    ├───api # This folder contains the functionality to fetch the API and return data to the components. 
│    │
│    ├───app
│    │   ├───fonts
│    │   └───styles # CSS files for every page and component
│    │       ├───components
│    │       │───pages
│    │       └───globals.css # Styles used in the entire site
│    │
│    ├───components # There is a component for each content block to facilitate reuse
│    │
│    ├───hooks # This folder has the client-side rendered scripts (like carousels and mobile menu functionality)
│    │
│    └───pages # Automatic routing according to the file name. Ie: "about.js" will be accessed by [www.intheknowyyc.com/about]
│        └───_app.tsx # Home page of the project
│
├.gitignore # Besides the regular ignored files and directories, ".env " file is ignored and ".env.example" is tracked
├.env # Contains the environment variables and is ignored in github
├.env.example # Contains a complete example of the required environment variables to ease the installation and set-up process
```

# ENVIRONMENT VARIABLES CONFIGURATION

### .env.example
* Is only an example of the required variables to keep versioned in the repository.
* All the variables have an example of the expected value for proper functionality.

### .env
* Must be created in every environment
* Must remain untracked to hold secrets
* Must have the real information and keys for proper functionality of the system
* Requires manual update as it is not tracked