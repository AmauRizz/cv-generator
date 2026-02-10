import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-[297mm] w-[210mm] bg-white text-black-classic p-8 mx-auto space-y-12">
    <section class="space-y-4">
        <article class="">
            <h1 class="text-5xl font-bold">MULCEY Amaury</h1>
            <h2 class="text-2xl text-important font-bold">Étudiant en Informatique</h2>
        </article>
        
        <article class="grid grid-cols-3">
            <div>
                <a href="mailto:contact@amaurymulcey.fr">contact@amaurymulcey.fr</a>
            </div>
            
            <div>
                <p>La Rochelle, France</p>
            </div>
        </article>
    </section>

    <section class="grid grid-cols-2 gap-4">
        <div class="space-y-8">
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Objectif de vie</h2>
                <hr class="border-2 rounded-full" />
            </section>
            
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Education</h2>
                <hr class="border-2 rounded-full" />
            </section>
            
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Experience</h2>
                <hr class="border-2 rounded-full" />
            </section>
            
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Langages</h2>
                <hr class="border-2 rounded-full" />
            </section>
        </div>
        
        <div class="space-y-8">
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Forces</h2>
                <hr class="border-2 rounded-full" />
            </section>
        
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Compétences</h2>
                <hr class="border-2 rounded-full" />
            </section>
            
            <section class="space-y-2">
                <h2 class="text-2xl font-bold">Passions</h2>
                <hr class="border-2 rounded-full" />
            </section>
        </div>
    </section>
  </div>
`