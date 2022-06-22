<template>
    <div id="canvas">
        <div class="frame">
            <!-- START: HEADER -->
            <div class="frame-module header">
                <!-- START: HEADER-logo -->
                <div class="header-logo">logo</div>
                <!-- END: HEADER-logo -->
                <!-- START: HEADER-search -->
                <div class="header-search">header-search</div>
                <!-- END: HEADER-search -->
                <!-- START: HEADER-topic -->
                <div class="header-topic">topic</div>
                <!-- END: HEADER-topic -->
                <!-- START: HEADER-version -->
                <div class="header-version">version</div>
                <!-- END: HEADER-version -->
            </div>
            <!-- END: HEADER -->
            <hr/>
            <!-- START: MENU -->
            <div class="frame-module menu">
                <!-- START: Menu-search -->
                <div class="menu-search">menu-search</div>
                <!-- END: Menu-search -->
                <!-- START: MENU-link -->
                <div class="menu-link">link</div>
                <!-- END: MENU-link -->
            </div>
            <!-- END: MENU -->
            <hr/>
            <!-- START: CONTENT -->
            <div class="frame-module content">
                content
            </div>
            <!-- END: CONTENT -->
            <hr/>
            <!-- START: FOOTER -->
            <div class="frame-module footer">
                footer
            </div>
            <!-- END: FOOTER -->
        </div>
    </div>
</template>
<script>
// import Header from "@/components/Header.vue";
export default {
    name: "Page",
    components: {
        // Header,
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