###A to Z Store project

Easiest usage is using Visual Studio 2019 to load the entire solution and then you can run it normally.
This shouldn't require any special setup once it is loaded, as long as all of the prerequisites are installed.

You will need

* ASP.NET Core
* Entity Framework Core
* NodeJS


## Functionality 

This project uses ASP.NET Core and React to render a store page complete with a functioning (if simplistic) search bar and cart.

It contains a small sqlite database that is pre-seeded with product data in the `products` table, and it stores any created orders in the `orders` table

It persists the cart between user sessions using browser localstorage, so that must be enabled for best functionality.

The search does simple substring matching on the name and description for products. A good example of this is if you search for "ice"

Images are served from the `ClientApp/public/images` folder

Swagger API docs are available when the client is running at `/swagger`


