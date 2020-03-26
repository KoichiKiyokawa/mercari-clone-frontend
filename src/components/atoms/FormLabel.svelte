<script>
  import { Badge, Label } from 'sveltestrap'
  export let id
  export let label
</script>

<Label for="{id}" class="d-flex align-items-center">
  <span>{label}</span>
  <Badge color="danger" class="ml-1">必須</Badge>
</Label>
