<script>
    const clicked = () => {
        console.log("clicked ");
    };

    let { title } = $props();
</script>

<button class="py-2 px-3 bg-orange-600 text-white rounded" onclick={clicked}>
    {title}
</button>
<button class="py-2 px-3 bg-orange-600 text-white rounded" onclick={clicked}>
    {title}
</button>
