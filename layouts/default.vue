<template>
  <div class="relative h-full">
    <div class="py-5 shadow-sm bg-gray-50">
      <nav class="container mx-auto">
        <nuxt-link to="/">
          <img
            src="~/assets/images/logo.svg" class="w-85" alt="logo interseguro"
          />
        </nuxt-link>
      </nav>
    </div>
    <nuxt/>
    <div class="bg-primary flex items-center p-6 gap-6 justify-center text-white absolute inset-x-0 bottom-0">
      Con el respaldo del grupo
      <img src="https://www.interseguro.pe/vehicular/images/logos/intercorp-white.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>
