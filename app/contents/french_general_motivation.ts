import '../style.css'

document.documentElement.lang = 'fr'
document.title = 'Lettre de motivation - Amaury Mulcey'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flex flex-col gap-5">
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature - [Université]</h2>
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
            je vous adresse ma candidature pour intégrer le Master 1 [nom parcour] à la rentrée 2026.
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
            de gestion de données et de relation cliente.
        </p>

        <p>
            C'est dans cette continuité que le Master [Intitulé du parcours] de [Nom de l'université] s'impose
            pour moi comme une étape déterminante.
            [PERSONNALISER — exemples :
            → Ingénierie Logicielle Rennes : « La réputation de l'ISTIC en ingénierie logicielle, la rigueur de son approche
            orientée conception et architecture, et la vitalité de l'écosystème tech rennais font de votre formation
            un cadre idéal pour approfondir mes compétences. »
            → Architecte Logiciel La Rochelle : « En tant qu'étudiant de votre université, j'ai pu mesurer la qualité
            de l'encadrement de l'UFR Informatique. Le parcours Architecte Logiciel, par son orientation professionnalisante
            et sa possibilité d'alternance, correspond précisément à mon projet : acquérir une expertise en conception
            de systèmes logiciels tout en développant une première expérience significative en entreprise. »
            → Bordeaux / Grenoble / Toulouse : « La réputation de [université] dans le domaine de l'informatique,
            la richesse du tissu industriel local et la spécialisation du parcours [nom] m'ont convaincu que votre
            formation est celle qui me permettra de progresser le plus rapidement vers mon objectif. »]
        </p>
        
        <p>
            Convaincu que votre Master me permettra de consolider mes compétences 
            [lien formation] mais aussi de poursuivre mes projets personnels avec une expertise renforcée, 
            je suis disponible pour tout entretien ou complément d'information.
        </p>

        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>

</div>
`