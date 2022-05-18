           export  function cloneElementFunc(e){
  const node = e.target
  const clone = node.cloneNode(true);
 
  
 let result = document.querySelectorAll(".cloneMessageDiv")[0].appendChild(clone);
}




       