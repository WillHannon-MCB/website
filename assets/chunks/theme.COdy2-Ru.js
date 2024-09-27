import{u as d,r as b,o as l,c as r,a as t,t as h,b as i,d as x,_ as f,e as _,n as m,F as v,f as w,g as p,h as y}from"./framework.CmXP7DcN.js";const k={class:"pt-6 pb-8 space-y-2 md:space-y-5"},M={class:"text-5xl md:text-7xl font-bold text-gray-800 tracking-tight leading-14"},C={class:"flex space-x-4 text-xl mx-3"},B=["href"],j=["href"],H=["href"],$={__name:"Resume",setup(c){const{frontmatter:e}=d();return(u,s)=>{const o=b("Content");return l(),r("div",k,[t("h1",M,h(i(e).title),1),t("div",C,[t("a",{href:"mailto:"+i(e).email,target:"_blank"},s[0]||(s[0]=[t("i",{class:"bi bi-envelope-fill"},null,-1)]),8,B),t("a",{href:i(e).linkedin,target:"_blank"},s[1]||(s[1]=[t("i",{class:"bi bi-linkedin"},null,-1)]),8,j),t("a",{href:i(e).github,target:"_blank"},s[2]||(s[2]=[t("i",{class:"bi bi-github"},null,-1)]),8,H)]),x(o,{class:"prose"})])}}},z="/headshot.jpeg",O={name:"Homepage"},N={class:"flex flex-col h-[calc(100vh_-_100px)] justify-between mt-6 mx-2 sm:mx-10 md:mx-32 lg:mx-48 xl:mx-60"};function L(c,e,u,s,o,a){return l(),r("div",N,e[0]||(e[0]=[_('<div class="flex flex-col items-center justify-center flex-grow"><div class="w-44 h-44 sm:w-60 sm:h-60"><img src="'+z+'" alt="Will Hannon" class="rounded-full"></div><h1 class="mt-4 sm:mt-6 text-3xl font-semibold">Will Hannon</h1><div><p class="mt-6 text-center px-4"> 📈 Data Scientist | 💻 Computational Biologist | 🧬 Researcher </p><p class="mt-2 text-center px-4"> @ <a class="text-custom-purple" href="https://www.fredhutch.org/en.html">Fred Hutchinson Cancer Center</a></p></div><div class="mt-4 sm:mt-8 text-center px-4"><p> Hi (👋) I’m Will, a Data Scientist in <a style="text-decoration:underline;" href="https://jbloomlab.org/">Jesse Bloom’s lab</a> at the Fred Hutch Cancer Center in Seattle. I use computational approaches to understand how viruses adapt to keep making us sick. My job involves building tools, designing experiments, and analyzing data to predict viral evolution. I&#39;m seeking new challenges in computational biology, so please connect with me about research, opportunities, or ideas related to biology and data science! </p></div></div><div class="mt-4 pb-4"><div class="flex justify-center space-x-4"><a href="https://github.com/WillHannon-MCB" target="_blank"><button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color:#333;"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></button></a><a href="https://www.linkedin.com/in/williamhannon/" target="_blank"><button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="background-color:#0077b5;"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></button></a></div></div>',2)]))}const R=f(O,[["render",L]]),S={name:"Navbar",data(){return{isMenuOpen:!1,links:[{name:"Resume",url:"/resume",external:!1},{name:"Publications",url:"https://scholar.google.com/citations?user=fh87B_IAAAAJ&hl=en&oi=ao",external:!0},{name:"Projects",url:"https://github.com/WillHannon-MCB",external:!0}]}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}},watch:{isMenuOpen(c){const e=document.body;c?e.classList.add("disable-scroll"):e.classList.remove("disable-scroll")}}},W={class:"bg-white text-gray-900 py-1.5 px-6 shadow sm:flex justify-between items-center z-50"},A={class:"flex items-center cursor-pointer"},D={class:"text-gray-900 text-xl mr-0"},F=["href","target","rel"];function I(c,e,u,s,o,a){return l(),r("div",W,[t("div",A,[t("span",D,[t("a",{href:"/",class:"hover:text-custom-purple",onClick:e[0]||(e[0]=(...n)=>a.closeMenu&&a.closeMenu(...n))},e[3]||(e[3]=[t("i",{class:"bi bi-house"},null,-1)]))])]),t("span",{onClick:e[1]||(e[1]=(...n)=>a.toggleMenu&&a.toggleMenu(...n)),class:"absolute sm:hidden right-6 top-1.5 cursor-pointer text-2xl"},[t("i",{class:m([o.isMenuOpen?"bi bi-x":"bi bi-filter"])},null,2)]),t("ul",{class:m(["flex flex-col sm:flex-row sm:items-center bg-white backdrop-blur-md sm:backdrop-blur-none bg-opacity-75 sm:bg-transparent sm:px-0 px-3 sm:pb-0 pb-10 sm:static absolute sm:w-auto w-full h-full top-14 duration-500 ease-in",[o.isMenuOpen?"left-0":"left-[-100%]"]])},[(l(!0),r(v,null,w(o.links,n=>(l(),r("li",{class:"sm:mx-4 sm:my-0 my-6",key:n.name},[t("a",{href:n.url,target:n.external?"_blank":"_self",rel:n.external?"noopener noreferrer":"",class:"hover:text-custom-purple text-xl sm:text-lg px-4 py-4 sm:py-2 flex items-center justify-center sm:flex-none sm:items-stretch sm:justify-start",onClick:e[2]||(e[2]=(...g)=>a.closeMenu&&a.closeMenu(...g))},h(n.name),9,F)]))),128))],2)])}const V=f(S,[["render",I]]),J={id:"app",class:"flex flex-col min-h-screen"},P={__name:"Layout",setup(c){const{page:e,frontmatter:u}=d();return(s,o)=>(l(),r("div",J,[x(V),t("main",null,[i(u).home?(l(),p(R,{key:0})):i(u).resume?(l(),p($,{key:1,class:"flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl xl:px-0"})):y("",!0)])]))}},T={Layout:P};export{T as R};
