<script lang="ts">
	export let data;
</script>

<section class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">Unsere Hunde</h1>

	<div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
		{#each data.hunde as hund}
			<a href={`/hunde/${hund.name}`} class="group block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
				{#if hund.hero_image}
					<img
						src={`https://directus.tammer.cc/assets/${hund.hero_image.id}?width=600&height=400&fit=cover`}
						alt={hund.hero_image.title || hund.name}
						class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				{/if}
				<div class="p-4 bg-white">
					<h2 class="text-lg font-semibold text-gray-800 group-hover:text-blue-600">{hund.name}</h2>
				</div>
			</a>
		{/each}
	</div>
</section>
