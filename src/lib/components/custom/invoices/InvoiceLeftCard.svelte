<script>
  // Sample data - replace with your actual data
  const stats = [
    { label: "Overdue", value: "31,211.00", prefix: "$" },
    { label: "Due within next month", value: "172,560.00", prefix: "$" },
    { label: "Average time to get paid", value: "12", suffix: "days" },
  ];

  const timeline = [
    {
      month: "Sep",
      progress: 100,
      avatars: [
        "https://i.pravatar.cc/40?img=1",
        "https://i.pravatar.cc/40?img=2",
        "https://i.pravatar.cc/40?img=3",
        "https://i.pravatar.cc/40?img=4",
      ],
    },
    {
      month: "Oct",
      progress: 100,
      avatars: [],
    },
    {
      month: "Nov",
      progress: 60,
      avatars: [
        "https://i.pravatar.cc/40?img=5",
        "https://i.pravatar.cc/40?img=6",
        "https://i.pravatar.cc/40?img=7",
      ],
    },
    {
      month: "Dec",
      progress: 10,
      avatars: [
        "https://i.pravatar.cc/40?img=8",
        "https://i.pravatar.cc/40?img=9",
      ],
    },
  ];
</script>

<div class="w-full rounded-xl bg-card border border-border p-6 space-y-6">
  <!-- Stats Row -->
  <div class="flex items-start gap-8">
    {#each stats as stat, i}
      <div
        class="flex-1"
        class:border-r={i < stats.length - 1}
        class:border-border={i < stats.length - 1}
        class:pr-8={i < stats.length - 1}
      >
        <p class="text-muted-foreground text-xs mb-1">{stat.label}</p>
        <div class="flex items-baseline gap-1">
          {#if stat.prefix}
            <span class="text-muted-foreground text-sm">{stat.prefix}</span>
          {/if}
          <span
            class="text-card-foreground text-2xl font-semibold tracking-tight"
            >{stat.value}</span
          >
          {#if stat.suffix}
            <span class="text-muted-foreground text-sm">{stat.suffix}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- Timeline -->
  <div class="space-y-3">
    <!-- Progress Bar -->
    <div class="flex items-center gap-0">
      {#each timeline as item, i}
        <div class="flex-1 flex flex-col gap-1">
          <span class="text-muted-foreground text-[0.6rem]">{item.month}</span>
          <div
            class="relative h-[6px] rounded-full overflow-hidden"
            class:mr-1={i < timeline.length - 1}
          >
            <div class="absolute inset-0 bg-muted rounded-full"></div>
            <div
              class="absolute inset-y-0 left-0 rounded-full"
              style="width: {item.progress}%; background: var(--primary);"
            ></div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Avatars Row -->
    <div class="flex items-center gap-0">
      {#each timeline as item}
        <div class="flex-1">
          {#if item.avatars.length > 0}
            <div class="flex -space-x-2">
              {#each item.avatars as avatar}
                <img
                  src={avatar}
                  alt="avatar"
                  class="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
