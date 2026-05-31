<template>
  <section class="section">
    <div class="eyebrow animate">{{ t('legal.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('legal.title') }}</h2>

    <div class="legal-content animate">

      <div class="legal-block">
        <h3>{{ t('legal.editor.title') }}</h3>
        <p>Florian Delhaye</p>
        <p>Lederzeele, France</p>
        <p>
          <a href="mailto:florian.delhaye.pro@gmail.com">
            florian.delhaye.pro@gmail.com
          </a>
        </p>
      </div>

      <div class="legal-block">
        <h3>{{ t('legal.host.title') }}</h3>
        <p>Vercel Inc.</p>
        <p>340 Pine Street, Suite 701</p>
        <p>San Francisco, CA 94104, USA</p>
        <p>
          <a href="https://vercel.com" target="_blank">vercel.com</a>
        </p>
      </div>

      <div class="legal-block">
        <h3>{{ t('legal.data.title') }}</h3>
        <p>{{ t('legal.data.desc') }}</p>
      </div>

      <div class="legal-block">
        <h3>{{ t('legal.cookies.title') }}</h3>
        <p>{{ t('legal.cookies.desc') }}</p>
      </div>

      <div class="legal-block">
        <h3>{{ t('legal.ip.title') }}</h3>
        <p>{{ t('legal.ip.desc') }}</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
useScrollAnimation()
</script>

<style scoped>
.section { padding: 7rem 5rem; }
.eyebrow {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.65rem; letter-spacing: 0.28em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 0.9rem;
}
.eyebrow::before { content: ''; width: 26px; height: 1px; background: var(--muted); }
.sec-title {
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: clamp(1.8rem, 3vw, 2.8rem); color: var(--black);
  line-height: 1.1; margin-bottom: 4rem; letter-spacing: -0.02em;
}
.legal-content {
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.legal-block h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--black);
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}
.legal-block p {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.8;
}
.legal-block a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.legal-block a:hover { color: var(--black); }
@media (max-width: 768px) {
  .section { padding: 5rem 1.5rem; }
}
</style>