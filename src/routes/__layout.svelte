        <script>
        import '../app.css'
        import Button from '$lib/button.svelte'
        import Nav from '$lib/nav.svelte'
        import Sidebar from '$lib/sidebar.svelte'
        import Table from '$lib/table.svelte';

   

        </script>


<Nav/>
<div class="relative h-screen flex ">
    <Sidebar/>
    
    
        <div class="w-5/6 text-center text-bold text-4xl h-screen dark:bg-gray-800 dark:text-gray-100">
            <slot/>
        </div>
                    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
                </div>


                
                      