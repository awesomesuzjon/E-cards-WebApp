<script context="module">
    	import { onMount } from "svelte";
		import FontPicker from "font-picker";
	
        export    function fontFamilyfunc(){
		onMount(() => {

                let fontPicker = new FontPicker(
                    "AIzaSyABtFr7--36MYUHOS0EUiDwEARkb5q5QTc",
                    "arial",
                    { limit: 20 } 
                    );
                    
                    
                })
                }
	
</script>