<script>
    
	import Draggable from './Draggable.svelte';
	import { allowDrop, drag, drop } from '../routes/dragdropclone.svelte';
	import { draggableStoreSticker } from '../stores/storeStickers.js';
	import {textStore } from '../stores/storeText.js';
	import MdFullscreen from 'svelte-icons/md/MdFullscreen.svelte';
	import { openFullScreenFunc } from './openFullScreen.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import Circle from '$lib/circle.svelte';



	let arraySticker = [];
	// $: reactiveArray = `${array}`;
	draggableStoreSticker.subscribe((sticker) => {
		arraySticker = sticker;
	});

	export let arrayText = [];
	textStore.subscribe((text) => {
		arrayText = text;
        console.log(textStore);
	});

	let firstName = [];
	$: fullName = `${firstName}`;

	//upload a new theme template from the local device
	let files = [];
	$: file = files[0];

	let fetchImage = (async () => {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		return await response.json();
	})();

	let avatar, fileinput;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	};

</script>


<div id="canvasContainer" class=" flex w-screen   items-center justify-center h-full">
    <label
        for="my-drawer"
        class=" btn p-0 w-10 h-8 drawer-button   justify-left  hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white"
    >	
        <h6 class="text-sm w-6  h-auto p-1"><FaAngleRight /></h6>
    </label>
    <div
        on:drop={drop}
        on:dragover={allowDrop}
        id="canvasText"
        class="  text-black dark:text-white cursor-move w-5/6  h-80 self-center  border-8 bg-gray-100  overflow-hidden "
    >
            <div
            id="canvasImgContainer"
            class=" flex z-0 items-center justify-center relative  content-center "
        >
            {#each files as file}
                <!--<section class="dark:text-gray-800 static text-white cursor-move mt-4  border-8 flex items-center justify-items-center bg-gray-100 w-3/6 h-80" id="container"  
> -->

                <img id="canvasImg" src={URL.createObjectURL(file)} alt="" />

                <!-- </section> -->
            {/each}

            <Draggable>
                <div id="app">
                    {#if avatar}
                        <img class="avatar" id="fgImage" src={avatar} alt="d" />
                    {:else}
                        <img alt="" />
                    {/if}
                    <div
                        class="chan"
                        on:click={() => {
                            fileinput.click();
                        }}
                    />
                    <input
                        style="display:none"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        on:change={(e) => onFileSelected(e)}
                        bind:this={fileinput}
                    />
                </div>
            </Draggable>
        </div>

        <Draggable>
            <div id="textRotate" style="transform-origin:center;">
                <span id="box">
                    <h1
                        class="canvasTextInput apply-font text-black "
                        style="transform-origin:50% 50%;"
                        id="colortext"
                    >
                        {fullName}
                    </h1>
                </span>
            </div>
        </Draggable>

        {#each arraySticker as itemSticker}
            <!-- {console.log("item", item.outerHTML)} -->
            <Draggable>
                <div class="cloneDestinationDivClass">
                    {@html itemSticker.outerHTML}
                </div>
            </Draggable>
        {/each}

        <!-- {JSON.stringify(arrayText)} -->
        <Stage>
            {#each arrayText as itemText, index}
                <Layer>
                    <!-- <Konva> -->
                    <!-- <Rotate>
                <Resize> -->
                    <div class="textDivCanvas ">
                        <Circle x="30" y="50" someText={itemText}  id={itemText}/>
                    </div>
                </Layer>
            {/each}
        </Stage>
        <Draggable>
            <div class="cloneMessageDiv" />
        </Draggable>

        <button
            id="fullScreenBtn"
            on:click={openFullScreenFunc}
            class="btn bottom-0 right-0  absolute
 w-8 p-0 m-0 bg-transparent
 border-none hover:bg-transparent hover:border-none  text-black h-2"
        >
            <MdFullscreen />
        </button>
        <!-- 

<button on:click={resetCanvasFunc} id="resetCanvasBtn" class="btn bottom-0 right-8  absolute w-8 p-0 bg-transparent border-none 
hover:bg-transparent hover:border-none  text-black h-2" > 
<MdFullscreen/>
 </button> -->
</div>
</div>