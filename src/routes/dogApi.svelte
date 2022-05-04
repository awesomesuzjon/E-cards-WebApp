<script>
   

        let fetchImage = (async () => {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            return await response.json()
        })()
</script>


{#await fetchImage}
	<p>...waiting</p>
{:then data}
	<img alt="Dog image" src={data.message} class="w-12 h-12 rounded-full"  />
{:catch error}
	<p>An error occurred!</p>
{/await}