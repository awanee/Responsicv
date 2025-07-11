<script setup>
import Navbar from '@/components/MyNavbar.vue';
import Hero from '@/components/MyHero.vue';
import Education from '@/components/MyEducation.vue';
import Skills from '@/components/MySkills.vue';
import Projects from '@/components/MyProjects.vue';
import Contact from '@/components/MyContact.vue';
</script>
<template>
<div>
<Navbar />
<main>
<Hero />
<div v-animate-on-scroll><Education /></div>
<div v-animate-on-scroll><Skills /></div>
<div v-animate-on-scroll><Projects /></div>
<div v-animate-on-scroll><Contact /></div>
</main>
</div>
</template>
