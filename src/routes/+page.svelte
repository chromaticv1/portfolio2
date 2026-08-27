<script lang="ts">
	import { base } from '$app/paths';
	import { portfolio } from '$lib/data/portfolio';
	import { ArrowUpRight } from 'lucide-svelte';

	let copiedEmail = $state(false);

	function copyEmail() {
		navigator.clipboard.writeText(portfolio.email);
		copiedEmail = true;
		setTimeout(() => {
			copiedEmail = false;
		}, 2000);
	}

	function resolveUrl(url: string): string {
		if (url.startsWith('/')) {
			return `${base}${url}`;
		}
		return url;
	}
</script>

<div class="min-h-screen bg-[#08090d] text-[#c9cdd4] antialiased selection:bg-white/[0.15] selection:text-white gpu-accelerated">
	<!-- Hardware-accelerated ambient top gradient glow -->
	<div class="pointer-events-none fixed inset-0 flex justify-center overflow-hidden gpu-layer">
		<div class="h-[350px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-500/[0.04] via-emerald-500/[0.02] to-transparent blur-3xl gpu-layer"></div>
	</div>

	<!-- Main Content Container: Centered, filling up to 66% width with GPU composited layers -->
	<main class="relative z-10 mx-auto w-full max-w-[760px] px-6 sm:px-10 py-16 sm:py-24 space-y-16 gpu-accelerated">

		<!-- Header / Title -->
		<header class="space-y-4 pb-10 border-b border-white/[0.08] gpu-layer">
			<div class="space-y-1">
				<h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
					{portfolio.name}
				</h1>
				<p class="font-mono text-xs sm:text-sm text-slate-400">
					{portfolio.location}
				</p>
			</div>

			<!-- Contact & Social Links -->
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 pt-1">
				<a
					href="tel:{portfolio.phone.replace(/\s+/g, '')}"
					class="hover:text-white transition-colors"
				>
					{portfolio.phone}
				</a>

				<span class="text-slate-600">/</span>

				<button
					type="button"
					onclick={copyEmail}
					class="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
					title="Copy email to clipboard"
				>
					<span>{portfolio.email}</span>
					{#if copiedEmail}
						<span class="text-emerald-400 font-sans text-[11px]">(copied)</span>
					{/if}
				</button>

				{#each portfolio.links as link}
					<span class="text-slate-600">/</span>
					<a
						href={resolveUrl(link.url)}
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-0.5"
					>
						<span>{link.label}</span>
						<ArrowUpRight class="h-3 w-3 opacity-60" />
					</a>
				{/each}
			</div>
		</header>

		<!-- About Me -->
		<section class="space-y-4 gpu-layer">
			<h2 class="font-serif text-xs font-mono tracking-widest uppercase text-slate-500">
				About Me
			</h2>
			<p class="font-serif text-base sm:text-lg text-slate-200 font-light leading-relaxed">
				{portfolio.about}
			</p>
		</section>

		<!-- Education -->
		<section class="space-y-6 pt-4 gpu-layer">
			<h2 class="font-serif text-xs font-mono tracking-widest uppercase text-slate-500">
				Education
			</h2>

			<div class="space-y-4">
				{#each portfolio.education as edu}
					<div class="space-y-1">
						<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
							<h3 class="font-serif text-lg text-white font-medium">
								{edu.degree}
							</h3>
							<span class="font-mono text-xs text-slate-500">
								{edu.period}
							</span>
						</div>

						<div class="flex flex-wrap items-center gap-2 text-sm text-slate-400">
							<span>{edu.institution}</span>
							<span class="text-slate-600">•</span>
							<span class="font-mono text-xs text-emerald-400/90">{edu.cgpa}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Projects & Experience -->
		<section class="space-y-8 pt-4 gpu-layer">
			<h2 class="font-serif text-xs font-mono tracking-widest uppercase text-slate-500">
				Projects & Experience
			</h2>

			<div class="space-y-8">
				{#each portfolio.projects as proj}
					<div class="space-y-2.5">
						<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
							<div class="flex items-baseline gap-2">
								<h3 class="font-serif text-lg text-white font-medium">
									{proj.title}
								</h3>
								<span class="text-slate-500 text-sm">— {proj.role}</span>
							</div>

							<span class="font-mono text-xs text-slate-500">
								{proj.period}
							</span>
						</div>

						<!-- Bullets -->
						<ul class="space-y-1.5 text-sm text-slate-300 font-light leading-relaxed pl-4 list-disc marker:text-slate-600">
							{#each proj.bullets as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>

						<!-- Action Link -->
						{#if proj.link}
							<div class="pt-1">
								<a
									href={proj.link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 font-mono text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
								>
									<span>{proj.link.label}</span>
									<ArrowUpRight class="h-3 w-3 opacity-70" />
								</a>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Skills -->
		<section class="space-y-6 pt-4 gpu-layer">
			<h2 class="font-serif text-xs font-mono tracking-widest uppercase text-slate-500">
				Skills
			</h2>

			<div class="space-y-4 text-sm">
				{#each portfolio.skills as skill}
					<div class="space-y-1">
						<h3 class="font-medium text-slate-200 font-serif">
							{skill.category}
						</h3>
						<ul class="space-y-1 text-slate-400 font-light pl-4 list-disc marker:text-slate-600">
							{#each skill.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<!-- References -->
		<section class="space-y-6 pt-4 gpu-layer">
			<h2 class="font-serif text-xs font-mono tracking-widest uppercase text-slate-500">
				References
			</h2>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
				{#each portfolio.references as ref}
					<div class="space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
						<h3 class="font-serif text-sm font-medium text-white">
							{ref.name}
						</h3>
						<div class="text-slate-400">
							{ref.title}{#if ref.department}, {ref.department}{/if}
						</div>
						<div class="text-slate-400">
							{ref.institution}
						</div>
						<div class="font-mono text-[11px] text-slate-500">
							{ref.location}
						</div>
						<div class="pt-2 font-mono text-[11px] space-y-0.5 text-slate-400 border-t border-white/[0.04]">
							<div>
								<a href="tel:{ref.phone.replace(/\s+/g, '')}" class="hover:text-white transition-colors">
									{ref.phone}
								</a>
							</div>
							{#each ref.emails as email}
								<div>
									<a href="mailto:{email}" class="hover:text-indigo-300 transition-colors">
										{email}
									</a>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Minimal Footer -->
		<footer class="pt-12 pb-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2 gpu-layer">
			<div>
				© {new Date().getFullYear()} {portfolio.name}
			</div>
			<div class="flex items-center gap-3">
				<a href="mailto:{portfolio.email}" class="hover:text-slate-300 transition-colors">email</a>
				<span>·</span>
				<a href="{base}/resume.pdf" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors">resume.pdf</a>
			</div>
		</footer>

	</main>
</div>
