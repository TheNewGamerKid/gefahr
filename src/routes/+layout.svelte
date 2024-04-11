<script lang="ts">
	import { inject } from '@vercel/analytics';
	import '../app.pcss';
	import NavItem from '$lib/components/NavItem.svelte';

	inject();
</script>

<main class="flex h-screen w-screen flex-col overflow-hidden font-poppins">
	<div class="flex h-full w-full flex-wrap gap-4 overflow-y-auto p-4">
		<slot />
	</div>
	<div class="btm-nav relative">
		<NavItem href="/">
			<i class="fa-solid fa-house-chimney" />
			<span class="hidden text-xs font-semibold sm:inline-block">Home</span>
		</NavItem>
		<NavItem href="/game/join">
			<i class="fa-solid fa-gamepad" />
			<span class="hidden text-xs font-semibold sm:inline-block">Join</span>
		</NavItem>
		<NavItem href="/game/create">
			<i class="fa-solid fa-square-plus" />
			<span class="hidden text-xs font-semibold sm:inline-block">Create</span>
		</NavItem>
		<NavItem href="/accounts/friends">
			<i class="fa-solid fa-user-group" />
			<span class="hidden text-xs font-semibold sm:inline-block">Friends</span>
		</NavItem>
		<NavItem href="/accounts/user/self">
			<i class="fa-solid fa-circle-user" />
			<span class="hidden text-xs font-semibold sm:inline-block">Sign In</span>
		</NavItem>
	</div>
</main>
