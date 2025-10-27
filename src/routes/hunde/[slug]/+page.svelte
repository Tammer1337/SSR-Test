<script lang="ts">
	export let data;
</script>

<article class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-6">{data.hund.name}</h1>

	{#if data.hund.hero_image}
		<img
			src={`https://directus.tammer.cc/assets/${data.hund.hero_image.id}?width=800&fit=cover`}
			alt={data.hund.hero_image.description ?? data.hund.name}
			class="w-full max-h-[500px] object-cover rounded-xl mb-6 shadow"
		/>
	{/if}

	<div class="prose max-w-none mb-8">{@html data.hund.beschreibung}</div>

	{#if data.hund.additional_files?.length}
		<div class="grid sm:grid-cols-3 grid-cols-2 gap-4">
			{#each data.hund.additional_files as fileRelation}
				{#if fileRelation.directus_files_id}
					<img
						src={`https://directus.tammer.cc/assets/${fileRelation.directus_files_id.id}?width=600&height=400&fit=cover`}
						alt={fileRelation.directus_files_id.description ?? "Zusatzbild"}
						class="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
					/>
				{/if}
			{/each}
		</div>
	{/if}
</article>
