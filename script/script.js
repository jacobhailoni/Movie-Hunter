fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "aa08ed95d6msh76d47afbb0e4be8p19f8f7jsn73bc6b01493a"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});