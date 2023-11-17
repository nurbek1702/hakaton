//?--------1
// let btn = document.getElementById('myButton');
// btn.onclick = () => alert("Hello!")
//?---------2
// const bum = document.getElementById('myElement');
// bum.onclick = (event) => {
//     console.log(event.clientX);
//     console.log(event.clientY);
//   };
//?---------------3
// let mul = document.querySelectorAll('h4');
// mul.forEach((element)=>{
//   element.innerHTML ** 2
// })

// console.log(mul);
  //?-------------4
//   let resize = document.querySelector('#demo');
//   function handleResizeEvent (){
//     console.log('zoomer');
//   };
//   window.addEventListener('resize', handleResizeEvent);
//?---------5
// let mul = document.querySelectorAll('h4');
// mul.onclick = (item) => {
    
// }
// console.log(mul);
//?-----------7
// let hello = document.querySelector('div');
// console.log(hello);

// hello.onclick = () => hello.style.color = 'green';

// hello.addEventListener('click', function(){
//     hello.style.color = 'red';
// });
// hello.addEventListener('click', handler2);
// hello.removeEventListener('click', handler2);
// hello.addEventListener('click', handler);
// function handler(){
//     hello.style.color = 'red'
// };
// function handler2(){
//     hello.style.color = 'green'
// };
//?----------9
// let moove = document.querySelector('#change');
// moove.addEventListener('click', handler3)
// function handler3 (){
//     moove.style.color= 'red';
// };
//?------------10
// let inp = document.querySelector('#input');
// inp.addEventListener('click', keyup);
// function keyup(){
//     console.log("pressed");
// };
//?-----------11
// let click = document.querySelector('#elem');
// click.addEventListener('click', (event)=>{
//         console.log(event.target.value);
// });
//?--------------12
// let inp = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', (event)=>{
//     console.log(event);
// });
// inp.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// });
//?--------13
// let num = document.querySelectorAll('#select');
// num.forEach(elem, index =>{
//     if(index = [0]){
//         console.log('one');
//     }
// })
// console.log(num);

// let btn = document.querySelector('#myBtn');
// let demo = document.querySelector('#demo');

// btn.addEventListener('click', displayDate);
// function displayDate (){
//   let myDate = new Data ();
//   let strData = myDate.toString();
//   demo.innerText = (`${strData}`);
// }


let paragraph = document.querySelector('p');
function changeColor(color){
  paragraph.style.backgroundColor = color;
};
paragraph.addEventListener('keyDown', function(event) {
  if(event.code === 'Space'){
    changeColor('purple');
  }
});