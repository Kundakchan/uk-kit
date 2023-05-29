<script setup>
import KButton from '@/components/Button.vue'
const buttonHandler = () => {
  alert('click on button')
}
</script>

<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <k-button :lable="'Primary'" :color="'primary'" disabled/>
    <k-button :lable="'Second'" :color="'second'" rounded disabled/>
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <k-button :lable="'Primary'" :color="'primary'"/>
    <k-button :lable="'Second'" :color="'second'"/>
    <k-button :lable="'Info'" :color="'info'"/>
    <k-button :lable="'Warning'" :color="'warning'"/>
    <k-button :lable="'Danger'" :color="'danger'"/>
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <k-button :lable="'Primary'" :color="'primary'" rounded/>
    <k-button :lable="'Second'" :color="'second'" rounded/>
    <k-button :lable="'Info'" :color="'info'" rounded/>
    <k-button :lable="'Warning'" :color="'warning'" rounded/>
    <k-button :lable="'Danger'" :color="'danger'" rounded/>
  </div>
  <h2 class="heading-2">Ounlined</h2>
  <div class="line">
    <k-button :lable="'Primary'" :color="'primary'" outlined/>
    <k-button :lable="'Second'" :color="'second'" outlined/>
    <k-button :lable="'Info'" :color="'info'" rounded outlined/>
    <k-button :lable="'Warning'" :color="'warning'" rounded outlined/>
    <k-button :lable="'Danger'" :color="'danger'" rounded outlined/>
  </div>
  <h2 class="heading-2">Icons</h2>
  <div class="line">
    <k-button :color="'primary'" :icon="'heart'" outlined/>
    <k-button :color="'second'" :icon="'hand'" />
    <k-button :color="'info'" :icon="'address-book'" />
    <k-button :color="'warning'" :icon="'credit-card'" outlined/>
    <k-button :color="'danger'" :icon="'lemon'" outlined/>
    <k-button :color="'danger'" :icon="'hourglass'" outlined/>
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <k-button :lable="'Normal'" :size="'normal'" :color="'primary'" outlined/>
    <k-button :lable="'Large'" :size="'large'" :color="'second'" />
  </div>
  <h2 class="heading-2">Events</h2>
  <div class="line">
    <k-button @click="buttonHandler" :lable="'Cleck me '" :size="'normal'" :color="'primary'" outlined/>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>