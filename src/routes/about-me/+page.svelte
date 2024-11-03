<script>
let benefits = [
    {
        name: 'Where My IT Journey Began',
        description: 'My interest in technology began when I was in 6th grade, where I first learned how to interact with the digital world. In high school, I continued down the tech path by studying ICT in grades 9 and 10. When it came time for college, I was torn between pursuing Information Technology (IT) or Civil Engineering (CE). In the end, I chose IT, and that decision marked the beginning of my journey into the world of technology.',
    },
    {
        name: 'Student of the Gordon College',
        description: 'I am a student at Gordon College, pursuing a Bachelor of Science in Information Technology (BSIT). My journey into tech began with a passion for problem-solving and a fascination with how technology shapes the world. Over the years, I’ve developed skills in both front-end and back-end development, with a focus on frameworks like Angular and Svelte, as well as scripting in Python.',
    },
];
</script>
<section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">

    <!-- Section Title -->
    <div class="flex flex-col items-center gap-4 text-center relative">
        <div class="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 
            before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 
            after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-1.5 after:bg-green-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl text-slate-400 uppercase tracking-wider">Want to know more</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-green-500">about</span> me
            </h3>
        </div>
        <p class="poppins font-semibold text-lg sm:text-xl md:text-2xl text-slate-300">Short Story</p>
    </div>

    <!-- Benefits Section -->
    <div class="flex flex-col gap-16 lg:gap-24 mx-auto w-full max-w-[900px]">
        {#each benefits as benefit, index}
            <div class="flex flex-col md:flex-row gap-6 sm:gap-8 items-start bg-slate-800 
                rounded-lg p-8 shadow-lg transition duration-300 hover:shadow-2xl hover:bg-slate-700">
                
                <!-- Icon or Number -->
                <div class="flex-shrink-0 text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-semibold 
                    text-green-500">
                    {index + 1}
                </div>
                
                <!-- Benefit Content -->
                <div class="flex flex-col gap-4 sm:gap-6">
                    <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 poppins">
                        {benefit.name}
                    </h3>
                    <p class="text-slate-300 leading-relaxed text-base sm:text-lg">
                        {benefit.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>