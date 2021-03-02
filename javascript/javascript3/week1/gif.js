const input = document.getElementById('q')
const loading = document.getElementById('loading')
let q = null
const limit = 5
const imgs = []
let loadedImgCount = 0
for (let i = 0; i < limit; i++) {
    const img = document.getElementById(`img${i}`)
    img.addEventListener('load', imageLoaded)
    imgs.push(img)
}
const placeholderImg = 'https://openmoji.org/data/color/svg/1F381.svg'

input.addEventListener('keyup', searchGifs)
input.addEventListener('change', searchGifs)
input.addEventListener('paste', searchGifs)

function searchGifs() {
    const newQ = input.value.trim()
    if (newQ.length < 3 || newQ === q) return;
    q = newQ
    loading.innerText = 'Loading Fun Gifs...'
    renderGifs([])
    loadedImgCount = 0
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=DELSDGA3OuHjSluOb8L50lOOXV9ei2Pd&q=${q}&limit=${limit}`)
        .then(response => response.json())
        .then(json => renderGifs(json.data))
}

function renderGifs(gifs) {
    let counter = 0
    gifs.forEach(gif => {
        imgs[counter].src = gif.images.original.url
        counter++
    })
    for (let i = counter; i < limit; i++) {
        imgs[i].src = placeholderImg
    }
}

function imageLoaded(e) {
    if(e.target.src === placeholderImg) return
    loadedImgCount++
    if (loadedImgCount == limit) loading.innerText = 'Fun Gifs Loaded';
}
