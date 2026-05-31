<template>
  <section class="section">
    <div class="eyebrow animate">{{ t('projects.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('projects.title') }}</h2>
    <div class="projects-grid">
      <div class="project-card animate" v-for="(project, index) in projects" :key="project.id">
        <div class="card-num">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="card-title">{{ project.title }}</div>
        <p class="card-desc">{{ project.description[locale] }}</p>
        <div class="card-tags">
          <span class="card-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import projects from '@/data/projects.json'

const { t, locale } = useI18n()
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.project-card {
  background: var(--bg);
  padding: 2.5rem 2.25rem;
  transition: background 0.25s;
}
.project-card:hover { background: var(--surf); }
.card-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4.5rem; color: var(--border);
  line-height: 1; margin-bottom: 1rem;
  user-select: none; transition: color 0.3s;
}
.project-card:hover .card-num { color: #d0d0d0; }
.card-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--black); margin-bottom: 0.7rem; }
.card-desc  { font-size: 0.8rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.75rem; }
.card-tags  { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.card-tag {
  font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.25rem 0.6rem; border: 1px solid var(--border); color: var(--muted);
}
@media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .section { padding: 5rem 1.5rem; }
  .projects-grid { grid-template-columns: 1fr; }
}
</style>