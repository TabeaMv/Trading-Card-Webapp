<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/sammlung">Sammlung</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div>
            <slot />
        </div>

        <footer>
            <ul>
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
</style>