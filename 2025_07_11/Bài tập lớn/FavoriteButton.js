function jsFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}
function jsonFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites))
}


function Information(item) {
    const h3 = item.querySelector('h3')
    const a = h3.querySelector('a')
    return {
        name: a.textContent.trim(),
        link: a.href,
        img: item.querySelector('img').src,
        type: item.classList.contains('ln-item') ? 'ln'
            : item.closest('.manga-section') ? 'manga'
            : 'anime'
    }
}


function statusButtons() {
    const favs = jsFavorites()
    document.querySelectorAll('.add-button').forEach( bt => {
        const item = bt.closest('.anime-item, .ln-item')
        const info = Information(item)
        
        const existFav = favs.some( fav => fav.name === info.name && fav.type === info.type)
        if (existFav) {
            bt.textContent = 'Gỡ'
            bt.classList.add('remove-fav')
        } 
        else {
            bt.textContent = 'Yêu thích'
            bt.classList.remove('remove-fav')
        }
    })
}


document.addEventListener('click', function(b) {
    if (b.target.classList.contains('add-button')) {
        const btn = b.target
        const item = btn.closest('.anime-item, .ln-item')
        const info = Information(item)

        let favs = jsFavorites()
        const position = favs.findIndex( fav => fav.name === info.name && fav.type === info.type)
        if (position !== -1) {
            favs.splice(position, 1)
        } 
        else{
            favs.push(info)
        }
        jsonFavorites(favs)
        statusButtons()
    }
})
document.addEventListener('DOMContentLoaded', statusButtons)