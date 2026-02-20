<script>
    let newnote = $state("");
    let notes = $state([
        {
            value: "",
            checked: false,
            id: 1,
        },
        {
            value: "",
            checked: false,
            id: 2,
        },
    ]);
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            Todo App
        </h1>

        <div class="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Add a new task..."
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                bind:value={newnote}
            />
            <button
                onclick={() => {
                    notes = [
                        ...notes,
                        {
                            checked: false,
                            value: newnote,
                            id: notes.length + 1,
                        },
                    ];

                    newnote = "";
                }}
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >Add</button
            >
        </div>

        <ul class="space-y-3">
            {#each notes as note}
                <li
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group"
                >
                    <input
                        type="checkbox"
                        class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                        bind:checked={note.checked}
                    />
                    <span
                        class="flex-1 {note.checked
                            ? 'text-gray-400 line-through'
                            : 'text-gray-700'}"
                            class:p-4={note.checked}
                    >
                        {note.value}
                    </span>
                    <button
                        class="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onclick={() =>
                            (notes = notes.filter((i) => i.id !== note.id))}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            ><path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </button>
                </li>
            {/each}
        </ul>
    </div>
</div>
