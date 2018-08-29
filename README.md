# Liri-node-app

Week 10 (LIRI Bot) Assignment

Created during Week 10 for UNH Coding Bootcamp. The assingment was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

concert-this

spotify-this-song

movie-this

do-what-it-says

Getting Started
Clone the repo.
Run command 'npm install' in Terminal or GitBash
Run command 'node liri.js' or one of the commands below.

node liri.js concert-this fallowed by band or Artist name, be sure to put the name in "artist/band" 
The following information will be shown in terminal/bash window.
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")
.
node liri.js spotify-this-song fallowed by "song name"
The following information will be shown in terminal/bash window.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to "The Sign" by Ace of Base.

node liri.js movie-this "movie name"
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command