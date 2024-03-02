<script>
	import '../app.css';
	import Footer from '../lib/Components/Footer.svelte';
</script>

<main class="my-20 selection:bg-base-content font-medium selection:text-base-100">
	<slot />
	<Footer />
</main>
