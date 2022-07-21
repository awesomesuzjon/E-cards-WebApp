<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import { page } from '$app/stores';
	$: path = $page.url.pathname.slice(1);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-white border-b border-gray-200 flex dark:bg-gray-500" aria-label="Breadcrumb">
	<ol role="list" class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-4 lg:px-6">
		<li class="flex">
			<div class="flex items-center">
				<a href="/dashboard" class="text-black hover:text-red-500  w-5 h-5 ">
					<!-- Heroicon name: solid/home -->
					<span class="dark:text-white dark:hover:text-black">
						<FaHome />
					</span>
					<span class="sr-only" />
				</a>
			</div>
		</li>
		{#if $page.url.pathname !== '/'}
			<!-- content here -->
			<li class="flex">
				<div class="flex items-center">
					<svg
						class="flex-shrink-0 w-6 h-full text-gray-200"
						viewBox="0 0 24 44"
						preserveAspectRatio="none"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
					</svg>
					<a
						href="#"
						class="ml-4 font-medium  text-md dark:text-white hover:text-gray-500 dark:hover:text-black text-black"
						>{path}</a
					>
				</div>
			</li>
			<li class="flex">
				<div class="flex items-center">
					<svg
						class="flex-shrink-0 w-6 h-full text-gray-200"
						viewBox="0 0 24 44"
						preserveAspectRatio="none"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
					</svg>
				</div>
			</li>
		{:else}
			<li class="flex">
				<div class="flex items-center">
					<svg
						class="flex-shrink-0 w-6 h-full text-gray-200"
						viewBox="0 0 24 44"
						preserveAspectRatio="none"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
					</svg>
				</div>
			</li>
		{/if}
	</ol>
</nav>
