<template>
  <div class="color-selector">
    <div
      v-for="color in colors"
      :key="color"
      class="color-option"
      :style="{
        backgroundColor: color,
        borderColor: isLightColor(color) ? '#ccc' : 'transparent',
      }"
      :class="{ selected: selectedColor === color }"
      @click="selectColor(color)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
    selectedColor: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectColor(color) {
      this.$emit("color-selected", color);
    },
    isLightColor(color) {
      const hex = color.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 200;
    },
  },
};
</script>

<style scoped>
.color-selector {
  display: flex;
  gap: 8px;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s, box-shadow 0.3s;
  background-color: rgba(0, 0, 0, 0.1);
}

.color-option.selected {
  border: 2px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.color-option:hover {
  border: 2px solid #000;
}
</style>
