   export  function previewImgFunc() {

const targetDiv = document.getElementById("targetContent");
      const btn = document.getElementById("toggleImgBtn");
      btn.addEventListener("click",()=>{
        targetDiv.style.display == "block"
          if (targetDiv.style.display == "block") {
              targetDiv.style.display = "none";
            } else {
                targetDiv.style.display = "block";
            }
        })
        }
        



export function previewtbl(){
const targetDiv = document.getElementById("toggleContent");
const btn = document.getElementById("toggleTblBtn");
btn.onclick = function () {
    if (targetDiv.style.display == "none") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    
    }
        }
    }