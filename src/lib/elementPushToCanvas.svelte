<script>
	import { pushTextToCanvasFunc } from '../utils/pushTextToCanvas';

    </script>

    <div class="flex flex-col items-start justify-center  ">
        <h1 class="text-sm font-bold  truncate  ">Enter text here:</h1>
        <input type="text" id="addNew" name="addNewList" class="text-black" />

        <label
            for=""
            class=" hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn  btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex"
        >
            <btn class="text-sm w-26 h-auto  p-1 " on:click={pushTextToCanvasFunc}
                >Add text to canvas</btn
            >
        </label>

        <label
            for="my-drawer-4"
            class="drawer-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white btn  btn-gray-50 center w-3/6 mt-2 text-sm p-1 items-center justify-left flex"
        >
            <btn class="text-sm w-26 h-auto  p-1 ">Open Editbar</btn>
        </label>
    </div>
