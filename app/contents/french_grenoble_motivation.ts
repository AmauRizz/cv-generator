import '../style.css'

document.documentElement.lang = 'fr'
document.title = 'Lettre de motivation - Amaury Mulcey'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flex flex-col gap-5">
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature - Université Grenoble Alpes</h2>
            <div class="flex gap-4 mt-2 text-xs text-gray-500">
                <a href="https://www.amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                    www.amaurymulcey.fr
                </a>
                <a href="mailto:contact@amaurymulcey.fr" class="hover:text-blue-600 flex items-center gap-1">
                    contact@amaurymulcey.fr
                </a>
                <a href="tel:+33623466630" class="hover:text-blue-600 flex items-center gap-1">
                    +33.6.23.46.66.30
                </a>
            </div>
        </div>
    </section>

    <hr class="border border-blue-300 rounded-full">

    <section>
        <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Objet</p>
        <p class="text-sm font-semibold text-gray-800">Candidature en Master 1 Informatique</p>
    </section>

    <section class="text-base flex flex-col gap-4 text-gray-700 leading-relaxed flex-1">
        <p>
            Madame, Monsieur,
        </p>

        <p>
            Actuellement en troisième année de Licence Informatique à La Rochelle Université,
            je vous adresse ma candidature pour intégrer le Master 1 Informatique de l'Université Grenoble Alpes
            à la rentrée 2026.
            Mon parcours académique a été enrichi d'un semestre de mobilité internationale Erasmus à l'Université de Galway,
            en Irlande, où l'ensemble de mes cours étaient dispensés en anglais. Cette expérience m'a permis de développer
            une réelle capacité d'adaptation à des environnements exigeants et de m'intégrer rapidement dans une nouvelle
            communauté, qualités que je souhaite désormais mettre en application dans votre formation.
        </p>

        <p>
            Ma licence m'a fourni des bases solides en algorithmique, programmation orientée objet,
            bases de données et architecture des systèmes. En parallèle, j'ai initié plusieurs projets personnels
            qui reflètent ma curiosité pour la conception de solutions concrètes. Un site de visualisation statistique
            des prix du carburant en France, un site web modélisant le réseau de bus de La Rochelle conçu
            comme une extension de l'application Yelo, et une application web et mobile dédiée à l'organisation
            d'événements culturels. J'ai également réalisé bénévolement le site vitrine d'un garage rochelais,
            en prenant en charge la création de zéro ainsi que l'hébergement et la maintenance.
            Ces projets, réalisés en autonomie, m'ont confronté à des problématiques d'architecture,
            de gestion de données et de relation client.
        </p>

        <p>
            C'est dans cette continuité que le Master Informatique de l'Université Grenoble Alpes s'impose
            pour moi comme une étape déterminante. La réputation de l'UGA en informatique, et plus
            particulièrement la profondeur des parcours proposés en M2, couvrant des domaines aussi variés
            que l'ingénierie logicielle, la sécurité, les systèmes distribués ou l'intelligence artificielle,
            me permettrait de construire un socle de compétences avancées avant de me spécialiser en connaissance
            de cause. La vitalité de l'écosystème technologique grenoblois, avec la présence de grands acteurs
            industriels et de laboratoires de recherche de premier plan.
        </p>

        <p>
            Convaincu que votre Master me permettra de consolider mes compétences en conception logicielle
            et architecture de systèmes, tout en m'ouvrant à de nouvelles spécialisations ambitieuses,
            je reste disponible pour tout entretien ou complément d'information.
        </p>

        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>

</div>
`