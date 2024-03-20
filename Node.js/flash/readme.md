Flash message allows us to create a data in a route and accessing that data in another route.

Steps:
install connect-flash
Make sure you put connect flash in a app.use function
create flash in a route
try running flash in another route

Note - We cannot use wthout express session.

What we want -
When we go to '/failed' route a flash message gets generated and it is shown in '/' route.