<script lang="ts">
	import { Sun, Moon, Monitor } from 'lucide-svelte';
	import { themeState, type Theme } from '$lib/theme.svelte';

	const options: { value: Theme; label: string; title: string; icon: typeof Sun }[] = [
		{ value: 'light', label: 'Light', title: 'Light mode', icon: Sun },
		{ value: 'system', label: 'System', title: 'System default', icon: Monitor },
		{ value: 'dark', label: 'Dark', title: 'Dark mode', icon: Moon }
	];

	function handleKeydown(event: KeyboardEvent, index: number) {
		let newIndex = -1;
		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			event.preventDefault();
			newIndex = (index + 1) % options.length;
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			event.preventDefault();
			newIndex = (index - 1 + options.length) % options.length;
		}

		if (newIndex !== -1) {
			const targetTheme = options[newIndex].value;
			themeState.setTheme(targetTheme);
			const btn = document.getElementById(`theme-btn-${targetTheme}`);
			btn?.focus();
		}
	}
</script>

<div
	role="radiogroup"
	aria-label="Theme selection"
	class="fixed top-4 right-4 sm:top-6 sm:right-8 z-50 flex items-center p-1 rounded-full border bg-white/80 dark:bg-[#11131a]/80 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-xs transition-colors duration-200 gpu-layer"
>
	{#each options as option, i}
		{@const IconComponent = option.icon}
		{@const isActive = themeState.current === option.value}
		<button
			id="theme-btn-{option.value}"
			type="button"
			role="radio"
			aria-checked={isActive}
			tabindex={isActive ? 0 : -1}
			title={option.title}
			aria-label={option.title}
			onclick={() => themeState.setTheme(option.value)}
			onkeydown={(e) => handleKeydown(e, i)}
			class="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500/50 {isActive
				? 'bg-white dark:bg-[#1e222d] text-slate-900 dark:text-white shadow-xs border border-slate-200/60 dark:border-white/10 font-medium'
				: 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 border border-transparent'}"
		>
			<IconComponent
				class="h-3.5 w-3.5 transition-transform duration-150 {isActive
					? option.value === 'light'
						? 'text-amber-500'
						: option.value === 'dark'
							? 'text-indigo-400'
							: 'text-indigo-500 dark:text-indigo-400'
					: 'opacity-70'}"
			/>
			<span class="hidden sm:inline text-[11px] capitalize">{option.label}</span>
		</button>
	{/each}
</div>
