let inputBox = document.querySelector(".input-box");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click",()=>{
    getImages(inputBox.value);
})

async function getImages(im){
    result.innerHTML = "";
    let key = "WaRf8hJ5d8wDI1EuKZb4DAw9FRkVYkfsZRkGZes4x7Y";
    let url = `https://api.unsplash.com/search/photos?query=${im}&client_id=${key}`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    data.results.forEach(photo => {
        let imgElement = document.createElement("div");
        imgElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
        let overlay = document.createElement("div");
        

        result.appendChild(imgElement).appendChild(overlay);
        inputBox.value = "";
    });
}