<template>
    <div class="w-60 c__nav dark:bg-tb">
        <!-- c__nav-link -->
        <div class="c__nav-link">
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">深色模式</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <!-- <li><button @click="click">深色模式</button></li> -->
                        <li>
                            <button @click="changeHandler()" class="relative rounded-full bg-sky-500 py-1.5 px-1.5 flex items-center">
                                <span v-if="isDark" :class="['absolute top-0.5 right-0.5 flex items-center justify-center bg-white w-8 h-8 rounded-full center' ,{'hidden': !isDark}]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-sky-500 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                                </span>
                                <span v-else :class="['absolute top-0.5 left-0.5 flex items-center justify-center bg-white w-8 h-8 rounded-full center' ,{'hidden': isDark}]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-sky-500 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block fill-white h-6 w-6 ml-3.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">指南</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Guide' }">說明</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">組件</div>
                <div class="c__nav-link-item--secondary">提示訊息</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Module' }">Module-成功</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Page2' }">Page2</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">組件</div>
                <div class="c__nav-link-item--secondary">提示訊息</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Module' }">Module-成功</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Page2' }">Page2</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- c__nav-link-item -->
            <div class="c__nav-link-item">
                <div class="c__nav-link-item--primary">組件</div>
                <div class="c__nav-link-item--secondary">提示訊息</div>
                <div class="c__nav-link-item--tertiary">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'Module' }">Module-成功</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Page2' }">Page2</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    props: ["props-in"],
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