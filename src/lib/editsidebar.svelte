<script>
import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte'
import FaAlignCenter from 'svelte-icons/fa/FaAlignCenter.svelte'
import FaAlignRight from 'svelte-icons/fa/FaAlignRight.svelte'
import Changefontsize, { changeTextSize, getCoordinatesByElementId,rotateText } from './changefontsize.svelte';
import Colorpicker,{click,changeCanvasBgColorFunc} from './colorpicker.svelte';
import { setContext, getContext } from 'svelte';
import AlignText,{textLeftAlignFunction,textCenterAlignFunction,textRightAlignFunction} from './alignText.svelte'




let  xaxis; 
let yaxis;





</script>

<!-- <Index/> -->




<div class="drawer drawer-end w-1/3">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
 

    <div class="drawer-side w-full h-screen overflow-hidden">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul class="divide-y-2   bg-F6F0F0  text-sm text-white">
        <!-- Sidebar content here -->
       
        <li class="p-4">
          
          <div class="flex  items-start justify-start  ">   
            <h1 class="text-sm font-bold ">Position X:</h1>
            <input type="input"  bind:value={xaxis} class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto text-sm font-bold dark:text-gray-800">
          
            <span class="text-sm font-bold ">Y:</span> 
            <input type="input" bind:value={yaxis} class=" mr-2 border-2 text-black border-gray-500 w-8 h-auto x text-sm font-bold dark:text-gray-800">
         </div>
          <div class="flex flex-col mt-2">
            <button on:click={()=>getCoordinatesByElementId('box', (x, y)=>{
              xaxis =x;
              yaxis=y;
            })} class="hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex mt-2 w-2/4 text-sm p-1" >Enter</button>    
          
          <h1 class="text-sm font-bold left flex items-start justify-start self-start" draggable="true">Rotate:</h1>
          <input type="input" id="inputRotate"  class="mb-2  border-2 text-black border-gray-500 w-2/4 h-auto  text-sm font-bold dark:text-gray-800">
          <button class="btn w-2/4" on:click={rotateText}>rotate</button>
        </div>
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

                <li class="p-1">
                  <div class="flex  items-start justify-start  ">
                    <h1 class="text-sm font-bold p-0">Change BgColor:</h1>
                    
                    <input type="color" id='colorBginput' value="#e66465"  class=" mx-2 border-2 text-black  border-gray-500 w-10 h-6  text-sm font-bold dark:text-gray-800">
                  </div>
    
    
                  <button on:click={changeCanvasBgColorFunc}  class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2 w-3/6 text-sm p-1">Enter</button>    
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
                    <h1 class="text-sm font-bold mb-2" draggable="true">Align-Items:</h1>
                    <div class="flex ">
                      <button on:click={textLeftAlignFunction}  class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8">
                      <FaAlignLeft/>
                  </button>
                  

                  <button on:click={textCenterAlignFunction}  class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8">
                      <FaAlignCenter/>
                  </button>
                
                  <button on:click={textRightAlignFunction}  class="bg-gray-800 mx-2 p-1 hover:bg-white hover:text-gray-800 hover:border-gray-800 w-8">
                      <FaAlignRight/>
                  </button>
                </div>
                  </div>
                    </li>

                        </ul>
    </div>
  </div>

