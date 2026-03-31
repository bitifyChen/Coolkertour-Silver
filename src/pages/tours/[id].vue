<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, Clock, HeartPulse, Activity, CheckCircle2, ShieldCheck, ChevronRight, Bed, Utensils, MapPin, Camera } from 'lucide-vue-next'
import toursData from '../../data/tours.json'

const route = useRoute()
const tourIndex = computed(() => toursData.findIndex(t => t.id === route.params.id))
const tour = computed(() => toursData[tourIndex.value])

onMounted(() => {
  window.scrollTo(0, 0)
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
  <div v-if="tour" class="bg-[#FDFBF7] min-h-screen pb-40 font-sans">
    
    <!-- 頂部導航 -->
    <div class="fixed top-24 left-10 z-50">
      <router-link to="/tours" class="flex items-center gap-4 group bg-white/80 backdrop-blur-md px-6 py-3 border border-gray-100 luxury-shadow">
        <ArrowLeft class="w-4 h-4 text-primary group-hover:-translate-x-2 transition-transform" />
        <span class="text-[12px] font-black uppercase tracking-[0.3em] text-primary">返回行程誌</span>
      </router-link>
    </div>

    <!-- Hero Section -->
    <section class="relative h-[80vh] overflow-hidden">
      <div class="absolute inset-0 bg-primary/40 z-10"></div>
      <img :src="tour.image" :alt="tour.title" class="w-full h-full object-cover scale-110 animate-subtle-drift" />
      
      <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <span class="text-gold text-xs font-black tracking-[1em] mb-10 block uppercase reveal">Collection 0{{ tourIndex + 1 }}</span>
        <h1 class="text-5xl md:text-8xl font-serif text-white tracking-widest mb-10 reveal delay-200">
          {{ tour.title }}
        </h1>
        <div class="h-[1px] w-24 bg-gold mb-10 reveal delay-300"></div>
        <p class="text-gray-200 text-lg md:text-2xl font-medium tracking-[0.2em] max-w-3xl reveal delay-400 font-serif italic">
          {{ tour.subtitle }}
        </p>
      </div>
    </section>

    <!-- 快速概覽卡片 -->
    <section class="relative z-30 -mt-24 container mx-auto px-6 max-w-5xl">
      <div class="bg-white p-12 luxury-shadow grid md:grid-cols-3 gap-12 text-center border border-gray-50">
        <div class="reveal text-center">
          <Clock class="w-6 h-6 text-gold mx-auto mb-4" />
          <span class="text-[9px] text-gray-400 uppercase tracking-widest block mb-2 font-black">Journeys</span>
          <span class="text-xl font-serif text-primary">{{ tour.days }} Days</span>
        </div>
        <div class="reveal delay-100 text-center">
          <MapPin class="w-6 h-6 text-gold mx-auto mb-4" />
          <span class="text-[9px] text-gray-400 uppercase tracking-widest block mb-2 font-black">Location</span>
          <span class="text-xl font-serif text-primary">TAIWAN PURE</span>
        </div>
        <div class="reveal delay-200 text-center">
          <ShieldCheck class="w-6 h-6 text-gold mx-auto mb-4" />
          <span class="text-[9px] text-gray-400 uppercase tracking-widest block mb-2 font-black">Safety</span>
          <span class="text-xl font-serif text-primary">高額全保</span>
        </div>
      </div>
    </section>

    <!-- 主行程內容 -->
    <section class="py-40">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid lg:grid-cols-12 gap-20">
          
          <!-- 左側：每日詳細行程 -->
          <div class="lg:col-span-8 space-y-32">
            <header class="reveal mb-20">
              <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6 tracking-widest">每日慢活規劃</h2>
              <div class="h-[1px] w-20 bg-gold"></div>
            </header>
            
            <div v-for="(step, i) in tour.itinerary" :key="i" class="reveal space-y-16">
              <div class="flex gap-10">
                <!-- 數字指標 -->
                <div class="flex flex-col items-center shrink-0">
                  <div class="w-14 h-14 rounded-full bg-primary text-gold flex items-center justify-center font-serif text-lg border border-gold/20">
                    {{ step.day }}
                  </div>
                  <div v-if="i < tour.itinerary.length - 1" class="w-[1px] h-full bg-gold/10 mt-8"></div>
                </div>

                <!-- 內容 -->
                <div class="flex-grow">
                  <h3 class="text-3xl font-serif text-primary mb-6 tracking-widest">{{ step.title }}</h3>
                  <p class="text-secondary leading-[2.2] text-lg font-medium mb-12">
                    {{ step.desc }}
                  </p>
                  
                  <!-- 當日景點列表 -->
                  <div class="space-y-10 mb-12">
                    <div class="flex items-center gap-4 text-gold mb-6">
                      <Camera class="w-4 h-4" />
                      <span class="text-[12px] font-black tracking-widest uppercase">今日亮點</span>
                    </div>
                    
                    <div v-for="(attr, attrIdx) in step.attractions" :key="attrIdx" class="grid md:grid-cols-2 gap-8 bg-white p-8 luxury-shadow group">
                      <div class="overflow-hidden aspect-video">
                        <img :src="attr.image" :alt="attr.name" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h4 class="text-xl font-serif text-primary mb-4 tracking-widest">{{ attr.name }}</h4>
                        <p class="text-sm text-gray-500 leading-relaxed font-medium">{{ attr.desc }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- 住宿與餐食卡片 -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-8 bg-white border border-gray-50 rounded-sm luxury-shadow flex items-start gap-6">
                      <Bed class="w-5 h-5 text-gold shrink-0 mt-1" />
                      <div>
                        <span class="text-[12px] text-gray-400 uppercase tracking-widest font-black block mb-3">Accommodation</span>
                        <p class="text-sm text-primary font-bold leading-relaxed">{{ step.accommodation }}</p>
                      </div>
                    </div>
                    <div class="p-8 bg-white border border-gray-50 rounded-sm luxury-shadow flex items-start gap-6">
                      <Utensils class="w-5 h-5 text-gold shrink-0 mt-1" />
                      <div class="w-full">
                        <span class="text-[12px] text-gray-400 uppercase tracking-widest font-black block mb-3">Gastronomy</span>
                        <div class="space-y-2">
                          <div v-for="(meal, type) in step.meals" :key="type" class="flex justify-between text-[11px] border-b border-gray-50 pb-2 last:border-0">
                            <span class="text-gray-400 capitalize">{{ type }}</span>
                            <span class="text-primary font-medium">{{ meal }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右側：訂購資訊 -->
          <div class="lg:col-span-4">
            <div class="sticky top-40 space-y-10">
              <div class="p-12 bg-primary text-white luxury-shadow relative overflow-hidden">
                <div class="relative z-10 text-center">
                  <span class="text-gold text-[12px] font-black tracking-[0.4em] block mb-6 uppercase">Private Consultation</span>
                  <div class="flex items-baseline justify-center gap-2 mb-10">
                    <span class="text-5xl font-serif text-gold">{{ formatPrice(tour.price) }}</span>
                    <span class="text-xs text-gray-400 italic">/ 起</span>
                  </div>
                  <router-link :to="`/contact?tourId=${tour.id}`" class="w-full py-6 bg-gold text-primary text-[10px] font-black uppercase tracking-[0.6em] hover:bg-white transition-all duration-700 mb-8 flex items-center justify-center gap-4">
                    立即預約專屬諮詢
                    <ChevronRight class="w-3 h-3" />
                  </router-link>
                  <p class="text-[9px] text-gray-400 text-center tracking-widest leading-loose">
                    * 以上報名費包含專業管家、全額保險、五星住宿與精緻膳食費用。
                  </p>
                </div>
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full border border-gold/10"></div>
              </div>

              <!-- 包含項目 -->
              <div class="p-10 bg-white border border-gray-50 luxury-shadow space-y-8">
                <h4 class="text-[12px] font-black tracking-[0.3em] text-primary uppercase pb-6 border-b border-gray-50">行程包含細項</h4>
                <ul class="space-y-6">
                  <li v-for="feat in tour.features" :key="feat" class="flex items-center gap-4 text-xs text-secondary font-medium">
                    <CheckCircle2 class="w-4 h-4 text-gold" />
                    {{ feat }}
                  </li>
                  <li class="flex items-center gap-4 text-xs text-secondary font-medium">
                    <CheckCircle2 class="w-4 h-4 text-gold" />
                    專業隨行管家
                  </li>
                  <li class="flex items-center gap-4 text-xs text-secondary font-medium">
                    <CheckCircle2 class="w-4 h-4 text-gold" />
                    五星級飯店住宿
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 底部導覽 -->
    <div class="container mx-auto px-6 border-t border-gray-100 pt-32 mt-20 text-center">
      <router-link to="/tours" class="flex flex-col items-center group">
        <span class="text-gold text-[12px] font-black tracking-[1em] mb-10 block uppercase reveal">Explore More</span>
        <h3 class="text-4xl md:text-6xl font-serif text-primary tracking-widest group-hover:text-gold transition-colors duration-700 reveal">
          看見 更多 <span class="italic">慢活</span> 選境
        </h3>
        <div class="w-[1px] h-20 bg-gold/30 mt-12 group-hover:h-32 group-hover:bg-gold transition-all duration-1000 mx-auto"></div>
      </router-link>
    </div>

  </div>
  
  <div v-else class="h-screen flex items-center justify-center bg-primary text-white font-serif tracking-[1em] animate-pulse">
    LOADING JOURNEY...
  </div>
</template>

<style scoped>
@keyframes subtle-drift {
  from { transform: scale(1.1) translateX(-10px); }
  to { transform: scale(1.1) translateX(10px); }
}
.animate-subtle-drift { animation: subtle-drift 30s infinite alternate ease-in-out; }
.luxury-shadow {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.05);
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
