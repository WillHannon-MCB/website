<template>
    <div class="bg-white text-gray-900 py-1.5 px-6 shadow md:flex justify-between items-center">
        <!-- Home -->
        <div class="flex items-center cursor-pointer">
            <span class=" text-gray-900 text-xl mr-0">
                <a href="#" class="t hover:text-blue-500"><i class="bi bi-house"></i></a>
            </span>
        </div>
        <!-- Menu Button -->
        <span @click="toggleMenu()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-2xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter']"></i>
        </span>
        <!-- Links -->
        <ul class="bg-white bg-opacity-75 md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-500 ease-in"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-6" v-for="link in links">
                <a :href="link.url" class="hover:text-blue-500">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Navbar',
    setup() {
        let open = ref(false)
        let links = [
            {
                name: 'Resume',
                url: '#'
            },
            {
                name: 'Publications',
                url: '#'
            },
            {
                name: 'Projects',
                url: '#'
            }
        ]
        function toggleMenu() {
            open.value = !open.value
        }
        return {
            links,
            open,
            toggleMenu
        }
    }

}
</script>