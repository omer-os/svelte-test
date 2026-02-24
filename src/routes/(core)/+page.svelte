<script>
  const { data } = $props();
</script>

<div class="max-w-5xl mx-auto flex flex-col gap-4">
  {#each data.data as post}
    <div class="flex flex-col gap-2">
      <a href={`/users/${post.userId}`} class="font-bold underline">
        user : {post.userId}
      </a>

      <a href={`/posts/${post.id}`} class="text-xl hover:underline">
        {post.title}
      </a>
      <div>
        {post.body}
      </div>
    </div>
  {/each}
</div>
