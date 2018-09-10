<<<<<<< HEAD
var crel = require('crel')
var tabletop = require ('tabletop')
var render = require('./render.js')

tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/edit?usp=sharing',
    callback: function (tabletopData, tabletop) {
        console.log("render:", render)
      document.body.appendChild(render(tabletopData))
    },
    simpleSheet: true
  })
=======
var render = require ('./render')
var tabletop = require ('tabletop')

tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/edit?usp=sharing',
    //key: 'https://docs.google.com/spreadsheets/d/14GTxRdrZgGe2sLrxX-KErQnWuNR2St25qgJHZXLNrhk/pubhtml',
    callback: function (tabletopData, tabletop) {
      console.debug(tabletopData)
      document.body.appendChild(render(tabletopData))
    },
    simpleSheet: true
  })

>>>>>>> 929208b53b2f2e51b5559056d1d1bd10dfed7285
