<script lang="ts">
	export let data;
</script>

<nav class="nav">
	<a href="/">Start</a>
	{#each data.pages as page}
		<a href={`/${page.slug}`}>{page.title}</a>
	{/each}
	<a href="/hunde">Unsere Hunde</a>
</nav>

<main>
	<slot />
</main>

<style>
	.nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: #f5f5f5;
	}
	a {
		text-decoration: none;
		color: #333;
		font-weight: 500;
	}
	a:hover {
		color: #0077cc;
	}
</style>
