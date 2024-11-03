<script lang="ts">
    import "../app.css";

    let y = 0;
    let innerWidth = 0;
    let innerHeight = 0;

    let tabs = [
        { name: "Home", href: "/" },
        { name: "About me", href: "about-me/" },
        { name: "Portfolio", href: "portfolio/" },
        { name: "Contact", href: "contact/" },
    ];

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div class="relative flex flex-col max-w-[1900px] mx-auto w-full text-sm sm:text-base min-h-screen text-slate-200">
    <header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid' + (
        y > 0 ? ' py-4 bg-slate-900 border-green-800 shadow-md' : ' py-6 bg-transparent border-transparent'
    )}>
        <h1 class="font-large">
            <b class="font-bold poppins text-green-400">John Ron</b> Diza
        </h1>

        <div class="sm:flex ml-auto pr-3 items-center gap-4 hidden">
            {#each tabs as tab, index}
                <a href={tab.href} class="text-slate-300 transition-colors duration-300 font-medium hover:text-green-400">
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
        
        <a 
            href="contact/" 
            target="_self"
            class="relative inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-slate-900 bg-white hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg"
        >
            <span class="absolute top-0 left-0 w-full h-full bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
            <h4 class="relative z-10">Get in touch</h4>
        </a>
    </header>
    
    <slot></slot>

    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
    )}>
        <button 
            on:click={goTop} 
            class="ml-auto rounded-full w-10 h-10 flex items-center justify-center bg-slate-800 text-green-400 shadow-lg hover:bg-slate-700 transition-all duration-300"
            aria-label="Scroll to top"
        >
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />
