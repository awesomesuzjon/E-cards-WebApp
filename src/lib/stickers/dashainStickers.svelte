<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const tabs = document.querySelectorAll('[data-tab-target]');
		const tabContents = document.querySelectorAll('[data-tab-content]');

		tabs.forEach((tab) => {
			tab.addEventListener('click', () => {
				const target = document.querySelector(tab.dataset.tabTarget);
				tabContents.forEach((tabContent) => {
					tabContent.classList.remove('active');
				});
				tabs.forEach((tab) => {
					tab.classList.remove('active');
				});
				tab.classList.add('active');
				target.classList.add('active');
			});
		});
	});
</script>

<ul class="tabs ">
	<li data-tab-target="#home" class="active tab text-black">Dashain</li>
	<li data-tab-target="#pricing" class="tab text-black">Tihar</li>
	<li data-tab-target="#about" class="tab text-black">Holi</li>
	<li data-tab-target="#news" class="tab text-black">Others</li>
</ul>

<div class="tab-content text-black">
	<div id="home" data-tab-content class="active">
		<div
			class="duration-700 ease-in-out  inset-0 transition-all transform translate-x-0  mx-4 "
			data-carousel-item="active"
		>
			<div class="flex">
				<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hand.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="dimag.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			</div>

			<div class="flex">
				<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="dami.png" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="namaste.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			</div>

			<div class="flex">
				<img src="dimag.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="dami.png" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="namaste.jpg" class="rounded-full w-12 block mx-2" alt="..." />
				<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			</div>
		</div>
	</div>
	<div id="pricing" data-tab-content>
		<div class="flex">
			<img src="dimag.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="dami.png" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="namaste.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
		</div>
	</div>
	<div id="about" data-tab-content>
		<div class="flex">
			<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hand.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="ballon.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="dimag.jpg" class="rounded-full w-12 block mx-2" alt="..." />
		</div>
	</div>
	<div id="news" data-tab-content>
		<div class="flex">
			<img src="dimag.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="dami.png" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="ktm.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="namaste.jpg" class="rounded-full w-12 block mx-2" alt="..." />
			<img src="hug.jpg" class="rounded-full w-12 block mx-2" alt="..." />
		</div>
	</div>
</div>

<style>
	[data-tab-content] {
		display: none;
	}

	.active[data-tab-content] {
		display: block;
	}

	body {
		padding: 0;
		margin: 0;
	}

	.tabs {
		display: flex;
		justify-content: space-around;
		list-style-type: none;
		margin: 0;
		padding: 0;
		border-bottom: 1px solid black;
	}

	.tab {
		cursor: pointer;
		padding: 10px;
	}

	.tab.active {
		background-color: #ccc;
	}

	.tab:hover {
		background-color: #aaa;
	}

	.tab-content {
		margin-left: 20px;
		margin-right: 20px;
	}
</style>
