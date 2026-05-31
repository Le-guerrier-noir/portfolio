<template>
  <section class="section">
    <div class="eyebrow animate">{{ t('contact.eyebrow') }}</div>
    <h2 class="sec-title animate">{{ t('contact.title') }}</h2>
    <div class="contact-wrap">
      <div class="contact-info animate">
        <p class="contact-desc">{{ t('contact.desc') }}</p>
        <div class="contact-rows">
          <div class="contact-row">
            <span class="row-label">Email</span>
            <a href="mailto:florian.delhaye.pro@gmail.com" class="row-val">florian.delhaye.pro@gmail.com</a>
          </div>
          <div class="contact-row">
            <span class="row-label">Tél</span>
            <a href="tel:+33670233795" class="row-val">06 70 23 37 95</a>
          </div>
          <div class="contact-row">
            <span class="row-label">LinkedIn</span>
            <a href="https://linkedin.com/in/Le-guerrier-noir" target="_blank" class="row-val">Florian Delhaye</a>
          </div>
          <div class="contact-row">
            <span class="row-label">{{ t('contact.location') }}</span>
            <span class="row-val">Lederzeele, France</span>
          </div>
        </div>
      </div>
      <form class="contact-form animate" @submit.prevent="submit">
        <div class="form-row">
          <div class="fg">
            <label>{{ t('form.name') }}</label>
            <input v-model="form.name" type="text" :placeholder="t('form.placeholder.name')" required />
          </div>
          <div class="fg">
            <label>Email</label>
            <input v-model="form.email" type="email" :placeholder="t('form.placeholder.email')" required />
          </div>
        </div>
        <div class="fg">
          <label>{{ t('form.message') }}</label>
          <textarea v-model="form.message" :placeholder="t('form.placeholder.message')" required></textarea>
        </div>
        <div class="form-submit">
          <button type="submit" class="btn-submit" :disabled="loading">
            {{ loading ? t('form.sending') : t('form.send') }}
          </button>
        </div>
        <p v-if="success" class="msg-success">{{ t('form.success') }}</p>
        <p v-if="error" class="msg-error">{{ t('form.error') }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()
useScrollAnimation()

const loading = ref(false)
const success = ref(false)
const error   = ref(false)
const form    = reactive({ name: '', email: '', message: '' })

async function submit() {
  loading.value = true
  success.value = false
  error.value   = false
  try {
    const res = await fetch('https://formspree.io/f/xbdbepdg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      success.value = true
      Object.assign(form, { name: '', email: '', message: '' })
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
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
.contact-wrap { display: grid; grid-template-columns: 1fr 1.5fr; gap: 6rem; align-items: start; }
.contact-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.8; margin-bottom: 2.5rem; }
.contact-rows { display: flex; flex-direction: column; gap: 1rem; }
.contact-row  { display: flex; align-items: baseline; gap: 1.25rem; }
.row-label { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); min-width: 52px; }
.row-val   { font-size: 0.82rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
.row-val:hover { color: var(--black); }
.form-row  { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.fg { margin-bottom: 1.75rem; }
.fg label { display: block; font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.55rem; }
.fg input, .fg textarea {
  width: 100%; background: transparent; border: none;
  border-bottom: 1px solid var(--border); color: var(--black);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 300;
  padding: 0.6rem 0; outline: none; transition: border-color 0.2s;
}
.fg input:focus, .fg textarea:focus { border-bottom-color: var(--black); }
.fg textarea { resize: none; height: 90px; }
.form-submit { display: flex; justify-content: flex-end; margin-top: 0.5rem; }
.btn-submit {
  background: var(--black); color: white; border: none;
  padding: 0.85rem 2rem; font-family: 'Syne', sans-serif;
  font-weight: 700; font-size: 0.8rem; letter-spacing: 0.06em;
  cursor: pointer; transition: opacity 0.2s;
}
.btn-submit:hover { opacity: 0.8; }
.btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }
.msg-success { margin-top: 1rem; font-size: 0.85rem; color: #2d6a4f; }
.msg-error   { margin-top: 1rem; font-size: 0.85rem; color: #c62828; }
@media (max-width: 768px) {
  .section { padding: 5rem 1.5rem; }
  .contact-wrap { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>