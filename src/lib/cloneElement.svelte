<script context="module">
           export  function cloneElementFunc(e){
  const node = e.target
  const clone = node.cloneNode(true);
 
  
 let targetCloningDiv = document.getElementById("cloneMessageDiv")
   console.log(targetCloningDiv)
}



       
</script>