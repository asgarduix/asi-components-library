<template>
    <div :class="isDark ? 'dark' : ''">
        <div id="canvas">
            <div class="frame">
                <!-- START: HEADER -->
                <Header />
                <!-- END: HEADER -->
                <!-- START: CONTENT -->
                <div class="flex bg-white frame__module content">
                    <!-- c__nav -->
                    <Menu @clickDark="isDark = !isDark" />
                    <!-- c__views -->
                    <div class="flex-1 bg-gray-100 px-10 py-6 c__views">
                        <router-view />
                    </div>
                </div>
                <!-- END: CONTENT -->
                <!-- START: FOOTER -->
                <Footer />
                <!-- END: FOOTER -->
            </div>
        </div>
    </div>
</template>
<script>
// vue-components
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'App',
    components: {
        Header,
        Menu,
        Footer,
    },
    created() {

    },
    data() {
        return {
            //isDark: false,
        };
    },
    computed: {
        isDark() {
            return this.$store.state.isDark
        }
    },
    methods: {

    },
};
</script>