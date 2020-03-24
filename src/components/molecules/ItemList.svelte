<script>
  import { Container, Row, Col } from 'sveltestrap'
  import pick from 'lodash/pick'
  import Item from '../atoms/Item.svelte'

  export let items = []
</script>

<Container>
  <Row>
    {#each items as item}
      <Col md="3" sm="4" xs="6">
        <Item {...pick(item, ['ImageSrc', 'Price', 'Name', 'Description'])} />
        <div style="height: 15px"></div>
      </Col>
    {/each}
  </Row>
</Container>
