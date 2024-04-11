<script lang="ts">
	import { parseForTagQuery } from '$lib/utils';

	export let tags: string[];
</script>

<div class="flex flex-wrap gap-x-1 text-xs text-secondary underline">
	{#each tags as tag}
		<a href={`/tags/search/?query=${parseForTagQuery(tag)}`}>{tag}</a>
	{/each}
</div>
