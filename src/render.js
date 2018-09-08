var crel = require('crel')

<<<<<<< HEAD
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
=======

function mainOptions() {
    return crel('li', crel('a', 'home'))
}

function mainPic() {
    return crel('div', 
    crel('img', {'src' : 'img/IMG_4463.jpg'}))
}

module.exports = mainPic
>>>>>>> 929208b53b2f2e51b5559056d1d1bd10dfed7285
