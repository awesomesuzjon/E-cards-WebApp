
<script>
import { click } from "$lib/colorpicker.svelte";
import { onMount } from "svelte";



// $(document).ready(function(){
  
// 	$('.test').draggable({
// 	   zIndex:3000,
// 	   appendTo:'body',
// 	   helper: "clone",
// 	   start: function (e, u) {
// 	   },
// 	   stop: function () {
		 
// 	   }}).click(function(){
// 	  var b=parseInt($(this.width));
// 	$(this).css('width',b+5)
// 	})


// 	$('#drop').droppable({
// 	  accept: ".test",
// 	  drop:function(e,u){
// 	var a=u.helper.clone();
// 		console.log(a)
// 		  $(this).append(a);
// 		$(a).attr('class','dropped').draggable();
// 	  }  })
		   
   
// 	})













// onMount(()=>{
	
// 	var test = document.querySelectorAll('.test').draggable({
// 		zIndex:3000,
// 	   appendTo:'body',
// 	   helper: "clone",
// 	   start: function (e, u) {
// 	   },
// 	   stop: function () {
		 
// 	   }})

// 	   test.addEventListener(click,()=>{
// 	  var b=parseInt((this.width));
// 	  this.style.width = b + 5
// 	   })

// 	   document.querySelectorAll('#drop').droppable({
// 		   accept:".test",
// 	  drop:function(e,u){
// 	var a=u.helper.clone();
// 		console.log(a)
// 		this.append(a)
// 		document.querySelectorAll(a).attr('class','dropped').draggable()
// 	      }  
// 		})
// 		 })



onMount(()=>{
  
  document.querySelector(".test").draggable({
	 zIndex:3000,
	 appendTo:'body',
	 helper: "clone",
	 start: function (e, u) {
		 console.log(e,u);
	 },
	 stop: function () {
	   
	 }}).click(function(){
	let b=parseInt((this.width));
  this.css('width',b+5)
  })


//   document.querySelector("#drop").droppable({
// 	accept: ".test",
// 	drop: function(e,u){
//   		let a=u.helper.cloneNode(true);
// 	  console.log(a)
// 		this.append(a);
// 	  a.attr('class','dropped').draggable();
// 	}  })
		 
})


</script>



<div class="test" style="width:50px;height:50px;background-color:red" ></div>
<div id="drop" style="width:200px;height:200px;background-color:green"     ></div>






















