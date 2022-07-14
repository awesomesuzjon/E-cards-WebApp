<script>
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import { pushMsgToCanvasFunc } from '../../../utils/pushTextToCanvas';

	// import { clearModalMsgFunc } from '../../../utils/pushTextToCanvas';

	var selected = '';
	let messages = {
		first: ['Happy Dashain', 'Happy Tika', 'Happy Ghatasthapana', 'Dashain ko subhakamana'],
		second: ['Happy Tihar', 'Happy Dipawali', 'Happy Laxmi Pooja'],
		third: ['Happy Holi', 'Festival of Colors']
	};
	$: reactiveMessageText = selected;

	onMount(() => {
		let tabsContainer = document.querySelector('#tabs');

		let tabTogglers = tabsContainer.querySelectorAll('#tabs a');

		tabTogglers.forEach(function (toggler) {
			toggler.addEventListener('click', function (e) {
				e.preventDefault();

				let tabName = this.getAttribute('href');

				let tabContents = document.querySelector('#tab-contents');

				for (let i = 0; i < tabContents.children.length; i++) {
					tabTogglers[i].parentElement.classList.remove(
						'border-t',
						'border-r',
						'border-l',
						'-mb-px',
						'bg-white'
					);
					tabContents.children[i].classList.remove('hidden');
					if ('#' + tabContents.children[i].id === tabName) {
						continue;
					}
					tabContents.children[i].classList.add('hidden');
				}
				e.target.parentElement.classList.add(
					'border-t',
					'border-r',
					'border-l',
					'-mb-px',
					'bg-white'
				);
			});
		});
	});

	//when one msg is selected another msg cannot be added
	function eventTarget(e) {
		if (selected == '') {
			selected = e.target.innerText;
		} else {
			alert('already selected');
		}

		//enter key to push message to canvas
		document.getElementById('addNewMsg').addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				pushMsgToCanvasFunc();
			}
		});
	}
</script>

<div class="rounded border w-full mx-auto mt-4">
	<!-- Tabs -->
	<ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b ">
		<a id="default-tab" href="#first">
			<li
				class=" text-sm bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"
			>
				Dashain Message
			</li>
		</a>

		<a href="#second"
			><li class="px-4 text-gray-800 font-semibold py-2 rounded-t text-sm">Tihar Message</li>
		</a>

		<a href="#third"
			><li class="px-4 text-gray-800 font-semibold py-2 rounded-t text-sm">Holi Message</li>
		</a>
	</ul>

	<!-- Tab Contents -->
	<div id="tab-contents" class="list-none">
		<div id="first" class="p-4 text-black text-sm ">
			{#each messages.first as message}
				<li
					on:click={eventTarget}
					class="active:bg-red-500  focus-within:border-teal active:blue-300"
				>
					{message}
				</li>
			{/each}
		</div>
		<div id="second" class="hidden p-4 text-black text-sm">
			{#each messages.second as message}
				<li on:click={eventTarget}>{message}</li>
			{/each}
		</div>
		<div id="third" class="hidden p-4 text-black text-sm">
			{#each messages.third as message}
				<li on:click={eventTarget}>{message}</li>
			{/each}
		</div>
	</div>
</div>

<input
	bind:value={reactiveMessageText}
	type="text"
	class="text-black text-sm bg-gray-200 h-8 mt-4"
	id="addNewMsg"
	on:enterkeyhint={pushMsgToCanvasFunc}
/>
<btn id="msgModalbtn" on:click={pushMsgToCanvasFunc} class="btn"
	><span class="w-4 p-0 flex justify-end">Add </span></btn
>
