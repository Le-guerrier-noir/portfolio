<template>
  <section class="section">
    <div class="eyebrow animate">{{ t('projects.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('projects.title') }}</h2>
    <div class="projects-grid">
      <div class="project-card animate" v-for="(project, index) in projects" :key="project.id">
        <div class="card-img">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="card-body">
          <div class="card-num">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="card-title">{{ project.title }}</div>
          <p class="card-desc">{{ project.description[locale] }}</p>
          <div class="card-tags">
            <span class="card-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
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
  gap: 2rem;
}
.project-card {
  border: 1px solid var(--border);
  transition: border-color 0.25s;
  overflow: hidden;
}
.project-card:hover { border-color: var(--black); }
.card-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--surf);
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.project-card:hover .card-img img { transform: scale(1.04); }
.card-body { padding: 1.75rem; }
.card-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem; color: var(--border);
  line-height: 1; margin-bottom: 0.75rem;
  user-select: none;
}
.card-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--black); margin-bottom: 0.6rem; }
.card-desc  { font-size: 0.8rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.25rem; }
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