<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Feil</title> 
</svelte:head>

<section class="py-10 z-5 bg-white" id="websider-heading" aria-label="Heading">
    <h1 class="mx-auto max-w-7xl sm:px-6 lg:px-8 text-4xl font-extrabold mb-8">Feil</h1>
</section>

<section class="py-20 z-5 bg-blue-100" id="steg1" aria-label="Steg 1">
    <div>
        <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
        Det oppsto en uventet feil. Her er feilmeldingen:
        </p>

        <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto italic font-semibold">
        {$page.error.message}
        </p>

        <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
        Vi håper at du kan prøve på nytt og eventuelt kontakte oss for å melde inn feilen!
        </p>
    </div>
</section>