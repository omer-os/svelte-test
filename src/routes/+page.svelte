<script>
    import { crossfade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    
    const [send, receive] = crossfade({ duration: 500 });
    
    let list = $state([
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Carrot" }
    ]);
</script>

<ul>
    {#each list as item (item.id)}
        <li 
            animate:flip
            onclick={() => list = list.filter(i => i.id !== item.id)}
        >
            {item.name}
        </li>
    {/each}
</ul>