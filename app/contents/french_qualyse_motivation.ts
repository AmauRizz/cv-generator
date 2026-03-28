import '../style.css'

document.documentElement.lang = 'fr'
document.title = 'Lettre de motivation - Amaury Mulcey'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flex flex-col gap-5">
    <!-- En-tête -->
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature - Technicien de Prélèvements Saisonnier</h2>
            <div class="flex gap-4 mt-2 text-xs text-gray-500">
                <a href="https://www.amaurymulcey.fr" class="hover:text-blue-600">www.amaurymulcey.fr</a>
                <a href="mailto:contact@amaurymulcey.fr" class="hover:text-blue-600">contact@amaurymulcey.fr</a>
                <a href="tel:+33623466630" class="hover:text-blue-600">+33 6 23 46 66 30</a>
            </div>
        </div>
        <div class="text-right text-xs text-gray-500 mt-1">
            <p>La Rochelle, le 20 mars 2026</p>
            <p class="mt-2 font-semibold text-gray-700">Gwénaëlle DANIC</p>
            <p>Responsable planification</p>
            <p>Qualyse - Site de La Rochelle</p>
        </div>
    </section>

    <hr class="border border-blue-300 rounded-full">

    <!-- Objet -->
    <section>
        <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Objet</p>
        <p class="text-sm font-semibold text-gray-800">Candidature au poste de Technicien de Prélèvements Saisonnier</p>
    </section>

    <!-- Corps -->
    <section class="flex flex-col gap-4 text-gray-700 leading-relaxed text-base flex-1">

        <p>Madame, Monsieur,</p>

        <p>
            Actuellement en troisième année de Licence Informatique à La Rochelle Université, je vous adresse
            ma candidature pour le poste de Technicien de Prélèvements Saisonnier au sein de votre laboratoire
            Qualyse pour l'été 2026. Mon parcours, bien qu'ancré dans l'informatique, m'a conduit à développer
            une rigueur méthodologique et un goût pour le travail de terrain que je souhaite mettre au service
            d'un domaine qui me tient à cœur, la qualité environnementale.
        </p>

        <p>
            Ma formation m'a appris à suivre des protocoles stricts, à documenter avec précision et à assurer
            la traçabilité des données, des réflexes que je considère directement transposables au suivi des
            échantillons et à leur enregistrement. Par ailleurs, ma maîtrise des outils numériques (tablettes,
            logiciels de saisie) me permettra de m'adapter rapidement à vos systèmes sans temps d'apprentissage significatif.
        </p>

        <p>
            Mon parcours est également marqué par un attrait fort pour le terrain et la conduite. Titulaire
            du permis B depuis 2024, j’apprécie particulièrement la conduite. Lors de mon semestre Erasmus,
            j'ai effectué un road trip depuis La Rochelle jusqu'à Galway, en Irlande, en parcourant de longues
            distances seul dans un environnement inconnu. Les tournées quotidiennes sur le département
            17 représentent pour moi non pas une contrainte, mais une réelle motivation. Pratiquant la
            musculation et habitué au bivouac, je suis également à l'aise avec les exigences physiques du poste.
        </p>

        <p>
            Je suis conscient que mon profil est davantage généraliste que spécialisé en chimie
            ou en environnement. C'est précisément pour cette raison que le dispositif de formation et de
            parrainage que vous proposez à la prise de poste me convient pleinement. Il me permettra
            d'acquérir les habilitations nécessaires dans les meilleures conditions.
        </p>

        <p>
            Je reste à votre disposition pour tout entretien ou complément d'information, et vous adresse,
            Madame, Monsieur, mes sincères salutations.
        </p>

        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>

</div>
`