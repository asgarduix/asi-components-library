<template>
    <div class="w-60 c__nav ">
        <!-- c__nav-search -->
        <!-- <div class="c__nav-search">nav-search</div> -->
        <!-- c__nav-link -->
        <div class="c__nav-link">
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">
                    <a href="#">更新日誌1(primary)</a>
                </div>
            </div>
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">
                    <a href="#">更新日誌2(primary)</a>
                </div>
                <div class="c__nav-link-item--secondary">secondary</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Module' }">Module</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Page2' }">Page2</router-link>
                        </li>
                        <li><a href="#">tertiary03</a></li>
                        <li><a href="#">tertiary04</a></li>
                        <li><a href="#">tertiary05</a></li>
                        <li><a href="#">tertiary06</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    components: {

    },
    created() {

    },
    data() {
        return {};
    },
    computed: {

    },
    methods: {

    },
};
</script>