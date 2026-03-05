<script>
  import MainLayout from "$lib/components/custom/layout/main-layout.svelte";

  import { ModeWatcher } from "mode-watcher";
  let { children } = $props();
</script>

<ModeWatcher />
<MainLayout>
  {@render children()}
</MainLayout>
