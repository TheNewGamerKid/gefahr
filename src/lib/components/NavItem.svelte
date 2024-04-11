<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	export let href: string;

	let isActive = false;

	afterNavigate(() => (isActive = href === location.pathname));
</script>

<a
	class={`${isActive ? 'active' : ''} bg-neutral text-primary transition hover:bg-primary hover:text-base-100`}
	{href}
>
	<slot />
</a>
