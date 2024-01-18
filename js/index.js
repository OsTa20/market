// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const usern = document.querySelector('#usern');
var usernva = 0;
let seu = setInterval(function(){
  usernva += 1112;
  usern.innerHTML = "users : " + usernva;
  if(usernva >= 162584){
    clearInterval(seu);
  }
},100);

JOS.init({
  debugMode: false, 
  passive: true,
  once: false, 
  animation: "fade", 
  timingFunction: "ease-in-out", 
  threshold: 0, 
  delay: 0, 
  duration: 2.5,
  rootMargin: "0% 0% -50% 0%",
  rootMargin_top: "0%", 
  rootMargin_bottom: "-50%", 
  rootMargin: "0% 0% -50% 0%", 
  intersectionRatio: 0.4, 
  startVisible: false,
  scrollDirection: 'down',
  animate_out: false,
  debounce: 0,
});

const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
  // trigger point - where we want to start scrolling
  const triggerBottom = window.innerHeight / 5 * 4  
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if(boxTop < triggerBottom) {
        box.classList.add('show')
      } else {
        box.classList.remove('show')
      }
    })
}