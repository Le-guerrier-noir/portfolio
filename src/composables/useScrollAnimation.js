import { onMounted } from 'vue'

export function useScrollAnimation() {
  onMounted(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.animate').forEach(el => observer.observe(el))
    }, 100)
  })
}