var crel = require('crel')
var tabletop = require ('tabletop')
var render = require('./render.js')
var indexstyle = require('./indexstyle.css')

tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1HQLmOx7gHBh1SvKWuBSQB5xt1JD-hTwxsAtXUpprmiU/edit?usp=sharing',
    callback: function (tabletopData, tabletop) {
      console.log(tabletopData)
      document.body.appendChild(render(tabletopData))
    },
    simpleSheet: true
  })