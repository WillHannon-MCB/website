<script>
import { useData } from 'vitepress';

export default {
    name: 'Navbar',
    data() {
        return {
            isMenuOpen: false,
            links: [
                {
                    name: 'Resume',
                    url: '/resume',
                    external: false
                },
                {
                    name: 'Publications',
                    url: 'https://scholar.google.com/citations?user=fh87B_IAAAAJ&hl=en&oi=ao',
                    external: true
                },
                {
                    name: 'Projects',
                    url: 'https://github.com/WillHannon-MCB',
                    external: true
                }
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    watch: {
        isMenuOpen(newValue) {
            const body = document.body;
            if (newValue) {
                body.classList.add('disable-scroll');
            } else {
                body.classList.remove('disable-scroll');
            }
        }
    }
}
</script>

<template>
    <div class="bg-white text-gray-900 py-1.5 px-6 shadow sm:flex justify-between items-center z-50">
        <!-- Home -->
        <div class="flex items-center cursor-pointer">
            <span class="text-gray-900 text-xl mr-0">
                <a href="/" class="hover:text-custom-purple" @click="closeMenu"><i class="bi bi-house"></i></a>
            </span>
        </div>
        <!-- Menu Button -->
        <span @click="toggleMenu" class="absolute sm:hidden right-6 top-1.5 cursor-pointer text-2xl">
            <i :class="[isMenuOpen ? 'bi bi-x' : 'bi bi-filter']"></i>
        </span>
        <!-- Links -->
        <ul class="flex flex-col sm:flex-row sm:items-center bg-white backdrop-blur-md sm:backdrop-blur-none bg-opacity-75 sm:bg-transparent sm:px-0 px-3 sm:pb-0 pb-10 sm:static absolute sm:w-auto w-full h-full top-14 duration-500 ease-in"
            :class="[isMenuOpen ? 'left-0' : 'left-[-100%]']">
            <li class="sm:mx-4 sm:my-0 my-6" v-for="link in links" :key="link.name">
                <a :href="link.url" :target="link.external ? '_blank' : '_self'"
                    :rel="link.external ? 'noopener noreferrer' : ''"
                    class="hover:text-custom-purple text-xl sm:text-lg px-4 py-4 sm:py-2 flex items-center justify-center sm:flex-none sm:items-stretch sm:justify-start"
                    @click="closeMenu">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
.disable-scroll {
    overflow: hidden;
}
</style>
