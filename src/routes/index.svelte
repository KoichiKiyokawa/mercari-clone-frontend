<script>
  import { Alert, Container, Spinner } from 'sveltestrap'
  import { onMount } from 'svelte'

  import ItemList from '../components/molecules/ItemList.svelte'

  const LOAD_STATUS = {
    IDLING: 'idling',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed'
  }
  let loadStatus = LOAD_STATUS.IDLING
  let items = []
  onMount(() => {
    loadStatus = LOAD_STATUS.LOADING
    fetch(`${MERCARI_CLONE_ENV.ENDPOINT}/items`)
      .then(response => response.json())
      .then(data => {
        items = data
        loadStatus = LOAD_STATUS.LOADED
      })
      .catch(() => {
        loadStatus = LOAD_STATUS.FAILED
      })
  })
</script>

<svelte:head>
  <title>mercali</title>
</svelte:head>

{#if loadStatus === LOAD_STATUS.LOADING}
  <Spinner />
{:else if loadStatus === LOAD_STATUS.LOADED}
  <ItemList {items} />
{:else if loadStatus === LOAD_STATUS.FAILED}
  <Alert color="danger">
    <span>商品データの取得に失敗しました。時間をおいて再度お試しください</span>
  </Alert>
{/if}
