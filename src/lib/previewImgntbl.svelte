<script context="module">
   export  function previewImgFunc() {

const targetDiv = document.getElementById("targetContent");
      const btn = document.getElementById("toggleimgbtn");
      btn.onclick = function () {
          if (targetDiv.style.display !== "none") {
              targetDiv.style.display = "none";
          } else {
              targetDiv.style.display = "block";
          }
}

}


// export function previewtbl(){
// const targetDiv = document.getElementById("toggleContent");
//       const btn = document.getElementById("toggletbl");
  
//       btn.onclick = function () {
//             console.log('hello its me');
//           if (targetDiv.style.display !== "none") {
//               targetDiv.style.display = "none";
//           } else {
//       targetDiv.style.display = "block";
//     }
//   }
// }


export function previewtbl(){
const targetDiv = document.getElementById("toggleContent");
let btn = document.getElementsByClassName("toggletbl");
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            console.log('hello its me');
          if (targetDiv.style.display !== "none") {
              targetDiv.style.display = "none";
          } else {
      targetDiv.style.display = "block";
    }
  }

        )}
}
</script>