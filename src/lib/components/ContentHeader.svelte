<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<header class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral">
	<h2 class="text-base font-semibold tracking-tight">{name}</h2>
	<a class="cursor-pointer text-sm underline" {href}> More </a>
</header>
