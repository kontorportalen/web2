<script lang="ts">
  import "../app.css";
  import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
  import { CookieManager } from '@boxfish-studio/sveltekit-cookie-manager';
	import type { SKCMConfiguration } from '@boxfish-studio/sveltekit-cookie-manager';

	const configuration: SKCMConfiguration = {
		disclaimer: {
			title: 'Informasjonskapsler',
			body: 'Vi bruker informasjonskapsler for å gjøre opplevelsen din bedre og tryggere på våre nettsider',
			policyText: "Les vår personvernerklæring",
  		policyUrl: "/personvern",
		  acceptButtonText: "Godta alle",
		  rejectButtonText: "Avslå alle",
	  },
	  services: {
      googleAnalyticsUniversalId: 'UA-XXXXXXXX',
      googleAnalytics4Id: 'G-XXXXXXXX'
    },
	  theme: {
      primary: '#14cabf',
      dark: '#131f37',
      medium: '#b0bfd9',
      light: '#fff'
    }
  }
</script>

<CookieManager {configuration} />

<Nav />

<main>
  <slot />
</main>

<Footer />