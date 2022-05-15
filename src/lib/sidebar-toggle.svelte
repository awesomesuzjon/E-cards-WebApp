<script>
	// class Sticker extends Content {

	// }

	import Editsidebar from './editsidebar.svelte';
	import Resize from '$lib/resize.svelte';
	import Rotate from '$lib/rotate.svelte';
	import Draggable from './Draggable.svelte';
	import CloneElement, { cloneElementFunc } from './cloneElement.svelte';
	import SaveTemplate from '$lib/saveTemplate.svelte';
	import KonvaTestRoute from '$lib/konvaTestRoute.svelte';
	import { allowDrop, drag, drop } from '../routes/dragdropclone.svelte';
	import { draggableStoreSticker } from '../stores/storeStickers.js';
	// import { draggableStoreText, textStore } from '../stores/storeText.js';
	import MdFullscreen from 'svelte-icons/md/MdFullscreen.svelte';
	import { openFullScreenFunc } from './openFullScreen.svelte';
	import { removeImgFunc, removeFgImgFunc } from './removeImg.svelte';
	import { pushTextToCanvasFunc } from './pushTextToCanvas.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import { textStore } from '../stores/storeText';
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import Circle from '$lib/circle.svelte';
	import { onMount } from 'svelte';

	// onMount(()=>{
	// let canvasDiv =document.getElementById("canvasText")
	// 	canvasDiv.addEventListener('click', function handleClick(event) {
	//  let EventClass = event.target.setAttribute('id','eventDiv');
	// console.log(EventClass.id);

	// });

	// })

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

	// function resizableDivWidth(){
	// 	document.querySelectorAll('.resizable').style.resizableDivWidth = width;

	// }
</script>

