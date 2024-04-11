<script lang="ts">
	import CardTags from './CardTags.svelte';

	export let favorited = false;
	export let href: string;
	export let name: string;
	export let tags: string[];

	const handleFavorite = (e: MouseEvent) => {
		e.preventDefault();
		favorited = !favorited;
	};
</script>

<a class="flex h-16 w-1/2 min-w-52 max-w-64 items-center rounded-r-sm bg-neutral" {href}>
	<slot />
	<div class="h-full w-[calc(100%-4rem)] p-2">
		<div class="flex justify-between gap-2">
			<h3 class="truncate text-sm text-primary">{name}</h3>
			<button
				class={`${favorited ? 'fa-solid' : 'fa-regular'} fa-star relative -top-1 text-yellow-600`}
				on:click={handleFavorite}
			/>
		</div>
		<CardTags {tags} />
	</div>
</a>
