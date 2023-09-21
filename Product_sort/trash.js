let filteredPrice = product.map((element, index) => {
    return element.price;
})
let asc = filteredPrice.sort((x, y) => {
    return x - y;
})

console.log(asc);

let des = filteredPrice.sort((k, l) => {
    return l - k;
})
console.log(des);

let filteredName = product.map((element, index) => {
    return element.name;
})
let input;
console.log(filteredName);

btn.addEventListener("click", () => {
    input = document.getElementById("input").value;
    let letterFilter = filteredName.filter((element) => {
        if (element.includes(input)) {
            return element;
        }
    })
    if (letterFilter == "") {
        console.log("No search result");
    }
    console.log(letterFilter);
})