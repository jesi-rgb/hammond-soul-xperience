<script>
	import '../app.postcss';
	import Footer from '../lib/Components/Footer.svelte';
</script>

<main class="my-20 selection:bg-base-content selection:text-base-100">
	<slot />
	<Footer />
</main>
