<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar slotTrail="place-content-end">
	<h2><a href="/">Nestjs-SvelteKit</a></h2>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<main>
	<slot />
</main>
