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

    <div 
        class="flex flex-col gap-2 text-center relative before:absolute before:top-0
        before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0
        after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4">

        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span class="poppins text-green-500">about</span> me</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            Short Story
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-xl text-slate-500 font-semibold">
                        
                    </p>
                        <div class="flex flex-col gap-6 sm:gap-8">
                            <h3 class="text-2xl sm:text-3xl md:text-5xl text-green-400">
                                {benefit.name}
                            </h3>
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                {/each}
        </div>
    </section>