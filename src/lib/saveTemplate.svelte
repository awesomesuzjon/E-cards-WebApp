<!-- The button to open modal -->
<label for="my-modal" class="btn modal-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white  btn-gray-50 center  text-sm p-2">Save</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle">
<div class="modal">
  <div class="modal-box">
    

    
    <div class="flex justify-start   mt-5 text-sm">
      <h1>Add Title </h1>
      <span class="mx-10">:</span>
      <input type="text" class="border-b-2  hover:bg-gray-200  hover:no-underline" />
      
    </div> 
    
    
    <div class="flex justify-start   mt-5 text-sm">
      <h1>Add Description </h1>
      <span class="mx-5">:</span>
      <textarea class="border-2  hover:bg-gray-200  hover:no-underline" />
      
    </div>
    
        
    <div class="flex justify-start   mt-5 text-sm">
      <h1>Enter Tags </h1>
      <span class="mx-10">:</span>
      <input type="text" class="border-b-2  hover:bg-gray-200  hover:no-underline" />
      
    </div>

    <div class="flex justify-start   mt-5 text-sm">
      <h1>Add Category </h1>
      <span class="mx-10">:</span>
      <input type="text" class="border-b-2  hover:bg-gray-200  hover:no-underline" />
      
    </div>
    
    <div class="flex justify-start  mt-5 text-sm">
      <h1>Priority </h1>
      <span class="mx-10">:</span>
        <input type="number" id="points" name="points" min="1" step="1" class="bg-gray-300  hover:bg-gray-200  hover:no-underline">
    </div>
    
    <div class="flex  mt-8   justify-center self-center items-center">
    
    <button  class="mr-10 hover:text-gray-800 w-1/6 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2  text-sm p-1">Submit</button>    
    <button  class=" hover:text-gray-800 w-1/6 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2  text-sm p-1">Discard</button>    
    
    </div>



    
    <div class="modal-action">
      <label for="my-modal" class=" hover:text-gray-800 w-1/6 hover:no-underline hover:border-gray-800 hover:bg-white btn btn-gray-50 flex items-center self-center mt-2  text-sm p-1">Close</label>
    </div>
  </div>
</div>