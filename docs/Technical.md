# Technical Instructions

*The Team from Turtle Bay: Operation Pantheon* is a party game for guests who each bring their own smartphone.  The phone's operating system doesn't matter, as long as it has a web browser and the ability to scan QR codes.  The entire game is run from one computer, which acts as a server for the following pages:

1. A "feature" page, which should be visible at all times to all players, preferably on a TV or similar.  This plays videos and shows relevant QR codes.
2. The gamemaster's page, from which the game can be advanced and new puzzles made available for players to solve.  Someone should have this on their phone.
3. Various pages that the players access over the course of the game.

The game code cannot run on its own.  You will need to [install Node](https://nodejs.org/en/download), which is available for all major platforms, and then point it to the `server.js` file in a released build.

Some of the game state is stored in the server's memory, and some is stored in client (player and gamemaster) browsers.  To reset the game state, first shut down the Node server, then clear all cookies associated with that server's IP address in all relevant browsers.  You can then restart the Node server and you'll have a completely clean slate.  This should not be necessary to do in general.

Once you have Node up and running, the game walks you through setting it up.  The checklist here will make much more sense if you're setting up an instance of the game as you read it.

## Technical Checklist

* Install Node.
* Verify that you can run the server.  (It should automatically open a browser window if you successfully run it.)
* Verify that other devices on the same WiFi network can connect to the server.  (You'll see some QR codes that you can scan to test this.)
* Decide how you are going to display the feature page.  I recommend running that browser on the same computer that you use to run the server.  Verify that the feature page does indeed display on whatever screen you're going to use.
    * Play the intro video and make sure the audio works.
* If you can't be there on the day, write up clear instructions for how to run Node and set up the feature and gamemaster's devices.  Include a description of what to look for to ensure that the setup was successful.
* Uninstall Node when you're done.