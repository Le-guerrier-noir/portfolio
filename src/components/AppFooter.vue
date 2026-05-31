<template>
  <footer class="footer">
    <p>© 2025 Florian Delhaye</p>
    <div class="footer-right">
      <RouterLink to="/legal" class="legal-link">{{ t('footer.legal') }}</RouterLink>
    </div>
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
.footer-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.legal-link {
  font-size: 0.72rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.legal-link:hover { color: var(--black); }
@media (max-width: 768px) {
  .footer { padding: 1.5rem; flex-direction: column; gap: 0.75rem; text-align: center; }
  .footer-right { flex-direction: column; gap: 0.5rem; }
}
</style>