<script>
import FaAlignJustify from "svelte-icons/fa/FaAlignJustify.svelte";
import FaCloudMoon from 'svelte-icons/fa/FaCloudMoon.svelte'
import { afterUpdate, beforeUpdate, onMount } from "svelte/internal";
import { page } from '$app/stores';


//dark and Light Mode toggle button 
function toggle() {
	window.document.body.classList.toggle('dark')
}

    //Pathname for the current page loaded in the navbar
//   onMount(()=>{
//   fileAddressTracker =(window.location.pathname)
//  // window.location.reload();
//  location.protocol 
//   })
// let fileAddressTracker = [];
// 	$: reactivefileAddressTracker = `${fileAddressTracker}`; 
</script>



<div class="bg-gray-100 dark:bg-gray-800 text-black items-center flex   overflow-hidden    content-end ">
    <nav class="flex items-center gap-20     h-20" >
    
        <h1 class="  font-bold dark:text-gray-100 mx-10 truncate "> <a href="/" >  E-CARDS CMS</a></h1>    
 
        

         <!-- pathname in navbar called reactively -->
        <p>Path:{$page.url.pathname}</p>
     
        <ul class="flex  items-stretch  space-x-11 px-32 py-5 truncate">
            <li>
              
              <button class=" dark:btn-black-100 dark:text-gray-100 w-6 h-6" on:click={toggle}> <FaCloudMoon/></button>
            </li>
         
            <li class="dark:text-gray-100">Hello,Admin!!</li>
          
            
        </ul>
    </nav>
</div>