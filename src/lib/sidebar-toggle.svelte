<script>
	// class Sticker extends Content {

	// }

	import Editsidebar from './editsidebar.svelte';
	import Draggable from './Draggable.svelte';
	import { cloneElementFunc } from '../utils/cloneElement';
	import SaveTemplate from '$lib/saveTemplate.svelte';
	import KonvaTestRoute from '$lib/konvaTestRoute.svelte';
	import { allowDrop, drag, drop } from '../routes/dragdropclone.svelte';
	import { draggableStoreSticker } from '../stores/storeStickers.js';
	import MdFullscreen from 'svelte-icons/md/MdFullscreen.svelte';
	import { openFullScreenFunc } from '../utils/openFullScreen';
	import { removeImgFunc, removeFgImgFunc } from '../utils/removeImg';
	import { pushTextToCanvasFunc } from '../utils/pushTextToCanvas';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import { textStore } from '../stores/storeText';
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import { onMount } from 'svelte';
import Stickers from '$lib/stickers.svelte';
import KonvaImgDragTest from '$lib/konvaImgDragTest.svelte';


	let someText;
	let arraySticker = [];
	// $: reactiveArray = `${array}`;
	draggableStoreSticker.subscribe((sticker) => {
		arraySticker = sticker;
	});

	export let arrayText = [];
	textStore.subscribe((text) => {
		arrayText = text;
	});

	let canvasUploadedText = [];
	$: CanvasText = `${canvasUploadedText}`;

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

	// function resizableDivWidth(){
	// 	document.querySelectorAll('.resizable').style.resizableDivWidth = width;

	// }
</script>

<div class="flex justify-between items-center">
	<div class="drawer  z-50 " style="width:10em;">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div
			class="imgcontainer drawer-side   
		  "
		>
			<label for="my-drawer" class="drawer-overlay" />
			<ul class=" divide-y-2 w-full bg-F6F0F0  text-sm text-white">
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
					<button class="btn flex mt-2  " on:click={removeImgFunc}>Remove Bg Image</button>
				</li>

				<li class="p-4 divide-y-2">
					<div class="flex flex-col items-start justify-center mt-2">
						<h1 class="text-sm font-bold  truncate mb-2   ">Select foreground template</h1>

						<img
							class="upload"
							src="https://static.thenounproject.com/png/625182-200.png"
							alt=""
							id="canvasFbImg"
							on:click={() => {
								fileinput.click();
							}}
						/>
					</div>
					<button class="btn flex mt-2  " on:click={removeFgImgFunc}>Remove Fg Img</button>
				</li>

				<li class="p-4">
					<div class="flex flex-col items-start justify-center  ">
						<h1 class="text-sm font-bold  truncate  ">Enter text here:</h1>
						<input type="text" id="addNew" name="addNewList" class="text-black" />

						<label
							for=""
							class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn  btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex"
						>
							<btn class="text-sm w-26 h-auto  p-1 " on:click={pushTextToCanvasFunc}
								>Add text to canvas</btn
							>
						</label>

						<label
							for="my-drawer-4"
							class="drawer-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn  btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex"
						>
							<btn class="text-sm w-26 h-auto  p-1 ">Open Editbar</btn>
						</label>
					</div>
				</li>

				 <li class="p-4">

					<Stickers/>
				
				
					<button
					class="hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn drawer-button btn-gray-50 center w-3/6 mt-2 text-sm p-1"
					>Choose:</button
				>
				</li> 


				<li class="p-4 flex ">
					<div class="dropdown float-left ">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label
							tabindex="0"
							class="btn hover:bg-gray-50  w-36 truncate bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
							>Choose Messages :
						</label>
						<div>
							<ul
								tabindex="0"
								class="dropdown-content menu text-black    w-32  shadow bg-gray-100  "
							>
								<li>
									<a
										id="clonedElement"
										on:click={cloneElementFunc}
										class="z-20 relative bg-gray-200 hover:bg-gray-50 border-b-2 border-gray-800"
										>Happy New Year To you !!!🎉🎉</a
									>
								</li>

								<li>
									<a
										id="clonedElement"
										on:click={cloneElementFunc}
										class="z-20 relative bg-blue-200 hover:bg-gray-50 border-b-2 border-gray-800"
										>Happy Dashain To you !!!🌷🎈</a
									>
								</li>

								<li>
									<a
										id="clonedElement"
										on:click={cloneElementFunc}
										class="z-20 relative bg-blue-200 hover:bg-gray-50 border-b-2 border-gray-800"
										>Happy Holi To you !!!🔴🟡</a
									>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<button class="btn float-left mt-20 w-40">Choose:</button>
			</ul>
		</div>
	</div>

	<!-- canvas div  -->
	<div id="canvasContainer" class=" flex    items-center 	 h-full">
		<label
			for="my-drawer"
			class=" btn p-0 w-10 h-8 drawer-button   justify-left  hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white"
		>
			<h6 class="text-sm w-6  h-auto p-1"><FaAngleRight /></h6>
		</label>

		<div
			on:drop={drop}
			on:dragover={allowDrop}
			id="canvasHolder"
			style="width:20em;"
			class="  text-black dark:text-white cursor-move   self-center  border-8 bg-gray-100  "
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
							{CanvasText}
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

			<Stage>
				{#each $textStore as itemText, index}
					<Layer>
						<div class="textDivCanvas ">
							<!-- <Circle x="30" y="50" someText={itemText}  id='container'/> -->
							<KonvaTestRoute someText={itemText} id={someText} />
							<KonvaImgDragTest/>
						</div>
					</Layer>
				{/each}
			</Stage>

			<!-- <Draggable> -->
			<!-- <div class="textDivCanvas " id="container"> -->

			<!-- <KonvaTestRoute someText={itemText} containerId={`container_${index}`} > -->
			<!-- <div  containerId={`container_${index}`}> -->
			<!-- </div> -->
			<!-- </KonvaTestRoute>  -->
			<!-- </Draggable> -->
			<!-- {@html itemText.outerHTML} -->
			<!-- 				
				</Resize>	
</Rotate> -->
			<!-- </Konva> -->

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
		<Editsidebar />
	</div>
</div>
<p class="text-sm mt-2"><strong>Tip:</strong> Press the "Esc" key to exit full screen.</p>
<div>
	<SaveTemplate />
</div>

<style>
	
	#clonedElement {
		position: relative;
		z-index: 50;
		top: 0px;
		padding: 5;
		font-size: smaller;
		width: 100%;
	}


	.canvasTextInput {
		position: absolute;
		top: 0;
		z-index: 50;
	}

	#canvasImg {
		z-index: 0;
		width: 100%;
		top: 0;
		height: auto;
		position: absolute;
	}

	#app {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	}

	.upload {
		display: flex;
		height: 50px;
		width: 50px;
		cursor: pointer;
	}
	.avatar {
		display: flex;
		height: 200px;
		width: 200px;
	}

	#canvasHolder{
		height: 450px;
	}
</style>
