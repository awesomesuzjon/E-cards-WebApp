<script>

import Resize from "$lib/resize.svelte";
    function student(name="rock",age=20,faculty="Science"){
    console.log(`The name of the student is  ${name}  whose age is ${age}  and his/her faculty is ${faculty}`);
}   
student(`Dwayne`,`54`);


let array1 = [ 1,2,3,4];
let array2 = [ 5,6,7,8];

let mixArray = [...array1,...array2]
console.log(mixArray)
</script>


<Resize>
    <p class="resizable">E-cards Resizable div Test</p>
</Resize>

<style>
    	.resizable {
		border: 2px solid black;
		padding: 5px;
        background-color: cyan;
		font-size: 1em;	
		touch-action: none;
		box-sizing: border-box;
	}
</style>