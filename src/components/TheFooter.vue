<script setup>
import { MessageCircle, Phone } from 'lucide-vue-next'
import logoImg from '@/assets/logo.png'
</script>

<template>
  <footer class="bg-primary text-white pt-32 pb-16 border-t border-white/5">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid md:grid-cols-12 gap-16 mb-24">
        <!-- 品牌區 -->
        <div class="md:col-span-5">
          <div class="flex items-center gap-4 mb-10 opacity-80 grayscale brightness-0 invert">
            <img :src="logoImg" alt="Coolkertour Logo" class="h-10 w-auto" />
          </div>
          <p class="text-gray-400 text-sm leading-[2.2] max-w-md mb-12 font-medium">
            慢下來，看見最美的風景。我們為長輩量身打造緩節奏旅行。<br/>
            每一份行程，把時間留給風景與您的老伴。
          </p>
          <div class="flex gap-8">
            <a href="#" class="text-gray-500 hover:text-gold transition-colors"><MessageCircle class="w-5 h-5" /></a>
            <a href="#" class="text-gray-500 hover:text-gold transition-colors"><Phone class="w-5 h-5" /></a>
          </div>
        </div>
        
        <!-- 選單區 1 -->
        <div class="md:col-span-2">
          <h4 class="text-sm font-black tracking-[0.3em] text-gold mb-8 uppercase">Navigation</h4>
          <ul class="space-y-6 text-sm text-gray-500 uppercase tracking-[0.2em]">
            <li><router-link to="/" class="hover:text-white transition-colors">首頁</router-link></li>
            <li><router-link to="/tours" class="hover:text-white transition-colors">精品行程</router-link></li>
            <li><router-link to="/contact" class="hover:text-white transition-colors">專屬諮詢</router-link></li>
          </ul>
        </div>

        <!-- 選單區 2 -->
        <div class="md:col-span-2">
          <h4 class="text-sm font-black tracking-[0.3em] text-gold mb-8 uppercase">Service</h4>
          <ul class="space-y-6 text-sm text-gray-500 uppercase tracking-[0.2em]">
            <li class="hover:text-white transition-colors cursor-pointer">隱私聲明</li>
            <li class="hover:text-white transition-colors cursor-pointer">預約流程</li>
            <li class="hover:text-white transition-colors cursor-pointer">合作提案</li>
          </ul>
        </div>

        <!-- 聯絡區 -->
        <div class="md:col-span-3">
          <h4 class="text-sm font-black tracking-[0.4em] text-gold mb-8 uppercase">Contact</h4>
          <ul class="space-y-6 text-sm text-gray-500 tracking-[0.1em]">
            <li>T / 02-1234-5678</li>
            <li>E / service@coolkertour.com</li>
            <li>A / 台北市中山區精緻路 88 號</li>
          </ul>
        </div>
      </div>
      
      <!-- 版權資訊 -->
      <div class="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p class="text-sm text-gray-600 uppercase tracking-[0.3em]">
          © 2026 COOLKERTOUR . ALL RIGHTS RESERVED.
        </p>
        <p class="text-sm text-gray-600 uppercase tracking-[0.3em] font-serif italic text-gold">
          Elegance in Every Detail.
        </p>
      </div>
    </div>
  </footer>
</template>
