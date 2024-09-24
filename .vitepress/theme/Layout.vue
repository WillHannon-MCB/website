<script setup>
import { Content, useData } from 'vitepress'
import Resume from './Resume.vue';
import Home from './Home.vue';
import Nav from './Nav.vue';

const { page, frontmatter } = useData()
</script>

<template>
    <div id="app" class="flex flex-col min-h-screen">
        <Nav></Nav>
        <main>
            <Home v-if="frontmatter.home" />
            <Resume class="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl xl:px-0" v-else-if="frontmatter.resume" />
        </main>
    </div>
</template>