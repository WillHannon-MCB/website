<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <!-- Name -->
        <h1 class="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight leading-14">
            {{ frontmatter.title }}</h1>
        <!-- Icons for email, website, and GitHub -->
        <div class="flex space-x-4 text-xl mx-3">
            <a :href="'mailto:' + frontmatter.email" target="_blank">
                <i class="bi bi-envelope-fill"></i>
            </a>
            <a :href="frontmatter.linkedin" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
            <a :href="frontmatter.github" target="_blank">
                <i class="bi bi-github"></i>
            </a>
        </div>
        <!-- Content -->
        <Content class="prose" />
    </div>
</template>
