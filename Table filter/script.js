let gArray = [
    {
        Eid: 101,
        ename: "John Smith",
        designation: "Software Engineer",
        age: 30,
        location: "New York",
        gender:"male"
    },
    {
        Eid: 102,
        ename: "Alice Johnson",
        designation: "Product Manager",
        age: 35,
        location: "San Francisco",
        gender:"female"
    },
    {
        Eid: 103,
        ename: "Bob Davis",
        designation: "Data Analyst",
        age: 28,
        location: "Chicago",
        gender:"male"
    },
    {
        Eid: 104,
        ename: "Emily Wilson",
        designation: "Graphic Designer",
        age: 26,
        location: "Los Angeles",
        gender:"male"
    },
    {
        Eid: 105,
        ename: "Sarah Brown",
        designation: "Marketing Specialist",
        age: 32,
        location: "Houston",
        gender:"female"
    },
    {
        Eid: 106,
        ename: "Michael Lee",
        designation: "Accountant",
        age: 29,
        location: "Miami",
        gender:"male"
    },
    {
        Eid: 107,
        ename: "Linda Johnson",
        designation: "HR Manager",
        age: 40,
        location: "Dallas",
        gender:"female"
    },
    {
        Eid: 108,
        ename: "David Wilson",
        designation: "Sales Representative",
        age: 27,
        location: "Atlanta",
        gender:"male"
    },
    {
        Eid: 109,
        ename: "Emma Watson",
        designation: "Customer Support",
        age: 31,
        location: "Seattle",
        gender:"female"
    },
    {
        Eid: 110,
        ename: "James Miller",
        designation: "Operations Manager",
        age: 38,
        location: "Denver",
        gender:"male"
    }
];

let FilteredArray = gArray;
let sBtn = document.getElementById("searchBtn");
let aBtn = document.getElementById("aBtn");
let mBtn = document.getElementById("mBtn");
let fBtn = document.getElementById("fBtn");

let x = FilteredArray.map((element) => {
    return `<tr>
            <th scope="row">${element.Eid}</th>
            <td>${element.ename}</td>
            <td>${element.designation}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.location}</td>
          </tr>`;
})
document.getElementById("render-here").innerHTML = x.join('');

//For Search Feature
sBtn.addEventListener("click", () => {
    let inp = document.getElementById("inp").value;
    console.log(inp);

    let empSearch = gArray.filter((element) => {
        return element.ename.includes(inp);
    })

    let x = empSearch.map((element) => {
    return `<tr>
            <th scope="row">${element.Eid}</th>
            <td>${element.ename}</td>
            <td>${element.designation}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.location}</td>
          </tr>`;
})
document.getElementById("render-here").innerHTML = x.join('');
})

aBtn.addEventListener("click", () => {
    let x = FilteredArray.map((element) => {
    return `<tr>
            <th scope="row">${element.Eid}</th>
            <td>${element.ename}</td>
            <td>${element.designation}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.location}</td>
          </tr>`;
})
document.getElementById("render-here").innerHTML = x.join('');
})

mBtn.addEventListener("click", () => {
    let mFilter = gArray.filter((element) => {
        return element.gender === "male";
    })
    let x = mFilter.map((element) => {
    return `<tr>
            <th scope="row">${element.Eid}</th>
            <td>${element.ename}</td>
            <td>${element.designation}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.location}</td>
          </tr>`;
})
document.getElementById("render-here").innerHTML = x.join('');
})

fBtn.addEventListener("click", () => {
    let fFilter = gArray.filter((element) => {
        return element.gender.includes("female");
    })
    let x = fFilter.map((element) => {
    return `<tr>
            <th scope="row">${element.Eid}</th>
            <td>${element.ename}</td>
            <td>${element.designation}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.location}</td>
          </tr>`;
})
document.getElementById("render-here").innerHTML = x.join('');
}) 