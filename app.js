const searchFood =() =>{
    const inputField = document.getElementById("inputField");
    const inputText = inputField.value ;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.meals))
}

const searchResult = searchFood =>{
    const foodGroup = document.getElementById("foodGroup");
    foodGroup.textContent = "";
    searchFood.forEach( food => {
        console.log(food)
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("col-md-6")
        div.innerHTML = `
         <div class="card my-4">
         <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${food.strMeal}</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
       </div>
         </div>
        `
        foodGroup.appendChild(div)
    })
}