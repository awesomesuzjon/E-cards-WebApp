<script>
	function newFunction() {
		('i m new functon clicked');
	}
</script>

<button
	class=" d-flex items-center justify-center font-bold rounded dark:text-white text-sm bg-customHamroPatroColor dark:bg-gray-800 text-white 2xl:text-3xl"
>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		padding: 0.5rem 0.5rem;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

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
