<script lang="ts">
    import type { ActionData } from "./$types";

    import Graph from "$lib/components/Graph.svelte";
    export let lastFmUser: string;
    export let form: ActionData;


    const validate = (e: any) => {
        const formData = new FormData(e.target);
        const user = formData.get("lastFmUser")? formData.get("lastFmUser")?.toString() as string : "";
        console.log(user);
        lastFmUser = user;
    };

</script>


<!-- conditional rendering -->
{#if form}
<p>{form.greeting}</p>
{/if}
{#if lastFmUser}
<Graph name={lastFmUser}/>
{/if}

<form method="POST" action="?/authUser">
	<input type="text" id="lastFmUser" name="lastFmUser"/>
	<button type="submit">
        Submit LastFM Username
    </button>
</form>