import { browser } from '$app/environment';

export type Theme = 'system' | 'light' | 'dark';

class ThemeState {
	current = $state<Theme>('system');
	resolved = $state<'light' | 'dark'>('dark');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('theme') as Theme | null;
			if (saved === 'light' || saved === 'dark' || saved === 'system') {
				this.current = saved;
			} else {
				this.current = 'system';
			}
			this.apply();

			// Listen for OS system theme changes
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			mediaQuery.addEventListener('change', () => {
				if (this.current === 'system') {
					this.apply();
				}
			});
		}
	}

	setTheme(theme: Theme) {
		this.current = theme;
		if (browser) {
			localStorage.setItem('theme', theme);
			this.apply();
		}
	}

	apply() {
		if (!browser) return;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const isDark = this.current === 'dark' || (this.current === 'system' && prefersDark);
		this.resolved = isDark ? 'dark' : 'light';

		const root = document.documentElement;
		if (isDark) {
			root.classList.add('dark');
			root.classList.remove('light');
		} else {
			root.classList.remove('dark');
			root.classList.add('light');
		}

		// Update theme-color meta tag if present
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		if (metaThemeColor) {
			metaThemeColor.setAttribute('content', isDark ? '#08090d' : '#f8f9fb');
		}

		// Update color-scheme meta tag if present
		const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
		if (metaColorScheme) {
			metaColorScheme.setAttribute('content', isDark ? 'dark' : 'light');
		}
	}
}

export const themeState = new ThemeState();
