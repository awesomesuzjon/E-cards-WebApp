<script context="module">

    var textCanvas = [];
export function pushTextToCanvasFunc(){
  var i, slen,inputText,text;

  
  inputText = document.getElementById('addNew').value;
  textCanvas.push(inputText);
  slen = textCanvas.length;
  
  text="<ul>";
  for(i=0;i<slen;i++){
    text+="<li>"+ textCanvas[i] +"</li>";
  }
  text+="</ul>";
   
  document.getElementById('textRotate').innerHTML = text;
}       
</script>





