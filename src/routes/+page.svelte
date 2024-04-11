<script lang="ts">
	import dailyBugle from '$lib/images/daily-bugle.webp';
	import spiderVerse from '$lib/images/spiderverse.jpg';
	import spidermanComic from '$lib/images/spiderman-comic.jpg';
	import tobySpiderman from '$lib/images/toby-spiderman.jpg';
	import maryJane from '$lib/images/mary-jane.jpg';
	import ContentCard from '$lib/components/ContentCard.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ContentHeader from '$lib/components/ContentHeader.svelte';
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
			<ProfileCard containerClass="bg-rose-500 max-h-16">
				<a href="/accounts/user/uuid">
					<span class="max-w-12 truncate text-primary">JJ</span>
				</a>
			</ProfileCard>
			<a class="flex h-16 w-16 items-center justify-center rounded-sm" href="/accounts/user/uuid">
				<img class="aspect-square h-full rounded-l-sm object-cover" src={maryJane} alt="PP" />
			</a>
		</div>
	</section>
</section>
<section class="flex h-fit w-full flex-col gap-4 rounded-sm bg-neutral px-4 py-3">
	<header
		class="col-span-2 flex items-center justify-between text-lg font-semibold tracking-tight text-primary"
	>
		<h1>Display Case</h1>
	</header>
	<section class="flex flex-wrap gap-3">
		<a
			href="/account/user/self/trophies?opento=dedicated"
			class="flex w-1/5 min-w-20 max-w-32 flex-col items-center gap-2"
		>
			<div class="relative grid aspect-square w-16 place-items-center rounded-sm bg-base-100">
				<i class="fa-solid fa-trophy fa-xl text-yellow-600" />
				<div
					class="absolute right-0 top-0 flex w-5 justify-center rounded-bl-md bg-yellow-600 p-0.5 text-xs font-semibold tracking-tighter text-gray-900"
				>
					50
				</div>
			</div>
			<div class="p w-full truncate text-center text-xs font-semibold tracking-tight">
				Dedicated
			</div>
		</a>
		<a
			href="/account/user/self/trophies?opento=social_butterfly"
			class="flex w-1/5 min-w-20 max-w-32 flex-col items-center gap-2"
		>
			<div class="relative grid aspect-square w-16 place-items-center rounded-sm bg-base-100">
				<i class="fa-solid fa-trophy fa-xl text-gray-400" />
				<div
					class="absolute right-0 top-0 flex w-5 justify-center rounded-bl-md bg-gray-400 p-0.5 text-xs font-semibold tracking-tighter text-gray-900"
				>
					10
				</div>
			</div>
			<div class="p w-full truncate text-center text-xs font-semibold tracking-tight">
				Social Butterfly
			</div>
		</a>
		<a
			href="/account/user/self/trophies?opento=get_started"
			class="flex w-1/5 min-w-20 max-w-32 flex-col items-center gap-2"
		>
			<div class="relative grid aspect-square w-16 place-items-center rounded-sm bg-base-100">
				<i class="fa-solid fa-trophy fa-xl text-yellow-800" />
				<div
					class="absolute right-0 top-0 flex w-5 justify-center rounded-bl-md bg-yellow-800 p-0.5 text-xs font-semibold tracking-tighter text-gray-900"
				>
					5
				</div>
			</div>
			<div class="p w-full truncate text-center text-xs font-semibold tracking-tight">
				Get Started
			</div>
		</a>
	</section>
</section>
<section class="grid h-fit w-full grid-cols-2 gap-4 rounded-sm bg-neutral px-4 py-3">
	<header
		class="col-span-2 flex items-center justify-between text-lg font-semibold tracking-tight text-primary"
	>
		<h2>Join</h2>
	</header>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Popular Groups" href="/groups/explore?filter=['popularity_down']" />
		<ContentContainer>
			<ContentCard
				href="/groups/uuid/join"
				name="Daily Bugle"
				tags={['#news', '#spiderman', '#slander']}
			>
				<ProfileCard>
					<img src={dailyBugle} alt="DB" class="aspect-square h-full rounded-l-sm object-cover" />
				</ProfileCard>
			</ContentCard>
		</ContentContainer>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Popular Lobbies" href="/game/join?filter=['popularity_down']" />
		<ContentContainer>
			<ContentCard
				tags={['#multiverse', '#sony', '#spiderman']}
				href="/game/join/uuid"
				name="SpiderVerse"
			>
				<ProfileCard>
					<img src={spiderVerse} alt="SV" class="aspect-square h-full rounded-l-sm object-cover" />
				</ProfileCard>
			</ContentCard>
		</ContentContainer>
	</section>
</section>
<section class="flex h-fit w-full items-center gap-4 rounded-sm bg-neutral px-4 py-3">
	<ProfileCard premium containerClass="max-h-20">
		<a href="/accounts/user/uuid">
			<img class="aspect-square h-full rounded-l-sm object-cover" src={tobySpiderman} alt="PP" />
		</a>
	</ProfileCard>
	<div>
		<h2 class="text-base font-semibold tracking-tight text-yellow-400">Play like a pro!</h2>
		<p class="text-xs sm:text-sm">
			Show your friends who's boss and earn <strong
				class="font-semibold tracking-tight text-primary">double daily rewards</strong
			>
			plus so much more! Don't just play trivia, master it! Upgrade to
			<strong class="font-semibold tracking-tight text-yellow-400">Premium</strong> today!
		</p>
	</div>
</section>
<section class="grid h-fit w-full grid-cols-2 gap-4 rounded-sm bg-neutral px-4 py-3">
	<header
		class="col-span-2 flex items-center justify-between text-lg font-semibold tracking-tight text-primary"
	>
		<h2>Topics</h2>
	</header>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Recommended" href="/game/create?filter=['recommended_down']" />
		<ContentContainer>
			<ContentCard
				tags={['#retro', '#spiderman', '#sony']}
				href="/game/create/uuid"
				name="Spiderman Comics"
			>
				<ProfileCard>
					<img
						class="aspect-square h-full rounded-l-sm object-cover"
						src={spidermanComic}
						alt="SC"
					/>
				</ProfileCard>
			</ContentCard>
		</ContentContainer>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Popular" href="/topic/create?filter=['popularity_down']" />
		<ContentContainer>
			<ContentCard
				tags={['#retro', '#spiderman', '#sony']}
				href="/game/create/uuid"
				name="Spiderman Comics"
			>
				<ProfileCard>
					<img
						class="aspect-square h-full rounded-l-sm object-cover"
						src={spidermanComic}
						alt="SC"
					/>
				</ProfileCard>
			</ContentCard>
		</ContentContainer>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Favorited" href="/game/create?filter=['favorite_down']" />
		<ContentContainer>
			<span class="grid h-full w-full place-items-center text-sm text-primary">
				You haven't picked any favorite topics!
			</span>
		</ContentContainer>
	</section>
	<section class="col-span-2 flex flex-col sm:col-span-1">
		<ContentHeader name="Favorited" href="/game/create?filter=['recent_down']" />
		<ContentContainer>
			<span class="grid h-full w-full place-items-center text-sm text-primary">
				You haven't played any games yet!
			</span>
		</ContentContainer>
	</section>
</section>
