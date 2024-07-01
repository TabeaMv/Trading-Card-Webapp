<template>
    <div class="p-1">
        <NuxtLink :to="`/sammlung/${player.id}`">
            <div class="thumb">
                <img :src="'https://d2c66v0b507n0b.cloudfront.net/' + encodedID + '_Basic.png'" @error="onError"
                    :alt="player.id" class="foreground">
                <img :src="'/card_back.png'" class="background">
                <div class="highlight"></div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const { player } = defineProps(['player']);
const encodedID = encodeURIComponent(player.id); // make sure that the ID is compatible with URLs (i.e. Funky Kong -> Funky%20Kong)

const onError = (event) => {
    event.target.src = '/card_back.png'; // this will show the backside of the card if no URL to the player card is given in the player data DB
}
</script>

<style scoped>
.thumb {
    transform: rotateY(0deg);
    position: relative;
}

.thumb:hover .highlight {
    opacity: 100%;
    
}

.thumb:hover {
    /* transform: translate(100px, 20px); */
    
    /* color: linear-gradient(0deg, black, black 40%, white); */
    /* animation: spinner-highlight .2s linear forwards; */
}

.foreground {
    transform: rotateY(-180deg);
    /* position: absolute; */
    top: 0;
    left: 0;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
}

.thumb:hover .foreground {
    animation: spinner-foreground 2s linear forwards;
    background: linear-gradient(0deg, blue, green 40%, red);
}

.thumb:hover .background {
    animation: spinner-background 2s linear forwards;
}

@keyframes spinner-highlight {
    to {
        background: black;
    }
}

@keyframes spinner-foreground {
    from {
        z-index: -10;
    }

    to {
        z-index: 12;
        transform: rotateY(0deg);
    }
}

@keyframes spinner-background {
    from {
        z-index: 10;
    }

    to {
        z-index: -12;
        transform: rotateY(180deg);
    }
}
</style>