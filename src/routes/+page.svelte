<main class="flex flex-col flex-1 w-full p-0 text-slate-200">
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <!-- Profile Image Section -->
        <div class="relative shadow-2xl flex justify-center bg-slate-950 overflow-hidden">
            <img src={"/assets/portfolio-profile1.png"} alt="Profile Image" 
                class="object-cover object-top z-[2] max-h-full opacity-80 w-1/2 -ml-10 border-0 border-transparent"/>
        </div>

        <!-- Text Content Section -->
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl pr-4 lg:pr-10 text-slate-100"
                style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);">
                Hi! I'm <span class="poppins text-green-500">Ron</span> <br>Major of
                <span class="poppins text-green-500">Information Technology</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl pr-4 lg:pr-10 text-slate-300 leading-relaxed">
                With a passion for <span class="poppins text-green-500">Technology</span> and <span class="poppins text-green-500">Problem Solving</span>. <br>This portfolio showcases my projects, skills, and the journey I'm taking as I learn and grow in the IT field. Feel free to explore my work and get in touch if you'd like to connect!
            </p>

            <!-- Get in Touch Button -->
            <a 
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
                relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
                cursor-pointer transition-all duration-300 shadow-lg hover:bg-green-500 hover:text-white"
                href="#contact" 
                target="_self"
                aria-label="Get in touch"
            >
                <div 
                    class="absolute top-0 left-0 w-full h-full bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                ></div>
                <h4 class="relative z-10">Get in touch &rarr;</h4>
            </a>
        </div>
    </section>
</main>
