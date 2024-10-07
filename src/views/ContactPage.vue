<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-4xl font-bold text-center mb-6">Contact Us</h1>
    <p class="text-lg text-center mb-8">
      We're here to help you with any questions or concerns you may have.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium mb-1"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium mb-1"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium mb-1"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              class="border border-gray-300 rounded-md p-2 w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
        <p class="mb-2"><strong>Email:</strong> support@example.com</p>
        <p class="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p class="mb-4">Our office hours are Monday to Friday, 9 AM to 5 PM.</p>

        <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" class="text-blue-600 hover:text-blue-800">Twitter</a>
          <a href="#" class="text-blue-600 hover:text-blue-800">Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      alert(`Message sent from ${this.form.name}.`);
      // Reset form fields
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
