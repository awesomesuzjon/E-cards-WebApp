     <script>
import { onMount } from "svelte";


         onMount(()=>{

      var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var text = new Konva.Text({
        x: 20,
        y: 30,
        fontSize: 12,
        text: 'Try to resize me.',
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
          scaleX: 1,
          scaleY: 1,
        });
      });
    })

    </script>

    <slot></slot>

<div id="container"></div>