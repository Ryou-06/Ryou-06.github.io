<main class="flex flex-col flex-1 w-full p-0">
    <section id="homePage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        
        <div class="relative shadow-2xl flex justify-center bg-slate-950 overflow-hidden">
            <img src={"/assets/portfolio-profile1.png"} alt="Profile Image"class="object-cover object-top z-[2] max-h-[full] opacity-70 w-1/2 -ml-10 border-0 border-transparent"/>
        </div>        
        
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 nd:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl mr-10">
                Hi! I'm <span class="poppins text-green-600">Ron</span> <br>Major of
                <span class="poppins text-green-600">Information Technology</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl mr-10">
                With passion for <span class="poppins text-green-600">Technology</span> and <span class="poppins text-green-600">Problem Solving</span>. <br>This portfolio showcases my projects, skills, and the journey I'm taking as I learn and grow in the IT field. Feel free to explore my work and get in touch if you'd like to connect!
            </p>            
            <a 
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
                relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
                cursor-pointer"
                href="#homePage"
                target="_blank"
            >
                <div 
                    class="absolute top-0 right-full w-full h-full bg-green-800 opacity-20s
                    group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
    </section>
</main>

