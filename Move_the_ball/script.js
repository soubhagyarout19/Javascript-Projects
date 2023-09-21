let circle = document.getElementById("circle");
        let top1 = document.getElementById("btn-top");
        let left = document.getElementById("btn-left");
        let right = document.getElementById("btn-right");
        let bottom = document.getElementById("btn-bottom");
        let mgn;
        let MB = 0;
        let MR = 0;
        let ML = 0;
        let MT = 0;
        top1.addEventListener("click",()=>{
            MB += 10;
            circle.style.margin = MT + "px " + MR + "px " + MB + "px " + ML + "px";
            console.log("clicked");
            console.log(circle.style.margin);
        })
        left.addEventListener("click",()=>{
            MR += 10;
            circle.style.margin = MT + "px " + MR + "px " + MB + "px " + ML + "px";
            console.log("clicked");
            console.log(circle.style.margin);
        })
        right.addEventListener("click",()=>{
            ML += 10;
            circle.style.margin =  MT + "px " + MR + "px " + MB + "px " + ML + "px";
            console.log("clicked");
            console.log(circle.style.margin);
        })
        bottom.addEventListener("click",()=>{
            MT += 10;
            circle.style.margin = MT + "px " + MR + "px " + MB + "px " + ML + "px";
            console.log("clicked");
            console.log(circle.style.margin);
        })