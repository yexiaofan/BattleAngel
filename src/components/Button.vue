<style lang="less">

</style>

<template>
  <div class="container">
      <h1>Button</h1>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <br><br>
    <Button ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
    <br><br>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button type="info" size="small">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning" size="default">Warning</Button>
    <Button type="error" size="large">Error</Button>
    <br><br>
    <Button type="success" long>Success</Button>
    <Button type="error" long>Error</Button>
    <br><br>
    <Button type="info" disabled>Info</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="error" disabled>Error</Button>
    <br><br>
    <Button type="primary" icon="ios-loading" loading>Loading</Button>
    <Button loading shape="circle"></Button>
    <Button loading shape="circle" type="primary"></Button>
    <br><br>
    <Button html-type="submit">Default</Button>
    <hr>
    <h1>ButtonGroup</h1>
    <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup>
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button icon="ios-color-filter"></Button>
        <Button icon="ios-eye"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="logo-twitter"></Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button icon="ios-color-filter"></Button>
        <Button icon="ios-eye"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="logo-twitter"></Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large">
        <Button>Large</Button>
        <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
        <Button>Large</Button>
        <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button>Default</Button>
        <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
        <Button>Small</Button>
        <Button>Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup vertical>
        <Button icon="logo-facebook"></Button>
        <Button icon="logo-twitter"></Button>
        <Button icon="logo-googleplus"></Button>
        <Button icon="logo-tumblr"></Button>
    </ButtonGroup>
    <hr>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

