### era.media
era media's main website.

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org)
- [Firebase](https://firebase.google.com/)

## Build & development

Run `npm install` to install all dependencies.

Run `npm start` for previewing.

## Deployment

### Staging

Run `npm run build-dev` will build the app for production to the build folder.

Run `firebase use {app-name}` will set firebase's app name that we want to use.

Run `firebase deploy` will push the build to firebase hosting.

#### or

Run `deploy-staging` will build the app for production to the build folder.

**NOTE:** make sure that you set the `{app-name}` in the file `package.json` properly

### Production

Run `npm run build will build the app for production to the build folder.

Run `firebase use era-media-a5d17` will set firebase's app name that we want to use.

Run `firebase deploy` will push the build to firebase hosting.

#### or

Run `deploy-prod` will build the app for production to the build folder.