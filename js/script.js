import { cardComponent } from "../components/cardComponent.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
let renderArea = document.querySelector('#render-area')

let fetchData = async (baseUrl) => {
    try {
        let response = await fetch(baseUrl);
        let data = await response.json();
        console.log(data);
        data.map((post)=> {
            renderArea.innerHTML += cardComponent(post)
        })
    } catch (error) {
        console.log(error)
    }
}
fetchData(BASE_URL);