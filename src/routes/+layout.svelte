<script lang="ts">
	import './layout.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<ThemeToggle />
{@render children()}
