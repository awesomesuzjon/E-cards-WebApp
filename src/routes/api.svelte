<!-- <script>
import { onMount } from "svelte";


// onMount(()=>{

    fetch("https://keyboard-service.dallas-hamrostack.com/stickers?cursorString=&limit=undefined")
    .then((response) => response.json())
    .then((items)=>{
        console.log(items.name);
    })

// })

</script>
 -->

<!-- <script>
    import axios from 'axios'


let auth = `ce15f30b-fb9b-4baf-b0f1-6ab88b3baa2f`; 
let url = `https://keyboard-service.dallas-hamrostack.com/stickers?cursorString=&limit=undefined`;
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHVVB6TzhjQ0pTZDNVRzFsU1NPRDYxNnZpbUozIiwiYnVzaW5lc3MiOlsiYWIxZjg5NzAtNjQ0Mi0xMWU4LWJlZjgtMDI0MmFjMTIwMDBlOjAiXSwiZGlzcGxheU5hbWUiOiJTdXJhaiBHYXV0YW0gIiwiYXBwSWQiOiJoYW1yb3BhdHJvIiwiaXNzIjoiYWNjb3VudC1zZXJ2aWNlIiwidmVyaWZpZWQiOmZhbHNlLCJhZG1pbiI6dHJ1ZSwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9zZ3AxLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vZXZlcmVzdGRiL251bGwvaGFtcm9wYXRyby9QRVJTT05BTC83YzQ1YzdhMC0wYmE1LTExZWMtOGM4Zi0wMjQyYWMxMjAwMjkiLCJleHAiOjE2NDkxNTA4MTMsImlhdCI6MTY0OTE0NzIxMywic3VzcGVuZGVkIjpmYWxzZX0.BY4chCGHK9Z1bBY3td999Zn2hq1-gHbzDd85kBp0CGE' 

var localStickers ={'auth' :'ce15f30b-fb9b-4baf-b0f1-6ab88b3baa2f',
                         'url' : `https://keyboard-service.dallas-hamrostack.com/stickers?cursorString=&limit=undefined`,
                         'token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHVVB6TzhjQ0pTZDNVRzFsU1NPRDYxNnZpbUozIiwiYnVzaW5lc3MiOlsiYWIxZjg5NzAtNjQ0Mi0xMWU4LWJlZjgtMDI0MmFjMTIwMDBlOjAiXSwiZGlzcGxheU5hbWUiOiJTdXJhaiBHYXV0YW0gIiwiYXBwSWQiOiJoYW1yb3BhdHJvIiwiaXNzIjoiYWNjb3VudC1zZXJ2aWNlIiwidmVyaWZpZWQiOmZhbHNlLCJhZG1pbiI6dHJ1ZSwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9zZ3AxLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vZXZlcmVzdGRiL251bGwvaGFtcm9wYXRyby9QRVJTT05BTC83YzQ1YzdhMC0wYmE1LTExZWMtOGM4Zi0wMjQyYWMxMjAwMjkiLCJleHAiOjE2NDkxNTA4MTMsImlhdCI6MTY0OTE0NzIxMywic3VzcGVuZGVkIjpmYWxzZX0.BY4chCGHK9Z1bBY3td999Zn2hq1-gHbzDd85kBp0CGE'};
    
                         localStorage.setItem('localStickers', JSON.stringify(localStickers));
                         var retrievedObject = localStorage.getItem('localStickers');
                         console.log('retrievedObject: ', JSON.parse(retrievedObject));
    

axios({
    method: 'get',
    url: url,
    headers: {
        "grpc-metadata-authorization":"Bearer "+ token,
        'grpc-metadata-app-id':'hamropatro',
        'grpc-metadata-web-api-key':auth 
    }
}).then(function (items) {
    console.log(items.data)
});
</script>  -->
