<script setup>
import { onMounted } from 'vue'
import { ArrowRight, Compass, ShieldCheck, HeartPulse, ChevronDown, Utensils, MapPin, Activity } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import toursData from '../data/tours.json'

// 匯入 Swiper 樣式
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

onMounted(() => {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.2 })
  reveals.forEach(el => observer.observe(el))
})

// 四大核心特點文案
const seniorPillars = [
  { 
    title: '早上 9:30 才出發', 
    icon: Compass, 
    desc: '拒絕晨間趕路，每日僅精選 2 個重點行程，保證充足午休，讓體力維持最佳狀態。',
    tag: '慢活節奏'
  },
  { 
    title: '專業隨行管家', 
    icon: HeartPulse, 
    desc: '全程配置專業管家，主動協助行李搬運、餐食協調與旅程提醒，讓長輩只需專注享受風景。',
    tag: '貼心款待'
  },
  { 
    title: '每 40 分鐘必休息', 
    icon: ShieldCheck, 
    desc: '嚴選設有電梯與坡道之景點，全程採用低底盤巴士，確保如廁方便。',
    tag: '無障礙通行'
  },
  { 
    title: '軟食與低鈉友善', 
    icon: Utensils, 
    desc: '深度品嚐在地美食，並依個人需求客製化調整食材軟硬度，享受美食不費力。',
    tag: '專屬餐點'
  }
]
</script>

