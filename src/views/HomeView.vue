<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-eyebrow animate">{{ t('hero.eyebrow') }}</div>
      <div class="hero-name animate">
        <span class="solid">FLORIAN</span>
        <span class="outline">DELHAYE</span>
      </div>
      <p class="hero-sub animate">{{ t('hero.sub') }}</p>
      <div class="hero-btns animate">
        <RouterLink to="/projects" class="btn-black">{{ t('hero.cta1') }}</RouterLink>
        <RouterLink to="/contact" class="btn-outline">{{ t('hero.cta2') }}</RouterLink>
      </div>
    </div>
    <div class="deco">
      <div class="ring r1"></div>
      <div class="ring r2"></div>
      <div class="ring r3"></div>
    </div>
    <div class="dot-grid">
      <span v-for="n in 100" :key="n"></span>
    </div>
    <div class="scroll-hint animate">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <section class="section section-surf">
    <div class="eyebrow animate">{{ t('skills.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('skills.title') }}</h2>
    <div class="skills-grid">
      <div class="skill-cat animate">
        <h4>{{ t('skills.cat.lang') }}</h4>
        <div class="tags">
          <span class="tag" v-for="s in langSkills" :key="s">{{ s }}</span>
        </div>
      </div>
      <div class="skill-cat animate">
        <h4>{{ t('skills.cat.tools') }}</h4>
        <div class="tags">
          <span class="tag" v-for="s in toolSkills" :key="s">{{ s }}</span>
        </div>
      </div>
      <div class="skill-cat animate">
        <h4>{{ t('skills.cat.erp') }}</h4>
        <div class="tags">
          <span class="tag" v-for="s in erpSkills" :key="s">{{ s }}</span>
        </div>
      </div>
      <div class="skill-cat animate">
        <h4>{{ t('skills.cat.soft') }}</h4>
        <div class="tags">
          <span class="tag">{{ t('tag.co') }}</span>
          <span class="tag">{{ t('tag.cm') }}</span>
          <span class="tag">{{ t('tag.au') }}</span>
          <span class="tag">{{ t('tag.ri') }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="eyebrow animate">{{ t('parcours.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('parcours.title') }}</h2>
    <div class="parcours-grid">
      <div>
        <div class="col-label animate">{{ t('parcours.edu') }}</div>
        <div class="tl-item animate">
          <div class="tl-date">2023 — {{ t('label.now') }}</div>
          <div class="tl-role">{{ t('edu.but') }}</div>
          <div class="tl-org">IUT du Littoral Côte d'Opale — Calais</div>
          <p class="tl-desc">{{ t('edu.but_desc') }}</p>
          <div class="tl-badges">
            <span class="tl-badge">Dev web</span>
            <span class="tl-badge">BDD</span>
            <span class="tl-badge">Réseau</span>
          </div>
        </div>
        <div class="tl-item animate">
          <div class="tl-date">2022 — 2023</div>
          <div class="tl-role">{{ t('edu.bac') }}</div>
          <div class="tl-org">Lycée Blaise Pascal — Longuenesse</div>
          <ul class="tl-list">
            <li>Mathématiques</li>
            <li>Numérique et sciences informatiques</li>
            <li>Science de l'ingénieur</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="col-label animate">{{ t('parcours.exp') }}</div>
        <div class="tl-item animate">
          <div class="tl-date">2024 — {{ t('label.now') }}</div>
          <div class="tl-role">{{ t('exp.role') }}</div>
          <div class="tl-org">K4-U — Groupe Kardol · {{ t('label.apprenticeship') }}</div>
          <ul class="tl-list">
            <li>{{ t('exp.1') }}</li>
            <li>{{ t('exp.2') }}</li>
            <li>{{ t('exp.3') }}</li>
            <li>{{ t('exp.4') }}</li>
            <li>{{ t('exp.5') }}</li>
            <li>{{ t('exp.6') }}</li>
          </ul>
          <div class="tl-badges">
            <span class="tl-badge">IFS Cloud</span>
            <span class="tl-badge">Node.js</span>
            <span class="tl-badge">n8n</span>
            <span class="tl-badge">BPMN</span>
            <span class="tl-badge">Git</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
useScrollAnimation()

const langSkills = ['Python', 'JavaScript', 'Node.js', 'Vue.js', 'SQL', 'Java', 'C', 'HTML / CSS']
const toolSkills = ['Git', 'n8n', 'Postman', 'Electron', 'MkDocs', 'Teams']
const erpSkills  = ['IFS Cloud', 'API REST', 'BPMN', 'Workflows']
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 5rem 4rem;
  position: relative;
  overflow: hidden;
}
.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.75rem;
}
.hero-eyebrow::before { content: ''; width: 36px; height: 1px; background: var(--muted); }
.hero-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(5rem, 12vw, 11rem);
  line-height: 0.87;
  margin-bottom: 2.25rem;
}
.hero-name .solid  { display: block; color: var(--black); }
.hero-name .outline {
  display: block;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(0,0,0,0.15);
}
.hero-sub {
  font-size: clamp(0.875rem, 1.4vw, 1.05rem);
  color: var(--muted);
  max-width: 420px;
  line-height: 1.75;
  margin-bottom: 2.75rem;
  font-weight: 300;
}
.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-black {
  display: inline-block;
  background: var(--black);
  color: white;
  padding: 0.85rem 2rem;
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
}
.btn-black:hover { opacity: 0.8; }
.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border-dark);
  padding: 0.85rem 2rem;
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  transition: all 0.2s;
}
.btn-outline:hover { background: var(--black); color: white; }
.deco {
  position: absolute;
  right: 4rem; top: 50%;
  transform: translateY(-50%);
  width: 460px; height: 460px;
  pointer-events: none;
}
.ring {
  position: absolute;
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.r1 { width: 460px; height: 460px; border: 1px solid #e0e0e0; }
.r2 { width: 300px; height: 300px; border: 1px solid #d0d0d0; }
.r3 { width: 150px; height: 150px; border: 1px solid #c0c0c0; }
.dot-grid {
  position: absolute;
  right: 8.5rem; top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: repeat(10, 16px);
  gap: 14px;
  pointer-events: none;
  opacity: 0.12;
}
.dot-grid span { display: block; width: 2px; height: 2px; border-radius: 50%; background: var(--black); }
.scroll-hint {
  position: absolute;
  bottom: 3rem; left: 5rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-line {
  width: 44px; height: 1px;
  background: var(--muted);
  transform-origin: left;
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 0.4; }
  50% { transform: scaleX(0.4); opacity: 1; }
}
.section { padding: 7rem 5rem; }
.section-surf {
  background: var(--surf);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.9rem;
}
.eyebrow::before { content: ''; width: 26px; height: 1px; background: var(--muted); }
.sec-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  color: var(--black);
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
}
.skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem 3.5rem; }
.skill-cat h4 {
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}
.tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.tag {
  font-size: 0.78rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--border);
  color: var(--muted);
  transition: all 0.2s;
  cursor: default;
}
.tag:hover { border-color: var(--black); color: var(--black); }
.parcours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
.col-label {
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2.25rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--border);
}
.tl-item {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 2.75rem;
  border-left: 1px solid var(--border);
}
.tl-item:last-child { margin-bottom: 0; }
.tl-item::before {
  content: '';
  position: absolute;
  left: -4px; top: 4px;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--black);
  box-shadow: 0 0 0 3px var(--bg);
}
.tl-date { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.45rem; }
.tl-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; color: var(--black); margin-bottom: 0.2rem; }
.tl-org  { font-size: 0.8rem; color: var(--muted); margin-bottom: 0.85rem; }
.tl-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.7; }
.tl-list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
.tl-list li { font-size: 0.8rem; color: var(--muted); line-height: 1.65; padding-left: 0.85rem; position: relative; }
.tl-list li::before { content: '—'; position: absolute; left: 0; color: var(--border); }
.tl-badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.9rem; }
.tl-badge { font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.55rem; border: 1px solid var(--border); color: var(--muted); }
@media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .hero, .section { padding: 5rem 1.5rem; }
  .deco, .dot-grid, .scroll-hint { display: none; }
  .parcours-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>