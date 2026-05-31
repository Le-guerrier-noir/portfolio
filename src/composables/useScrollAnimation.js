import { onMounted, nextTick } from 'vue'

export function useScrollAnimation() {
  onMounted(async () => {
    await nextTick()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
    })

    document.querySelectorAll('.animate').forEach(el => observer.observe(el))
  })
}