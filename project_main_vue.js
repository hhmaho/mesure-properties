function init() {
  var elem = document.getElementById('app-4')
  elem.style.display = 'none'

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/pubhtml',
    callback: function (tabletopData, tabletop) {
      console.log(tabletopData)
      elem.style.display = 'block'

      var app4 = new Vue({
        el: '#app-4',
        data: {
          list: tabletopData,
        }
      })
    },
    simpleSheet: true
  })
}

window.addEventListener('DOMContentLoaded', init)

//https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/edit?usp=sharing