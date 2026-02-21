<script>
    import { enhance } from "$app/forms";
  	let { data, form } = $props();


    $effect(()=>{
      console.log(data,form);
    })

</script>
<form action="?/add" method="POST" use:enhance>
  <input type="text" name="name" />
  <input type="hidden" name="id" value="333">
  <input type="number" name="age" />
  <button>submit</button>
</form>
