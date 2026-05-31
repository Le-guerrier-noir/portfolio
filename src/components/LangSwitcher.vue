<template>
  <button class="lang-btn" @click="toggle">
    {{ locale === 'fr' ? 'EN' : 'FR' }}
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
function toggle() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('lang', locale.value)
}
</script>

<style scoped>
.lang-btn {
  background: transparent;
  border: 1px solid var(--border-dark);
  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.35rem 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}
.lang-btn:hover {
  background: var(--black);
  color: white;
}
</style>
