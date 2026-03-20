import '../style.css'

document.documentElement.lang = 'fr'
document.title = 'Lettre de motivation - Amaury Mulcey'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-[297mm] w-[210mm] bg-neutral-50 text-gray-900 px-6 py-5 mx-auto font-sans text-sm flex flex-col gap-5">
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature - Université de Bordeaux</h2>
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
            je vous adresse ma candidature pour intégrer le Master 1 informatique à la rentrée 2026.
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
 
        <p>
            C'est dans cette continuité que le Master Informatique de l'Université de Bordeaux représente
            pour moi une étape déterminante. La richesse des parcours de M2 proposés, 
            notamment les parcours Ingénierie de l'informatique et Génie logiciel 
            correspondent précisément à la trajectoire que je souhaite construire. 
            Bordeaux, par son rayonnement national, constitue par ailleurs 
            un environnement particulièrement propice à la recherche de stage 
            dans ces secteurs. De surcroît, étant né à Bordeaux et y conservant des attaches familiales, 
            cette candidature s'inscrit aussi dans un retour vers une ville que 
            je connais et dont je souhaite intégrer l'écosystème numérique.
        </p>
 
        <p>
            Convaincu que votre Master me permettra de consolider mes compétences en conception logicielle et 
            de m'épanouir dans l'écosystème bordelais, je suis disponible pour tout entretien ou complément d'information.
        </p>
 
        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>
 
</div>
`