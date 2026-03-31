<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const isVisible = ref(false)
const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4">
    <!-- 返回頂部 -->
    <button 
      v-if="isVisible"
      @click="scrollToTop"
      class="w-14 h-14 bg-white text-gray-400 rounded-full flex items-center justify-center luxury-shadow hover:text-gold hover:-translate-y-1 transition-all duration-500 mt-2 border border-gray-100"
    >
      <ChevronUp class="w-6 h-6" />
    </button>
  </div>
</template>

<style scoped>
.luxury-shadow {
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.15);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
