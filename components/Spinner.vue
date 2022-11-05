<template>
  <div
    class="spinner"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${thickness}px`,
      borderColor: color,
    }"
  ></div>
</template>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  border-radius: 50%;
  border-style: solid;
  border-left-color: transparent !important;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(1440deg);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['size', 'thickness', 'color'],
  setup(props) {
    return {
      size: props.size ?? 20,
      thickness: props.thickness ?? 2,
      color: props.color ?? 'var(--primary)',
    };
  },
});
</script>
