<script setup>
import { Menu, User } from 'lucide-vue-next'
import logoImg from '@/assets/logo.png'
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-primary/20">
    <nav class="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
      <!-- Logo 區塊 -->
      <router-link to="/" class="group flex items-center">
        <img 
          :src="logoImg" 
          alt="Coolkertour Logo" 
          class="h-12 md:h-16 w-auto object-contain transition-all duration-700 group-hover:scale-105 brightness-0 invert" 
        />
        <span class="ml-4 text-sm text-gold font-bold uppercase tracking-[0.4em] hidden md:block opacity-60">Silver Collection</span>
      </router-link>

      <!-- 導覽選單 -->
      <ul class="hidden lg:flex items-center space-x-12 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
        <li><router-link to="/" class="hover:text-gold transition-all duration-500">首頁</router-link></li>
        <li><router-link to="/tours" class="hover:text-gold transition-all duration-500">精品行程</router-link></li>
        <li><router-link to="/contact" class="hover:text-gold transition-all duration-500">專屬諮詢</router-link></li>
      </ul>

      <!-- 會員與動作 -->
      <div class="flex items-center gap-6">
        <router-link 
          to="/contact" 
          active-class="header-btn-active"
          class="px-6 md:px-8 py-3 bg-gold text-primary text-sm font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500"
        >
          預約席位
        </router-link>
        <button class="lg:hidden text-white">
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-gold;
}
</style>
