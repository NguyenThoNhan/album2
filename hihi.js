new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "https://img.goodfon.com/wallpaper/big/4/d0/parochka-koshki-malyshi-kotiata-igraiut-a-couple-cats-kids-k.webp",
            img2: "https://i.pinimg.com/736x/d8/55/c6/d855c66f95e9d3babeebd1e88bf4026d.jpg",
            img3: "https://i.pinimg.com/736x/53/03/29/530329b951317d4fe4157063adb4daae.jpg",
            title: "COUPLE",
            isOpen: false,
          },
          {
            img1: "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK1zSX_YjOvNSHlqwuy84X_WMWRSHNigzpA&s",
            img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA0IrBhjMhs3d_xUnBmUZH1RKquJJyb6QYMM2zhTCAXHmOhTzXGUghI0ceWVN3S5RutQ&usqp=CAU",
            title: "CUTE",
            isOpen: false,
          },
          {
            img1: "http://surl.li/ydochs",
            img2: "https://i.pinimg.com/736x/ae/e3/4d/aee34ddfd65c21d2696329a3a686a94c.jpg",
            img3: "https://i.pinimg.com/736x/57/0b/78/570b78136f6f57b760bf1134a15ea88e.jpg",
            title: "BABIES",
            isOpen: false,
          },
          {
            img1: "https://d2zp5xs5cp8zlg.cloudfront.net/image-26071-800.jpg",
            img2: "https://d2zp5xs5cp8zlg.cloudfront.net/image-61162-800.jpg",
            img3: "https://drbillspetnutrition.com/wp-content/uploads/2023/07/Why-Do-Cats-Sleep-So-Much-Blog-Image.png",
            title: "SLEEP",
            isOpen: false,
          },
          {
            img1: "https://pbs.twimg.com/profile_images/1703068667808780288/F-ujycv2_400x400.jpg",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94_4FVT5-Sa8Lw_kme5LXS3jXT-obUGSrwzjp7atTw2Kbn86TO3OJG79txAavZINbfNE&usqp=CAU",
            img3: "https://i.pinimg.com/736x/fa/39/eb/fa39eb88592bf16aebab746f88068ac7.jpg",
            title: "HERO",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });