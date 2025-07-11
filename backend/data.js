// backend/data.js
const educationHistory = [
{ id: 1, period: '2022 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika' },
{ id: 2, period: '2019 - 2022', institution: 'SMA Negeri 1 Contoh', major:
'MIPA' }
];
const skills = [
{ name: 'Vue.js', level: 'Menengah' },
{ name: 'JavaScript', level: 'Menengah' },
{ name: 'Tailwind CSS', level: 'Pemula' },
{ name: 'Node.js', level: 'Pemula' },
{ name: 'Express.js', level: 'Pemula' },
{ name: 'Git & GitHub', level: 'Menengah' },
{ name: 'HTML5 & CSS3', level: 'Mahir' },
];
const projects = [
{
title: 'Website Portofolio Responsi',
image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
description: 'Website portofolio pribadi yang dibangun menggunakan Vue.js dan Express.js sebagai syarat kelulusan Responsi Praktikum Pemrograman Web.',
tech: ['Vue.js', 'Express.js', 'Vercel'],
link: '#'
}
];
module.exports = {

educationHistory,
skills,
projects
};