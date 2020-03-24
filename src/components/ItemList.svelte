<script>
  export let items = []
</script>

<p>
{#each items as item}
  <span>{item.Name}</span>
  <span>:</span>
  <span>{item.Price}</span>
{/each}
</p>

