<script>
	export let type = 'primary';
	export let flat = false;
	export let inverse = false;

	function newFunction() {
		console.log('i m new functon clicked');
	}
</script>

<button class={type}>
	<slot />
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		padding: 8px 8px;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		font-weight: bold;
		border-radius: 6px;
	}

	button:active {
		background: olive;
	}

	button:hover {
		background-color: orange;
	}
	button:focus {
		background: olive;
	}

	.primary {
		background-color: #d91b42;
		color: white;
	}

	.secondary {
		background: #45c496;
		color: white;
	}
</style>
