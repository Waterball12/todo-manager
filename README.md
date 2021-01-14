# TODO Manager

<p align="center">
  <img width="300" height="300" src="https://github.com/Waterball12/todo-manager/blob/main/public/todo-app.png?raw=true">
</p>

## Installation requirements

- [Npm package manager](https://www.npmjs.com/get-npm)
- [Nodejs](https://nodejs.org/en/download/)

Remember to add the binaries to your PATH environment variables if the installation hasn't yet 

## Getting started

Copy the repository files or clone the repository with the following command

```git
git clone https://github.com/Waterball12/todo-manager.git

## Afterwards get inside the main directory
cd todo-manager-main
```

Now you should be able to run the following command to install all the required dependencies

```
npm install
```

After you've installed the dependencies you can start the local server using

```
npm start
```

Waiting till it create a build. Afterwards you'll be able to navigate to http://localhost:3000 to view the server running.

## Folder structure

    .
    ├── public                  # Files that will be exposed to the public
    ├── node_modules            # Dependencies folder
    ├── src                     # Source files
    │   ├── assets              # The assets of the projects such as img and css
    │   └── components          # Contains all the components used across the page/pages
    └── README.md

## Future features

[x] Integrate add
[x] Integrate remove
[ ] Add edit the current todo's
[ ] Create a logo
[ ] Add animations
[ ] Improve scrollbar on desktop view when there're many todo's
