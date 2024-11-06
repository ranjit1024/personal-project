const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold: 0.4,
})
const hidelElement = document.querySelectorAll(".hide");
hidelElement.forEach(el => observer.observe(el));

const observe2 = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }
        else{
            entry.target.classList.remove("show2")
        }
    })
},{
    threshold:0.5,
})

const leftToRightElement = document.querySelectorAll(".hide2");
leftToRightElement.forEach(el => observe2.observe(el))