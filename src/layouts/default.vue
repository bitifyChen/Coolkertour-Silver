<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import FloatingConsultation from '@/components/FloatingConsultation.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-serif text-white bg-primary selection:bg-gold/30">
    <!-- 頂部導航組件 -->
    <TheHeader />

    <!-- 主內容區 -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- 頁尾組件 -->
    <TheFooter />

    <!-- 全域懸浮諮詢 -->
    <FloatingConsultation />
  </div>
</template>

<style scoped>
</style>
