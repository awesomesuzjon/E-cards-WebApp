<script>
    import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
    import { onMount } from "svelte";
    import FaRegCircle from 'svelte-icons/fa/FaRegCircle.svelte'
import Editsidebar from './editsidebar.svelte';
import Draggable from './Draggable.svelte';



function positionfunc(){
  let xaxis;
      let yaxis;
            let el = document.getElementById('box')
      let elCoordinates = el.getBoundingClientRect();
      xaxis = elCoordinates.x;
         yaxis = elCoordinates.y;
         alert(yaxis)
         console.log(xaxis)
    }


	// let files;
	let firstName = [];
	$: fullName = `${firstName}`; 

    

//upload a new theme template from the local device
	let files = []
  $: file = files[0]

























</script>

<div class="flex justify-between items-center">

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
   
    <div class="drawer-side w-6/6 h-screen overflow-hidden  ">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class=" divide-y-2 overflow-y-auto  md:w-80 bg-F6F0F0  text-sm text-white">
   
        <li  class="p-4">
            <div class="flex flex-col items-start justify-center mt-2">
                <h1 class="text-sm font-bold  truncate mb-2   " draggable="true">Select a theme template</h1>
                
                <input type="file" bind:files  class="text-sm "  accept="image/*" multiple>
          
            </div>
                
                
        </li>
        <li class="p-4">
            <div class="flex flex-col items-start justify-center  ">
                <h1 class="text-sm font-bold  truncate   " draggable="true">Enter text here:</h1>
                <input type="text" bind:value={firstName} class="border-2 text-black border-gray-500 w-3/6 h-8 mt-2 text-sm font-bold dark:text-gray-800">
                    <label for="my-drawer-4" class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn drawer-button btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex">
                        <h6 class="text-sm w-26 h-auto p-1">Add</h6>

              </label>




                </div>
        </li>
        <li class="p-4"> 
            <div class="flex flex-col items-start justify-center  ">
            <h1 class="text-sm font-bold  truncate   " draggable="true">Choose Stickers:</h1>
                


                        <!-- dropdown for Emoji Section on Choose sidebar -->
           
                <div class="dropdown inline-block relative mt-4">
                  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Holi Stickers</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                  <ul class="dropdown-menu  hidden  text-gray-700 pt-1" >
                      <div class="flex">
                      <li class="w-4 h-4 m-2 " draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                    </div>
                    <div class="flex">
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      </div>
                      <div class="flex">
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                        <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                    </div>
                    
                </ul>
            </div>
            
            <div class="dropdown inline-block relative mt-4">
                <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dashain Stickers</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu  hidden  text-gray-700 pt-1" >
                    <div class="flex">
                    <li class="w-4 h-4 m-2 " draggable="true"><FaRegCircle/></li>
                    <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                    <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                    <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                  </div>
                  <div class="flex">
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                    </div>
                    <div class="flex">
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                      <li class="w-4 h-4 m-2" draggable="true"><FaRegCircle/></li>
                  </div>
                    
                      </ul>
                  </div>
              
              </div>
              
            </li >
            <li class="p-4"> 
                <div class="flex flex-col items-start justify-center  ">
                <h1 class="text-sm font-bold  truncate   " draggable="true">Choose Messages:</h1>
                    
    
    
                            <!-- dropdown for Emoji Section on Choose sidebar -->
               
                    <div class="dropdown inline-block relative mt-4">
                        <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span class="mr-1">Holi Messages</span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                          </button>
                      <ul class="dropdown-menu  hidden  text-gray-700 pt-1" >
                          <div class="flex">
                        </div>
                        <div class="flex">
                          </div>
                          <div class="flex-col divide-y-2">
                            <li class="text-white center bg-gray-600 p-2 " draggable="true">Message1</li>
                            <li class="text-white center bg-gray-600 p-2" draggable="true">Message2</li>
                            <li class="text-white center bg-gray-600 p-2" draggable="true">Message3</li>
                        </div>
                    </ul>
                </div>
                
                <div class="dropdown inline-block relative mt-4">
                    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">Dashain Stickers</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                    <ul class="dropdown-menu  hidden  text-gray-700 pt-1" >
                        <div class="flex">
                      </div>
                      <div class="flex">
                        </div>
                        <div class="flex-col divide-y-2">
                          <li class="text-white center bg-gray-600 p-2 " draggable="true">Message1</li>
                          <li class="text-white center bg-gray-600 p-2" draggable="true">Message2</li>
                          <li class="text-white center bg-gray-600 p-2" draggable="true">Message3</li>
                      </div>
                  </ul>
              </div>
               
                  
                </li >
             
        </ul>      
    </div>
</div>
<!-- <button class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 center mt-2 w-3/6 text-sm p-1">Add</button>     -->

<!-- canvas div  -->
<div class="flex w-screen   items-center justify-center h-full">
    <div id="text" class="   text-black dark:text-white cursor-move w-4/6  h-80 self-center  border-8 bg-gray-100  overflow-hidden " 
    >
    
    <!--   -->
    
    

  
 
<div class=" flex items-center justify-center  content-center " >
     
     {#each files as file}
    <!--<section class="dark:text-gray-800 static text-white cursor-move mt-4  border-8 flex items-center justify-items-center bg-gray-100 w-3/6 h-80" id="container"  
    > -->
    <div class="relative" >

    <Draggable>
        <span id="box">
        <h1 class=" absolute apply-font text-white"  id="colortext" >{fullName}</h1>
        </span>
    </Draggable>
        <img src={URL.createObjectURL(file)} alt="Template Loading..." class="w-auto h-auto "  >
    </div>

    <!-- </section> -->
    {/each}
    </div>
</div>
</div>

<Editsidebar/>
</div>


<style>
    .dropdown:hover .dropdown-menu {
  display: block;
}

  </style>
