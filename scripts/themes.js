const elements = document.getElementsByClassName("darkable");
const input = document.getElementById("input")
const label = document.getElementById("themeLabel")

input.addEventListener('click', (e) => {
    Array.from(elements).forEach((element) => {
        console.log("d");
        input.checked ? element.classList.add("dark") : element.classList.remove("dark");
        console.log(element);
    })

    label.textContent = input.checked ? "Light Theme" : "Dark Theme";
})
