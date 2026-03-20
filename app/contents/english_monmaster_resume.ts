import '../style.css'
import QRCode from 'qrcode'

const url = 'https://links.amaurymulcey.fr'

document.documentElement.lang = 'en'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-[297mm] w-[210mm] bg-neutral-50 text-gray-900 px-6 py-5 mx-auto font-sans text-xs">
 
    <section class="mb-4">
        <h1 class="text-5xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
        <h2 class="text-xl text-blue-600 font-semibold mt-1">
            Computer Science Student - Software, Web & Network Architect
        </h2>   
        <div class="grid grid-cols-3 mt-2 gap-4 text-xs text-gray-600">
            <a href="https://www.amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                www.amaurymulcey.fr
            </a>
            <a href="mailto:contact@amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                contact@amaurymulcey.fr
            </a>
            <p class="flex items-center gap-1">La Rochelle, France</p>
        </div>
    </section>
 
    <section class="grid grid-cols-[2fr_1fr] gap-6 h-[calc(297mm-7rem)]">
 
        <div class="flex flex-col gap-5">
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Summary</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <p class="leading-relaxed text-gray-700">
                    Currently studying for a Bachelor's degree in Computer Science at La Rochelle University,
                    I am focused on software, web & network development. Curious, rigorous and adaptable,
                    I had the opportunity to study abroad through the Erasmus program in Ireland, strengthening
                    my independence and English proficiency. I am now looking for a Master's program to put
                    my skills into practice and keep growing in a stimulating professional environment.
                </p>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Technical Skills</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Java</span>
                            <span class="font-semibold text-gray-800">Intermediate</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">JavaScript / TypeScript</span>
                            <span class="font-semibold text-gray-800">Advanced</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Rust</span>
                            <span class="font-semibold text-gray-800">Beginner</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">DBMS</span>
                            <span class="font-semibold text-gray-800">Intermediate</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">HTML / CSS</span>
                            <span class="font-semibold text-gray-800">Advanced</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Python</span>
                            <span class="font-semibold text-gray-800">Intermediate</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Git</span>
                            <span class="font-semibold text-gray-800">Advanced</span>
                        </div>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Education</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-blue-500">
                        <p class="font-semibold text-gray-800">Bachelor's in Computer Science - La Rochelle University</p>
                        <p class="text-gray-500 mt-0.5">September 2023 - Present</p>
                        <p class="text-gray-600 mt-1">
                            Multidisciplinary program covering algorithms, software development,
                            systems, networking and databases.
                        </p>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-green-500">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Erasmus - University of Galway</p>
                            <span class="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">International Exchange</span>
                        </div>
                        <p class="text-gray-500 mt-1">September 2025 - January 2026 · Galway, Ireland</p>
                        <p class="text-gray-600 mt-1.5">
                            Courses taught entirely in English within an international university setting.
                            Strengthened independence, adaptability and communication in a multicultural environment.
                        </p>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Experience</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Showcase Website - reprosport17</p>
                            <div class="flex gap-1">
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Nuxt 4</span>
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Tailwind</span>
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Deployment</span>
                            </div>
                        </div>
                        <ul class="list-disc pl-4 text-gray-600 mt-2 space-y-0.5">
                            <li>Design and development of a responsive showcase website</li>
                            <li>Deployed on a personal server with domain name management</li>
                            <li>Modern design, mobile optimization and performance tuning</li>
                        </ul>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-800">Personal & University Projects</p>
                            <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Full-stack</span>
                        </div>
                        <ul class="list-disc pl-4 text-gray-600 mt-2 space-y-0.5">
                            <li>API bridging the text chat of multiple platforms and games (Discord, Telegram, Minecraft...)</li>
                            <li>Web app designed as an extension of the Yelo app, visualizing La Rochelle's bus network</li>
                            <li>Web app for visualising fuel price statistics across petrol stations</li>
                        </ul>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Intern - Arobaz Informatique SARL</p>
                            <span class="text-gray-400">March 2018 - 2 weeks</span>
                        </div>
                        <p class="text-gray-600 mt-1">Hardware repair and customer support in a computer shop.</p>
                    </div>
 
                </div>
            </section>
        </div>
 
        <div class="flex flex-col gap-5">
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Strengths</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1.5">
                    <li><span class="font-semibold">Self-driven</span> on personal projects, with a genuine interest in software architecture challenges</li>
                    <li><span class="font-semibold">Adaptable</span>, able to integrate quickly into new environments — demonstrated during my Erasmus stay in Galway</li>
                    <li><span class="font-semibold">Rigorous</span> and <span class="font-semibold">methodical</span>, used to balancing coursework, personal and professional projects</li>
                </ul>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Languages</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">French</span>
                            <span class="font-semibold text-gray-800">Native</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-full"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">English</span>
                            <span class="font-semibold text-gray-800">Advanced (C1)</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Other</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li>DEUG in Computer Science - 2025</li>
                    <li>French Driving License - 2024</li>
                    <li>French Baccalaureate - 2023</li>
                </ul>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Interests</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="text-gray-700 pl-4 flex flex-wrap gap-x-7 gap-y-1 list-disc">
                    <li>Computer science</li>
                    <li>Weightlifting</li>
                    <li>Bivouac</li>
                </ul>
            </section>
 
            <section id="qr" class="flex flex-col items-center text-center"></section>
 
        </div>
    </section>
</div>
`

QRCode.toDataURL(url, { width: 100 }, function (err, dataUrl) {
    if (err) throw err;
    document.querySelector('#qr')!.innerHTML = `
        <p class="text-xs font-semibold text-gray-600 mt-2">Scan to access portfolio</p>
        <img src="${dataUrl}" alt="QR code portfolio" class="mt-1 w-26 h-26" />
    `;
});