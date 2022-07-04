<template>
    <div class="px-3 py-2 border-b frame__module header">
        <div class="w-full table table-fixed h__inner">
            <!-- START: h__logo -->
            <div class="w-52 table-cell align-middle px-6 h__logo">
                <img src="../assets/img/h__logo.svg" alt="">
            </div>
            <!-- END: h__logo -->
            <!-- START: h__search -->
            <div class="table-cell align-middle px-4 h__search">
                <div class="table table-fixed border rounded h__search-inner">
                    <div class="table-cell align-middle h__search-item h__search-field">
                        <input type="text" placeholder="尋找任何設定" class="px-2 outline-none">
                    </div>
                    <div class="w-8 table-cell align-middle text-center h__search-item h__search-btn">
                        <button class="align-middle leading-none text-gray-300"><span class="material-icons">search</span></button>
                    </div>
                </div>
            </div>
            <!-- END: h__search -->
            <!-- START: h__topic -->
            <div class="table-cell align-middle text-right h__topic">
                <ul class="border-r">
                    <li class="inline-block align-middle">
                        <router-link :to="{ name: 'Guide' }" class="px-4 text-blue-500 hover:text-blue-700 focus:text-blue-700">指南</router-link>
                    </li>
                    <li class="inline-block align-middle">
                        <router-link :to="{ name: 'Module' }" class="px-4 text-blue-500 hover:text-blue-700">組件</router-link>
                    </li>
                    <li class="inline-block align-middle">
                        <a href="#" class="px-4 text-blue-500 hover:text-blue-700"><span class="material-icons">toggle_on</span></a>
                    </li>
                </ul>
            </div>
            <!-- END: h__topic -->
            <!-- START: h__version -->
            <div class="w-24 table-cell align-middle px-2 text-right text-gray-400 h__version">
                <select name="" id="">
                    <option value="">v-0.0.0</option>
                    <option value="">v-0.0.1</option>
                </select>
            </div>
            <!-- END: h__version -->
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
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