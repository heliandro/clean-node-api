#!/bin/bash

npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/pre-push "npm run test:ci"