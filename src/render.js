var crel = require('crel')

function renderHeader() {
 return crel('h1', 'Dictionary')
}

function renderFooter() {
 return crel('address', 'Olmo Ziarko')
}

function renderEntry(entry) {
    var component = crel('li')
    var button = crel('button', 'see answer')
   
    button.addEventListener('click', function () {
      var content = crel('p', entry.definition)
   
      component.removeChild(button)
      component.appendChild(content)
    })
   
    return crel(component, entry.term, button)
   }

function renderEntries(entries) {
 return crel('ul',
   entries.map(renderEntry))
}

function renderApp(entries) {
 return crel('div',
   renderHeader(),
   renderEntries(entries),
   renderFooter())
}

module.exports = renderApp
