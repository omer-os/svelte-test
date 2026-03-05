<script lang="ts">
  let { children } = $props();
</script>

<div class="py-2 px-3 sticky top-0 left-0 flex justify-between items-center">
  {@render children()}
</div>
