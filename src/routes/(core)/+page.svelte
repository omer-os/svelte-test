<script lang="ts">
  import { fly } from "svelte/transition";
  import { createNoteState } from "./state.svelte";

  const NoteState = new createNoteState();
</script>

<div class="p-2 rounded-md bg-zinc-800 border border-zinc-700 flex gap-3">
  <input type="text" bind:value={NoteState.newNote} />
  <button
    onclick={() =>
      NoteState.addNote({
        id: crypto.randomUUID(),
        title: NoteState.newNote,
        date: new Date().toISOString(),
        checked: false,
      })}>add</button
  >
</div>

<div
  class="p-2 rounded-md bg-zinc-800 overflow-hidden mt-4 flex-col border border-zinc-700 flex gap-3"
>
  {#each NoteState.notes as note (note.id)}
    <div
      title={note.date}
      class="flex gap-2"
      transition:fly={{
        x: 20,
        opacity: 0,
      }}
    >
      <input type="checkbox" id="check-{note.id}" bind:checked={note.checked} />
      <label class:line-through={note.checked} for="check-{note.id}"
        >{note.title}</label
      >
      <button
        class="bg-red-600 py-2 px-3 text-xs"
        onclick={() => NoteState.removeNote(note.id)}>x</button
      >
    </div>
  {/each}
</div>
