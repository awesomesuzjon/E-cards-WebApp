<script context="module">
           export  function cloneElementFunc(e){
  const node = e.target
// node.style.backgroundColor="red";
// node.style.zIndex="30";
  const clone = node.cloneNode(true);
 
  
 let result = document.querySelectorAll(".cloneMessageDiv")[0].appendChild(clone);
  // console.log(result)
}




       
</script> 