<div class="flex justify-between items-center">
	<div class="drawer w-1/3 z-50 ">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />

		<div class="imgcontainer drawer-side w-6/6  overflow-hidden  ">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class=" divide-y-2 max-h-full  md:w-80 bg-F6F0F0  text-sm text-white">
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
					<button class="btn flex mt-2  " on:click={removeFgImgFunc}>RemoveImg</button>
				</li>

				<li class="p-4">
					<div class="flex flex-col items-start justify-center  ">
						<h1 class="text-sm font-bold  truncate  ">Enter text here:</h1>
						<input type="text" id="addNew" name="addNewList" class="text-black" />

						<label
							for="my-drawer-4"
							class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn drawer-button btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex"
						>
							<btn class="text-sm w-26 h-auto  p-1 " on:click={pushTextToCanvasFunc}
								>Add text to canvas</btn
							>
						</label>
					</div>
				</li>

				<li class="p-4">
					<div class="stickersDiv flex flex-col items-start justify-center  ">
						<h1 class="text-sm font-bold  truncate   ">Choose Stickers:</h1>
						<!-- dropdown for Emoji Section on Choose sidebar -->
						<div class="dropdown inline-block relative mt-4 ">
							<button
								class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
							>
								<span class="mr-1">Holi Stickers</span>
								<svg
									class="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/>
								</svg>
							</button>

							<ul class="dropdown-menu  hidden  text-gray-700 pt-1">
								<div class="flex">
									<div class="flex-row ">
										<li>
											{#await fetchImage}
												<p>...waiting</p>
											{:then data}
												<img
													id="img0"
													src={data.message}
													draggable="true"
													on:dragstart={drag}
													class="clonedStickers w-12 h-12 rounded-full"
													alt="Dog image"
												/>
											{:catch error}
												<p>An error occurred!</p>
											{/await}
										</li>
									</div>

									<div class="flex z-50">
										<li>
											<img
												id="imgz"
												draggable="true"
												on:dragstart={drag}
												class="clonedStickers  w-12 h-12 rounded-full "
												src="https://ih1.redbubble.net/image.1181734964.5719/st,small,507x507-pad,600x600,f8f8f8.jpg"
												alt=""
											/>
										</li>

										<li>
											<img
												id="clonedElementStickers"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTExUXGBcYFRkXGhkZGhwaHRwaGBocHBkcGhwaHysjGh8oIBcbJjYlKC0uMjI/HCE3PDowOy0xMi4BCwsLDw4PHRERHTEkIyguMTMuMTExMTExMTMuMzEzMTkxMTQxLjEyMS47OzExMTIxMTMxLjExMS4zMTExMTEuLv/AABEIALQAtAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABDEAACAQIDBQUFBgMGBQUAAAABAgMAEQQSIQUGMUFREyJhcYEHIzKRoRRCUnKCsUNi0TOio8HC8DRjktLxFSRTc5P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQACAgEEAQEHBQAAAAAAAAAAAQIRAwQSITFRYQUTMkFxkbEiM0KBof/aAAwDAQACEQMRAD8A7NSlYsmPiU2aVAehdR/nQGVSseDFRyfBIjflYH9jWRQClKUApSlAKUpQClKUApSlAUpWNtDGRwRmWV1RFFyzEAD1NQmffebEkrs2AFL2+0z3SPzSMd+Tz08ahtLsmMXJ0if1hTbShVxG00YcmwQuoYk8AFJuTUAfByO6riJ5cVK57sObs4jbieyTuhBfVnzepIBmOwtgxwBSVQyC9iqhVS/ERqPh8+J8tBClfRaUNvffg3lKUqxQUpSgFKUoCM7wboRYskyy4ix+4JTk9EIsPSoPtbcRYJMoiw7owuhKlCbcQdGGYadL3v1t12tJvpDmwryD4obTLbj7vvMB+ZMy/qqHdcExq+ejlGK3bw66yYfszyNyo8LNG2W/he9X8PhZ4f8Ah8biov5TJ2iD9D/1qbaHxB+orU43YwOsJEbfhteM/p+55rbqQazjmT+I6p6NrmLs1uD302phT79ExsfNkHZygeSix9AfOprunvxg8f3YpMkvOGTuvfnbk/oT6VBzmVskilH42OoI6q3Bh9RcXAOla/a2xop9XWzjhIvdcEcNefrW3D5RxO06Z3Glch3f3zxWzyI8dmxGG4CdReSMf8wcWH18Twrquz8ZHPGssTq6MLqym4IqCxk0pSgFKUoClaTe7eKLAQGaW5JOVEX45HPBVH7nlWdtfaEeHheaZgqIpYk+A4AcyeQrl+H2nFiZP/UsY6Bre4iJzCCO+hIH8RuJPLhpyrKVKy8IbnV0XItmT4+QYnaZvY3iwo/s4hyzj779b+vQbbbGOGHiLKmdgpyRrpmKjgOgA5+mpIBu4THRyi6EkdSrKPmwArH2bF2uIw7ODaWTOAfuxRK0kY8CzpGzedj8Irn5nLk9B7ceN7fuSfdHYn2dDLL3sTKAZX6cxGn4Y1vYDnxOprf0qtdR5jdilKUApSlAKUpQCrcqBgVIuCCCOoPGrlYu1MWsMMkzfDHG8h8kUk/tQEG2G98PHfUquQnqU7pPrlrNrH2ZAY4Y0PFUUN+a3ePzvWRXE+z2oXtV+CxjMKkq5XFxxBGhU9VPI1HsVC0LBJDfNfI9rBra2PRwOXOxI5hZRVjG4VJUMbi6n0II1BB5EEAg+FWx5HF+hjnwLIvUjhFY+ysRNs6QzYMZomN5cKTZW6tEfuP4cD8hV9kZHaKT4lsQ3AOp4OOnAgjkQeVia12ppqzyWnF0zo+7G8EGOh7WB72NnQ6Ojc1deR+h5VuK43hleGb7ThmEctrNcXSVfwyqOPgw1HjwrKxm258USJ2ZBw7FdI7eY/ttOpI/lU6VFDcTfa29+HhuEPast75CAi245nPd052uR0qE4rfebFMVilKILXMaSZdeXaKjO504oEHiKxJMKjEFhmtawOqi3Cy8L+Nr1cjkDE2N7Gx8xxF+o+lTRG4xMVdp42Y4iaNUZnbuRZnJARQZJe1CgZiSX10FuN8uLa8MbFosPEGHFjIoe/iUR2+Zqxj4omAEwjIvp2gUi/hm51bGx4AcyxKp6peM/NCKrKCkaQyyh1+DO2lvAxTIY1XtLJq8neDfEF9yLkre1X4d41TGYaSRGRU7UNcqCc6WGUOVLai556c61M+z3ujRzyqY3zoHcyoGsRfLKSToxHEcazINuTx4nDSYiJXjid3eSG7N3onjB7NtRbtLmxas1jpqkavM5xab/wAOj7O3nwc7iOPERmQ8EJysfJWsT6Vuq1mAxmGxsQkiaOaI+AYX6EH4T4EXrYRxhRYCw6CtDE90pSgFKUoBSlKApUY9ouIth0gHHETxRfozZ5f8ONh61J6g+90nabSgi5Q4eSb9crCNf7qyfM1WTpNl8cd00j3SlK4z2RSlKgGv23hM6ZlF3juy24kfeT1A+YXpWkRwQCDcEAg9QeBqV1EyoSWWIcI5NPyyKsgHkM5X9NdWCX8Tz9bj6kj1SlK6DzyzK5sLHVmyqenG5H6VLfSrqKqLYaKo+QFWFjyvGB8IjceoMYB9Bf51fnTMrL1Uj5i1Acm2xtB8RK0rnie6PwryUf76mr+xtvTYfRGunNG1X0/D6Vm7mbJE2IbtV7sWrKebXsqn5E/ptU/mwETjK0cZHIFFNvLTSoolsx9hbXjxMedNCNGQ8VP+Y6H/AMVsDUefYXYSifC3FvjivcOh+ILfgeYB0uBwqQXqSDFMr4WQ4zDtkkUXkUfBMo1ySLzJ4BuIvUvw3tJwqsExqnDSGxUXMqlTcXzIvd1BBuB6io0ygix4Gudb04aSbHvEozMcgUcNBGDz0Atc/OoaJTPp/DzLIqujBlYBgym4IOoII4ir1ce9hu2pIZZNl4i6mxkhDa2I1dVPAgjvC2mjda7DVS4pSlAKUpQFK5/imz7UxjH+GmGiHgMjSH6yiugVzHCzsdq7TVuT4cjy7K37KKpk+Fm2n/cRuaUpXGesKtYudY0eRvhRGdvJQSfoKwtvbUGHVQADJISEUnTS2Ym2pAuNBqSQOdxGdpYlX91iZZc0qkZWEkK2bTRLBbdM1z4mtYY3I582ojj47ZvN25pJ5JJpSQUKxCMHuqSiSNYcz31XMde6eRsNUXMmJnmH9mxSNfHsgVZvG7Fh5KK8thLsWEsq5gA6o5RXsLXYDW9tLgjgKyEQKAAAABYAaAAcAK6I49srPPyZ98FH7laUpWpzlCut+YBHobX/AGHyqtKUBj4bBpHJJIgsZCpfxK319b1fw4klZlgiklyaOUyBVNr5c0jKC1iDYXOoq1jsQIo3kPBEZrdcovap5ungDh8LFGfjyB5D1kfvSE/qY1y6vUPDFV2zSEN75INDKGva4KnKykFWVhxDKdQapiVYgIpys7xxhgL5c7qpYX0uAxPpUl342aoU4xF78YHa2+/EOJIHEpfMDxsGHMVG8MXAgmkC9lLLEUIvdc8ilBJf8S8xpfToTbBnWWNoiUHF0Z2P2YIACjOyEgHOcxBPA5jrY8NeZFuNaZtnD7SMRz7MxkeOYFT8sw+VTDbIHYSE65UL246p3xpz1UVGp3KDvo6toAmW7ksbKFVb5ifDxvaxtumVaLGMjKyR4iMe9gkEiW4sAe/H5Mtx6+ddhwGKSaNJYzdHRXU9VYXH71yVHa5V45InABySLlax4MOII0OoPKpV7LMcff4RuETiWP8A+ubMSo8FdX+YqLTVoleCc0pSoLClKUBSuX7xIcNtzMfgxuHFjy7WEWt/0qP+sV1Coj7UdhPisKHg/wCIw7iaK3ElfiQeYHDmQKiStUWhLbJMsUrX7u7VTFQpOmlxZl5q4+JT5H6EGthXG1R7MWpK0Y88SgmUIGkVCF6245R0ubXtx06CopgcJM+HbEtKsalDLqhYyd25kkuwyg20UagW15CWY7GRwoZJXVFH3mIA8hfifCo1jse+KYAAph1IIBFmlI1BYHVIwRcKdTYE6aVpj3Po5NT7tK39vUrExKgsLEgEjobaiq0pXYeWKUpQClKUBibYjzxhLXzyQpbqHljUj5E11WuXY18oRzwSaFz5JNGx+gNdRryfaXcf7OnB0zy6AgggEEWIPMHiKiOFwQ+zthj/AAiYhfl2ZBhbzy9k1TCtDio8uIl6OI5PUqYz9IlrP2fOpuPlE5FxYdbgjkQR86t4HAB8Wsx4RRmw/nkNlbzCiUfrNXaydijvyt+Rflmb/XXdq5OOJ0Uxq5GFvzhQY0nA70ThfNJSEI8sxRv0VpdyJim1EHKXCyJbxidHH0dqle8i3w0vhGSPNdR9QKim5UPabTjPKHDSyHzlZEUf3X+VZaCTeNrwxlX6jqNKUruKClKUApSlAQLb27EmHnfGYBc6yG8+GuBmP/yRE6B+qnRtedaHG70h7x4SMyScGMisiRHgRJcXLD8A+dSD2mbdkUpgMO5SWVS8kinWKAGxI6M57oPLXzqK4TDJEgjjUKqjQf5nqfGqvHGTtmkc84x2xZiQbMvJ207maXk7/CvhGnBBWwpStUqMG2+WKUpQgo1+X+/6VTP1FvHiP6/MCvVKAorAi4Nx1FVryU5jQ9R/n1q32jKe+un4l1HqvFfqOZIoDxtWEyQyoOLRsB5lTb6107BTCSNJBqHRWB8GAI/eubNJ8LAggniNRYg2I9cvzqZ7lTZsMqc4maK3RVN4x/8AmUrzfaULjGXh/k3wvlowd6dryJJ2cL9mEALtlViWOoXvggCxBOlzmGotrTA7QM7l2GVhFErgcM4kmBt4EAMPBhXPPa9jW7Ts/wAUshPiEbKg8v6CpH7K43OE7aTjIwC/kiURr9Vap0mCqmYRlNybb4t8fRksrI2POqrOzEKqSasdAAIoySSelz8qsVHN6NpDD4MM2okklmIH3lEloV8L5ozf+Q1fWLdFRXzZqpbU2b3au2Yp8NL2LEkMikMrIbMwN7OAbFVax8D0NWvZRBmbF4nk0qQJ+WBTmt4Z5G+VQDAbW7SH7TwKRuGQG4Lg+78zYG1/x12bdLZYwmEhw/NIxmPV270h9WLGr6fF7uFepSM5TVyVM29KUroLClKUApSvLcDbpQHHZJ+2xGJxJ/iTMqeEcJMcY8L5Wb9VXK1ewjip4o0weGeZgih5GPZxK9hnGdrZiDe4FbGbYG2EUu8WEygXb3hWwAuSWZrC3WrWUps90rXbIx7yg9pC0ZBsDfMjeKsOXQ2seRNbGpIPJzdV+R/7qoA/VT4ZSv1zH9q90oC1IzWN1AA6M1/SyjWsjGYDE4dVOIiNmIAdShFyLhXs1ka+nIMeHHKMzdrDiXFwoeALSsOojF1/xGjPpXS8RCsilHUMrAqVYXBB4gg8RUNkpHIRMOYYeatYfqtl+te0cHgQbcbG/wC1SHbe48qZnwUoIAJEEwLC9uCS3zL0s2YeVcjx2+UjaCFFYaXe7lT4AgWNLFE6wexmxM6QxHLqZZBdlUqnDMUIZCzlRmUg8T3rWqWbNwhwxKQJKXLBpMNIyMbaKZIpXZc62A1JbgAQp4R/2QbVjniZMPIY8WFVplm96JQotnVu64Gvwg2W/A3uegRyGRlTEQZWDZlZTnTMNbq4AZDb8QW97a3rPJCORbZLguuOjlHtL3SxuKlEsOEkyqzHV4SbNlOirISTmDaDqKkWzNoYaFY8MGMTKgRY5VaFzlFuEgGYnwveulVpt8nhTBzSzwrMkcbOY2UNmsNBqDbz5caQiox2ohKjQY6fs42e4FhoWNhmOigk8LsQPWoL7Uk7aOKDCK0yxxxLmiVpBaMSixKAjmtWvZ5t+KWSQYjGfZUDhoYmVJAq63VZsQr5QNNNPDpUp2z7RIsJJGsOJOOzuFdAiZlU80kiVULXt3bG/UVWUN0lJ/IPlUQ3ZEMaYdMMGtL3ZCjq0bM6ushFpFBI7oW4B0Fdn2JvHh8Sckb5ZcuYxuCrgcyAdHA/EpI8apvds+KfCSrKossbOrEaoyqSrqeRBF9K5RGks0aSM/ZuAJEEXcZXtce9a5XobAcxqL317I6O24iZUGZ2VVHEsQB8zWCm3MMxss8bH+Vg31W4rUbhwxy4SCd4AsxXvM57V8w0J7Ryza2va+mo4ipVUFizFiVYXVgR1qlX6UApSlAWo41UBVAAHAAWA8gKpPCrqVdVZToVYAg+YOhq9SgNJiN2MI4IEKp4x3j169ywPreofvNsKTCAygmSAas4HfjHV1XR1/mUC3NbXNdKoaWQ0cfjcMAykEEXBBuCOoI41Wthvlu0cDnxOFQthic00K6mK/GSIfg5snLiNL21kEquodCGVhcEcCKumUao2e6xtjYO9YEyIw6goXAv+eND6V1CuOTOEKSm/upEmFiR/ZHNbTjcAi3jXYEYEAjUEXBqrLR6PdfJW9GX7Zicvw/aJbeXaNavrWvkfeKPLiZ110nlGvg7CoJZb2PtGTDTJiIWyyRsGU/uD1BFwRzua+odzd4I9oYZMRHpcWdL6o4+JT+46gg18p1JdwN7pdmzZ078b2EkZNgwHAg8mF9D6VIPqKqEVGtgb74DFIGjxEaG2qSsI3XwIY6+YuK9y744Qydjh3OJlPBMOO09Wce7QeLMKgkj2/fsxw2KR5MKiw4jiMvdjc9GXgt+q28b1kbh+zbDYDLNL77EDXO3wof+Wv8AqOvS1bVsdtCKUtJhllgZBZIGXtImBNw3asoluCNVta3A8Tptub54glocPhzE4OVnxBUlSQD3Y42bMbMOLAdedCDI9p+1rx/YIm95MPekcY4PveTP8A82PKofHh2H8Vz4ER2/uoD9axvtMcTydpIXkJDzSudSzfCGPUj4UHADyvu8HsLGzhHiiEaMeMpysVsbMV+JFvbQjMddF41boq+Tb+y3EYjssSgEbomKcLdmQ3ZUdwNGFsznpqT1qZR44EhXDRseTgC/gGBKsfAG9Ye6exVwUAiDFmLM8jkWzyObs1uQ5AcgBW3IvoaqXPVK8AW0FKA90pSgFKUoBSlKAoRXKd993W2czYrDIWwjtmmiXjETxkjH4DzXl5cOr14dQRY6g6WoDj2HmSRQ6EMrC4I1BFT32dbR7XCiJjeTDnsXvxIUAxt+qMqfPN0qNbz7hyQM2I2XYAnNJhCbI3Uxk/A3hw9NK0m7O8qwT9tZlsOzxULAiRUB0crxJjJJ05M3Owqeyq4OzVwnfXZqpjsVCygq0naqD0mUMSOnfzC/hXcYJVdQ6MGVgGVgbgg6ggjiKhXtR3decLi4FLSxKVZBxkiJvZRzZTcgc7sOYrOabXB26HNHFmTn0+H9GcOxuwHUFkOaxPdtY25W6/StKa6BG4YXBuP9/I1rMBu0cZtFMPGCA9nkYfcQfG39PFgKpjm26Z3e0tDjxRWTF14+vzJB7H9wFxf/ALzFqTADaOM6dowOpb+QHS3M35DXuOEwyRLljRUUcFRQo+Qrzg4Y4VSGMBVVLIg5Klhp4C6/OtPj9vSOTHgIu3cGzSMcsEfXNJ98j8KXPW1bHjF/ezba4SEuWUO11QMbC/Nm/lXifQcSKgGwNlT47WEskJJLYlxq5JuxiU/GxJJzmy6m2bhUrw25iSzDFbQf7VMPhUrlhiHG0cVzfzYm/HjUtAtoKEURzY+5eCw8omSLNIoADuS5FuLC+mYm5Lcbk68qktKUJFKUoBSlKAUpSgFKUoBSlKAUpSgFRzejdHDY6zyqySr8M0RySDwvbvDwINSOlAc42ZsTaGzc0UbHF4NrkKmWOaEk3zRKxyEA65QbHkBreSbs7xrOTBKrRYhL3SRGj7RR/EjDgEr1GuXhqLEyOtXt/YkOLQJMpupzI6kq6NyZHGqmgMTa+6mDxDmSWEZzxZGeMt+bIwzet6rgdm4PZ0UkqBYktmkkYliQvDM7ksR0F+elayTZ+14RlgxeHnTkcVGyuB0LRGz+ZArGwu6OJxMiy7WxKzKjBkw0SlIQw4F72MluhHqRpUUW3yqr48GTu/hXxzvjcRmWKUKsMB09ypJDS9c5OYpwtlvewtLYkCgBQAALADQADgAOVe6rUlRSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA/9k="
												alt=""
											/>
										</li>
									</div>
								</div>

								<div class="flex">
									<div class="flex-row ">
										<li>
											<img
												id="clonedElementStickers1"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4IPLEsMEid71uR886_lubszXuBZXdSLVcA&usqp=CAU"
												alt=""
											/>
										</li>
									</div>

									<div class="flex">
										<li>
											<img
												id="img3"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="https://cf.shopee.ph/file/86ce19be50991124af2da8e70eb537ed"
												alt=""
											/>
										</li>
										<li>
											<img
												id="img4"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="data:image/png;base64,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"
												alt=""
											/>
										</li>
									</div>
								</div>
							</ul>
						</div>

						<div class="dropdown inline-block relative mt-4 ">
							<button
								class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
							>
								<span class="mr-1 ">Dashain Stickers</span>
								<svg
									class="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									><path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/>
								</svg>
							</button>
							<ul class="dropdown-menu  hidden  text-gray-700 pt-1">
								<div class="flex">
									<div class="flex-row ">
										<li>
											{#await fetchImage}
												<p>...waiting</p>
											{:then data}
												<img
													id="img5"
													src={data.message}
													draggable="true"
													on:dragstart|preventDefault={drag}
													class="clonedStickers w-12 h-12 rounded-full"
													alt="Dog image"
												/>
											{:catch error}
												<p>An error occurred!</p>
											{/await}
										</li>
									</div>

									<div class="flex">
										<li>
											<img
												id="img6"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="https://ih1.redbubble.net/image.1181734964.5719/st,small,507x507-pad,600x600,f8f8f8.jpg"
												alt=""
											/>
										</li>
										<li>
											<img
												id="img7"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="data:image/jpeg;base64,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"
												alt=""
											/>
										</li>
									</div>
								</div>

								<div class="flex">
									<div class="flex-row ">
										<li>
											<img
												id="img8"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4IPLEsMEid71uR886_lubszXuBZXdSLVcA&usqp=CAU"
												alt=""
											/>
										</li>
									</div>

									<div class="flex">
										<li>
											<img
												id="img9"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="https://cf.shopee.ph/file/86ce19be50991124af2da8e70eb537ed"
												alt=""
											/>
										</li>
										<li>
											<img
												id="img10"
												class="clonedStickers w-12 h-12 rounded-full"
												draggable="true"
												on:dragstart={drag}
												src="data:image/png;base64,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"
												alt=""
											/>
										</li>
									</div>
								</div>
							</ul>
						</div>

						<button
							class="btn hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn drawer-button btn-gray-50 center w-3/6 mt-2 text-sm p-1"
							>Choose:</button
						>
					</div>
				</li>

				<li class="p-4 flex ">
					<div class="dropdown float-left ">
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

			<Stage>
			{#each $textStore as itemText, index}
				<Layer>
				<div class="textDivCanvas ">
					<!-- <Circle x="30" y="50" someText={itemText}  id='container'/> -->
					<KonvaTestRoute someText={itemText} id="container" />
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
	.dropdown:hover .dropdown-menu {
		display: block;
	}
	.stickersDiv {
		z-index: 30;
		position: relative;
	}
	#clonedElement {
		position: relative;
		z-index: 50;
		top: 0px;
		padding: 5;
		font-size: smaller;
		width: 100%;
	}

	#canvasText {
		position: relative;
		z-index: 20;
	}

	.canvasTextInput {
		position: absolute;
		top: 0;
		z-index: 50;
	}

	.clonedStickers {
		position: relative;
		z-index: 40;
		top: 0;
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

	.resizable {
		border: 2px solid black;
		padding: 5px;
		font-size: 2em;
		touch-action: none;
		box-sizing: border-box;
		position: relative;
		min-width: 100px;
		width: clamp(200px, 50% + 20px, 800px);
		word-wrap: break-word;
	}

	.textspan {
		font-size: 4vw;
		word-wrap: break-word;
		/* width:     calc(100% - 20px);
  height:    calc(100vh - 20px); */
	}

	.helloClass {
		background-color: red;
		color: green;
		padding: 50px;
	}
</style>
