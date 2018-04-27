#!/bin/bash -ue

echo "Commencing build..."

npm run lint
if [ $? -eq 1 ];
then
    echo "There are linting errors. Failing build..."
    exit 1
fi

case $TRAVIS_BRANCH in
    develop)
        REACT_APP_ENV=development
        ;;
    master)
        REACT_APP_ENV=prod
        ;;
    *)
    ;;
esac

echo "Building React in ${REACT_APP_ENV} mode"

REACT_APP_ENV=$REACT_APP_ENV NODE_PATH=src/ node scripts/build.js
if [ $? -eq 1 ];
then
    echo "The webpack build failed."
    exit 1
fi

