<template>
    <div id="canvas">
        <div class="frame">
            <!-- START: HEADER -->
            <div class="frame__module header bg-sky-100 font-bold">
                <!-- START: HEADER__logo -->
                <div class="h__logo">logo</div>
                <!-- END: HEADER__logo -->
                <!-- START: HEADER__search -->
                <div class="h__search">header-search</div>
                <!-- END: HEADER__search -->
                <!-- START: HEADER__topic -->
                <div class="h__topic">topic</div>
                <!-- END: HEADER__topic -->
                <!-- START: HEADER__version -->
                <div class="h__version">version</div>
                <!-- END: HEADER__version -->
            </div>
            <!-- END: HEADER -->
            <!-- START: CONTENT -->
            <div class="frame__module content flex bg-green-50">
                <!-- c__nav -->
                <div class="c__nav w-60">
                    <!-- c__nav-search -->
                    <div class="c__nav-search">nav-search</div>
                    <!-- c__nav-link -->
                    <div class="c__nav-link">
                        <!-- c__nav-link-item -->
                        <div class="c__nav-link-item">
                            <div class="c__nav-link-item--primary">
                                <a href="#">更新日誌(primary)</a>
                            </div>
                        </div>
                        <!-- c__nav-link-item -->
                        <div class="c__nav-link-item">
                            <div class="c__nav-link-item--primary">
                                <a href="#">更新日誌(primary)</a>
                            </div>
                            <div class="c__nav-link-item--secondary">secondary</div>
                            <div class="c__nav-link-item--tertiary">
                                <ul>
                                    <li><a href="#">tertiary01</a></li>
                                    <li><a href="#">tertiary02</a></li>
                                    <li><a href="#">tertiary03</a></li>
                                    <li><a href="#">tertiary04</a></li>
                                    <li><a href="#">tertiary05</a></li>
                                    <li><a href="#">tertiary06</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- c__views -->
                <div class="c__views flex-1 bg-red-100">
                    views
                </div>
            </div>
            <!-- END: CONTENT -->
            <!-- START: FOOTER -->
            <div class="frame__module footer">
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