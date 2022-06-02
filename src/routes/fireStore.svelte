<script>
import {db} from '../lib/firebase/firebaselogin.svelte'
var arrList = [];
db.collection('Ecards').orderBy("priority","asc").onSnapshot(snapData =>{
    arrList =snapData.docs
});
</script>



{#each arrList as itemList }
   <h1> {itemList.data().Title} </h1>
{/each}
