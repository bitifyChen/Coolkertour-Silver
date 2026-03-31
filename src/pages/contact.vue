<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-vue-next'
import toursData from '../data/tours.json'

const route = useRoute()
const isSubmitted = ref(false)
const isLoading = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '一般諮詢',
  message: ''
})

// 初始化表單：如果從行程頁連過來，自動帶入主旨
onMounted(() => {
  const queryTourId = route.query.tourId
  if (queryTourId) {
    const tour = toursData.find(t => t.id === queryTourId)
    if (tour) {
      form.value.subject = `我想詢問 ${tour.title} (${tour.id})`
      form.value.message = `我想進一步了解「${tour.title}」的詳細安排與席位狀況。`
    }
  }
  
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

const submitForm = () => {
  isLoading.ref = true
  // 模擬 API 傳送
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 1500)
}
</script>

<template>
  <div class="bg-[#FDFBF7] min-h-screen pt-32 pb-40 font-sans">
    <div class="container mx-auto px-6 max-w-6xl">
      
      <!-- 標題區 -->
      <header class="mb-20 reveal text-center">
        <span class="text-gold text-[10px] font-black tracking-[1em] mb-6 block uppercase">Private Concierge</span>
        <h1 class="text-5xl md:text-7xl font-serif text-primary tracking-widest mb-10">預 約 與 諮 詢</h1>
        <p class="text-secondary text-lg max-w-2xl mx-auto leading-loose font-medium">
          感謝您選擇 Coolkertour 。請留下您的聯絡資訊，<br/>我們的專屬管家將於 24 小時內與您聯繫，為您安排一場優雅的慢活旅程。
        </p>
      </header>

      <div v-if="!isSubmitted" class="grid lg:grid-cols-12 gap-20">
        
        <!-- 左側：直接聯絡資訊 -->
        <div class="lg:col-span-4 space-y-12 reveal">
          <div class="p-10 bg-primary text-white luxury-shadow relative overflow-hidden">
            <h3 class="text-xl font-serif text-gold mb-8 tracking-widest">即時通話諮詢</h3>
            <div class="space-y-8 relative z-10">
              <a href="tel:0212345678" class="flex items-center gap-6 group cursor-pointer">
                <div class="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <Phone class="w-5 h-5 text-gold group-hover:text-primary transition-all duration-500" />
                </div>
                <div>
                  <span class="text-[9px] text-gray-400 uppercase tracking-widest block mb-1">Call Us Directly</span>
                  <span class="text-xl font-serif tracking-wider">02-1234-5678</span>
                </div>
              </a>
              <a href="#" class="flex items-center gap-6 group cursor-pointer">
                <div class="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <MessageCircle class="w-5 h-5 text-gold group-hover:text-primary transition-all duration-500" />
                </div>
                <div>
                  <span class="text-[9px] text-gray-400 uppercase tracking-widest block mb-1">LINE Official</span>
                  <span class="text-xl font-serif tracking-wider">@coolkertour_silver</span>
                </div>
              </a>
            </div>
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 border border-white/5 rounded-full"></div>
          </div>

          <div class="space-y-8 px-4">
            <div class="flex items-start gap-6">
              <Mail class="w-5 h-5 text-gold mt-1" />
              <div>
                <h4 class="text-sm font-bold text-primary mb-2">電子信箱</h4>
                <p class="text-sm text-gray-500">service@coolkertour.com</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <MapPin class="w-5 h-5 text-gold mt-1" />
              <div>
                <h4 class="text-sm font-bold text-primary mb-2">服務據點</h4>
                <p class="text-sm text-gray-500 leading-relaxed">台北市中山區精緻路 88 號<br/>週一至週五 09:30 - 18:30</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側：諮詢表單 -->
        <div class="lg:col-span-8 bg-white p-12 md:p-16 luxury-shadow reveal delay-200">
          <form @submit.prevent="submitForm" class="space-y-10">
            <div class="grid md:grid-cols-2 gap-10">
              <div class="space-y-4">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">您的姓名 Name</label>
                <input v-model="form.name" type="text" required placeholder="例如：王大明 先生 / 女士" class="w-full border-b border-gray-100 py-4 focus:border-gold outline-none transition-colors text-lg text-primary placeholder:text-gray-300" />
              </div>
              <div class="space-y-4">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">聯絡電話 Phone</label>
                <input v-model="form.phone" type="tel" required placeholder="例如：0912-345-678" class="w-full border-b border-gray-100 py-4 focus:border-gold outline-none transition-colors text-lg text-primary placeholder:text-gray-300" />
              </div>
            </div>

            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">電子信箱 Email</label>
              <input v-model="form.email" type="email" required placeholder="yourname@email.com" class="w-full border-b border-gray-100 py-4 focus:border-gold outline-none transition-colors text-lg text-primary placeholder:text-gray-300" />
            </div>

            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">諮詢主旨 Subject</label>
              <div class="relative">
                <select v-model="form.subject" class="w-full border-b border-gray-100 py-4 focus:border-gold outline-none bg-transparent transition-colors text-lg appearance-none cursor-pointer pr-10 text-primary">
                  <option class="text-primary" value="一般諮詢">一般行程諮詢</option>
                  <option class="text-primary" v-for="tour in toursData" :key="tour.id" :value="`我想詢問 ${tour.title} (${tour.id})`">
                    我想詢問 {{ tour.title }} ({{ tour.id }})
                  </option>
                  <option class="text-primary" value="私人包團客製">私人包團客製需求</option>
                </select>
                <ChevronDown class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">還想多說些什麼 Message</label>
              <textarea v-model="form.message" rows="4" placeholder="請告訴我們您的特殊需求（如：飲食限制、輪椅使用需求等）" class="w-full border border-gray-100 p-6 focus:border-gold outline-none transition-colors text-lg resize-none bg-gray-50 text-primary placeholder:text-gray-300"></textarea>
            </div>

            <div class="pt-6">
              <button 
                type="submit" 
                :disabled="isLoading"
                class="w-full md:w-auto px-16 py-6 bg-primary text-gold text-[10px] font-black uppercase tracking-[0.5em] hover:bg-gold hover:text-primary transition-all duration-700 flex items-center justify-center gap-6 disabled:opacity-50"
              >
                {{ isLoading ? '正在傳送您的預約...' : '傳送預約諮詢' }}
                <Send v-if="!isLoading" class="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

      </div>

      <!-- 成功傳送畫面 -->
      <div v-else class="max-w-3xl mx-auto text-center py-20 reveal">
        <div class="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-12">
          <CheckCircle2 class="w-12 h-12 text-primary" />
        </div>
        <h2 class="text-4xl font-serif text-primary mb-8 tracking-widest">您的預約已成功傳送</h2>
        <p class="text-secondary text-lg leading-loose mb-16 font-medium">
          親愛的 {{ form.name }}，您的諮詢我們已經收到。<br/>
          專屬管家會盡快閱覽您的需求，並於服務時間內主動聯繫。<br/>
          期待為您開啟一段美好的旅程。
        </p>
        <router-link to="/tours" class="inline-block px-12 py-5 border border-gold text-gold text-[10px] font-black uppercase tracking-[0.5em] hover:bg-gold hover:text-primary transition-all duration-700">
          返回行程瀏覽
        </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
.luxury-shadow {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.05);
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
