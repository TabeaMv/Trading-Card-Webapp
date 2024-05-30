<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/sammlung" class="font-bold">Sammlung</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/ziehen">Ziehen</NuxtLink></li>
                <li><NuxtLink to="/tauschen">Tauschen</NuxtLink></li>
                <li><NuxtLink to="/sammlung">Sammlung</NuxtLink></li>
            </ul>
        </footer>
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