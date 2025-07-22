const form = document.getElementById("form-data");1

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("telephone"),
        document.getElementById("mensage")
    ];

    fields.forEach( item => {
        const parent = item.parentElement;

        if (!parent) return; 

        if (item.value.trim() === "") {
            parent.classList.add("invalid-field");
            parent.classList.remove("checked");
        } else {
            parent.classList.add("checked");
            parent.classList.remove("invalid-field");
        }
    })
})