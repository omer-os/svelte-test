<script>
  const { data } = $props();
</script>

<div>
  <button onclick={() => history.back()} class="text-xl hover:underline mb-4">
    go back
  </button>

  <div>user : {data.data.userId}</div>
  <p>{data.data.title}</p>
  <div>{data.data.body}</div>
</div>
