import '../style.css'
import QRCode from 'qrcode'

const url = 'https://links.amaurymulcey.fr'

document.documentElement.lang = 'fr'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-[297mm] w-[210mm] bg-neutral-50 text-gray-900 px-6 py-5 mx-auto font-sans text-xs">
 
    <section class="mb-4">
        <h1 class="text-5xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
        <h2 class="text-xl text-blue-600 font-semibold mt-1">
            Étudiant en Informatique - Architecte logiciel, web & réseau
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
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Résumé</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <p class="leading-relaxed text-gray-700">
                    Actuellement étudiant en licence informatique à La Rochelle Université, je m'oriente vers
                    le développement logiciel, web & réseau. Curieux, rigoureux et adaptable, j'ai eu
                    l'opportunité de réaliser une mobilité à l'étranger dans le cadre du programme Erasmus, en Irlande, renforçant mon
                    autonomie et mon aisance en anglais. Je cherche maintenant une formation initiale ou en alternance
                    pour mettre en pratique mes compétences et continuer à progresser dans un environnement professionnel stimulant.
                </p>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Compétences Techniques</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Java</span>
                            <span class="font-semibold text-gray-800">Intermédiaire</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">JavaScript / TypeScript</span>
                            <span class="font-semibold text-gray-800">Avancé</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Rust</span>
                            <span class="font-semibold text-gray-800">Débutant</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">SGBD</span>
                            <span class="font-semibold text-gray-800">Intermédiaire</span>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">HTML / CSS</span>
                            <span class="font-semibold text-gray-800">Avancé</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Python</span>
                            <span class="font-semibold text-gray-800">Intermédiaire</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-gray-700">Git</span>
                            <span class="font-semibold text-gray-800">Avancé</span>
                        </div>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Formations</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-blue-500">
                        <p class="font-semibold text-gray-800">Licence Informatique - La Rochelle Université</p>
                        <p class="text-gray-500 mt-0.5">Septembre 2023 - Aujourd'hui</p>
                        <p class="text-gray-600 mt-1">
                            Formation pluridisciplinaire couvrant algorithmique, développement logiciel,
                            systèmes, réseaux et bases de données.
                        </p>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-green-500">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Erasmus - University of Galway</p>
                            <span class="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Mobilité internationale</span>
                        </div>
                        <p class="text-gray-500 mt-1">Septembre 2025 - Janvier 2026 · Galway, Irlande</p>
                        <p class="text-gray-600 mt-1.5">
                            Cours dispensés en anglais dans un environnement universitaire international.
                            Renforcement de l'autonomie, de l'adaptabilité et de la communication en milieu multiculturel.
                        </p>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Expériences</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Site vitrine - reprosport17</p>
                            <div class="flex gap-1">
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Nuxt 4</span>
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Tailwind</span>
                                <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Déploiement</span>
                            </div>
                        </div>
                        <ul class="list-disc pl-4 text-gray-600 mt-2 space-y-0.5">
                            <li>Conception et développement d'un site vitrine responsive</li>
                            <li>Déploiement sur serveur personnel avec gestion du nom de domaine</li>
                            <li>Design moderne, optimisation mobile et performances</li>
                        </ul>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-800">Projets personnels & Universitaire</p>
                            <span class="bg-gray-100 text-gray-600 font-medium px-1.5 py-0.5 rounded">Full-stack</span>
                        </div>
                        <ul class="list-disc pl-4 text-gray-600 mt-2 space-y-0.5">
                            <li>API connectant le chat écrit de plusieurs plateformes et jeux (Discord, Telegram, Minecraft...)</li>
                            <li>Application web pensée comme une extension de l'application Yelo, visualisant le réseau de bus rochelais</li>
                            <li>Application web permettant de visualiser des stats sur le prix du carburant en station-service</li>
                        </ul>
                    </div>
 
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Stagiaire - Arobaz Informatique SARL</p>
                            <span class="text-gray-400">Mars 2018 - 2 semaines</span>
                        </div>
                        <p class="text-gray-600 mt-1">Réparation matériel, support clientèle en boutique informatique.</p>
                    </div>
 
                </div>
            </section>
        </div>
 
        <div class="flex flex-col gap-5">
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Forces</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1.5">
                    <li><span class="font-semibold">Autonome</span> sur mes projets personnels, avec une vraie appétence pour les problématiques d'architecture</li>
                    <li><span class="font-semibold">Adaptable</span>, capable de m'intégrer rapidement dans un nouvel environnement, cette capacité a été prouvée lors de mon Erasmus à Galway</li>
                    <li><span class="font-semibold">Rigoureux</span> et <span class="font-semibold">méthodique</span>, habitué à alterner entre cours, projets perso et professionnel</li>
                </ul>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Langues</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">Français</span>
                            <span class="font-semibold text-gray-800">Natif</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-full"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">Anglais</span>
                            <span class="font-semibold text-gray-800">Avancé (C1)</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Autres</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li>Deug Informatique - 2025</li>
                    <li>Permis B – 2024</li>
                    <li>Baccalauréat - 2023</li>
                </ul>
            </section>
 
            <section>
                <h2 class="font-bold uppercase text-blue-600 text-xs tracking-widest">Passions</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="text-gray-700 pl-4 flex flex-wrap gap-x-7 gap-y-1 list-disc">
                    <li>Informatique</li>
                    <li>Musculation</li>
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
        <p class="text-xs font-semibold text-gray-600 mt-2">Scanner pour accéder au portfolio</p>
        <img src="${dataUrl}" alt="QR code portfolio" class="mt-1 w-26 h-26" />
    `;
});