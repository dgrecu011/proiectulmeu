<template>
  <div class="container mx-auto p-4">
    <!-- Header principal -->
    <section class="text-center py-12 bg-blue-600 text-white rounded-lg">
      <h1 class="text-4xl font-bold">Despre Noi</h1>
      <p class="mt-4 text-lg">Descoperă cine suntem și ce ne motivează!</p>
    </section>

    <!-- Misiunea Noastră -->
    <section class="my-12 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold text-center mb-6">Misiunea Noastră</h2>
      <p class="text-lg leading-relaxed mb-4 text-center">
        La My Online Store, suntem dedicați să oferim cele mai recente inovații în tehnologie, 
        îmbunătățind experiența utilizatorilor noștri prin produse de calitate și servicii excelente.
      </p>
      <img
        src="https://www.austral.ro/Files/Images/misiunea-unei-firme.jpg"
        alt="Misiune"
        class="rounded-lg shadow-md w-full h-64 object-cover mb-6"
      />
    </section>

    <!-- Echipă -->
    <section class="my-12">
      <h2 class="text-3xl font-semibold text-center mb-6">Echipa Noastră</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="John Doe"
            class="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 class="text-lg font-semibold">John Doe</h3>
          <p>CEO</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Jane Smith"
            class="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 class="text-lg font-semibold">Jane Smith</h3>
          <p>Marketing</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="Mike Johnson"
            class="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 class="text-lg font-semibold">Mike Johnson</h3>
          <p>Developer</p>
        </div>
      </div>
    </section>

    <!-- Beneficii -->
    <section class="my-12 bg-blue-100 p-6 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold text-center mb-6">De ce să ne alegi?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Produse de Calitate</h3>
          <p>Oferim doar cele mai bune produse iPhone, testate și garantate.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Servicii Clienți Excelent</h3>
          <p>Echipa noastră este disponibilă pentru a te ajuta cu orice întrebare sau problemă.</p>
        </div>
      </div>
    </section>

    <!-- Contactează-ne -->
    <section class="text-center my-12">
      <h2 class="text-3xl font-semibold mb-4">Contactează-ne</h2>
      <p class="text-lg mb-4">Împărtășește-ne feedback-ul tău!</p>
      <router-link
        to="/contact"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >Contactează-ne</router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
