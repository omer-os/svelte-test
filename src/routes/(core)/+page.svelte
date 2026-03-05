<script>
  import HomeFiltersBar from "$lib/components/custom/home/home-filters-bar.svelte";
  import Stat1 from "$lib/components/custom/home/stat-1.svelte";
  import Stat2 from "$lib/components/custom/home/stat-2.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowLeft } from "@lucide/svelte";
</script>

<div class="flex p-4 pt-0 gap-3 items-center">
  <Button size="icon" variant="outline" class="rounded-full">
    <ArrowLeft />
  </Button>

  <div class="text-4xl">Invoices</div>
</div>

<div class="flex px-4 gap-2">
  <Stat1 />
  <Stat2 />
</div>

<HomeFiltersBar />
