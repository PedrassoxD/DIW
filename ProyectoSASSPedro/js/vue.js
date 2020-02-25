/* //Creamos una nueva instancia de Vue asociada al div con id app  
var demo = new Vue({
    el: "#app",
    //Definimos los datos para utilizarlos en el html
    data: {
        textSearch: "",
        teams: []
    },
    // Ahora hacemos uso de los hooks, que son los diferentes estados por los que puede pasar un componente
    // podéis leer más en https://elabismodenull.wordpress.com/2017/05/05/vuejs-el-ciclo-de-vida-de-un-componente/
    // en este caso podríamos hacerlo tanto en created como en mounted, pero sería más apropiado en created ya que no estamos 
    // accediendo al DOM
    created() {
        //Ahora obtenemos datos de la API, en algunos ejemplos vemos axios.get, pero podemos usar esta forma (por comodidad principalmente
        //ya que desde RapidAPI nos dan este formato)
        axios({
                "method": "POST",
                "url": "https://nasaapidimasv1.p.rapidapi.com/getPictureOfTheDay",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "NasaAPIdimasV1.p.rapidapi.com",
                    "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                },
                "data": {

                }
            })
            .then((response) => {
                console.log('Response: ', response)
            })
            .catch((error) => {
                console.log('Error: ', error)
            })

    },
    /* computed: {
        teamsFilter() {
            this.teams.forEach(team => {
                team.image_url = "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/" + team.abbreviation.toLowerCase() + ".png";
            });
            var textSearch = this.textSearch;
            return this.teams.filter(function(el) {
                return el.conference.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    } */


/* }); */
/* var key = "X8L6v1gd0pu23hm5hkWaGAoM0wNXVIs6TIeUgnDQ";
new Vue({
    el: "#app",

    data: {
        mierda: []
    },
    created: function() {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
            .then(function(response) {
                console.log(response);
                this.title = response.data;
                console.log(this.title);
            })
            .catch(function(error) {
                console.log(error);
            });
    },

}); */