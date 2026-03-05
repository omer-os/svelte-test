<script>
  import Navbar from "./navbar/Navbar.svelte";
  let { children } = $props();
</script>

<div class="h-dvh overflow-auto">
  <Navbar />
  {@render children()}
</div>
