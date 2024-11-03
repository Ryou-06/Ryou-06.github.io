<script>
    import Step from "./Step.svelte";

    let steps = [
        {name: 'CEPA', icon: 'fa-solid fa-clipboard-user'},
        {name: 'JobHubConnect', icon: 'fa-solid fa-magnifying-glass'},
        {name: 'Calculator', icon: 'fa-solid fa-calculator'},
    ];

        // function image slideshow for CEPA
        let currentImageIndexCEPA = 0;
    const imagesCEPA = [
        '/assets/cepa/Screenshot 2024-05-22 205440.png',
        '/assets/cepa/Screenshot 2024-05-22 205453.png',
        '/assets/cepa/Screenshot 2024-04-28 221443.png',
        '/assets/cepa/Screenshot 2024-05-22 204851.png',
    ];

    function nextImageCEPA() {
        currentImageIndexCEPA = (currentImageIndexCEPA + 1) % imagesCEPA.length;
    }

    // function image slideshow for JobHubConnect
    let currentImageIndexJobHub = 0;
    const imagesJobHub = [
        '/assets/jobhub/Screenshot 2024-10-10 191126.png',
        '/assets/jobhub/Screenshot 2024-10-10 191137.png',
        '/assets/jobhub/Screenshot 2024-10-10 191149.png',
    ];

    function nextImageJobHub() {
        currentImageIndexJobHub = (currentImageIndexJobHub + 1) % imagesJobHub.length;
    }

    // function image slideshow for Calculator
    let currentImageIndexCalculator = 0;
    const imagesCalculator = [
        '/assets/calculator/Screenshot 2024-10-10 190230.png',
        '/assets/calculator/Screenshot 2024-10-10 190257.png',
        '/assets/calculator/Screenshot 2024-10-10 190321.png',
    ];

    function nextImageCalculator() {
        currentImageIndexCalculator = (currentImageIndexCalculator + 1) % imagesCalculator.length;
    }

    // Function image slideshow for School Works
    let currentImageIndexSchoolWorks = 0;
    const imagesSchoolWorks = [
        '/assets/schoolsworks/Screenshot 2023-10-04 183955.png',
        '/assets/schoolsworks/Screenshot 2023-10-26 122314.png',
        '/assets/schoolsworks/Screenshot 2023-11-20 212954.png',
        '/assets/schoolsworks/Screenshot 2023-11-21 211718.png',
        '/assets/schoolsworks/Screenshot 2024-02-09 223216.png',
        '/assets/schoolsworks/Screenshot 2024-04-09 135618.png',
        '/assets/schoolsworks/Screenshot 2024-04-15 215954.png',
        '/assets/schoolsworks/Screenshot 2024-04-18 132533.png',
    ];

    function nextImageSchoolWorks() {
        currentImageIndexSchoolWorks = (currentImageIndexSchoolWorks + 1) % imagesSchoolWorks.length;
    }

</script>

<section id="portfolio" class="py-20 lg:py-32 flex flex-col gap-16">
    <!-- Header Section -->
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-lg sm:text-xl md:text-2xl text-green-500">Explore My Work!</h6>
        <h3 class="font-bold text-3xl sm:text-4xl md:text-5xl text-slate-200">Click the Video Below!</h3>
    </div>

    <!-- Video Link -->
    <a 
        href="https://youtu.be/BD7bRPww96E"
        target="_blank"
        class="mx-auto px-6 py-3 rounded-md border border-solid border-slate-600 bg-black hover:border-green-700 flex items-center gap-3 mb-6
        transition duration-300">
        <i class="fa-regular fa-circle-play text-green-500 text-xl"></i>
        <p class="text-lg font-semibold text-white">Watch Project Video</p>
    </a>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        
        <!-- Project 1: CEPA -->
        <Step step={steps[0]}>
            <p>Community Extension Participation and Attendance is an online website/mobile application created with
                <strong class="text-green-700">Angular Framework, PHP, and HTML</strong>.
                It’s a platform focused on registration and attendance tracking for community events.
            </p>
        </Step>

        <!-- Project 2: JobHubConnect -->
        <Step step={steps[1]}>
            <p>JobHubConnect is a website designed with
                <strong class="text-green-600">PHP, HTML, and MySQL</strong>.
                It connects job seekers and employers, making it easier to apply and find jobs.
            </p>
        </Step>

        <!-- Project 3: Calculator -->
        <Step step={steps[2]}>
            <p>Calculator is a mobile app developed using
                <strong class="text-green-600">Python and JavaScript</strong>.
                It simplifies both basic and scientific calculations.
            </p>
        </Step>

        <!-- CEPA Slideshow -->
        <div class="relative flex flex-col justify-center items-center gap-4">
            <h3 class="font-bold text-2xl text-green-500">CEPA</h3>
            <div class="w-full max-w-md h-64 flex justify-center items-center">
                <img src={imagesCEPA[currentImageIndexCEPA]} alt="CEPA Project Image" class="w-auto h-auto max-h-full object-contain rounded-lg shadow-lg border border-slate-700"/>
            </div>
            <button 
                on:click={nextImageCEPA}
                class="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 shadow">
                Next Image
            </button>
        </div>

        <!-- JobHubConnect Slideshow -->
        <div class="relative flex flex-col justify-center items-center gap-4">
            <h3 class="font-bold text-2xl text-green-500">JobHubConnect</h3>
            <div class="w-full max-w-md h-64 flex justify-center items-center">
                <img src={imagesJobHub[currentImageIndexJobHub]} alt="JobHubConnect Project Image" class="w-auto h-auto max-h-full object-contain rounded-lg shadow-lg border border-slate-700"/>
            </div>
            <button 
                on:click={nextImageJobHub}
                class="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 shadow">
                Next Image
            </button>
        </div>

        <!-- Calculator Slideshow -->
        <div class="relative flex flex-col justify-center items-center gap-4">
            <h3 class="font-bold text-2xl text-green-500">Calculator</h3>
            <div class="w-full max-w-md h-64 flex justify-center items-center">
                <img src={imagesCalculator[currentImageIndexCalculator]} alt="Calculator Project Image" class="w-auto h-auto max-h-full object-contain rounded-lg shadow-lg border border-slate-700"/>
            </div>
            <button 
                on:click={nextImageCalculator}
                class="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 shadow">
                Next Image
            </button>
        </div>

        <!-- School Works Slideshow -->
        <div class="relative flex flex-col justify-center items-center gap-4 lg:col-span-3">
            <h3 class="font-semibold text-4xl text-green-500">School Works</h3>
            <div class="w-full max-w-xl h-80 flex justify-center items-center">
                <img src={imagesSchoolWorks[currentImageIndexSchoolWorks]} alt="School Works Image" class="w-auto h-auto max-h-full object-contain rounded-lg shadow-lg border border-slate-700"/>
            </div>
            <button 
                on:click={nextImageSchoolWorks} 
                class="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 shadow">
                Next Image
            </button>
        </div>
    </div>
</section>
