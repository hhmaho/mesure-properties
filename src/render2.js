var crel = require('crel')

function renderHeader() {
 return crel('h1', 'mh')
// return crel('div', 
  //  crel('img', {'src' : '/img/logo.png'}))
}

function renderFooter() {
 return crel('address', 'Marianne')
}
//entry vervangen met uint
function renderUnit(unit) {
    var component = crel('li')
    var button = crel('button', 'navigation')
   
    button.addEventListener('click', function () {
      var content = crel('p', entry.definition)
   
      component.removeChild(button)
      component.appendChild(content)
    })
   
    return crel(component, entry.term, button)
   }
//test
function renderEntries(entries) {
 return crel('ul',
   entries.map(renderEntry))
}
//test
function renderApp(entries) {
 return crel('div',
   renderHeader(),
   renderEntries(entries),
   renderFooter())
}

module.exports = renderApp
