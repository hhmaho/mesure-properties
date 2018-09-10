var crel = require('crel')

function renderHeader() {
 return crel('h1', 'mh')
// return crel('div', 
  //  crel('img', {'src' : '/img/logo.png'}))
}

function renderFooter() {
 return crel('address', 'Marianne')
}
//entry vervangen met unit
function renderUnit(unit) {
    var component = crel('li')
    return crel(component, unit.naam)
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
