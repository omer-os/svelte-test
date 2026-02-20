<script>
    import { enhance } from '$app/forms';

    let { data } = $props();
</script>

<div>
    <form method="POST" action="?/create" use:enhance>
        <label>
            add a todo:
            <input name="description" class="text-black" autocomplete="off" />
        </label>

        <button> submit </button>
    </form>
</div>
