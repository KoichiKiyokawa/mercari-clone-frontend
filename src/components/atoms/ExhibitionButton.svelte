<script>
  export let link = ''
</script>

<style>
  .exhibition-button {
    border-radius: 50%;
    background-color: #ea352d;
    font-size: 16px;
    width: 5em;
    height: 5em;
  }
  a:hover {
    text-decoration: none;
  }
  .text {
    padding-top: 0.5em;
    margin-bottom: -0.5em;
  }
  .icon {
    font-size: 2em;
  }
</style>

<div class="exhibition-button text-center">
  <a href="{link}" class="text-white">
    <div class="text">出品</div>
    <div class="icon">
      <i class="fas fa-camera"></i>
    </div>
  </a>
</div>
