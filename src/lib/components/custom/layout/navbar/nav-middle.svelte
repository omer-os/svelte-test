<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Grid2X2PlusIcon } from "@lucide/svelte";

  let navItems = [
    {
      name: "Invoices",
      link: "/invoices",
    },
    {
      name: "Estimates",
      link: "/estimates",
    },
    {
      name: "Payments",
      link: "/payments",
    },
    {
      name: "Checkouts",
      link: "/checkouts",
    },
  ];
</script>

<div class="flex gap-1">
  <Button size="icon" variant="outline" class="rounded-full">
    <Grid2X2PlusIcon />
  </Button>

  <div class="bg-secondary-foreground flex gap-0.5 p-1 rounded-full">
    {#each navItems as item}
      <button
        class="rounded-full p-2 px-3 text-xs
text-primary-foreground
{item.name === 'Invoices' && 'bg-secondary text-secondary-foreground'}"
      >
        {item.name}
      </button>
    {/each}
  </div>
</div>
