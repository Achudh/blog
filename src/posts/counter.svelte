<script lang="ts">
	let count = 0;

	const incerement = () => (count += 1);
</script>

<button on:click={incerement}>{count}</button>
