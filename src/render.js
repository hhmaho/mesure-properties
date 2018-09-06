var crel = require('crel')


function mainOptions() {
    return crel('li', crel('a', 'home'))
}

function mainPic() {
    return crel('div', 
    crel('img', {'src' : 'img/IMG_4463.jpg'}))
}

module.exports = mainPic