<script>
	import Hero from "../components/Hero.svelte";

</script>

<Hero />

<!-- SAMARBEIDSPARTNER -->
<section class="py-20 z-5 bg-blue-100" id="samarbeidspartner" aria-label="Samarbeidspartner">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Hvorfor Kontorportalen?</h2>
            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Valg av samarbeidspartner
            </p>
            <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-500 lg:mx-auto">
                Det er mye &aring; ta hensyn til n&aring;r man skal velge samarbeidspartner for &aring;
                utf&oslash;re oppdrag p&aring; nett.<br />
                Her er noe av det <strong class="font-bold">vi</strong> kan tilby deg!
            </p>
        </div>

        <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div>
                    <dt class="flex items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <!-- Heroicon: outline/user -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-medium leading-6 text-gray-900">Personlig oppf&oslash;lging</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Kontorportalen er et lite, men engasjert selskap - og vi bryr oss om deg som kunde!
                        Alle v&aring;re kunder f&aring;r personlig oppf&oslash;lging fra sin egen kontaktperson gjennom prosessen.
                    </dd>
                </div>

                <div>
                    <dt class="flex items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <!-- Heroicon: outline/cash -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-medium leading-6 text-gray-900">Rimelige priser</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Vi gj&oslash;r alt vi kan for &aring; redusere egne - og dermed dine - kostnader forbundet med nett.
                        M&aring;let er at du som kunde skal f&aring; gode tjenester til en overkommelig pris.
                    </dd>
                </div>

                <div>
                    <dt class="flex items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <!-- Heroicon: outline/globe-alt -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-medium leading-6 text-gray-900">Lokal, regional og nasjonal</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Vi holder fysisk til i Tr&oslash;ndelag, men vi samarbeider med kunder fra hele landet.
                        Internettverdenen &aring;pner for ulike kommunikasjonsmuligheter, og vi utnytter mange av disse.
                    </dd>
                </div>

                <div>
                    <dt class="flex items-center">
                        <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <!-- Heroicon: outline/chat-alt-2 -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-medium leading-6 text-gray-900">Fokus p&aring; det vi kan</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Vi kan ikke hjelpe deg med alt i vårt eget firma, men vi vet samtidig hva vil bruke ekstern hjelp til.
                        Vi velger å fokusere på vår styrke, som er bygging av gode websider,
                        og s&aring; bruker vi tjenester fra andre der vi selv ikke har kompetansen. Summen blir den beste opplevelsen for deg!
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</section>


<section id="websider" class="w-full py-20 bg-gray-100" aria-label="Websider">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="md:text-center">
            <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Trenger du websider?</h2>
            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Bygging av websider
            </p>
            <p class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto">
                Det vi gj&oslash;r mest av i hverdagen, er bygging og vedlikehold av websider. Vi bygger sider for
                enkeltpersoner, for lag og foreninger og for små og mellomstore bedrifter.
                Noen av de sidene vi har bygd eller v&aelig;rt konsulent til, ser du nedenfor.
            </p>

            <a href="/websider" class="inline-flex items-center justify-center h-10 gap-2 px-5 font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">Les mer om prosessen</a>
        </div>

        <!-- PORTFOLIO -->
        <div class="grid items-start grid-cols-1 gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 mx-auto">

            <!-- NAFWeb -->
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <picture>
                        <img src="images/nafweb.png" alt="Norsk anestesiologisk forening" />
                    </picture>
                </div>
            
                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold text-center text-gray-800 uppercase dark:text-white">Norsk anestesiologisk forening</h3>
            
                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="text-xs text-gray-800 dark:text-gray-200">nafweb.no</span>
                        <a class="px-2 py-1 text-xs text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 rounded dark:hover:bg-gray-600 dark:focus:bg-gray-600 focus:outline-none" href="https://www.nafweb.no" target="_blank">Besøk nettsiden</a>
                    </div>
                </div>
            </div>


            <!-- Medisinsk Simulatorsenter -->
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <picture>
                      <img src="images/simulatorsenteret.png" alt="Medisinsk SimulatorSenter" />
                    </picture>
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold text-center text-gray-800 uppercase dark:text-white">Medisinsk SimulatorSenter</h3>
            
                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="text-xs text-gray-800 dark:text-gray-200">simulatorsenteret.no</span>
                        <a class="px-2 py-1 text-xs text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 rounded dark:hover:bg-gray-600 dark:focus:bg-gray-600 focus:outline-none" href="https://www.simulatorsenteret.no" target="_blank">Besøk nettsiden</a>
                    </div>
                </div>
            </div>
        

            <!-- MedSimNorge -->
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <picture>
                      <img src="images/medsimnorge.png" alt="MedSimNorge" />
                    </picture>
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold text-center text-gray-800 uppercase dark:text-white">MedSimNorge</h3>
            
                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="text-xs text-gray-800 dark:text-gray-200">medsimnorge.no</span>
                        <a class="px-2 py-1 text-xs text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 rounded dark:hover:bg-gray-600 dark:focus:bg-gray-600 focus:outline-none" href="https://www.medsimnorge.no" target="_blank">Besøk nettsiden</a>
                    </div>
                </div>
            </div>


            <!-- Spelet -->
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <picture>
                        <img src="images/spelet.png" alt="Spelet om Heilag Olav" />
                    </picture>
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold text-center text-gray-800 uppercase dark:text-white">Spelet.no</h3>
            
                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="text-xs text-gray-800 dark:text-gray-200">spelet.no</span>
                        <a class="px-2 py-1 text-xs text-white transition-colors duration-300 transform bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 rounded dark:hover:bg-gray-600 dark:focus:bg-gray-600 focus:outline-none" href="https://www.spelet.no" target="_blank">Besøk nettsiden</a>
                    </div>
                </div>
            </div>
        </div>

        <p class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto">Hvis du ønsker å samarbeide med Kontorportalen om å bygge din neste webside, ikke nøl med å <a class="text-indigo-500 hover:text-indigo-700 focus:text-indigo-700" href="/kontakt">ta kontakt</a>!</p>
    </div>
