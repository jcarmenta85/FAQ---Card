const question1 = document.querySelector('.q1')
const question2 = document.querySelector('.q2')
const question3 = document.querySelector('.q3')
const question4 = document.querySelector('.q4')
const question5 = document.querySelector('.q5')
const arrows = document.querySelectorAll('.arrow')

const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')
const arrow4 = document.querySelector('.arrow4')
const arrow5 = document.querySelector('.arrow5')
const all = document.querySelectorAll('.f')

const answer1 = document.querySelector('.a1')
const answer2 = document.querySelector('.a2')
const answer3 = document.querySelector('.a3')
const answer4 = document.querySelector('.a4')
const answer5 = document.querySelector('.a5')


function reveal1(){
    answer1.classList.toggle('answers')
    arrow1.classList.toggle('rotate')
    question1.classList.toggle('bolder')
    arrow1.style.transitionDuration = '.5s'
    
}

arrow1.addEventListener('click', reveal1)

function reveal2(){
    answer2.classList.toggle('answers')
    arrow2.classList.toggle('rotate')
    question2.classList.toggle('bolder')
    arrow2.style.transitionDuration = '.5s'

}

arrow2.addEventListener('click', reveal2)

function reveal3(){
    answer3.classList.toggle('answers')
    arrow3.classList.toggle('rotate')
    question3.classList.toggle('bolder')
    arrow3.style.transitionDuration = '.5s'

}

arrow3.addEventListener('click', reveal3)

function reveal4(){
    answer4.classList.toggle('answers')
    arrow4.classList.toggle('rotate')
    question4.classList.toggle('bolder')
    arrow4.style.transitionDuration = '.5s'

}

arrow4.addEventListener('click', reveal4)

function reveal5(){
    answer5.classList.toggle('answers')
    arrow5.classList.toggle('rotate')
    question5.classList.toggle('bolder')
    arrow5.style.transitionDuration = '.5s'

}

arrow5.addEventListener('click', reveal5)

