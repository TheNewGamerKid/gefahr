<script lang="ts">
	export let premium = false;
	export let containerClass = '';
</script>

<div
	class={`relative flex aspect-square h-full shrink-0 items-center justify-center rounded-sm ${premium ? 'border-2 border-yellow-400' : ''} ${containerClass}`}
>
	{#if premium}
		<i class="fa-solid fa-crown fa-lg absolute -right-3 top-0 text-yellow-400" />
	{/if}
	<slot />
</div>
