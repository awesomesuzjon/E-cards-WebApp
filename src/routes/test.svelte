<script>
   let items = []; 
    // fetch("https://openlibrary.org/works/OL45883W.json")
     fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then(res => res.json())
    .then((result) => {
      items = Object.entries(result);
      console.log(items)
    }),
    (error) => {
        console.log(error);
    }
  
  </script>
  
  
    
    
    <!-- {#each items as item }
    {item[1].description}

      {:else}
        loadingggg....
    {/each} --> 

  
