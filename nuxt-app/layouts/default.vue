<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold always-crimson"> ECF LEGENDS</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/"> Home </NuxtLink></li>
                    <li><NuxtLink to="/ziehen"> Ziehen </NuxtLink></li>
                    <li><NuxtLink to="/tauschen"> Tauschen </NuxtLink></li>
                    <li><NuxtLink to="/sammlung" class="btn"> Sammlung </NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
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
</style>