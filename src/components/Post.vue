<template>
 <div class="boder-dot">
      {{userId}} {{title}}
 </div>
</template>

<script>
export default {
  props: {
    userId: Number,
    title: String
  }
};
</script>

<style>
.boder-dot {
  border: 2px solid red;
  border-radius: 5px;
}
</style>
