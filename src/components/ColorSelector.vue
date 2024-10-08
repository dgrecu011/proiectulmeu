<template>
    <div class="color-selector">
      <div
        v-for="color in colors"
        :key="color"
        class="color-option"
        :style="{ backgroundColor: color }"
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
  },
};
</script>

<style scoped>
.color-selector {
  display: flex;
  gap: 8px; /* Ajustează distanța dintre opțiunile de culoare */
}
.color-option {
  width: 30px; /* Dimensiune mică pentru opțiunile de culoare */
  height: 30px; /* Dimensiune mică pentru opțiunile de culoare */
  border-radius: 50%; /* Formă rotundă pentru opțiunile de culoare */
  cursor: pointer;
  border: 2px solid transparent; /* Bordură implicită */
  transition: border 0.3s, box-shadow 0.3s; /* Tranziție lină pentru bordură și umbră */
  position: relative; /* Poziție relativă pentru umbra */
  background-color: rgba(0, 0, 0, 0.1); /* Fundal deschis pentru a evidenția opțiunile de culoare */
}

/* Adaugă umbră pentru opțiunea selectată */
.color-option.selected {
  border: 2px solid #000; /* Bordură pentru culoarea selectată */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Umbră pentru a evidenția opțiunea selectată */
}

/* Adaugă umbră pentru opțiunile de culoare albe sau deschise */
.color-option:hover {
  border: 2px solid #000; /* Bordură pentru opțiunile hover */
}
</style>
