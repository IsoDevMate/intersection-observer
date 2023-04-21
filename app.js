//visibility changes observer allows multiples entries
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){//check if entry is intersecting the viewport
            entry.target.classList.add('show')
        }else{
         entry.target.classList.remove('show')
        }
})
})

const hiddenElements=document.querySelectorAll('.hide')
hiddenElements.forEach((el)=>observer.observe(el))
