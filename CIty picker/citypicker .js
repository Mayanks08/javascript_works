const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();

    const list = document.querySelectorAll("#list li");

    list.forEach((el) => {
        const text = el.textContent.toUpperCase();

        el.style.display = text.includes(filter) ? "" : "none";
    });
};

document.querySelector("#search").addEventListener("input", onSearch);