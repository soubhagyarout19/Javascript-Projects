let btn = document.getElementById("search");
        let render = document.getElementById("render");

        let product = [{ name: "Laptop", price: 79000, id: 1, img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/e/f/-original-imagrgprbhchwgve.jpeg?q=70" },
        { name: "Mobile", price: 140000, id: 2, img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/f/p/-original-imaghxenhnpyhn5u.jpeg?q=70" },
        { name: "Watch", price: 49990, id: 3, img: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/a/s/1-spc159p1-seiko-men-original-imagmhh9rgz3zhew.jpeg?q=70" },
        { name: "Shoes", price: 8999, id: 4, img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/v/w/10-57-98257-10-5-on-running-white-mint-original-imagrvfa9vsjubdd.jpeg?q=70" },
        { name: "Bag", price: 1899, id: 5, img: "https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/t/8/x/-original-imagsz842pv7sq25.jpeg?q=70" },
        { name: "Headphones", price: 3999, id: 6, img: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SX522_.jpg" },
        { name: "Sunglasses", price: 2999, id: 7, img: "https://m.media-amazon.com/images/I/41c9btM-x+L._UX679_.jpg" },
        { name: "Perfume", price: 4999, id: 8, img: "https://m.media-amazon.com/images/I/61LL68H0ymL._SL1500_.jpg" },
        { name: "Lipstick", price: 999, id: 9, img: "https://m.media-amazon.com/images/I/711fykuBFnL._AC_UF1000,1000_QL80_FMwebp_.jpg" },
        { name: "Nail Polish", price: 799, id: 10, img: "https://m.media-amazon.com/images/I/61drmWpcb1L._AC_UF1000,1000_QL80_FMwebp_.jpg" },
        { name: "Handbag", price: 6999, id: 11, img: "https://m.media-amazon.com/images/I/91ecuVkSq+L._AC_UY1000_FMwebp_.jpg" },
        { name: "Wallet", price: 2999, id: 12, img: "https://m.media-amazon.com/images/I/31F3wWUXapL._SY300_SX300_.jpg" },
        { name: "Belt", price: 1999, id: 13, img: "https://m.media-amazon.com/images/I/71aplh5AFZL._AC_UY1100_FMwebp_.jpg" },
        { name: "Scarf", price: 1499, id: 14, img: "https://m.media-amazon.com/images/I/81NYkLQGhzL._AC_UY1100_FMwebp_.jpg" },
        { name: "Hat", price: 1299, id: 15, img: "https://m.media-amazon.com/images/I/51Bft9svt+L._AC_UY1100_FMwebp_.jpg" }];
        let tempProduct = product;
        let filteredProduct = product;

        btn.addEventListener("click", () => {
            let input = document.getElementById("input").value;
            filteredProduct = product.filter((element) => {
                return element.name.includes(input);
            })
            Print();
        })
        let select = document.getElementById("select");
        select.addEventListener("change", () => {
            if (select.value == "Select") {
                filteredProduct = product.filter((element) => {
                    return element;
                })
                Print();
            }
            if (select.value == "Asc") {
                filteredProduct = [...product].sort(function (a, b) {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                Print();
            }
            if (select.value == "Dsc") {
                filteredProduct = [...product].sort(function (a, b) {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                    return 0;
                });
                Print();
            }
            if (select.value == "L-H") {
                filteredProduct = [...product].sort(function (a, b) {
                    return a.price - b.price;
                });
                Print();
            }
            if (select.value == "H-L") {
                filteredProduct = [...product].sort(function (a, b) {
                    return b.price - a.price;
                });
                Print();
            }
        })

        let card;
        function Print() {
            render.innerHTML = "";
            let k = filteredProduct.map((element) => {
                card = `<div class="card">
                <img id="card-image" src=${element.img} alt="image">
                <h3>${element.name}</h3>
                <h3 class="card-price">${"₹" + element.price}</h3>
                <h4 class="card-id">${"Product Id: " + element.id}</h4>
                <h4 class="add-to-cart"> </h4>
            </div>`
                return card;
            })
            k.forEach((element) => {
                render.insertAdjacentHTML('beforeend', element);
            })
        }
        Print();