Vue.filter('format-thousands', function (value) {
    // https://stackoverflow.com/a/2901298
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  });
  
  
  new Vue({
    el: "#app",
    data: {
      textSearch: "",
      teams: []
    },
    computed: {
       teamsFilter: function() {
         var textSearch = this.textSearch;
         return this.teams.filter(function(el) {
          return el.first_name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
         });
       },
       processedTeams() {
        let teamsImg = this.teams;
  
        // Add image_url attribute
        // Recorremos los equipos y a cada uno de ellos le añadimos la url del escudo de su equipo
          teamsImg.forEach(team => {
            team.image_url = "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+team.abbreviation.toLowerCase()+".png";      
          });
  
        return teamsImg;
      }
    },
    created: function() {
      var that = this;
      axios({
        "method":"GET",
        "url":"https://free-nba.p.rapidapi.com/players",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"free-nba.p.rapidapi.com",
        "x-rapidapi-key":"3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
        },"params":{
        "page":"0",
        "per_page":"25"
        }
        })
        .then((response)=>{
            that.teams = response.data.data;
          console.log(response.data.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    mounted: function() {
      $.scrollUp();
    }
  })