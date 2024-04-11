<script lang="ts">
	import dailyBugle from '$lib/images/daily-bugle.webp';
	import spiderVerse from '$lib/images/spiderverse.jpg';
	import spidermanComic from '$lib/images/spiderman-comic.jpg';
	import tobySpiderman from '$lib/images/toby-spiderman.jpg';
	import maryJane from '$lib/images/mary-jane.jpg';
</script>

<section class="grid h-fit w-full grid-cols-2 gap-4 rounded-sm bg-neutral px-4 py-3">
	<header
		class="col-span-2 flex items-center justify-between text-lg font-semibold tracking-tight text-primary"
	>
		<h1>Friends</h1>
		<h1>12</h1>
	</header>
	<section class="col-span-2 sm:col-span-1">
		<header
			class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral"
		>
			<h2 class="text-base font-semibold tracking-tight">Weekly Leaderboard</h2>
			<a class="cursor-pointer text-sm underline" href="/account/user/self/leaderboards">More</a>
		</header>
		<table class="table w-full rounded-none bg-base-100 px-2 text-left font-semibold">
			<tr>
				<th>Place</th>
				<th class="border-x-2 border-neutral">User</th>
				<th>Wins</th>
			</tr>
			<tr class="bg-yellow-600 text-gray-900">
				<td>1st</td>
				<td class="border-x-2 border-neutral">Spiderman</td>
				<td>300</td>
			</tr>
			<tr class="bg-gray-400 text-gray-900">
				<td>2nd</td>
				<td class="border-x-2 border-neutral">J. Jonah Jameson</td>
				<td>250</td>
			</tr>
			<tr class=" bg-yellow-800 text-gray-900">
				<td class="rounded-bl-sm">3rd</td>
				<td class="border-x-2 border-neutral">Aunt May</td>
				<td class="rounded-br-sm">200</td>
			</tr>
		</table>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<header
			class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral"
		>
			<h2 class="text-base font-semibold tracking-tight">Currently Playing</h2>
			<a class="cursor-pointer text-sm underline" href="/account/user/self/friends">More</a>
		</header>
		<div class="flex w-full flex-wrap gap-2 rounded-b-sm bg-base-100 p-2 sm:grow">
			<a
				class="flex h-16 w-16 items-center justify-center rounded-sm bg-rose-900"
				href="/accounts/user/uuid"
			>
				<span class="max-w-12 truncate">JJ</span>
			</a>
			<a
				class="flex h-16 w-16 items-center justify-center rounded-sm bg-rose-900"
				href="/accounts/user/uuid"
			>
				<img class="aspect-square h-full rounded-l-sm object-cover" src={maryJane} alt="PP" />
			</a>
		</div>
	</section>
</section>
<div class="grid h-fit w-full grid-cols-2 gap-4 rounded-sm bg-neutral px-4 py-3">
	<header
		class="col-span-2 flex items-center justify-between text-lg font-semibold tracking-tight text-primary"
	>
		<h2>Join</h2>
	</header>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<header
			class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral"
		>
			<h2 class="text-base font-semibold tracking-tight">Popular Groups</h2>
			<a class="cursor-pointer text-sm underline" href="/groups/explore?filter=popularity_down">
				More
			</a>
		</header>
		<div class="flex w-full gap-3 rounded-b-sm bg-base-100 p-2">
			<div class="flex h-16 w-1/2 max-w-52 items-center rounded-r-sm bg-neutral">
				<!--
				href="/groups/uuid/join"
				-->
				<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm">
					<img src={dailyBugle} alt="DB" class="aspect-square h-full rounded-l-sm object-cover" />
				</div>
				<div class="px-2">
					<h3 class="text-sm text-primary">Daily Bugle</h3>
					<div class="flex flex-wrap gap-1 text-xs text-secondary underline">
						<a href="/tags/search/?query=spiderman">#spiderman</a>
						<a href="/tags/search/?query=news">#news</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<header
			class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral"
		>
			<h2 class="text-base font-semibold tracking-tight">Popular Lobbies</h2>
			<a class="cursor-pointer text-sm underline" href="/game/join?filter=popularity_down">
				More
			</a>
		</header>
		<div class="flex w-full gap-3 rounded-b-sm bg-base-100 p-2">
			<div class="flex h-16 w-1/2 max-w-52 items-center rounded-r-sm bg-neutral">
				<!-- href="/game/join/uuid" -->
				<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm">
					<img src={spiderVerse} alt="SV" class="aspect-square h-full rounded-l-sm object-cover" />
				</div>
				<div class="px-2">
					<h3 class="text-sm text-primary">SpiderVerse</h3>
					<div class="flex flex-wrap gap-1 text-xs text-secondary underline">
						<a href="/tags/search/?query=spiderman">#spiderman</a>
						<a href="/tags/search/?query=news">#multiverse</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<header
			class="flex w-full items-center justify-between rounded-t-sm bg-primary p-2 text-neutral"
		>
			<h2 class="text-base font-semibold tracking-tight">Popular Topics</h2>
			<a class="cursor-pointer text-sm underline" href="/topic/create?filter=popularity_down">
				More
			</a>
		</header>
		<div class="flex w-full gap-3 rounded-b-sm bg-base-100 p-2">
			<div class="flex h-16 w-1/2 max-w-52 items-center rounded-r-sm bg-neutral">
				<!-- href="/game/join/uuid" -->
				<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm">
					<img
						class="aspect-square h-full rounded-l-sm object-cover"
						src={spidermanComic}
						alt="SC"
					/>
				</div>
				<div class="w-32 px-2">
					<h3 class="truncate text-sm text-primary">Spiderman Comics</h3>
					<div class="flex flex-wrap gap-1 text-xs text-secondary underline">
						<a href="/tags/search/?query=spiderman">#spiderman</a>
						<a href="/tags/search/?query=retro">#retro</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<section class="flex h-fit w-full items-center gap-4 rounded-sm bg-neutral px-4 py-3">
	<a
		class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border-2 border-yellow-400 text-yellow-400"
		href="/accounts/user/uuid"
	>
		<img class="aspect-square h-full rounded-l-sm object-cover" src={tobySpiderman} alt="PP" />
		<i class="fa-solid fa-crown fa-lg absolute -right-3 top-0" />
	</a>
	<div>
		<h2 class="text-base font-semibold tracking-tight text-yellow-400">Play like a pro!</h2>
		<p class="text-sm">
			Show your friends who's boss and earn <strong class="font-semibold text-primary"
				>double daily rewards</strong
			>
			plus so much more! Don't just play trivia, master it! Upgrade to
			<strong class="font-semibold text-yellow-400">Premium</strong> today!
		</p>
	</div>
</section>
<div>
	Topics
	<section>Recommendeds</section>
	<section>Favorited</section>
	<section>Recent</section>
</div>
<section>Display Case</section>
