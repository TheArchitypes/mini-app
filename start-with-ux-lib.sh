#!/bin/bash -ue

echo "###################"
echo "Commencing build..."
echo ""

# Save the current directory to a variable, to redirect to later.
REDIRECT_CWD=$(pwd)

# Change to the shared lib directory and run build.
cd ../kubra-lib-ux-components
npm run build
if [ $? -eq 1 ];
then
    echo "There are errors with building kubra-lib-ux-components. Failing build..."
    exit 1
fi

echo "#########################################################"
echo "Installing kubra-lib-ux-components from local directory..."
echo ""

# Change back to the original directory and start as normal.
cd $REDIRECT_CWD
npm install ../kubra-lib-ux-components
if [ $? -eq 1 ];
then
    echo "There are errors with installing kubra-lib-ux-components from local directory. Failing install..."
    exit 1
fi

echo "#################################"
echo "Starting server with npm start..."
echo ""

npm start
if [ $? -eq 1 ];
then
    echo "Shutting down server."
    exit 1
fi
