<script lang="ts">
    import { page } from "$app/stores";
	import { url } from "inspector";

    let showMenu = false;

    function toggleMobileMenu() {
        showMenu = !showMenu;
    }

    /* Navigation menu items */
    const navitems = [
        {"title" : "Hjem",
        "href" : "/"},
        {"title" : "Websider",
        "href" : "/websider"},
        {"title" : "E-læring",
        "href" : "/elaring"},
        {"title" : "Kontakt oss",
        "href" : "/kontakt"},
    ];

</script>

<!-- Component: Navbar -->
<header class="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
    <div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav aria-label="Hovedmeny" class="flex flex-col sm:flex-row h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
            <!-- Logo -->
            <a id="Kontorportalen" 
                aria-label="Kontorportalen logo"
                class="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1" 
                href="/">
                    <img src="images/logo_kp_SvartHvit.png" alt="Kontorportalen logo" class="h-8 w-48 mr-2">
            </a>
            <!-- Mobile trigger -->
            <button 
                id="mobile_menu_trigger"
                class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" 
                on:click={toggleMobileMenu}
                aria-expanded="{showMenu ? 'true' : 'false'}"
                aria-label="Vis/skjul navigasjon">
                <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span aria-hidden="true" class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                    <span aria-hidden="true" class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                    <span aria-hidden="true" class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                </div>
            </button>

            <!-- Navigation links -->
            <ul role="menubar" 
                aria-label="Velg side for navigering" 
                class="{showMenu ? 'flex' : 'invisible'} absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium {showMenu ? 'opacity-100' : 'opacity-0'} transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
                
                {#each navitems as navitem}
                    <li role="none" class="flex flex-col sm:flex-row items-stretch">
                        <a role="menuitem"
                            aria-current={$page.url.pathname === navitem.href ? 'page' : undefined}
                            aria-haspopup="false" 
                            tabindex="0"
                            on:click={toggleMobileMenu}
                            class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                            href={navitem.href}> <span>{navitem.title}</span>
                        </a>
                    </li>
                {/each}
            </ul>

        </nav>
    </div>
</header>
<!-- End Navbar-->