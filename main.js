let form = document.querySelector("form")
let inputHeading = document.querySelector("input[placeholder='Heading']");;
let inputDescription = document.querySelector("input[placeholder='Description']");
let ul = document.querySelector("ul")
let body = document.querySelector("body")
let button = document.getElementById("themeBtn")
let nav = document.querySelector("nav")
let a = document.querySelector("a")


let theme = 0;
themeBtn.addEventListener("click", () => {
    if (theme === 0) {
        body.style.backgroundColor = "black";
        nav.style.backgroundcolor = "black";
        a.style.color = "white"
        
        
    
        theme = 1;
    } else {
        body.style.backgroundColor = "transparent";
        nav.style.backgroundcolor = "transparent";
        a.style.color = "black"
        
        theme = 0;
    }
});


const newList = (e) => {
    e.preventDefault();
    let heading = inputHeading.value;
    let description = inputDescription.value;
    let li = document.createElement("li");
    li.className = "list-group-item rounded-0";
    li.style.color = "rgb(120, 120, 120)"
    
    
    li.innerHTML = `<strong>${heading}</strong>: ${description} <button class="delete-btn btn btn-sm btn-danger float-end">Delete</button>`;
    li.className = "list-group-item rounded-0";
    ul.appendChild(li);

    form.reset();
};

const removelist = (e) => {
    if (e.target.classList.contains("delete-btn")) {
        let li = e.target.parentElement;
        if (confirm("Are you sure")) {
            ul.removeChild(li);
        }
    }
};
form.addEventListener("submit" , newList)
ul.addEventListener("click", removelist);