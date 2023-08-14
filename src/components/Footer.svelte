<script>
    import CarbonBadge from 'svelte-carbonbadge';
</script>
<!-- FOOTER -->
<footer class="bg-gray-800 sm:mt-10">
    <div class="grid grid-cols-3 max-w-6xl m-auto text-gray-800">

        <!-- Kolonne 1 -->
        <div class="p-5">
            <!-- Tittel -->
            <div class="mb-6 text-xs font-medium text-gray-400 uppercase">Om oss</div>

            <!-- Adresse -->
            <a href="/"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Kontorportalen
            </a>
            <address class="block my-3 text-sm font-medium text-gray-300">Lektor Musums gt 17, 7650 Verdal</address>
            <span class="block my-3 text-sm font-medium text-gray-300">Org.nr 926 587 129</span>

            <div id="wcb" class="carbonbadge wcb-d"></div>

            <a href="/personvern"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Personvernerklæring
            </a>
            
        </div>

        <!-- Kolonne 2 -->
        <div class="p-5">
            <!-- Tittel -->
            <div class="mb-6 text-xs font-medium text-gray-400 uppercase">Navigasjon</div>

            <!-- Meny -->
            <a href="/websider"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Websider
            </a>
            <a href="/elaring"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                E-l&aelig;ring
            </a>
            <!-- BILLETTSYSTEM TO COME
                <a href="/events" class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Billettsystem
            </a>
            -->
            <a href="/#pris" 
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Pris
            </a>
            <a href="/kontakt"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Kontakt oss
            </a>
        </div>

        <!-- Kolonne 3 -->
        <div class="p-5">
            <!-- Tittel -->
            <div class="mb-6 text-xs font-medium text-gray-400 uppercase">Sosiale media</div>

            <!-- Lenker -->
            <a href="https://www.facebook.com/kontorportalen" target="_blank"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Facebook
            </a>
            <a href="https://www.twitter.com/kontorportalen" target="_blank"
                class="block my-3 text-sm font-medium text-gray-300 duration-700 hover:text-gray-100">
                Twitter / X
            </a>

            <!-- Website Carbon footprint -->
            <CarbonBadge />
        </div>

        <!-- Copyright -->
        <div class="pt-2">
            <div
                class="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-400 border-t border-gray-500 md:flex-row">
                <span class="mt-2">&copy; Kontorportalen 2023. All Rights Reserved.</span>
            </div>
        </div>
    </div>
</footer>