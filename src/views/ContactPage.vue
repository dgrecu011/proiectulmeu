<template>
  <div class="container mx-auto p-4">
   
    <section class="text-center py-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg">
      <h1 class="text-4xl font-bold">Contactează-ne</h1>
      <p class="mt-4 text-lg">Suntem aici să te ajutăm!</p>
    </section>

  
    <section class="my-12 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold text-center mb-6">Informații de Contact</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold">Adresă</h3>
          <p>Strada Exemplu 123, București</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold">Telefon</h3>
          <p>(+40) 123 456 789</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold">Email</h3>
          <p>contact@myonlinestore.com</p>
        </div>
      </div>
    </section>

    <section class="my-12">
      <h2 class="text-3xl font-semibold text-center mb-6">Trimite-ne un mesaj</h2>
      <form @submit.prevent="sendMessage" class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-2" for="name">Nume</label>
            <input
              v-model="name"
              type="text"
              id="name"
              class="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div>
            <label class="block mb-2" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
        </div>
        <div class="mt-4">
          <label class="block mb-2" for="message">Mesaj</label>
          <textarea
            v-model="message"
            id="message"
            class="border border-gray-300 p-2 w-full rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
        >
          Trimite Mesaj
        </button>
      </form>
    </section>

 
    <section class="my-12">
      <h2 class="text-3xl font-semibold text-center mb-6">Ne găsești aici</h2>
      <div class="w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2292.548793558552!2d26.10409501592464!3d44.43926277910161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2d88c94c6f%3A0x711fbbce1b09aa18!2sStrada%20Exemplu%20123%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1631039830289!5m2!1sen!2sro"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendMessage() {
      
      console.log("Mesaj trimis:", { name: this.name, email: this.email, message: this.message });
      
      this.name = '';
      this.email = '';
      this.message = '';
      alert("Mesajul tău a fost trimis cu succes!");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
