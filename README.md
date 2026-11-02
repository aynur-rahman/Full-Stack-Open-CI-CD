# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full Stack Open course

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Deployment

The app is deployed to Render at https://fso-cicd-pokedex.onrender.com. The GitHub Actions pipeline deploys every push to `main` that passes all checks, and Render uses the `/health` endpoint as its health check.

## Pull requests

The same pipeline runs for pull requests to `main`, so changes are linted, built and tested before they are merged.
Deployment only runs for pushes and merges to `main`, never for pull requests.

## Versioning

Every merge to `main` that passes the pipeline is tagged with a new patch version (for example `v0.0.1`).
A merge whose commit messages contain `#skip` is neither deployed nor tagged.
