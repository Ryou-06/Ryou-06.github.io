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

<div class="relative flex flex-col max-w-[1900px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid' + (
        y > 0 ? ' py-4 bg-slate-950 border-green-800' : ' py-6 bg-transparent border-transparent'
    )}>
        <h1 class="font-large">
            <b class="font-bold poppins">John Ron</b> Diza
        </h1>

        <div class="sm:flex ml-auto pr-3 items-center gap-4 hidden">
            {#each tabs as tab, index}
                <a href={tab.href} class="duration-200 hover:text-green-600">
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
        
        <a 
            href="/" 
            target="_self"
            class="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div class="absolute top-0 left-0 w-full h-full bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200">
            </div>
            <h4 class="relative z-10">Get in touch</h4>
        </a>
    </header>
    
    <slot></slot>

    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0'
    )}>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-900 
        text-green-600 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
            <i  class="fa-solid fa-arrow-up"/>
        </button>
    </div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />

<style>
    header {
        overflow: hidden; /* Prevent overflow from the header */
    }
</style>
