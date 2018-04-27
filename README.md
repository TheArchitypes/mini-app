(I'll run back through this and get everything formatted this weekend)
mini-app localhost isntallation process:

be sure to have git installed ( https://git-scm.com/book/en/v2/Getting-Started-Installing-Git )
and node.js ( https://nodejs.org/en/download/ )
windows useres will need to install a bash terminal or use gitbash ( https://github.com/git-for-windows/git/releases/download/v2.17.0.windows.1/Git-2.17.0-64-bit.exe )

If you do not already have an ssh key setup for your current workstation and github account you will have to follow the instructions to get that set up in order to grab and make changes on the repo
( https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/ )

For Mac users you can then open terminal and navigate to the directory where you want to clone the repository
Windows users will need to open gitbash and then navigate to the directory where they want to clone the repository

in terminal or gitbash run: git clone git@github.com:TheArchitypes/mini-app.git

then once the repository has been cloned to your local machine run: cd mini-app

npm install to grab the node_modules dependencies

then Mac users run: npm start
PC users run: npm run start-windows

to fire up the localhost server and run the app locally
