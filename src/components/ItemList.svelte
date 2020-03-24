<script>
  export const items
</script>

<p>
{#each items as item}
  <span>item.name</span>
  <span>:</span>
  <span>item.price</span>
{/each}
</p>

