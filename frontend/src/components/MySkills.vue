<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue' // Asumsi Anda punya komponen
const skills = ref([])
const API_URL = import.meta.env.PROD ? '/api/skills' : 'http://localhost:3000/api/skills'
onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    skills.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data skill:', error)
  }
})
</script>
<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
