function init() {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/edit?usp=sharing',
    // ignore this URL: https://docs.google.com/spreadsheets/d/e/2PACX-1vTqti2RKa4EpXpJBkSKuoSyHlFTbjFJouk8qOmk7klhdSkJlwa08EpYfBGE4GQKT4FDt1wOS2Dr8AUh/pubhtml
    callback: function (tabletopData, tabletop) {
      console.log(tabletopData)

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