# Delicious Burger App
This is a Full-Stack Model-View-Controller (MVC) Application that allows the users to add burgers to the menu (Database), view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away (DELETE) after devoured.

![Results](/public/assets/images/burger2-1.png)

## How the app works
This project is a full stack application that allows you to place an order for a burger. When you place an order, the burger you enter in the form field is added to the list of burgers on the left side of the screen. Each burger in the list has a Devour me button. Clicking this button moves the burger from the list on the left side of the screen to the list on the right. The list on the right is a list of burgers that have already been devoured. Each burger in this list has a Throw away button that allows you to remove the burger, which deletes the burger from the user interface as well as from the MySQL database.

## How the app is built
This project uses MySQL, Node, Express, Handlebars, ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a templating language that is used to generate the HTML.