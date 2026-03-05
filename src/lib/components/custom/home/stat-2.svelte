<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowUp } from "@lucide/svelte";
</script>

<div
  class="rounded-xl p-4 pb-0 overflow-hidden gap-5 h-[14em] flex flex-col flex-1 bg-secondary"
>
  <div class="flex justify-between items-start">
    <div class="flex flex-col">
      <div>
        <p class="text-muted-foreground capitalize">
          Avialable for instant payout
        </p>
      </div>
      <div class="font-bold text-4xl">$400,110.00</div>
    </div>

    <Button size="icon" variant="outline" class="rounded-full rotate-45">
      <ArrowUp />
    </Button>
  </div>

  <div class="flex justify-between gap-4 items-end flex-1">
    <div class="flex gap-0.5 flex-2/3 items-end">
      <div class="flex-1 rounded-t-2xl bg-card h-[3em]"></div>
      <div class="flex-1 rounded-t-2xl bg-primary h-[5em]"></div>
      <div class="flex-1 rounded-t-2xl bg-card h-[3em]"></div>
    </div>

    <Button variant="outline" class="rounded-full mb-2">Pay Out Now</Button>
  </div>
</div>
