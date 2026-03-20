import '../style.css'
import QRCode from 'qrcode'

const url = 'https://links.amaurymulcey.fr'

document.documentElement.lang = 'fr'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-[297mm] w-[210mm] bg-neutral-50 text-gray-900 px-6 py-5 mx-auto font-sans text-sm">

    <section class="mb-6">
        <h1 class="text-5xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
        <h2 class="text-xl text-blue-600 font-semibold mt-1">
            Étudiant en Informatique - Candidature Technicien de Prélèvements Saisonnier
        </h2>
        <div class="flex mt-2 gap-12 text-sm text-gray-600">
            <div>
                <a href="https://www.amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                    www.amaurymulcey.fr
                </a>
            </div>
            
            <div>
                <a href="mailto:contact@amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                    amaury.mulcey.pro@gmail.com
                </a>
            </div>
            
            <p class="flex items-center gap-1">La Rochelle, France</p>
        </div>
    </section>

    <section class="grid grid-cols-[2fr_1fr] gap-6 h-[calc(297mm-7rem)]">

        <div class="flex flex-col gap-5">

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Résumé</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <p class="leading-relaxed text-gray-700">
                    Étudiant en licence scientifique, rigoureux et autonome, titulaire du Permis B,
                    je souhaite mettre à profit mes compétences en informatique et mon sens du terrain dans le cadre d'un contrat saisonnier.
                    À l'aise avec les outils numériques et les protocoles rigoureux,
                    je suis motivé par la découverte d'un milieu scientifique différent de ma formation.
                </p>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Compétences Clés</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-2">
                    <div class="flex items-start gap-2 text-xs">
                        <span class="font-semibold text-gray-800 shrink-0">Conduite & déplacements</span>
                        <span class="text-gray-400">-</span>
                        <span class="text-gray-600">Permis B (2024), habitué aux longs trajets</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                        <span class="font-semibold text-gray-800 shrink-0">Outils numériques</span>
                        <span class="text-gray-400">-</span>
                        <span class="text-gray-600">Maîtrise tablette, PC et logiciels de saisie</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                        <span class="font-semibold text-gray-800 shrink-0">Rigueur & protocoles</span>
                        <span class="text-gray-400">-</span>
                        <span class="text-gray-600">Respect des consignes strictes, traçabilité</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                        <span class="font-semibold text-gray-800 shrink-0">Sciences & analyses</span>
                        <span class="text-gray-400">-</span>
                        <span class="text-gray-600">Bases en physique-chimie (spécialité Bac)</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                        <span class="font-semibold text-gray-800 shrink-0">Terrain & physique</span>
                        <span class="text-gray-400">-</span>
                        <span class="text-gray-600">Bivouac, musculation, apte au port de charges</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Formations</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-blue-500">
                        <p class="font-semibold text-gray-800">Licence Informatique - La Rochelle Université</p>
                        <p class="text-xs text-gray-500 mt-0.5">Septembre 2023 - Aujourd'hui</p>
                        <p class="text-xs text-gray-600 mt-1">
                            Formation pluridisciplinaire couvrant algorithmique, développement logiciel,
                            systèmes, réseaux et bases de données.
                        </p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-green-500">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Erasmus - University of Galway</p>
                            <span class="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Mobilité internationale</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Septembre 2025 - Janvier 2026 · Galway, Irlande</p>
                        <p class="text-xs text-gray-600 mt-1.5">
                            Cours dispensés en anglais dans un environnement universitaire international.
                            Renforcement de l'autonomie, de l'adaptabilité et de la communication en milieu multiculturel.
                        </p>
                    </div>
                    
                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm border-l-4 border-l-blue-500">
                        <p class="font-semibold text-gray-800">Baccalauréat général - Lycée René Josué Valin</p>
                        <p class="text-xs text-gray-500 mt-0.5">Septembre 2019 - Juillet 2023</p>
                        <p class="text-xs text-gray-600 mt-1">
                            Spécialités Mathématiques, NSI et Physique-Chimie
                            Obtention du baccalauréat en 2023.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Expériences</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">

                    <div class="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-gray-800">Stagiaire - Arobaz Informatique SARL</p>
                            <span class="text-xs text-gray-400">Mars 2018 - 2 semaines</span>
                        </div>
                        <ul class="list-disc pl-4 text-gray-600 mt-2 space-y-0.5 text-xs">
                            <li>Réparation de matériel informatique et mises à jour firmware</li>
                            <li>Accueil, support clientèle et optimisation du flux en boutique</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>

        <div class="flex flex-col gap-5">

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Forces</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li>Adaptable</li>
                    <li>Rigueur</li>
                    <li>Autonome</li>
                    <li>Curieux</li>
                    <li>Esprit d'équipe</li>
                    <li>Communication</li>
                </ul>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Langues</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-3">
                <div class="space-y-3">
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span class="text-gray-700">Français</span>
                            <span class="font-semibold text-gray-800">Natif</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-full"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span class="text-gray-700">Anglais</span>
                            <span class="font-semibold text-gray-800">Intermédiaire (B2)</span>
                        </div>
                        <div class="h-2 w-full bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Autres</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li>Deug Informatique - 2025</li>
                    <li>Permis B – 2024</li>
                </ul>
            </section>

            <section>
                <h2 class="font-bold uppercase text-blue-600 text-sm tracking-widest">Passions</h2>
                <hr class="border border-blue-300 rounded-full mt-0.5 mb-2">
                <ul class="text-gray-700 pl-4 flex flex-wrap gap-x-7 gap-y-1 list-disc">
                    <li>Informatique</li>
                    <li>Aviation</li>
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
    document.querySelector<HTMLDivElement>('#qr')!.innerHTML = `
        <p class="text-xs font-semibold text-gray-600 mt-2">Scanner pour accéder à mon portfolio</p>
        <img src="${dataUrl}" alt="QR code portfolio" class="mt-1 w-26 h-26" />
    `;
});