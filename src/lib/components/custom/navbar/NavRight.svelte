<script>
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Avatar from "$lib/components/ui/avatar/avatar.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { NotebookIcon, Settings } from "@lucide/svelte";
</script>

<div class="flex gap-0.5">
  <Button
    size="icon-sm"
    class="rounded-full border text-muted-foreground"
    variant="secondary"
  >
    <NotebookIcon />
  </Button>
  <Button
    size="icon-sm"
    class="rounded-full bg-secondary border text-muted-foreground"
    variant="secondary"
  >
    <Settings />
  </Button>

  <Avatar>
    <AvatarImage src="https://avatars.githubusercontent.com/u/66512898?v=4" />
    <AvatarFallback>Om</AvatarFallback>
  </Avatar>
</div>
