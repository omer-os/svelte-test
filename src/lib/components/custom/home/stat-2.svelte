<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowUp } from "@lucide/svelte";
</script>

<div class="rounded-xl gap-5 h-[12em] flex flex-col flex-1 bg-secondary">
  <div class="flex justify-between items-start">
    <div class="flex flex-col">
      <div>
        <p class="text-muted-foreground capitalize">
          Avialable for instant payout
        </p>
      </div>
      <div class="font-bold text-4xl">$400,110.00</div>
    </div>

    <Button size="icon" variant="outline" class="rounded-full">
      <ArrowUp />
    </Button>
  </div>
</div>
