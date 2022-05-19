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

					<div id="drag-items" class="m-2 p-4 " >
						<img class="w-24" src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" draggable="true" />
					  </div>
				
					<button
					class="hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn drawer-button btn-gray-50 center w-3/6 mt-2 text-sm p-1"
					>Choose:</button
				>
				</li> 

				<li class = "p-4">
					<div id="drag-items" class="p-4 m-10 bg-yellow-400 h-auto"> 
						<img class="w-8" src="data:image/jpeg;base64,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" draggable="true" alt="">

					</div>

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
