<script>

    let num = $state(1);
    let multi= $derived(num * 2)
</script>

<button onclick={() => (num = num += 1)}> inc </button>


<p>
    number is {num}
</p>
<p>
    multiplied by two is {multi}
</p>
