<script lang="ts">
    import "../app.css";
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    let y = 0;
    let innerWidth = 0;
    let innerHeight = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div class="relative flex flex-col max-w-[1900px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header y={y} />
    <slot></slot>
    <Footer />

    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0'
    )}>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-900 
        text-green-600 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
            <i  class="fa-solid fa-arrow-up"/>
        </button>
    </div>
</div>
<!-- grid place-items-center aspect-square -->

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />
