<script>
    async function getUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    }

    let userPromise = $state(getUser());
</script>

<button onclick={() => userPromise = getUser()}>Reload Data</button>

{#await userPromise}
    <p>Loading...</p>
{:then user}
    <p>Name: {user.name}</p>
{:catch error}
    <p>Error: {error.message}</p>
{/await}