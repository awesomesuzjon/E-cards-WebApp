<script>
	import Firebaselogin from '../lib/firebase/firebaselogin.svelte';
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

<Firebaselogin />
<ul class="tabs">
	<li data-tab-target="#home" class="active tab">Home</li>
	<li data-tab-target="#pricing" class="tab">Pricing</li>
	<li data-tab-target="#about" class="tab">About</li>
	<li data-tab-target="#news" class="tab">News</li>
</ul>

<div class="tab-content">
	<div id="home" data-tab-content class="active">
		<h1>Home</h1>
		<p>This is the home</p>
	</div>
	<div id="pricing" data-tab-content>
		<h1>Pricing</h1>
		<p>Some information on pricing</p>
	</div>
	<div id="about" data-tab-content>
		<h1>About</h1>
		<p>Let me tell you about me</p>
	</div>
	<div id="news" data-tab-content>
		<h1>News</h1>
		<p>News is great.</p>
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
