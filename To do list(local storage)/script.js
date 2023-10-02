let text = document.getElementById("text");
let btn = document.getElementById("btn");
let body = document.getElementById("body");
let clear = document.getElementById("clear");
let globalArr = [];
let editData = "";

print();

//getting a data
function getItem() {
  globalArr = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
}

//setting a data
function setItem() {
  localStorage.setItem("todo", JSON.stringify(globalArr));
}
function submit() {
  if (!text.value) {
    alert("add text");
  } else {
    if (!editData) {
      //addition

      let obj = {
        text: text.value,
        id: new Date().getMilliseconds(),
        //id:Math.trunc(Math.random()*10000)
      };
      globalArr.push(obj);
    } else {
      globalArr.map((data) => {
        if (data.id == editData.id) {
          data.text = text.value;
        }
      });
      editData = "";
      btn.innerText = "ADD";
    }

    console.log(globalArr);
    text.value = "";
    setItem();
  }
  print();
}

function del(id) {
  let x = globalArr.filter((data) => {
    return data.id != id;
  });
  globalArr = x;
  setItem();
  print();
}

function editHandler(id) {
  let x = globalArr.find((data) => {
    return data.id == id;
  });
  text.value = x.text;
  btn.innerText = "Edit";
  editData = x;
}

function print() {
  getItem();
  let printData = "";
  if (globalArr.length == 0) {
    printData = "no data";
  } else {
    globalArr.map((data) => {
      return (printData =
        printData +
        `  <div class="card bg-dark m-2">
                    <div class="card-body text-white">
                        <h1>${data.text}</h1>
                    </div>
                    <div class="card-footer">
                        <button  class="btn btn-primary" onclick="editHandler(${data.id})">edit</button>
                        <button class="btn btn-danger" onclick="del(${data.id})">del</button>
                    </div>
                </div>`);
    });
  }
  body.innerHTML = printData;
}

// this is for clearall
clear.addEventListener("click", () => {
  localStorage.removeItem("todo");
  print();
});
