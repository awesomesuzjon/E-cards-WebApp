<script>
import FaAlignJustify from "svelte-icons/fa/FaAlignJustify.svelte";
import FaCloudMoon from 'svelte-icons/fa/FaCloudMoon.svelte'
function toggle() {
	window.document.body.classList.toggle('dark')
}


</script>



<div class="bg-gray-100 dark:bg-gray-800 text-black items-center flex   overflow-hidden    content-end ">
    <nav class="flex items-center gap-20     h-20" >
    
        <h1 class="  font-bold dark:text-gray-100 mx-10 truncate "> <a href="/" >  E-CARDS CMS</a></h1>    
        <!--Create sidebar toggle button         -->
        <div class="drawer-content">
            <label for="my-drawer" class="btn drawer-button  items-center justify-left flex   hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white">

                
                <!-- <span class="w-4 h-4"><FaAlignJustify/></span> -->
             <h6 class="text-sm w-20 h-auto p-1">Create Menu </h6>
            </label>
          </div>

                  <!--Edit sidebar toggle button         -->
         <!-- <div class="drawer-content">
            <label for="my-drawer-4" class="btn drawer-button  items-center justify-left flex">
             <h6 class="text-sm w-26 h-auto p-1">Open Edit Menu</h6>
              </label>
          </div> 
         -->
       
        <input
        class="border-2 w-30 center ml-36 border-gray-300 bg-white h-8  rounded-md text-sm focus:outline-none"
        type="search" name="search" placeholder=" Search ">
        <ul class="flex  items-stretch  space-x-11 px-32 py-5 truncate">
            <li>
              
              <button class=" dark:btn-black-100 dark:text-gray-100 w-6 h-6" on:click={toggle}> <FaCloudMoon/></button>
            </li>
         
            <li class="dark:text-gray-100">Hello,Admin!!</li>
          
            
        </ul>
    </nav>
</div>