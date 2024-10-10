<script>
    export let y;

    let tabs = [
        {name: "Portfolio", link: "#portfolio" },
        {name: "About", link: "#about" },
        {name: "Contact", link: "#contact" },
    ];
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid' + (
    y > 0 ? ' py-4 bg-slate-950 border-green-800' : ' py-6 bg-transparent border-transparent'
)}>
    <h1 class="font-large">
        <b class="font-bold poppins">John Ron</b> Diza
    </h1>
    <div class="sm:flex ml-auto pr-3 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-green-600">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a 
        href="#homePage" 
        target="_self"
        class="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
    >
        <div class="absolute top-0 left-0 w-full h-full bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200">
        </div>
        <h4 class="relative z-10">Get in touch</h4>
    </a>
</header>

<style>
    header {
        overflow: hidden; /* Prevent overflow from the header */
    }
</style>
