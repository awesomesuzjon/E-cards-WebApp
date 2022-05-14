<script>
	import { removeImgFunc } from './removeImg.svelte';

    //upload a new theme template from the local device
	let files = [];
	$: file = files[0];
</script>

<li class="p-4 divide-y-2">
    <div class="flex flex-col  items-start justify-center mt-2">
        <h1 class="text-sm font-bold  truncate mb-2   ">Select background template</h1>

        <input
            type="file"
            bind:files
            id="ImgFileUploadinCanvas"
            class="text-sm  z-10"
            accept="image/*"
            multiple
        />
    </div>
    <button class="btn flex mt-2  " on:click={removeImgFunc}>RemoveImg</button>
</li>