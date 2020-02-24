var arrayCoctel = [];

function mostrar() {
    document.getElementById('contenedor').style.display = "none";
    document.getElementById('contenedor').style.display = "block";
}

new Vue({
    el: "#app",
    data: {
        textSearch: "",
        cocteles: []
    },
    created() {
        for (var index = 11000; index <= 11014; index++) {
            axios({
                    "method": "GET",
                    "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                    },
                    "params": {
                        "i": index
                    }
                })
                .then((response) => {
                    arrayCoctel.push(response.data.drinks[0]);
                    this.cocteles = arrayCoctel;
                })
                .catch((error) => {
                    console.log("Error: ", error);
                });
        }
    },
    computed: {
        artistFilter() {
            var textSearch = this.textSearch;
            return this.artist.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});


new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        coctel: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                }
            })
            .then((response) => {
                this.coctel = response.data.drinks;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        artistFilter() {
            var textSearch = this.textSearch;
            return this.artist.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});


new Vue({
    el: "#app3",
    data: {
        textSearch: "",
        coctelAlcohol: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                },
                "params": {
                    "a": "Non Alcoholic"
                }
            })
            .then((response) => {
                this.coctelAlcohol = response.data.drinks;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        artistFilter() {
            var textSearch = this.textSearch;
            return this.artist.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});