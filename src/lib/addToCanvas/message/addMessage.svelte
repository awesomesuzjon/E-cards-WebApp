<script>
	import MessagePopup from '../message/messagePopup.svelte';
	import MessageTabs from '../message/messageTabs.svelte';
</script>

<div>
	<h1 class="font-bold dark:text-gray-100  truncate text-black text-2xl">Messages</h1>
	<h2 class="font-bold dark:text-gray-100  mt-4  truncate text-gray text-xl">Select Message</h2>

	<!-- The button to open modal -->
	<label
		for="my-modal-4"
		class="btn modal-button hover:text-gray-800 hover:no-underline hover:border-gray-800 hover:bg-white  btn-gray-50 center  text-sm p-2"
		>Show Messages</label
	>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal-4" class="modal-toggle" />
	<label for="my-modal-4" class="modal cursor-pointer">
		<label class="modal-box relative" for="">
			Helllo There

			<MessageTabs />
		</label>
	</label>
</div>

<button>
	<MessagePopup />
</button>
