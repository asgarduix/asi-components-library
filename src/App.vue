<template>
    <div>
        <div id="canvas">
            <div class="frame">
                <!-- START: HEADER -->
                <Header />
                <!-- END: HEADER -->
                <!-- START: CONTENT -->
                <div class="flex bg-green-50 frame__module content">
                    <!-- c__nav -->
                    <Menu />
                    <!-- c__views -->
                    <div class="flex-1 bg-red-100 c__views">
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
        return {};
    },
    computed: {

    },
    methods: {

    },
};
</script>