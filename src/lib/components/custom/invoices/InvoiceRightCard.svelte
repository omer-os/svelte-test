<script>
  import { Button } from "$lib/components/ui/button";

  let selected = $state("stripe");

  const methods = [
    { id: "visa", label: "Visa", tag: "*4443", icon: "💳" },
    { id: "stripe", label: "Stripe", tag: "#177210", icon: "⚡" },
    { id: "paypal", label: "PayPal", tag: "#711221", icon: "🅿️" },
  ];
</script>

<div class="w-full rounded-2xl bg-card border border-border p-6 space-y-5">
  <!-- Header -->
  <div class="flex items-start justify-between">
    <div class="space-y-1">
      <p class="text-muted-foreground text-xs">Available for Instant Payout</p>
      <div class="flex items-baseline gap-1.5">
        <span class="text-muted-foreground text-sm">$</span>
        <span class="text-card-foreground text-3xl font-semibold tracking-tight"
          >214,390.00</span
        >
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Button variant="secondary" size="sm" class="text-xs rounded-full"
        >Expects</Button
      >
      <button
        class="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Payment Methods + CTA -->
  <div class="flex items-end gap-3">
    <!-- Cards -->
    <div class="flex gap-2 flex-1">
      {#each methods as method}
        <button
          onclick={() => (selected = method.id)}
          class="flex-1 rounded-xl p-3 pt-4 flex flex-col items-center gap-2 transition-all duration-200 cursor-pointer
            {selected === method.id
            ? 'bg-primary text-primary-foreground scale-105 shadow-lg -translate-y-1'
            : 'bg-muted text-muted-foreground hover:bg-accent'}"
        >
          <span class="text-[0.55rem] font-mono opacity-80">{method.tag}</span>
          <span class="text-xs font-medium">{method.label}</span>
        </button>
      {/each}
    </div>

    <!-- Pay out button -->
    <Button
      variant="secondary"
      class="rounded-full text-xs whitespace-nowrap px-4"
    >
      Pay out now
    </Button>
  </div>
</div>
