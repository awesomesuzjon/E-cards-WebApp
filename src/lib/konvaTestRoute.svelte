     <script>
import { onMount } from "svelte";
export let someText;
export let containerId;

         onMount(()=>{


      var width = window.innerWidth;
      var height = window.innerHeight;
console.log(containerId.offsetWidth);
      
      var stage = new Konva.Stage({
        container: containerId,
        width: width * 0.5,
        height: height * 0.5,
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var text = new Konva.Text({
        x: 50,
        y: 60,
        fontSize: 18,
        text: someText,

        draggable: true,
      });
      layer.add(text);

      var MIN_WIDTH = 20;
      var tr = new Konva.Transformer({
        nodes: [text],
        padding: 2,
        // enable only side anchors
        enabledAnchors: ['middle-left', 'middle-right'],
        // limit transformer size
        boundBoxFunc: (oldBox, newBox) => {
          if (newBox.width < MIN_WIDTH) {
            return oldBox;
          }
          return newBox;
        },
      });
      layer.add(tr);
      text.on('transform', () => {
        // with enabled anchors we can only change scaleX
        // so we don't need to reset height
        // just width
        text.setAttrs({
          width: Math.max(text.width() * text.scaleX(), MIN_WIDTH),
          scaleX:width,
          scaleY: 1,
        });
      });
    })

    </script>


<div id={containerId} class="content-fit bg-red-500"></div>