沒問題，這份 GEMINI_MISSION.md 已經根據我們剛才討論的**「專屬網站」、「純 JS」、「自動化架構」以及「銀髮旅遊專屬功能」**完整配置好了。

你可以直接將以下內容複製並儲存到專案根目錄的 GEMINI_MISSION.md 中，作為我們後續開發的最高指導原則。

📄 GEMINI_MISSION.md (正式初版)
Markdown
# 🤖 Project: Senior-First Travel Portal (銀髮族專屬旅遊網站) - Mission Control

## 🏗️ 技術棧設定 (Tech Stack - Pure JS)
- **Framework**: Vue 3 (Composition API / `<script setup>`)
- **Language**: JavaScript (完全不使用 TypeScript)
- **Build Tool**: Vite 5 (穩定版)
- **Routing & Layouts**: 
  - `vite-plugin-pages`: 自動化路由
  - `vite-plugin-vue-layouts`: 自動化佈局
- **Automation**: 
  - `unplugin-auto-import`: 自動導入 vue, vue-router, pinia API
  - `unplugin-vue-components`: 自動導入 Element Plus
- **UI & Styling**: 
  - Tailwind CSS v3: 現代化排版與精緻配色
  - Element Plus: 核心 UI 元件庫
  - Lucide Vue Next: 語意化圖標
- **State & Data**: 
  - Pinia: 狀態管理
  - Axios: API 串接
- **Linter/Formatter**: ESLint + Prettier

## 🎯 開發規範 (Guidelines)
1. **極致奢華**: 參考高端精品酒店與私人款待服務，強調行程的從容感、服務的細膩度與長輩的舒適感。
2. **視覺標準**: 
   - **字體**: 標題採用經典襯線體 (Serif) 展現優雅與質感；內文採用高品質無襯線體，並特別注意字級大小以利長輩閱讀。
   - **配色**: 奶油白 (Creamy White)、深石板藍 (Midnight Slate) 與 柔和香檳金 (Soft Gold)。
   - **元素**: 運用極細線條、微影 (Soft Shadows) 與 高品質留白，營造放鬆且不壓迫的視覺環境。
3. **JS 優先**: 所有組件與腳本均使用 `.js` 或 `.vue` 檔案。

## 📋 待辦任務 (Task Checklist)

### Phase 1: 環境初始化與自動化配置
- [x] 1.1 初始化 Vite 專案 (npm create vue@latest 在當前目錄)。 ✅
- [x] 1.2 配置 `vite.config.js` 整合 Pages, Layouts, Auto-import 與 Component Resolvers。 ✅
- [x] 1.3 設定 Tailwind CSS 基礎字級與銀髮專用色票。 ✅
- [x] 1.4 配置 ESLint/Prettier 與 VS Code `.vscode/settings.json` 自動修正。 ✅ (已配置基礎，部分依賴已安裝)

### Phase 2: 核心佈局與基礎功能
- [x] 2.1 建立 `default.vue` 佈局 (含超大字體導航列、底部緊急諮詢懸浮按鈕)。 ✅

### Phase 3: 旅遊行程功能 (核心)
- [ ] 3.1 **Data**: 定義 `tours.json` 結構 (包含：管家服務標籤、無障礙等級、慢活節奏說明)。
- [ ] 3.2 **Marketing**: 實作首頁行銷區塊，強調「專為銀髮族客製」的四大保證。
- [ ] 3.3 **Display**: 參考各大旅遊站，實作「分天步進式 (Steps)」行程展示組件。
- [ ] 3.4 **Interaction**: 實作一鍵撥打電話與 Line 諮詢功能，減少鍵盤輸入需求。