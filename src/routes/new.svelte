<script>
  import _ from 'lodash'
  import {
    Badge,
    Button,
    CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label
  } from 'sveltestrap'
  import FormLabel from '../components/atoms/FormLabel.svelte'

  let form = {
    Name: '',
    Price: 0,
    Image: '',
    Description: ''
  }

  let errors = {}

  let isValid = {
    Name: false,
    Price: false,
    Description: false
  }

  const validate = {
    Name: () => {
      isValid.Name = form.Name.length > 0
      errors.Name = isValid.Name ? '' : '商品名を入力してください'
    },
    Price: () => {
      isValid.Price = form.Price > 0
      errors.Price = isValid.Price ? '' : '価格は1円以上に設定してください'
    },
    Description: () => {
      isValid.Description = form.Description.length > 0
      errors.Description = isValid.Description
        ? ''
        : '商品の説明を入力してください'
    }
  }

  $: isAllValid = _.every(_.values(isValid))

  const onSubmit = e => {
    e.preventDefault()
    console.log({ form })
  }
</script>

<style>
  .error {
    color: red;
  }
</style>

<Form on:submit="{onSubmit}">
  <FormGroup>
    <FormLabel id="item-name" label="商品名" />
    <Input
      type="text"
      id="item-name"
      required
      bind:value="{form.Name}"
      on:blur="{validate.Name}"
    />
    <span class="error">{errors.Name || ''}</span>
  </FormGroup>
  <FormGroup>
    <FormLabel id="item-price" label="価格" />
    <div class="d-flex align-items-center">
      <span class="ml-2 mr-2">&yen;</span>
      <Input
        type="number"
        id="item-price"
        bind:value="{form.Price}"
        on:blur="{validate.Price}"
      />
    </div>
    <span class="error">{errors.Price || ''}</span>
  </FormGroup>
  <FormGroup>
    <FormLabel id="item-image" label="商品画像" />
    <CustomInput
      type="file"
      id="item-image"
      label="画像を選択してください"
      accept="image/*"
    />
    <FormText>jpg, png</FormText>
  </FormGroup>
  <FormGroup>
    <FormLabel id="item-description" label="商品の説明" />
    <Input
      type="textarea"
      id="item-description"
      bind:value="{form.Description}"
      on:blur="{validate.Description}"
    />
    <span class="error">{errors.Description || ''}</span>
  </FormGroup>

  <Button block color="danger" class="w-50 m-auto" disabled="{!isAllValid}">
    出品する
  </Button>
</Form>
