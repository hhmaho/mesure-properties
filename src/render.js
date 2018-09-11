var crel = require('crel')

function renderHeader() {
 return crel('div', {'id':'wrap'},
 crel('img', {src: '/img/logo.png'}),
 crel('h1', 'index'),
 )
}

function renderFooter() {
 return crel('address', 'Marianne')
}
//entry vervangen met unit
function renderUnit(unit) {
    return crel('li',
     crel('span', {'class':'naam'}, unit.naam), 
     crel('span', {'class':'afkorting'}, unit.afkorting),
     crel('span', {'class':'wikilink'},
      crel ('a', {'href':unit.wikilink},unit.wikilink)),
     crel('span', {'class':'wow'}, unit.wieofwat),
     crel('span', {'class':'foto'}, 
      crel ('img', {'src': unit.foto})),
    )
   }

//test
function renderUnits(units) {
  return crel('ul',
    units.map(renderUnit))
}
//test
function renderApp(units) {
 return crel('div',
   renderHeader(),
   renderUnits(units),
   renderFooter())
}

module.exports = renderApp
