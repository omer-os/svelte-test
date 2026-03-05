<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Briefcase,
    CarTaxiFront,
    ClipboardCheck,
    ClipboardList,
    FileText,
    LayoutPanelTop,
    Receipt,
    Users,
  } from "@lucide/svelte";

  const navTabs = [
    { label: "Estimates", href: "/estimates", type: "link" },
    { label: "Invoices", href: "/invoices", type: "link" },
    { label: "Payments", href: "/payments", type: "link" },
    { label: "Recurring Invoices", href: "/recurring-invoices", type: "link" },
    { label: "Checkouts", href: "/checkouts", type: "link" },
  ];

  const navActions = [
    { id: "file", component: FileText, href: "/file" },
    { id: "receipt", component: Receipt, href: "/receipt" },
    { id: "briefcase", component: Briefcase, href: "/briefcase" },
    { id: "list", component: ClipboardList, href: "/list" },
    { id: "check", component: ClipboardCheck, href: "/check" },
    { id: "users", component: Users, href: "/users" },
  ];
</script>

<div class="flex gap-0.5">
  <Button
    class="rounded-full text-muted-foreground"
    variant="outline"
    size="icon"
  >
    <LayoutPanelTop />
  </Button>

  <div
    class="bg-foreground text-xs rounded-full flex gap-0.5 h-9 items-center py-0.5 px-0.5"
  >
    <Button
      size="icon-sm"
      class="rounded-full border text-muted-foreground"
      variant="secondary"
      onclick={() => goto("/")}
    >
      <CarTaxiFront />
    </Button>
    {#each navTabs as navItem}
      <a
        href={navItem.href}
        class="rounded-full items-center justify-center flex h-full px-3 py-2 text-muted-foreground font-medium"
        class:bg-primary={$page?.url.pathname === navItem.href}
        class:text-primary-foreground={$page?.url.pathname === navItem.href}
      >
        {navItem.label}
      </a>
    {/each}
  </div>
  {#each navActions as navAction}
    <a href={navAction.href}>
      <Button
        size="icon-sm"
        class="rounded-full border text-muted-foreground"
        variant="secondary"
        onclick={() => goto(navAction.href)}
      >
        <navAction.component />
      </Button>
    </a>
  {/each}
</div>
