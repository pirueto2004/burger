# Delicious Burger App
This is a Full-Stack Model-View-Controller (MVC) Application that allows the users to add burgers to the menu (Database), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away (DELETE) after devoured.

![Results](/public/assets/images/burger2-1.png)

## How the app works
This project is a full stack application that allows you to add a burger to an order list. When you place an order, the burger you enter in the form field is added to the list of burgers on the left side of the screen. Each burger in the list has a 'Devour me!' button. Clicking this button moves the burger from the list on the left side of the screen to the list on the right. The list on the right is a list of burgers that have already been devoured. Each burger in this list has a 'Throw away' button that allows you to remove the burger, which deletes the burger from the user interface as well as from the MySQL database.

## How the app is built
This project uses MySQL, Node, Express, Handlebars, ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a templating language that is used to generate the HTML.

## MVC Design Pattern
This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

## Structure of the project

The project directory structure is set up as follows:

<b>server.js</b>: This file does the following:

Defines and requires the dependencies, including express, body-parser, and express-handlebars.
Sets up the Express server.
Sets up the Express server to handle data parsing using body-parser.
Points the server to the API routes, which gives the server a map of how to respond when users visit or request data from various URLs.
Defines the port the server is listening on.
Starts the server.
Allows the app to serve static content from the public directory.
<b>public</b>: Contains the static content (images, Javascript, and CSS).

<b>assets/css/style.css</b>: External CSS stylesheet.
<b>assets/images</b>: Contains icons and images used in the application.
<b>assets/js/burger.js</b>: Contains the jQuery ajax POST, DELETE, and PUT requests for adding a burger, throwing away a burger, and updating the devoured value for a burger, respectively.
<b>models</b>: Contains a file called burger.js, which contains functions used to manage the application data and interact with the database.

The burger.js file also includes the code that will call the ORM functions using burger specific input for the ORM.

<b>db</b>: Contains 2 files:
    <ul>
        <li><b>schema.sql</b>: The database schema. The schema is what describes the structure of the database table, and the datatypes that each column of the table can contain. For this project, the database includes one table that includes columns for id, burger name, and devoured state (true or false).</li>
        <li><b>seeds.sql</b>: Used to populate the table in the development database with some starter burger data.</li>
    </ul>
<b>config</b>: Contains 2 files.
    <ul>
        <li><b>connection.js</b>: Contains the code to connect Node to MySQL.</li>
        <li><b>orm.js</b>: Contains the methods that will execute the necessary MySQL commands in the controllers. These methods are used to retrieve and store data in the database.</li>
    </ul>
<b>controllers</b>: Contains a file called burgersController.js, which contains different routes (GET, POST, PUT, and DELETE). These routes are used to pass information to and from the view and model objects.

<b>views</b>: Contains the Handlebars files, which are templates used to generate the html files.

<b>package.json</b>: Lists the project dependencies (third party npm packages) and their version numbers.
<b>.gitignore</b>: Anything listed inside this file will not be tracked by GitHub when code is committed.
<b>package-lock.json</b>: Dependency tree for the project. Lists all the dependencies and their versions.