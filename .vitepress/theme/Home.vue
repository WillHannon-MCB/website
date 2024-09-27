<script>
export default {
  name: 'Homepage'
}
</script>

<template>
  <div class="flex flex-col h-[calc(100vh_-_100px)] justify-between mt-6 mx-2 sm:mx-10 md:mx-32 lg:mx-48 xl:mx-60">

    <div class="flex flex-col items-center justify-center flex-grow">
      <!-- Image -->
      <div class="w-44 h-44 sm:w-60 sm:h-60">
        <img src="/headshot.jpeg" alt="Will Hannon" class="rounded-full" />
      </div>
      <!-- Name -->
      <h1 class="mt-4 sm:mt-6 text-3xl font-semibold">Will Hannon</h1>
      <!-- Info -->
      <div>
        <p class="mt-6 text-center px-4">
          📈 Data Scientist | 💻 Computational Biologist | 🧬 Researcher
        </p>
        <p class="mt-2 text-center px-4">
          @ <a class="text-custom-purple" href="https://www.fredhutch.org/en.html">Fred
            Hutchinson Cancer
            Center</a>
        </p>
      </div>
      <!-- Bio -->
      <div class="mt-4 sm:mt-8 text-center px-4">
        <p>
          Hi (👋) I’m Will, a Data Scientist in <a href="https://jbloomlab.org/">Jesse Bloom’s lab</a>
          at the Fred Hutch Cancer Center in Seattle. I use
          computational approaches to understand how viruses adapt to keep making us sick. My job
          involves building tools, designing experiments, and analyzing data to predict viral evolution. I'm seeking
          new challenges in computational biology, so please connect with me about research, opportunities,
          or ideas
          related to biology and data science!
        </p>
      </div>
    </div>

    <!-- Socials -->
    <div class="mt-4 pb-4">
      <div class="flex justify-center space-x-4 ">
        <!-- Github -->
        <a href="https://github.com/WillHannon-MCB" target="_blank">
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style="background-color: #333">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </a>
        <!-- Linkedin -->
        <a href="https://www.linkedin.com/in/williamhannon/" target="_blank">
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style="background-color: #0077b5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </a>
      </div>
    </div>

  </div>
</template>
