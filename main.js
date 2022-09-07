const BUTTON_ID = "add";
let input = document.getElementById("text");
let add_button = document.getElementById("add");
let ul = document.querySelector(".ToDo-ul");
input.addEventListener("input", (e) => {
    e.target?.value ? add_button.disabled = false : add_button.disabled = true;
});
add_button.addEventListener("click", (event) => {
            add_button.disabled = true;
        if (input.value) {
            let idGenerator = Math.random();
            let li = document.createElement("li");
            li.id = idGenerator
            console.log(li.id)
            li.innerHTML = `<p class="li_p">${input.value}</p>`;
            li.addEventListener("click", (e) => {
                    e.target.classList.toggle("li")
            });
            let img = new Image();
            img.id = idGenerator;
            img.src = "./delete-icon.svg";
            img.classList.toggle("li-img");
            img.addEventListener('click', (e) => {
                e.target.parentElement.remove()
            })
            
            ul.append(li);
            li.append(edit)
            li.append(img);
            input.value = "";
        }
});




