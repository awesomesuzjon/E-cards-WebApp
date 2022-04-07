<script>
import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte'
import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte'
import FaAlignRight from 'svelte-icons/fa/FaAlignRight.svelte'
import Changefontsize, { changeTextSize, getCoordinatesByElementId } from './changefontsize.svelte';
import Colorpicker,{click} from './colorpicker.svelte';
import { setContext, getContext } from 'svelte';




let  xaxis; 
let yaxis;





</script>

<!-- <Index/> -->




<div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
 

    <div class="drawer-side w-6/6 h-screen overflow-hidden">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul class="divide-y-2 overflow-y-auto  md:w-80 bg-F6F0F0  text-sm text-white">
        <!-- Sidebar content here -->
       
        <li class="p-4">
          
          <div class="flex  items-start justify-start  ">   
            <h1 class="text-sm font-bold " draggable="true" >Position X:</h1>
            <input type="input"  bind:value={xaxis} class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto text-sm font-bold dark:text-gray-800">
          
            <span class="text-sm font-bold ">Y:</span> 
            <input type="input" bind:value={yaxis} class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto x text-sm font-bold dark:text-gray-800">
         </div>
          <div class="flex mt-2">
          <h1 class="text-sm font-bold left flex items-start justify-start self-start" draggable="true">Rotate:</h1>
          <input type="input"  class=" ml-4 mr-2 border-2 text-black border-gray-500 w-24 h-auto  text-sm font-bold dark:text-gray-800">
        </div>
          <button on:click={()=>getCoordinatesByElementId('box', (x, y)=>{
            xaxis =x;
            yaxis=y;
          })} class="hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2 w-3/6 text-sm p-1" >Enter</button>    
        </li>
    
                
            <li class="p-3">
              <div class="flex  items-start justify-start  ">
                <h1 class="text-sm font-bold " draggable="true">Font-Size:</h1>
          
              <input type="text"  id="input" class=" mx-2 border-2 text-black border-gray-500 w-12 h-auto  text-sm font-bold dark:text-gray-800">    

              </div>
              <button on:click={changeTextSize} class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2 w-3/6 text-sm p-1" >Enter</button>    
                </li>

                
            <li class="p-2">
              <div class="flex  items-start justify-start  ">
                <h1 class="text-sm font-bold " draggable="true">Text-Color:</h1>
                <input type="color" id='colorinput' value="#e66465"  class=" mx-2 border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800">
              </div>


              <button on:click={click}  class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2 w-3/6 text-sm p-1">Enter</button>    
                </li>

                
                <li class="p-4">
                  <div class="flex  flex-col items-start justify-start  ">
                    <h1 class="text-sm font-bold " draggable="true">Font-Family:</h1>
                  
                
                <div class="dropdown inline-block relative mt-4">


                    <!-- <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span class="mr-1">Seriff</span>
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul class="dropdown-menu  hidden  text-gray-700 pt-1" >
                        <div class="flex">
                        <li class="w-4 h-4 m-2 " draggable="true">Sans-Serif</li>
                        <li class="w-4 h-4 m-2" draggable="true">Times New Roman</li>
                        <li class="w-4 h-4 m-2" draggable="true">Arial</li>
                        <li class="w-4 h-4 m-2" draggable="true">Hanuman</li>
                      </div>
                    
                       
                        
                          </ul> -->
                      </div>
                  
                 
                </li >



                <li class="p-4">
                  <div class="flex  flex-col items-start justify-start  ">
                    <h1 class="text-sm font-bold " draggable="true">Align-Items:</h1>
                    <div class="flex">
                    <span class="w-4 h-auto flex mt-2 mx-3">
                      <FaAlignLeft/>
                    </span>
                    <span class="w-4 h-auto flex-col mt-2 mx-3">
                      <FaAlignCenter/>
                    </span>
                    <span class="w-4 h-auto flex-col mt-2 mx-3">
                      <FaAlignRight/>
                    </span>
                  </div>
                  </div>
                    </li>

                        </ul>
    </div>
  </div>

