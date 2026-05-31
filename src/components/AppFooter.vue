<template>
  <footer class="footer">
    <p>© 2025 Florian Delhaye</p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  padding: 2rem 5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer p { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.05em; }
@media (max-width: 768px) {
  .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; }
}
</style>
