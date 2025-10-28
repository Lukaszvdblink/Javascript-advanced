fetch(`https://fortnite-api.com/v2/cosmetics/new`)
.then((response) => response.json())
.then((data) => {



for (let d of data.data.items.br){

console.log(d.name);





}





});

