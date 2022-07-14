<script>
	function newFunction() {
		console.log('i m new functon clicked');
	}
</script>

<button class="  dark:text-white text-sm bg-customHamroPatroColor dark:bg-gray-800 text-white">
	<slot />
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		padding: 4px 10px;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		font-weight: bold;
		font-size: 12 !important;
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
	/*
	.primary {
		background-color: #b91c1c;
		color: white;
	}
  */
</style>
