<script>
	export let src;
</script>

<div>
	<iframe
		class="w-full max-w-[800px] aspect-video border-base-content border-2 rounded-xl shadow-lg shadow-base-content/20"
		{src}
		frameborder="0"
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>

	<slot name="description" />
</div>
