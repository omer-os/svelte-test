<script>
  import Nav from "../navbar/Nav.svelte";
  import NavLogo from "../navbar/NavLogo.svelte";
  import NavMiddle from "../navbar/NavMiddle.svelte";
  import NavRight from "../navbar/NavRight.svelte";

  let { children } = $props();
</script>

<div class="h-dvh overflow-auto">
  <div class="min-h-screen w-full relative">
    <div
      class="absolute inset-0 h-[15em] z-0"
      style="background: radial-gradient(125% 125% at 50% 0%, rgba(120, 230, 30, 0.15) 0%, rgba(200, 200, 200, 0.09) 40%, transparent 70%);"
    ></div>
    <div class="relative z-10">
      <Nav>
        <NavLogo />
        <NavMiddle />
        <NavRight />
      </Nav>
    </div>
    <div class="pt-4 relative z-10">
      {@render children()}
    </div>
  </div>
</div>
