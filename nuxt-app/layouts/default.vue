<template>
    <div class="bg-fixed bg-cover bg-center min-h-screen" style="background-image: url('/Background.svg');"> <!-- set the background image -->
        <header class="sticky top-0"> <!-- fixing the nav bar -->
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold always-crimson"> ECF LEGENDS</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/"> Home </NuxtLink></li>
                    <li><NuxtLink to="/ziehen"> Ziehen </NuxtLink></li>
                    <li><NuxtLink to="/tauschen"> Tauschen </NuxtLink></li>
                    <li><NuxtLink to="/sammlung" class="btn always-white"> Sammlung </NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: crimson;
    }
    .always-crimson {
        color: crimson;
    }
    .always-white {
        color: white;
    }
    header {
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
  }
</style>