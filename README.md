# MERN MSSQL ACCESSING WITH CORS AND REACT

This is a boilerplate using the following technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mssql](https://www.microsoft.com/en-us/sql-server/sql-server-2017) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation
- [CORS](https://www.npmjs.com/package/cors) for Cross origin resource sharing


## Requirements

- [Node.js](https://nodejs.org/en/) 6+
- [Ms SQL](https://www.microsoft.com/en-us/sql-server/sql-server-2017) 2016+
- At least 2GB of ram

## Installation
- Install node packages with the package.json file.
```shell
npm install
```

- To configure SQL Server on Ubuntu, run the following commands in a terminal to install the mssql-server package.
```shell
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -

sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2017.list)"

sudo apt-get update
sudo apt-get install -y mssql-server

sudo /opt/mssql/bin/mssql-conf setup
```
- Run mssql-conf setup and follow the prompts to set the SA password and choose your edition. After that enable mssql on startup

``` shell
systemctl status mssql-server
```
## Connection
I've added my `cinema.sql` in the `/` for referencing of cinema dataset and API calls

Make sure to add in the `server/server.js` DB configurations.
```shell
const config = {
  user: <usename>,
  password: <serverpassword>,
  server: <servername>,
  database: <database name>
};
```
# Running Production mode:

Production mode files are added to the `dist` folder. Production need to run on an `apache` server.
```shell
npm start
```

## Running Development (Webpack dev server) mode:

```shell
npm run start:dev
```
