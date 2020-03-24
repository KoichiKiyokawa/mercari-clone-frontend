<script>
  import Item from '../atoms/Item.svelte'

  export let items = []
</script>

{#each items as item}
  <Item {...item} />
{/each}