<template>
  <div class="bg-primary overflow-x-hidden select-none">
    
    <!-- 第 1 章：極致視野 (Hero Section) -->
    <section class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale-[20%] brightness-[0.4] scale-110 animate-subtle-drift"></div>
      </div>
      
      <div class="relative z-10 text-center px-6">
        <h2 class="text-gold text-xs font-black tracking-[1em] mb-12 animate-fade-in uppercase">
          慢下來，看見最美的風景
        </h2>
        <h1 class="text-5xl md:text-8xl font-black text-white mb-12 leading-tight tracking-[0.1em] drop-shadow-2xl">
          專為長輩設計的<br/>
          <span class="italic font-serif text-gold">緩節奏旅行</span>
        </h1>
        <p class="text-gray-300 text-lg md:text-2xl font-medium tracking-[0.2em] max-w-3xl mx-auto leading-loose mb-16 px-4">
          不早起、不趕路，把時間留給風景與您的老伴。<br/>我們比您更在意旅途中的每一步。
        </p>
        
        <div class="flex flex-col items-center gap-6 mt-10">
          <div class="w-[1px] h-20 bg-gold animate-grow-y origin-top"></div>
          <ChevronDown class="text-gold w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>

    <!-- 第 2 章：奢華宣言 (Philosophy) -->
    <section class="py-40 md:py-64 bg-white text-primary px-6 md:px-10 relative overflow-hidden">
      <div class="container mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div class="reveal">
          <span class="text-xs font-black tracking-[0.5em] text-gold uppercase mb-8 block font-sans">Brand Philosophy</span>
          <h2 class="text-4xl md:text-6xl leading-[1.4] mb-12 font-serif tracking-widest">
            將體貼，化為<br/>
            旅程中最溫柔的<br/>
            <span class="italic text-gold">生活節奏。</span>
          </h2>
          <div class="h-[1px] w-24 bg-gold mb-12"></div>
          <p class="text-secondary leading-[2.2] text-lg md:text-xl font-medium">
            在 Coolkertour 的世界裡，旅行不再是趕路，而是一場身心的款待。我們深知銀髮族對細節的獨特需求，從舒緩的行程設計到細膩的隨行照顧，都以您的舒適為唯一準則，為您雕琢出最優雅的慢活時光。我們消除旅途中的瑣碎焦慮，讓每一刻都充滿溫度與尊榮感。
          </p>
        </div>
        <div class="reveal delay-300 relative">
          <div class="aspect-[3/4] overflow-hidden luxury-shadow bg-gray-100">
            <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover grayscale-[30%] hover:scale-105 transition-transform duration-[3000ms]" loading="lazy" />
          </div>
          <div class="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-gold hidden lg:block opacity-30"></div>
        </div>
      </div>
    </section>

    <!-- 第 3 章：大景橫移 (Cinematic Gallery) -->
    <section class="py-20 bg-primary px-6 md:px-10">
      <div class="text-center mb-24 reveal">
        <h2 class="text-gold text-xs tracking-[1em] uppercase mb-6 font-sans">Signature Itinerary</h2>
        <h3 class="text-4xl md:text-6xl text-white font-serif tracking-[0.2em]">首席 行程 誌</h3>
      </div>
      
      <div class="mb-20 max-w-[1800px] mx-auto reveal">
        <swiper
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            '768': { slidesPerView: 2 },
            '1200': { slidesPerView: 3 }
          }"
          class="itinerary-swiper"
        >
          <swiper-slide v-for="(tour, i) in toursData" :key="tour.id">
            <router-link :to="`/tours/${tour.id}`" class="relative group h-[60vh] md:h-[80vh] overflow-hidden block">
              <div class="absolute inset-0 bg-primary/40 group-hover:bg-primary/0 transition-all duration-1000 z-10"></div>
              <img :src="tour.image" class="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" loading="lazy" />
              
              <!-- 內容資訊 -->
              <div class="absolute bottom-20 left-12 right-12 z-20 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-1000">
                <span class="text-xs tracking-[0.5em] text-gold mb-4 block font-sans">Collection 0{{ i + 1 }}</span>
                <h4 class="text-3xl font-serif mb-4 tracking-widest">{{ tour.title }}</h4>
                <p class="text-sm text-gray-400 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 font-light tracking-widest">
                  {{ tour.subtitle }}
                </p>
                
                <div class="flex items-center gap-2 group/btn cursor-pointer">
                  <span class="text-[12px] uppercase tracking-[0.3em] font-bold">查看探索行程</span>
                  <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>

      <div class="flex justify-center mt-12 reveal delay-500">
        <router-link to="/tours" class="group flex items-center gap-6 px-12 py-5 border border-gold/30 hover:border-gold transition-all duration-700">
          <span class="text-gold text-[12px] font-black uppercase tracking-[0.5em]">觀看更多全球行程</span>
          <div class="w-12 h-[1px] bg-gold/30 group-hover:w-20 group-hover:bg-gold transition-all duration-700"></div>
        </router-link>
      </div>
    </section>

    <!-- 第 4 章：全方位呵護 (The 4 Pillars) -->
    <section class="py-40 bg-white px-6 md:px-10">
       <div class="container mx-auto">
          <div class="flex flex-col xl:flex-row gap-20 items-start">
             <div class="xl:w-1/3 reveal sticky top-32">
                <h2 class="text-5xl md:text-7xl font-serif text-primary leading-tight mb-12 tracking-widest">
                  四 大<br/>
                  <span class="text-gold italic font-black">體 貼 承 諾</span>
                </h2>
                <p class="text-secondary text-lg leading-loose font-medium">
                  我們比您更在意旅途中的細節。從早上出發的時間到每一餐的軟硬度，都是為了讓長輩能無焦慮地享受風景。
                </p>
             </div>
             <div class="xl:w-2/3 grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
                <div v-for="(item, idx) in seniorPillars" :key="idx" class="reveal group" :style="`transition-delay: ${idx * 200}ms`">
                   <div class="flex items-start gap-8">
                      <div class="w-20 h-20 shrink-0 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-700">
                        <component :is="item.icon" class="w-8 h-8 text-gold group-hover:text-primary transition-all duration-700" />
                      </div>
                      <div>
                         <span class="text-[12px] font-black tracking-[0.3em] text-gold uppercase mb-2 block">{{ item.tag }}</span>
                         <h4 class="text-2xl font-bold mb-6 text-primary tracking-widest">{{ item.title }}</h4>
                         <p class="text-sm text-gray-500 leading-relaxed font-medium">{{ item.desc }}</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- 第 5 章：預約未來 (CTA) -->
    <section class="py-64 bg-primary text-center px-6 md:px-10 relative overflow-hidden">
       <div class="reveal">
          <h2 class="text-gold text-xs tracking-[1em] uppercase mb-12 font-sans">Private Consultation</h2>
          <h3 class="text-5xl md:text-8xl text-white font-serif mb-20 leading-tight tracking-[0.1em]">
            讓 旅 行，<br/>
            成 為 您 的 <span class="italic text-gold">傳 家 誌</span>。
          </h3>
          <button class="px-16 md:px-24 py-6 border border-gold text-gold text-[12px] font-black uppercase tracking-[0.5em] hover:bg-gold hover:text-primary transition-all duration-1000 shadow-2xl">
             立即預約專屬諮詢
          </button>
       </div>
    </section>

  </div>
</template>

<style scoped>
@keyframes subtle-drift {
  from { transform: scale(1.1) translateX(-20px); }
  to { transform: scale(1.1) translateX(20px); }
}
@keyframes grow-y {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes fade-in {
  from { opacity: 0; letter-spacing: 2em; }
  to { opacity: 1; letter-spacing: 1em; }
}
.animate-subtle-drift { animation: subtle-drift 30s infinite alternate ease-in-out; }
.animate-grow-y { animation: grow-y 1.5s 0.5s ease-out forwards; }
.animate-fade-in { animation: fade-in 2.5s ease-out forwards; }

.delay-300 { transition-delay: 300ms; }
</style>

<route lang="yaml">
meta:
  layout: default
</route>
