<script context="module">
import { draggableStore } from "../stores/store.js";


   
  export  function allowDrop(ev) {
        ev.preventDefault();
    }
    
    export function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
    }
    
    export function drop(ev) {

        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        // console.log(data)
        let storeArray;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        // console.log(nodeCopy)
        draggableStore.subscribe(store=>{
            
            storeArray = store;
        });
        draggableStore.set([...storeArray, nodeCopy]);
        // console.log(draggableStore)

        // let element = document.createElement("div").setAttribute("class","cloneDestinationDivClass");
        // document.getElementById("test").appendChild(element);
    //  ev.target.appendChild(nodeCopy);
        ev.stopPropagation();
        return false;
    }
    </script>
    
   