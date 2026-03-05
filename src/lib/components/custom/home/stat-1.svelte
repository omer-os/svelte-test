<script>
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import Progress from "$lib/components/ui/progress/progress.svelte";
</script>

<div
  class="rounded-xl gap-5 grid grid-cols-3 p-4 grid-rows-[1fr_1fr] h-[12em] flex-1 bg-secondary"
>
  <div class="flex gap-2 flex-col">
    <p class="text-muted-foreground">Overdue</p>
    <p class="text-3xl">$4,000</p>
  </div>

  <div class="flex gap-2 flex-col">
    <p class="text-muted-foreground">Overdue</p>
    <p class="text-3xl">$4,000</p>
  </div>

  <div class="flex gap-2 flex-col">
    <p class="text-muted-foreground">Overdue</p>
    <p class="text-3xl">$4,000</p>
  </div>
  <div class="flex flex-col">
    <div class="flex gap-2">
      <div class="flex flex-col flex-1">
        <label class="text-muted-foreground" for="prog-1">Sep</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
      <div class="flex flex-col w-[2em]">
        <label class="text-muted-foreground" for="prog-1">Oct</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
    </div>

    <div
      class="*:data-[slot=avatar]:ring-background flex mt-3 mx-auto -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
        <Avatar.Fallback>LR</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="flex gap-2">
      <div class="flex flex-col flex-1">
        <label class="text-muted-foreground" for="prog-1">Sep</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
      <div class="flex flex-col w-[2em]">
        <label class="text-muted-foreground" for="prog-1">Oct</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
    </div>

    <div
      class="*:data-[slot=avatar]:ring-background flex mt-3 mx-auto -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
        <Avatar.Fallback>LR</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="flex gap-2">
      <div class="flex flex-col flex-1">
        <label class="text-muted-foreground" for="prog-1">Sep</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
      <div class="flex flex-col w-[2em]">
        <label class="text-muted-foreground" for="prog-1">Oct</label>
        <Progress id="prog-1" class="w-full" value={53} />
      </div>
    </div>

    <div
      class="*:data-[slot=avatar]:ring-background flex mt-3 mx-auto -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
        <Avatar.Fallback>LR</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
</div>
