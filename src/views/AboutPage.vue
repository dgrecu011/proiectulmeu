<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-4xl font-bold text-center mb-6">About Us</h1>
    <p class="text-lg text-center mb-8">
      Welcome to our online iPhone store! We are dedicated to providing you with
      the best products and services.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          At our store, we aim to bring you the latest and greatest in
          smartphone technology. We believe in quality, affordability, and
          exceptional customer service.
        </p>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          We envision a world where everyone has access to cutting-edge
          technology that enhances their daily lives.
        </p>
      </div>
    </div>

    <div class="mt-10">
      <h2 class="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
      <p class="text-lg text-center mb-8">
        We have a passionate team ready to serve you!
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            class="rounded-full mb-3 mx-auto"
          />
          <h3 class="font-semibold">John Doe</h3>
          <p class="text-gray-600">CEO & Founder</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            class="rounded-full mb-3 mx-auto"
          />
          <h3 class="font-semibold">Jane Smith</h3>
          <p class="text-gray-600">Marketing Manager</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            class="rounded-full mb-3 mx-auto"
          />
          <h3 class="font-semibold">Alice Johnson</h3>
          <p class="text-gray-600">Customer Support</p>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center">
      <h2 class="text-3xl font-bold mb-4">Why Choose Us?</h2>
      <p class="text-lg mb-4">
        Our commitment to quality, customer satisfaction, and innovation sets us
        apart from the rest.
      </p>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Shop Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
