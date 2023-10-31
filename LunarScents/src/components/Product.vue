<template>
  <div
      class="bg-neutral-50 rounded-2xl shadow-md pb-6 h-auto  transition-all duration-100 hover:scale-105">
    <img
        :src="img" :alt="name"
        class="mx-auto h-50 mb-4 rounded-t-2xl"/>
    <div class="px-2">
      <h2 class="text-2xl font-bolder text-black">
        {{ name }}
      </h2>
      <p class="text-slate-500 my-4 font-bold">
        {{ description }}
      </p>
      <p class=" text-black font-bold">
        R{{ price }}
      </p>
      <div id='product-component-1698749682460'></div>
      </div>
      </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String
    },
    img: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart');
    },
  },
  mounted() {
    console.log(this.img);
  },
  created() {
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'b83314-2.myshopify.com',
          storefrontAccessToken: '8edfb7b4101804e00c9fb81bd02893e3',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '8198745850082',
            node: document.getElementById('product-component-1698749682460'),
            moneyFormat: 'R%20%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#404d5f"
        },
        "background-color": "#475569",
        ":focus": {
          "background-color": "#404d5f"
        }
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#404d5f"
        },
        "background-color": "#475569",
        ":focus": {
          "background-color": "#404d5f"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#404d5f"
        },
        "background-color": "#475569",
        ":focus": {
          "background-color": "#404d5f"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#475569",
        ":hover": {
          "background-color": "#404d5f"
        },
        ":focus": {
          "background-color": "#404d5f"
        }
      }
    }
  }
},
      });
    });
  }
})();

</script>

<style scoped>

</style>