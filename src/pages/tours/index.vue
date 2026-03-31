<script setup>
import { onMounted, ref } from 'vue'
import { ArrowRight, MapPin, Calendar, HeartPulse, Activity, Filter, Search, ChevronRight } from 'lucide-vue-next'
import toursData from '../../data/tours.json'

const regions = ['全部地區', '北部地區', '中部地區', '南部地區', '東部地區', '離島地區']
const dayFilters = ['全部天數', '2天1夜', '3天2夜', '4天以上']

const activeRegion = ref('全部地區')
const activeDays = ref('全部天數')

onMounted(() => {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  reveals.forEach(el => observer.observe(el))
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', maximumFractionDigits: 0 }).format(price)
}
</script>

<template>
  <div class="bg-[#FDFBF7] min-h-screen pt-32 pb-40 font-sans">
    <div class="container mx-auto px-6">
      
      <!-- 頁首標題 -->
      <header class="mb-20 reveal">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span class="text-gold text-[12px] font-black tracking-[0.8em] mb-4 block uppercase">Curated Journeys</span>
            <h1 class="text-4xl md:text-6xl font-serif text-primary tracking-widest leading-tight">
              行程 <span class="italic text-gold font-light">典藏</span> 誌
            </h1>
          </div>
          <p class="text-secondary text-base max-w-sm leading-relaxed font-medium border-l border-gold/30 pl-6">
            為您篩選全台最動人的慢活角落。
          </p>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row gap-12">
        
        <!-- 左側側邊欄：進階篩選 -->
        <aside class="lg:w-1/5 reveal">
          <div class="sticky top-32 space-y-10">
            
            <!-- 搜尋框 -->
            <div class="relative group">
              <input type="text" placeholder="搜尋目的地..." class="w-full bg-white border border-gray-100 py-3 pl-10 pr-4 text-xs focus:border-gold outline-none transition-all luxury-shadow" />
              <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-focus-within:text-gold transition-colors" />
            </div>

            <!-- 地區篩選 -->
            <div class="space-y-6">
              <div class="flex items-center gap-3 text-primary">
                <MapPin class="w-3.5 h-3.5 text-gold" />
                <span class="text-[12px] font-black tracking-widest uppercase">地區導覽</span>
              </div>
              <ul class="space-y-2">
                <li v-for="reg in regions" :key="reg">
                  <button 
                    @click="activeRegion = reg"
                    :class="[
                      'w-full text-left py-2 px-3 text-xs tracking-widest transition-all duration-300 flex items-center justify-between group',
                      activeRegion === reg ? 'text-gold font-bold bg-white luxury-shadow' : 'text-secondary hover:text-gold'
                    ]"
                  >
                    {{ reg }}
                    <ChevronRight v-if="activeRegion === reg" class="w-3 h-3 text-gold" />
                  </button>
                </li>
              </ul>
            </div>

            <!-- 天數篩選 -->
            <div class="space-y-6">
              <div class="flex items-center gap-3 text-primary">
                <Calendar class="w-3.5 h-3.5 text-gold" />
                <span class="text-[12px] font-black tracking-widest uppercase">行程天數</span>
              </div>
              <ul class="space-y-2">
                <li v-for="day in dayFilters" :key="day">
                  <button 
                    @click="activeDays = day"
                    :class="[
                      'w-full text-left py-2 px-3 text-xs tracking-widest transition-all duration-300 flex items-center justify-between group',
                      activeDays === day ? 'text-gold font-bold bg-white luxury-shadow' : 'text-secondary hover:text-gold'
                    ]"
                  >
                    {{ day }}
                    <ChevronRight v-if="activeDays === day" class="w-3 h-3 text-gold" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- 右側：行程列表 (三欄式) -->
        <div class="lg:w-4/5">
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <router-link 
              v-for="(tour, idx) in toursData" 
              :key="tour.id" 
              :to="`/tours/${tour.id}`"
              class="group reveal flex flex-col bg-white overflow-hidden transition-all duration-1000 hover:-translate-y-2 luxury-shadow border border-white"
              :style="`transition-delay: ${idx * 100}ms`"
            >
              <!-- 圖片區 -->
              <div class="aspect-[4/5] overflow-hidden relative">
                <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img :src="tour.image" :alt="tour.title" class="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105" />
                
                <div class="absolute top-6 left-6 z-20 flex flex-col gap-1.5">
                  <div class="bg-primary/90 backdrop-blur-md px-3 py-1.5 text-white border border-white/10">
                    <span class="text-gold text-[9px] font-black tracking-widest uppercase">Collection 0{{ idx + 1 }}</span>
                  </div>
                </div>
              </div>

              <!-- 內容區 -->
              <div class="p-8 flex flex-col flex-grow">
                <div class="flex items-center gap-4 mb-5">
                  <div class="flex items-center gap-1.5 text-[9px] text-gray-400 font-bold tracking-[0.1em] uppercase">
                    <Calendar class="w-3 h-3 text-gold" />
                    <span>{{ tour.days }} DAYS</span>
                  </div>
                  <div class="w-1 h-1 bg-gold/30 rounded-full"></div>
                  <div class="flex items-center gap-1.5 text-[9px] text-gray-400 font-bold tracking-[0.1em] uppercase">
                    <MapPin class="w-3 h-3 text-gold" />
                    <span>TAIWAN PURE</span>
                  </div>
                </div>

                <h3 class="text-xl font-serif text-primary mb-5 tracking-widest leading-snug group-hover:text-gold transition-colors duration-500">
                  {{ tour.title }}
                </h3>
                
                <p class="text-secondary leading-loose mb-8 flex-grow font-medium text-sm line-clamp-2 text-gray-500">
                  {{ tour.subtitle }}
                </p>

                <!-- 底部資訊列 -->
                <div class="flex items-end justify-between pt-6 border-t border-gray-50 mt-auto">
                  <div class="flex flex-col">
                    <span class="text-[9px] text-gray-400 uppercase tracking-widest mb-1 font-black">Investment</span>
                    <span class="text-lg font-serif text-primary tracking-wider">{{ formatPrice(tour.price) }}</span>
                  </div>
                  <div class="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                    <ArrowRight class="w-4 h-4 text-gold group-hover:text-primary transition-all duration-500" />
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.luxury-shadow {
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.03);
}
.luxury-shadow:hover {
  box-shadow: 0 30px 70px -15px rgba(184, 153, 94, 0.1);
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
