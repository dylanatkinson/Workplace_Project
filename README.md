# Workplace Project

An attempt to recreate a MERN version of the Sofology website with some usability:

- Render *something* from a MongoDB collection.
- Add items to the basket.
- Browse multiple pages.
- Log-in/log-out functionality.

--------------------------------------------------------

## Current Progress ##

Basic layout & some functionality added.

App.css is huge, need to break this down and add to styles folder and import into relevant files.

Items now render from DB onto browser page. Need to refine this.

~~Current system for rendering data will work for clearance items.~~

Clearance rendering, just need to refine how it looks.

~~Need to figure out how to query multiple collections in a namespace.~~

Now pulling from multiple collections in branch product_v1.


Next steps:
- [ ] Use IDs to add items to basket. Hope to do this without resorting to Redux since I don't fully understand Redux.
- [ ] Log in/log out. Since I now have a users database I can try some user auth too.
- [ ] Make everything prettier.

--------------------------------------------------------

### Dependencies

- Express
- Axios
- Mongoose
- Dotenv
- Body Parser
- FontAwesome
- BrowserRouter

--------------------------------------------------------