<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justiy-between">
                <NuxtLink to="/" class="font-bold"> ECF LEGENDS</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/"> Home </NuxtLink></li>
                    <li><NuxtLink to="/ziehen"> Ziehen </NuxtLink></li>
                    <li><NuxtLink to="/tauschen"> Tauschen </NuxtLink></li>
                    <li><NuxtLink to="/sammlung"> Sammlung </NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: crimson;
    }
</style>