<script>
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Avatar from "$lib/components/ui/avatar/avatar.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Dot, Settings } from "@lucide/svelte";
</script>

<div class="flex gap-1">
  <Button size="icon" variant="secondary" class="rounded-full">
    <Dot />
  </Button>
  <Button size="icon" variant="secondary" class="rounded-full">
    <Settings />
  </Button>

  <Avatar class="">
    <AvatarImage src="/" />
    <AvatarFallback>OM</AvatarFallback>
  </Avatar>
</div>
