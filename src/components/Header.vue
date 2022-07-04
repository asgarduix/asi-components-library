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
                    <li class="inline-block">
                        <button @click="changeHandler()"  class="relative rounded-full bg-sky-500 py-1.5 px-1.5 flex items-center" >
                            
                            <span v-if="isDark" :class="['switchButton' ,'right-0.5' ,{'hidden': !isDark}]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-sky-500 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                            </span>
                            <span v-else :class="['switchButton' ,'left-0.5' ,{'hidden': isDark}]" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-sky-500 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
</svg>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-white h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
</svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-white h-4 w-4 ml-3.5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>
                            </button>
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
        isDark(){
            return this.$store.state.isDark
        }
    },
    methods: {
        changeHandler() {
            this.$store.dispatch('updateTest', !this.isDark)
        }
    },
};
</script>