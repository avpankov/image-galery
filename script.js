let gallery = document.querySelector('.gallery');
let search = document.querySelector('.search__button');
let input = document.querySelector('.form-control');
let spinner = document.querySelector('.spinner-border');
let morePicturesButton = document.querySelector('.btn');
let url = `https://api.unsplash.com/search/photos?query=design&page=1&per_page=40&client_id=dqSzPLB8JLA05l2Jp8CLC8CYn0w4FalflixxL7hosZc`;
let pageCounter = 0;
let inputValue;
getImageUrl();

search.addEventListener('click', () => {
    gallery.innerHTML = '';
    inputValue = input.value;
    url = `https://api.unsplash.com/search/photos?query=${inputValue}&page=1&per_page=9&client_id=dqSzPLB8JLA05l2Jp8CLC8CYn0w4FalflixxL7hosZc`;
    getImageUrl(url);
});

morePicturesButton.addEventListener('click', () => {
    pageCounter++;
    url = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${pageCounter}&per_page=9&client_id=dqSzPLB8JLA05l2Jp8CLC8CYn0w4FalflixxL7hosZc`;
    getImageUrl(url);
});

async function getImageUrl(requestedUrl = url) {
    spinner.style.display = 'block';
    const res = await fetch(requestedUrl);
    const data = await res.json();
    setTimeout(() => {
        spinner.style.display = 'none';
        return data.results.map(obj => createImg(obj.urls.regular));
    }, 500)
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
    imgParent.append(imgChild);
    gallery.append(imgParent);
}