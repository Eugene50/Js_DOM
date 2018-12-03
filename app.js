window.onload = function () {
     const cont  = document.getElementById("container");
   
   const x = document.createElement("h1");
x.textContent = 'test test';
document.body.insertBefore(x, document.body.firstChild);

data.forEach(function (index) {

     const div = document.createElement("p");
   div.innerHTML = index.name;
   cont.appendChild(div);
});

cont.addEventListener('click', function (el) {
  //const curentOboe = [];
  if(el.target.tagName != 'p') 
  return 
   const curentOboe = data.find(function (ind) {
       ind.name === el.target.textContent
       cont.innerHTML = curentOboe.text;
   })

})

};
