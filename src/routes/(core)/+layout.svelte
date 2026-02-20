<script>
    let {data, children } = $props();
    console.log(data);
    
</script>

<div>
    {@render children()}
     <!-- {JSON.stringify(data)} --> </div>