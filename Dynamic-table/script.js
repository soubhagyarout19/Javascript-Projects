let table1 = document.getElementById("table1");

        let tablehead = document.createElement("table");
        tablehead.setAttribute("border", "1");
        
        table1.appendChild(tablehead);
        let btn = document.getElementById("btn");

        btn.addEventListener("click", () => {
            if(!tablehead.children.length==0){
                tablehead.innerHTML="";
            }
            let x = 0;
            let y = 0;
            let rows = document.getElementById("root").children[0].children[1].value;
            let columns = document.getElementById("root").children[1].children[1].value;
            for (let i = 0; i < rows; i++) {
                x = document.createElement("tr");
                for (let j = 0; j < columns; j++) {
                    y = document.createElement("td");
                    y.innerText = "Hello";
                    x.appendChild(y);
                }
                tablehead.appendChild(x);
            }
        });