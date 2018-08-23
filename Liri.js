require("dotenv").config();
var keys = require("./keys.js");
var Bands = require("bandsintown-events");
var Spotify = require('node-spotify-api');
var fs = require ("fs");
var request = require('request');
var argOne = process.argv[2];
var agrTwo = process.argv[3];
var spotify = new Spotify({
    id: keys.spotify.id,
    secret:keys.spotify.secret
   });


switch(argOne){
    case "concert-this":
        concertThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break

};

function concertThis(){
    var artistSearch
    if (agrTwo === undefined){
        artistSearch === "Lucas Graham";
    }
    else{
        artistSearch = agrTwo;
    }

    queryUrl = "https://rest.bandsintown.com/artists/" + artistSearch + "/events?app_id=" + keys.bands.Band_id;
    request(queryUrl,function(error,response,body){
        if(!error && response.statusCode === 200){

           
                // console.log("Artist: " + JSON.parse (body)[0].artists.name);
               console.log("Venue name: " + JSON.parse (body)[0].venue.name);
               console.log("City: " + JSON.parse (body)[0].venue.city);
            // }	
            
        }
    });

    
}

function spotifyThisSong(){
    var spotifySearch;
    if (agrTwo === undefined){
        spotifySearch === "The Sign";
    }
    else{
        spotifySearch = agrTwo;

    }

    spotify.search({type:"track", query:spotifySearch}, function(error ,data){
        if(error){
            console.log("User Error: " + error);
        }
        // Shows Spotify Information to the console
        else{
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Album Name: " + data.tracks.items[0].album.name);
            console.log("Song Preview : " + data.tracks.items[0].preview_url);
        }
    });
};


 function movieThis(){
    var movieName;
    if(agrTwo == undefined){
        movieName = "mr nobody"
    }
    else{
        movieName = agrTwo;
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey="+keys.omdb.apikey;

    request(queryUrl,function(error,response,body){
        if(!error && response.statusCode === 200){

		//Shows Movie Information To The Console
		console.log("Title of the movie: " + JSON.parse(body).Title);
		console.log("Year the movie came out: " + JSON.parse(body).Year);
		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		console.log("Country where the movie was produced: " + JSON.parse(body).Country);
		console.log("Movie language: " + JSON.parse(body).Language);
		console.log("Movie plot: " + JSON.parse(body).Plot);
		console.log("Actors in the movie: " + JSON.parse(body).Actors);
            
        }
    });
}

doWhatItSays = function(){
    fs.readFile("random.txt", "utf8", function(error, data){
      var text = data.split(",");
  
      spotifyThisSong(text[1]);
    });
  }
