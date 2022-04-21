<script>
import Draggable from "$lib/Draggable.svelte";

    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
        const original = ev.originalTarget;
        const newElement = original.cloneNode(true)
        original.draggable = false
        newElement.id = String(new Date)
        const mainContainer = document.querySelector("#main-container")
        mainContainer.appendChild(newElement)
        console.log(newElement);

      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
    </script>
<div id="div1" on:drop={drop} on:dragover={allowDrop}></div>

<img id="drag1" src="https://www.logodesign.net/images/nature-logo.png"   alt='logo' draggable="true" on:dragstart={drag} width="336" height="69">


<style>
    #div1 {
      width: 550px;
      height: 800px;
      padding: 10px;
      border: 1px solid #aaaaaa;
    }
    </style>