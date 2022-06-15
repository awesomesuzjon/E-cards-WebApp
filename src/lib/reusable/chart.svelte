<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const ctx = document.getElementById('myChart').getContext('2d');
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [
					'Dashain Template',
					'Holi Template',
					'New Year Template',
					'Birthday Template',
					'Christmas Template'
				],
				datasets: [
					{
						label: ' DownLoad Counts	',
						data: [12, 19, 3, 5, 12, 5],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)'
						],
						borderWidth: 2
					}
				]
			},
			options: {
				scales: {
					x: {
						display: false
					}
				}
			}
		});
	});
</script>
