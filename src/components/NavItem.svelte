<script lang="ts">
    export let target:string;
    export let iscurrentpage:boolean = false;
    export let linktext:string;
</script>

<li role="none" class="flex items-stretch">
    <a role="menuitem" 
        aria-current="page" 
        aria-haspopup="false" 
        tabindex="0"
        class={iscurrentpage ? 
        "flex items-center gap-2 py-4 transition-colors duration-300 text-blue-500 hover:text-blue-700 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8" : 
        "flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"}
        href={target}> <span>{linktext}</span>
    </a>
</li>