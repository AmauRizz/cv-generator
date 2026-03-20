import '../style.css'
import QRCode from 'qrcode'

const url = 'https://links.amaurymulcey.fr'

document.documentElement.lang = 'fr'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-[297mm] w-[210mm] bg-neutral-50 text-gray-900 px-6 py-5 mx-auto font-sans text-sm flex flex-col gap-5">

    <!-- En-tête -->
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature — Technicien de Prélèvements Saisonnier</h2>
            <div class="flex gap-4 mt-2 text-xs text-gray-500">
                <span>contact@amaurymulcey.fr</span>
                <span>La Rochelle, France</span>
                <span>Permis B</span>
            </div>
        </div>
        <div class="text-right text-xs text-gray-500 mt-1">
            <p>La Rochelle, le [DATE]</p>
            <p class="mt-2 font-semibold text-gray-700">Gwénaëlle DANIC</p>
            <p>Responsable planification</p>
            <p>QUALYSE — Site de La Rochelle</p>
        </div>
    </section>

    <hr class="border border-blue-300 rounded-full">

    <!-- Objet -->
    <section>
        <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Objet</p>
        <p class="text-sm font-semibold text-gray-800">Candidature au poste de Technicien de Prélèvements Saisonnier — Site de La Rochelle</p>
    </section>

    <!-- Corps -->
    <section class="flex flex-col gap-4 text-gray-700 leading-relaxed text-xs flex-1">

        <!-- Accroche -->
        <p>
            Madame, Monsieur,
        </p>
        <p>
            Étudiant en licence informatique à La Rochelle Université, je vous adresse ma candidature pour le poste de Technicien de Prélèvements Saisonnier au sein de votre laboratoire QUALYSE. Curieux et attiré par les sciences de l'environnement, je souhaite mettre à profit l'été [ANNÉE] pour découvrir un milieu professionnel de terrain, loin de mon quotidien derrière un écran.
        </p>

        <!-- Apports -->
        <div>
            <p class="font-semibold text-blue-600 uppercase tracking-widest text-xs mb-2">Ce que j'apporte</p>
            <div class="space-y-1.5">
                <div class="flex items-start gap-2">
                    <span class="text-gray-400 shrink-0">—</span>
                    <p><span class="font-semibold text-gray-800">Rigueur & respect des protocoles</span> — Ma formation universitaire m'a appris à suivre des consignes strictes et à documenter avec précision, des réflexes directement utiles pour la traçabilité des échantillons.</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="text-gray-400 shrink-0">—</span>
                    <p><span class="font-semibold text-gray-800">Maîtrise des outils numériques</span> — À l'aise avec tablettes et logiciels de saisie, je m'adapte rapidement à tout nouvel outil informatique.</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="text-gray-400 shrink-0">—</span>
                    <p><span class="font-semibold text-gray-800">Mobilité & terrain</span> — Titulaire du Permis B depuis 2024, habitué aux déplacements et aux sorties en plein air (bivouac, musculation), je suis à l'aise pour les tournées quotidiennes sur le département.</p>
                </div>
                <div class="flex items-start gap-2">
                    <span class="text-gray-400 shrink-0">—</span>
                    <p><span class="font-semibold text-gray-800">Bases scientifiques</span> — Ayant suivi la spécialité Physique-Chimie jusqu'en Première, je dispose d'un socle pour comprendre et appliquer les protocoles de prélèvement.</p>
                </div>
            </div>
        </div>

        <!-- Motivation -->
        <p>
            Je suis conscient que mon parcours est davantage orienté informatique que sciences de l'environnement. C'est précisément pour cette raison que ce poste m'attire : la période de formation et le système de parrainage que vous proposez me permettront d'acquérir rapidement les habilitations nécessaires. Je suis motivé, disponible et prêt à m'investir pleinement dès [DATE DE DÉBUT].
        </p>

        <!-- Conclusion -->
        <p>
            Je reste à votre disposition pour un entretien à votre convenance et vous adresse, Madame, Monsieur, mes sincères salutations.
        </p>

        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>

    <!-- QR -->
    <section id="qr" class="flex items-center gap-3 border-t border-gray-200 pt-3">
        <div class="text-xs text-gray-500">
            <p>www.amaurymulcey.fr</p>
        </div>
    </section>

</div>
`

QRCode.toDataURL(url, { width: 80 }, function (err, dataUrl) {
    if (err) throw err;
    document.querySelector<HTMLDivElement>('#qr')!.innerHTML = `
        <img src="${dataUrl}" alt="QR code portfolio" class="w-12 h-12" />
        <div class="text-xs text-gray-500">
            <p class="font-semibold text-gray-700">www.amaurymulcey.fr</p>
            <p>Scanner pour accéder au portfolio</p>
        </div>
    `;
});