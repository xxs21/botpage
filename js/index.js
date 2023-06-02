var vm = new Vue({
    el: '#index',
    vuetify: new Vuetify(),
    data: {
        drawer: null,
        cards: [],
        card:{}
    },
    created() {
        this.initVideo();
    },
    methods: {
        clikCH: function(e) {
            var ch = this.$refs.ch;
            var logo = this.$refs.logo.querySelector("img");
            if (ch.style.display == "none") {
                ch.style.display = "none";
            } else {
                ch.style.display = "block";
                logo.style.display = "none";
            }
        },
        getVideo: async function(videoName) {
            const res = await fetch('https://209.141.43.183/v1/getHVideo');
            const json = await res.json();
            return json;
        },initVideo: function() {
            var arrStr = [];
            this.getVideo().then(res =>{
                res.data.forEach(function (v,i) {
                    this.card = {};
                    this.card.title = v.vname;
                    this.card.src = v.vimg;
                    this.card.flex = 12;
                    this.card.vid = v.vid;
                    // console.log(this.card);
                    arrStr.push(this.card);
                })
            })
            this.cards = arrStr;
        },
        sc:function(name,vid) {
            setCookie(name,vid,1);
            location.href = "https://xxs21.github.io/botpage/video.html";
        }
    }
})