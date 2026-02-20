<script>
    let count = $state(0);
    async function doTheThing() {
        count += 1;
    }

    $effect(() => {
        console.log(count);
    });
</script>

<button onclick={doTheThing}>make plus one</button>
<input
    type="number"
    bind:value={count}
/>
