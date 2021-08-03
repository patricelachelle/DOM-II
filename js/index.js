// Event Types

//mouseover

const navLinks = document.querySelectorAll('.nav a');


navLinks.forEach(element => {
    element.addEventListener( 'mouseover', function (event) {
        event.preventDefault();
        event.target.style.color = 'red';
        event.target.style.transform = 'scale(1.2)';   
    });
    element.addEventListener('mouseleave', function (event) {
        event.target.style.color = 'black';
   })
})

//keydown...changed to click

const destinationButtons = document.querySelectorAll('.btn');
destinationButtons.forEach(element => {
    element.addEventListener('click', function (event) {
        event.target.style.color = 'purple';
        event.target.style.transform = 'scale(1.2)'
        event.preventDefault(); event.preventDefault();
    })
})

//wheel

function zoom(event) {
   
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    wheelEvent.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const wheelEvent = document.querySelector('body');
  wheelEvent.onwheel = zoom;

//load

const loadEvent = document.querySelector('.btn')
// const reloadEvent = document.querySelectorAll('.btn')

loadEvent.addEventListener('click', () => {
    loadEvent.textContent ='';   
}) 

//focus

const nav = document.querySelectorAll('.nav a');

nav.forEach(element => {
    element.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';
    });
    element.addEventListener('blur', (event) => {
        event.target.style.background = '';
    });
})

//resize

window.addEventListener('resize', () => {
    "img/fun-bus.jpg".src = "img/fun-bus.jpg"
})

//scroll---commenting out because it interfers with progress...uncomment to test functionality

// window.addEventListener('scroll', () => {
//     console.log('window.scrollY', window.scrollY)
//     if (window.scrollY >= 145) {
//     alert("scrolled")
//     }
// })

//select

function logSelection(event) {
    const selectEvent = document.querySelector(".intro p")
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    selectEvent.textContent = `You selected: ${selection}`;
}
const input = document.querySelector('.intro p');
input.addEventListener('select', logSelection);

//dblclick--used mdn documentation and it still would not work

// const card = document.querySelectorAll('.btn');

// card.addEventListener('dblclick', function () {
//   card.classList.toggle('small');
// });
  

//drag/drop

const dragEvent = document.querySelector('.img-content')
dragEvent.addEventListener("drag", function() {

}, false)

//Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

const body = document.querySelector('h2')
body.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "rebeccapurple"
 
})

//Stop the navigation items from refreshing the page by using preventDefault()
