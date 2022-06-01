        <script lang="ts">
        import '../app.css'
        import Nav from '../lib/reusable/nav.svelte'
        import Sidebar from '../lib/reusable/sidebar.svelte'
        import {onMount} from 'svelte'
        

 </script>


<Nav/>
<div class="relative h-screen flex ">
    <Sidebar/>
    
    
        <div class="w-full   text-center text-bold text-4xl h-screen dark:bg-gray-800 dark:text-gray-100" id="main-container">
            <slot/>
        </div>
                    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
                </div>

                
                

                <style>
                    #main-container{
                        background: #f7f7f8 ;
                    }
                </style>

     