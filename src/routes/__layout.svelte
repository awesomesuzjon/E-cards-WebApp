        <script lang="ts">
        import '../app.css'
        import Button from '$lib/button.svelte'
        import Nav from '$lib/nav.svelte'
        import Sidebar from '$lib/sidebar.svelte'
        import Table from '$lib/table.svelte';
        import firebase from 'firebase/compat/app';
        // import authStore from '../stores/authStore';
        import {onMount} from 'svelte'
        

  
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// firebase.auth().onAuthStateChanged(user=>{
//     authStore.set({
//         isLoggedIn:user !==null,
//         user,
//         firebaseControlled: true
//     });
// });



 </script>


<Nav/>
<div class="relative h-screen flex ">
    <Sidebar/>
    
    
        <div class="w-full   text-center text-bold text-4xl h-screen dark:bg-gray-800 dark:text-gray-100" id="main-container">
            <slot/>
        </div>
                    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
                </div>

                
                

                <style>
                    #main-container{
                        background: #f7f7f8 ;
                    }
                </style>

     