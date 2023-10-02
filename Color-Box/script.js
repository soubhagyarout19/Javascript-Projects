let render = document.getElementById("render");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");

        let arr = [{ name: "box1", id: 1 }, { name: "box2", id: 2 }, { name: "box3", id: 3 }, { name: "box4", id: 4 }, { name: "box5", id: 5 },
        { name: "box6", id: 6 }, { name: "box7", id: 7 }, { name: "box8", id: 8 }, { name: "box9", id: 9 }, { name: "box10", id: 10 }];

        let filteredArray = arr;
        
        let card;
        
        let innerArray = [];
        let boxRender = arr.map((element)=>{
            const ele = `<div class="box" id="${element.name}"></div>`;
            render.insertAdjacentHTML('beforeend', ele);
            return ele;
        })
        let count = 0;

        function fA(){
            filteredArray = [{ name: "box1", id: 1 }, { name: "box2", id: 2 }, { name: "box3", id: 3 }, { name: "box4", id: 4 }, { name: "box5", id: 5 },
        { name: "box6", id: 6 }, { name: "box7", id: 7 }, { name: "box8", id: 8 }, { name: "box9", id: 9 }, { name: "box10", id: 10 }];
        }
            function giveColor(){
                let insertColor = filteredArray.forEach((element,index)=>{
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                let k = setTimeout(()=>{
                    let box = document.getElementById("box"+`${element.id}`);
                    console.log(filteredArray);
                        filteredArray.shift();
                    console.log(filteredArray);
                    console.log(box);
                    box.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`);
                },1000*index);

                    btn2.addEventListener("click",()=>{
                        clearTimeout(k);
                        console.log("Clear Timeout clicked");
                    });
            })
            count = count+1;
        }

        setInterval(()=>{
            if(count>=1){
                fA();
            giveColor();
            console.log("If executed");
        }
        },10500)

        btn1.addEventListener("click",()=>{
            giveColor();
        }) 