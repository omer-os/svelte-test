<script>
    let show = $state(false);


    $effect(()=>{
        console.log("toggled")
        show
    })
</script>

<button on:click={() => (show = !show)}> toggle </button>

<p>
    im {show}
</p>
