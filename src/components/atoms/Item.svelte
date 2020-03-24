<script>
  import { Card, Media } from 'sveltestrap/src'
  export let Name = ''
  export let ImageSrc = ''
  export let Price = 0
  export let Description = ''
</script>

<style>
  .item-body {
    position: relative;
    color: rgb(60, 60, 60);
  }

  .price {
    position: absolute;
    top: -2rem;
    padding: 0 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0 2rem 2rem 0;
    color: white;
  }
</style>

<Media>
  <Media left href="#">
    <Card body>
      <Media object src="{ImageSrc}" alt="item image" />
      <div class="item-body">
        <div class="price">&yen;{Price}</div>
        <Media heading>
          <p>{Name}</p>
        </Media>
        {Description}
      </div>
    </Card>
  </Media>
</Media>
