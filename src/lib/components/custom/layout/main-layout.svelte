<script>
  import Nav from "../navbar/Nav.svelte";
  import NavLogo from "../navbar/NavLogo.svelte";
  import NavMiddle from "../navbar/NavMiddle.svelte";
  import NavRight from "../navbar/NavRight.svelte";

  let { children } = $props();
</script>

<div class="h-dvh overflow-auto">
  <Nav>
    <NavLogo />
    <NavMiddle />
    <NavRight />
  </Nav>
  {@render children()}
</div>
