<script>
	export let type = 'primary';


	function newFunction() {
		console.log('i m new functon clicked');
	}
</script>

<button class={type} >
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
		background-color: pink;
	}

	button:hover {
		background-color: transparent;
		outline: 1px solid #b91c1c;
		color: #b91c1c;
	}
	button:focus {
		background: pink;
		color: #b91c1c;
	}

	.primary {
		background-color: #b91c1c;
		color: white;
	}

	.secondary {
		background: #45c496;
		color: white;
	}
</style>
