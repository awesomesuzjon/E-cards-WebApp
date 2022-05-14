<script>
import DropDownText from './dropDownText.svelte'
import DropDownStickers from './dropDownStickers.svelte';
import DropDownBackground from './dropDownBackground.svelte';
import DropDownMessage from './dropDownMessage.svelte';
  
let  xaxis; 
  let yaxis;
  </script>
  
  
  
  <div class="drawer drawer-end w-1/3">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
  
      <div class="drawer-side w-full h-screen overflow-hidden">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="divide-y-2  bg-F6F0F0  text-sm text-white">
  
          <!-- Sidebar content here -->   
            <DropDownText/>
            <DropDownStickers/>
            <DropDownMessage/>
            <DropDownBackground/>
    </ul>
      </div>
    </div>
  
  