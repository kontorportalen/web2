<svelte:head>
    <title>Kontakt oss</title> 
</svelte:head>

<section class="py-40 z-5 bg-white bg-[url('/images/teacher-students.jpg')] bg-cover bg-opacity-30" id="kontakt" aria-label="Heading">
    <h1 class="mx-auto max-w-7xl sm:px-6 lg:px-8 text-4xl font-extrabold mb-8 text-white">Kontakt oss</h1>
</section>

<!-- E-læring -->
<section class="py-20 z-5 bg-blue-100" id="kontaktskjema" aria-label="Kontaktskjema">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div>
            <form action="https://formspree.io/f/xaygewkk" method="POST" enctype="multipart/form-data" class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Kontaktskjema</h2>
                        <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                        Informasjonen i skjemaet blir sendt til vårt supportteam, som vil ta kontakt med deg ved behov.
                        </p>
            
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Fullt navn:</label>
                                <div class="mt-2">
                                    <input type="text" name="name" id="name" autocomplete="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                                </div>
                            </div>
            
                            <div class="sm:col-span-4">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-postadresse</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="kategori" class="block text-sm font-medium leading-6 text-gray-900">Velg en kategori (eller Annet)</label>
                                <div class="mt-2">
                                    <select id="kategori" name="kategori" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2">
                                        <option>Websider / webhotell</option>
                                        <option>E-læring</option>
                                        <option>Annet</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Melding</label>
                                <div class="mt-2">
                                    <textarea id="message" name="message" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"></textarea>
                                </div>
                                <p class="max-w-4xl my-4 text-lg md:text-xl text-gray-600 lg:mx-auto">
                                    Skriv litt mer omkring din henvendelse.<br />
                                    Du kan også inkludere en fil (f.eks. designforslag, profildokument osv) nedenfor.
                                </p>
                            </div>
            
                            <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Legg ved fil</label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Last opp en fil</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            </label>
                                            <p class="pl-1">eller dra og slipp her</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF, DOC(X) opp til 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
  
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send sjema!</button>
                </div>

                <input type="hidden" name="_language" value="no" />
            </form>
        </div>

    </div>
</section>