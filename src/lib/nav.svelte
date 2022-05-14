<script>
import FaAlignJustify from "svelte-icons/fa/FaAlignJustify.svelte";
import { afterUpdate, beforeUpdate, onMount } from "svelte/internal";
import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
import IoIosNotifications from 'svelte-icons/io/IoIosNotifications.svelte'
import IoMdMailUnread from 'svelte-icons/io/IoMdMailUnread.svelte'
import IoIosPerson from 'svelte-icons/io/IoIosPerson.svelte'
import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte'
import IoIosLogOut from 'svelte-icons/io/IoIosLogOut.svelte'
import { page } from '$app/stores';


</script>



<div class="bg-customColorPink  dark:bg-gray-800 text-black justify-between flex px-8  h-14  items-center ">
        <h1 class="  font-bold dark:text-gray-100  truncate "> <a href="/" >  E-CARDS CMS</a></h1>   

        <div class="flex justify-around text-sm ">
          <p class="dark:text-gray-800">Path:{$page.url.pathname}</p>
        </div>

        <div class="flex flex-row items-center "> 

           <div class="flex justify-center">
            <div class=" xl:w-96">
              <div class="input-group relative flex  items-center w-full  rounded">
                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
           <h2 class="w-4  mx-2 dark:text-gray-100" > <FaSearch/> </h2>
                
            </div>
            </div>
          </div>
           
           <h2 class="w-5 mx-2 dark:text-gray-100"> <IoIosNotifications/> </h2>
           <h2 class="w-5  mx-2 dark:text-gray-100"> <IoMdMailUnread/> </h2>
           <div class="flex-row flex items-center p-2"> 
              <button  id="dropdownDefault" data-dropdown-toggle="dropdown"  type="button" > <img src=admin.png  class="w-8 ml-1   rounded-full " alt="Admin Image">
              </button>
                <!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li class="flex flex-row items-center ">
        <h2 class="w-5   ml-1"> <IoIosPerson/> </h2><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Profile</a>
      </li>
      <li class="flex flex-row items-center ">
        <h2 class="w-5  ml-1 "> <IoIosSettings/> </h2><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Setting</a>
      </li>
      <li class="flex flex-row items-center "  >
        <h2 class="w-5 ml-1 "> <IoIosLogOut/> </h2><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Log out</a>
      </li>
    </ul>
</div>
            </div>
        </div>
</div>
