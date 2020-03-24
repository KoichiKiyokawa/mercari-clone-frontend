<script>
  import {Card,Media}from"sveltestrap/src"
export let items = []
</script>

<style>
  .item-body {
    position: relative;
    color: black;
  }

  .price {
    position: absolute;
    top: -2rem;
    padding: 0 0.5rem;
    background-color: rgba(0,0,0,0.2);
    border-radius: 0 2rem 2rem 0;
    color: white;
  }
</style>

{#each items as item}
  <Media>
    <Media left href="#">
      <Card body>
      <Media object src="https://via.placeholder.com/150" alt="item image" />
      <div class="item-body">
        <div class="price">
          &yen;{item.Price}
        </div>
          <Media heading><p>{item.Name}</p></Media>
            {item.Description || ''}
      </div>
      </Card>
      </Media>
    </Media>
{/each}

