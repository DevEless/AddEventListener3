let h1 = document.querySelector('h1')
h1.addEventListener("click", () => {
    h1.classList.add("text-blue")
})

let h3 = document.querySelector('h3')
h3.addEventListener("dbclick", () => {
    h1.classList.add("text-error")
})

document.querySelector("p").addEventListener("click", function () {
    this.classList.toggle("text-style");
});


let spans =document.querySelectorAll('span')
for (let span of spans) {
    span.addEventListener('click', function () {
        this.classList.toggle('bolder');
    });
}

for (let span of spans) {
    span.addEventListener('click', function () {
        for (let otherSpan of spans) {
            otherSpan.classList.remove('bolder-red');
        }
        this.classList.add('bolder-red');
    });
}