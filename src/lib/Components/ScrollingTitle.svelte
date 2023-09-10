<div class="w-screen overflow-x-hidden">
	<div class="scroller text-[15rem] whitespace-nowrap h-fit font-extrabold tracking-tight">
		HAMMOND SOUL XPERIENCE
	</div>
</div>

<style>
	.scroller {
		display: block;
		width: 100%;
		transform: translateX(100%); /* Animation start out of the screen */

		/* Add the animation */
		animation: move 15s linear infinite /* infinite make reapeat the animation indefinitely */;
	}

	/* Create the animation */
	@keyframes move {
		to {
			transform: translateX(-230%);
		}
	}
</style>
