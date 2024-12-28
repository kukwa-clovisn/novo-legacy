<script setup>
definePageMeta({
  NuxtLayout: false,
});
</script>
<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="fixed bg-white shadow text-blue-800 px-10 py-1 z-10 w-full">
      <div class="flex items-center justify-between py-2 text-5x1">
        <div class="font-bold text-blue-900 text-xl">
          Admin<span class="text-orange-600">Panel</span>
        </div>
        <div class="flex items-center text-gray-500">
          <span class="material-icons-outlined p-2" style="font-size: 30px"
            >search</span
          >
          <span class="material-icons-outlined p-2" style="font-size: 30px"
            >notifications</span
          >
          <div
            class="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"
            style="
              background-image: url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg);
            "
          ></div>
        </div>
      </div>
    </div>

    <div class="flex flex-row pt-24 px-10 pb-4">
      <div class="w-2/12 mr-6">
        <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2"
              >dashboard</span
            >
            Home
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2">tune</span>
            Some menu item
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2"
              >file_copy</span
            >
            Another menu item
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
        </div>

        <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2">face</span>
            Profile
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2"
              >settings</span
            >
            Settings
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
          <a
            href=""
            class="inline-block text-gray-600 hover:text-black my-4 w-full"
          >
            <span class="material-icons-outlined float-left pr-2"
              >power_settings_new</span
            >
            Log out
            <span class="material-icons-outlined float-right"
              >keyboard_arrow_right</span
            >
          </a>
        </div>
      </div>

      <div class="w-10/12">
        <div class="flex flex-row h-64 mt-6">
          <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">a</div>
          <div class="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
            b
          </div>
          <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">c</div>
        </div>
      </div>
    </div>
  </div>
</template>
