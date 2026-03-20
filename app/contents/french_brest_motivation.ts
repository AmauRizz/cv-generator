import '../style.css'

document.documentElement.lang = 'fr'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flex flex-col gap-5">
    <section class="flex justify-between items-start">
        <div>
            <h1 class="text-4xl font-bold text-gray-800 tracking-tight">MULCEY Amaury</h1>
            <h2 class="text-base text-blue-600 font-semibold mt-1">Candidature - Université de Bretagne Occidentale</h2>
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
            je vous adresse ma candidature pour intégrer le Master 1 logiciel pour systèmes embarqués à la rentrée 2026.
            Mon parcours académique a été enrichi d'un semestre de mobilité internationale Erasmus à l'Université de Galway,
            en Irlande, où l'ensemble de mes cours étaient dispensés en anglais. Cette expérience m'a permis de développer
            une réelle capacité d'adaptation à des environnements exigeants et de m'intégrer rapidement dans une nouvelle
            communauté, qualités que je souhaite désormais mettre en application dans votre formation spécialisée en
            développement de logiciel pour des systèmes embarqués.
        </p>

        <p>
            Ma licence m'a fourni des bases solides en algorithmique, programmation orientée objet,
            bases de données et architecture des systèmes. En parallèle, j'ai initié plusieurs projets personnels
            qui reflètent ma curiosité pour la conception de solutions concrètes: un site de visualisation statistique
            des prix du carburant en France, un site web modélisant le réseau de bus de La Rochelle conçu
            comme une extension de l'application Yelo, et une application web et mobile dédiée à l'organisation
            d'événements culturels. Ces projets, menés en autonomie, m'ont confronté à des problématiques réelles
            d'architecture, d'interface utilisateur et de gestion de données. Également en tant qu'auto-entrepreneur j'ai eu
            à faire un site vitrine pour un garage rochelais, développant ainsi ma relation client. 
        </p>

        <p>
            C'est dans cette continuité que le Master LSE Logiciel pour Systèmes Embarqués de 
            l'Université de Bretagne Occidentale s'impose pour moi comme une étape déterminante. 
            La spécialisation de votre formation à l'intersection du logiciel et du matériel systèmes d'exploitation embarqués. 
            Mais aussi des objets connectés, sûreté de fonctionnement, IA embarquée représente un domaine que je souhaitais explorer 
            plus en profondeur. La réputation de l'UBO dans ce domaine, portée par un ancrage fort dans 
            l'écosystème défense, naval et industriel breton, ainsi que la progressivité du parcours 
            du M1 généraliste vers un M2 entièrement dédié à l'embarqué font de votre formation le cadre idéal 
            pour acquérir une expertise solide et opérationnelle dans ce secteur en forte demande.
        </p>
        
        <p>
            Convaincu que votre Master me permettra de consolider mes compétences 
            en conception logicielle mais aussi de poursuivre mes projets personnels avec une expertise renforcée, 
            je suis disponible pour tout entretien ou complément d'information.
        </p>

        <p class="font-semibold text-gray-800 mt-2">Amaury MULCEY</p>
    </section>

</div>
`