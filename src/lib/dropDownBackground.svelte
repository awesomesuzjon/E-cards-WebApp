<script>
  import {changeCanvasBgColorFunc,revertCanvasBgColorFunc} from '../utils/colorpicker.js';
  
  import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte'


</script>

<div tabindex="0" class="collapse">
    <input type="checkbox"> 
<div class="collapse-title flex justify-center text-xl font-medium">
    BackGround 
    <button class="w-8 h-auto truncate ">
    <MdKeyboardArrowDown/>
    </button>
   </div>
   <div class="collapse-content"> 
     <li class="p-1">
       <div class="flex  items-start justify-start  ">
         <h1 class="text-sm font-bold p-0">Change BgColor:</h1>
         
         <input type="color" id='colorBginput' value="#e66465"  class=" mx-2 border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800">
       </div>


       <button on:click={changeCanvasBgColorFunc}  class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2
        w-full text-sm p-1">Enter</button>    

        
        <button on:click={revertCanvasBgColorFunc}  class=" hover:text-gray-800 hover:no-underline 
       hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2
        w-full text-sm p-1">Revert</button>    
         </li>
     </div>
     </div>