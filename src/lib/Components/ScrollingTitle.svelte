<div class="w-[95%] mx-auto overflow-x-hidden">
	<div class="scroller text-[15rem] whitespace-nowrap h-fit font-extrabold tracking-tight">HSX</div>
</div>

<style>
	.scroller {
		display: block;
		width: 100%;
		transform: translateX(100%); /* Animation start out of the screen */

		/* Add the animation */
		animation: move 4s linear infinite /* infinite make reapeat the animation indefinitely */;
	}

	/* Create the animation */
	@keyframes move {
		to {
			transform: translateX(-130%);
		}
	}
</style>
