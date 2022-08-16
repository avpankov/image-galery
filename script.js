let gallery = document.querySelector('.gallery');
let search = document.querySelector('.search__button');
let input = document.querySelector('.form-control');
let spinner = document.querySelector('.spinner-border');
let url = `https://api.unsplash.com/search/photos?query=design&client_id=dqSzPLB8JLA05l2Jp8CLC8CYn0w4FalflixxL7hosZc`;

getImageUrl();

search.addEventListener('click', () => {
    gallery.innerHTML = '';
    url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=dqSzPLB8JLA05l2Jp8CLC8CYn0w4FalflixxL7hosZc`;
    getImageUrl();
})

async function getImageUrl() {
    spinner.style.display = 'block';
    const res = await fetch(url);
    const data = await res.json();
    data.results.pop();
    spinner.style.display = 'none';
    return data.results.map(i => createImg(i.urls.regular));
}


function createImg(imgUrl) {
    let imgParent = document.createElement('div');
    imgParent.classList.add('img_parent');
    let imgChild = document.createElement('div');
    imgChild.classList.add('img_child');
    imgChild.style.background = `url(${imgUrl})`;
    imgChild.style.backgroundPosition = 'center';
    imgChild.style.backgroundSize = 'cover';
    imgChild.setAttribute('href', imgUrl);
    // let imgA = document.createElement('a');
    // imgChild.append(imgA);
    imgParent.append(imgChild);
    gallery.append(imgParent);
}