</section>


<section id="elaring" class="w-full py-20 bg-white" aria-label="E-læring">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="md:text-center">
            <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Online l&aelig;ring</h2>
            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                E-l&aelig;ring for alle
            </p>
            <p class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto">
                Mange organisasjoner og bedrifter trenger en form for e-l&aelig;ringssystem og/eller
                sertifiseringssystem. Kontorportalen kan tilby dette, enten som l&oslash;sning bygget av oss og som inkluderer webhotell
                eller p&aring; deres egne servere.
            </p>
            <p class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto">E-læringssystemer er altså ikke begrenset til utdanningsinstitusjoner eller til nettsteder som driver 
                med e-læring som eneste aktivitet. Mange bedrifter, organisasjoner og lag bruker e-læring i større og mindre
                grad. Hvis du tror at dette kan være noe for dette, er det bare å ta kontakt!
            </p>
            <a href="/elaring"
                class="flex items-center justify-center px-8 py-3 mx-auto mt-12 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md w-72 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Les om e-l&aelig;ring
            </a>
        </div>
    </div>
</section>


<section id="pris" class="w-full py-20 bg-blue-100" aria-label="Priser">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-8 md:text-center">
            <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Lave priser</h2>
            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                V&aring;re priser
            </p>
            <p class="max-w-3xl my-4 text-xl text-gray-500 lg:mx-auto">
                V&aring;re priser avhenger i stor grad av hva du &oslash;nsker &aring; gj&oslash;re, og de er derfor avtalt individuelt for hvert prosjekt.
                For enkle oppsett har vi imidlertid noen standard priser, de finner du nedenfor.
            </p>
        </div>
    </div>

    <div class="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 grid grid-cols-2 gap-4">

        <!-- Card -->
        <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-300">
            <!-- Image -->
            <picture>
                <img src="images/hotel.jpg" alt="Illustrasjonsbilde" class="aspect-video w-full max-h-48" />
            </picture>
            <!-- Body-->
            <div class="p-6">
                <header class="mb-4">
                    <h3 class="text-xl font-bold text-slate-700">Webhotell</h3>
                </header>
        
                <p>Vi s&oslash;rger for lagringsplass, e-postadresser og domenenavn for deg. 
                NB! Ved prissamenlikning med andre, s&aring; har vi domenenavn inkludert i prisen!</p>
                <p>Webhotell med opptil 200Gb lagringsplass, opptil ubegrenset antall epostadresser og domenenavn
                (.no, .com, .net og .org) koster fra <em class="font-semibold">kun kr 100,- pr mnd</em> (eks mva).
                I tillegg kommer en engangs oppstartkostnad p&aring; kr 1000,- (eks mva).</p>
            </div>
        </div>

        <!-- Card -->
        <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-300">
            <!-- Image -->
            <picture>
                <img src="images/elearning.jpg" alt="Illustrasjonsbilde" class="aspect-video w-full max-h-48" />
            </picture>
            <!-- Body-->
            <div class="p-6">
                <header class="mb-4">
                    <h3 class="text-xl font-bold text-slate-700">E-læring</h3>
                </header>
                <p>Prisen for oppsett av e-læringssystem er todelt, avhengig om du også trenger lagringsplass:</p>
                <ul class="list-disc">
                    <li>Webhotell/lagring koster <em class="font-semibold">kun kr 100,- pr mnd</em> (eks mva).</li>
                    <li>Oppsett av l&aelig;ringssystemet ligger vanligvis mellom kr 5000,- og kr 10000,- (eks mva).</li>
                </ul>
            </div>
        </div>
    </div>
</section>