
<script>
    import Konva from 'konva';
    import { getContext, setContext } from 'svelte';
    const { getStage } = getContext("konva");
    setContext("konva_layer", {
        getLayer: () => layer,
        
    });
    const stage = getStage();
    var layer = new Konva.Layer();
    stage.add(layer);
		console.log('layer created');

</script>


<slot></slot>
