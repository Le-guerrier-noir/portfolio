<template>
  <header class="header">
    <RouterLink to="/" class="brand">FD.</RouterLink>
    <nav class="nav">
      <RouterLink to="/" class="nav-link">{{ t('nav.home') }}</RouterLink>
      <RouterLink to="/projects" class="nav-link">{{ t('nav.projects') }}</RouterLink>
      <RouterLink to="/contact" class="nav-link">{{ t('nav.contact') }}</RouterLink>
    </nav>
    <div class="header-right">
      <a href="https://github.com/Le-guerrier-noir" target="_blank" class="github-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <LangSwitcher />
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LangSwitcher from './LangSwitcher.vue'
const { t } = useI18n()
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.brand {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: var(--black);
  text-decoration: none;
}
.nav { display: flex; gap: 2.5rem; }
.nav-link {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.github-link:hover { color: var(--black); }

.nav-link:hover,
.nav-link.router-link-active { color: var(--black); }
@media (max-width: 768px) {
  .header { padding: 1.2rem 1.5rem; }
  .nav { display: none; }
}
</style>
