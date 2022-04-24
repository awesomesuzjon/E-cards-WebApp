<script context="module">
import { draggableStore } from "../stores/store.js";


   
  export  function allowDrop(ev) {
        ev.preventDefault();
    }
    
    export function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.getAttribute('id'));
    }
    
    export function drop(ev) {

        var data = ev.dataTransfer.getData("text");
        let dragElement = document.getElementById(data);
        if (dragElement != null) {
            let storeArray;
            var dragElementCopy = dragElement.cloneNode(true);
            // console.log(nodeCopy)
            draggableStore.subscribe(store=>{
                storeArray = store;
            });
            draggableStore.set([...storeArray, dragElementCopy]);
            // console.log(draggableStore)

            // let element = document.createElement("div").setAttribute("class","cloneDestinationDivClass");
            // document.getElementById("test").appendChild(element);
        //  ev.target.appendChild(nodeCopy);
            ev.stopPropagation();
        }
        console.log(data)
        ev.preventDefault();
        
        return false;
    }
    </script>
    
   