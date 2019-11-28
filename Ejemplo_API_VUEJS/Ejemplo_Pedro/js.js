Vue.filter('format-thousands', function (value) {
    // https://stackoverflow.com/a/2901298
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  });
  
  
  new Vue({
    el: "#app",
    data: {
      textSearch: "",
      countries: []
    },
    computed: {
       countriesFilter: function() {
         var textSearch = this.textSearch;
         return this.countries.filter(function(el) {
           return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
         });
       }
    },
    created: function() {
      var that = this;
      axios({
        "method":"GET",
        "url":"https://free-nba.p.rapidapi.com/teams",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"free-nba.p.rapidapi.com",
        "x-rapidapi-key":"3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
        },"params":{
        "page":"0"
        }
        })
        .then((response)=>{
            that.countries = response.data.data;
          console.log(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    mounted: function() {
      $.scrollUp();
    }
  })