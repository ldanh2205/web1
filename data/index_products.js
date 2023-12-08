const pstatus = true;
if (window.localStorage.status != pstatus || !window.localStorage.product) {
    window.localStorage.status = pstatus;
    window.localStorage.product = JSON.stringify({
        milk: [
            {
                "id":1,
                "image": "img/milk/tangcc.jpg",
                "title": "Sữa Amiru vị dâu (180g)",
                "origin": "Nhật Bản",
                "price": 850,
                "type": ["All", "Sữa tăng chiều cao"],
                "description":"- Giàu dinh dưỡng giúp tăng chiều cao vượt trội cho trẻ từ 3 - 16 tuôi. \n - Nhập khẩu từ Nhật Bản."
            },
            {
                "id":2,
                "image": "img/milk/tangcc1.jpg",
                "title": "Sữa Amiru vị dưa gang (180g)",
                "origin": "Nhật Bản",
                "price": 850,
                "type": ["All", "Sữa tăng chiều cao"],
                "description":"- Giàu dinh dưỡng giúp tăng chiều cao vượt trội cho trẻ từ 3 - 16 tuôi. \n - Nhập khẩu từ Nhật Bản."
            },
            {
                "id":3,
                "image": "img/milk/tangcc3.jpg",
                "title": "Sữa Hikid hương vani (600g)",
                "origin": "Hàn Quốc",
                "price": 550,
                "type": ["Sữa tăng chiều cao", "All"],
                "description":"- Sản xuất tại ILDONG FOODIS ở Hàn Quốc. \n - Dành cho trẻ từ 1 tuổi trở lên."
            },
            {
                "id":4,
                "image": "img/milk/tangcc4.jpg",
                "title": "Sữa dê Hikid (650g)",
                "origin": "Hàn Quốc",
                "price": 550,
                "type": ["Sữa tăng chiều cao", "All"],
                "description":"- Dành cho trẻ em từ 1-2 tuổi."
            },
            {
                "id":5,
                "image": "img/milk/tangcc5.jpg",
                "title": "Sữa Hikid vị socola (650g)",
                "origin": "Hàn Quốc",
                "price": 550,
                "type": ["All", "Sữa tăng chiều cao"],
                "description":"- Dành cho trẻ em từ 1-2 tuổi."
            },
            {
                "id":6,
                "image": "img/milk/tangcc6.jpg",
                "title": "Sữa Hikid dạng viên",
                "origin": "Hàn Quốc",
                "price": 350,
                "type": ["All", "Sữa tăng chiều cao"],
                "description":"- Dành cho trẻ em từ 1-2 tuổi."
            },
            {
                "id":7,
                "image": "img/milk/tangcc7.jpg",
                "title": "Sữa Meta Care Grow số 0 (850g)",
                "origin": "New Zealand",
                "price": 450,
                "type": ["Sữa tăng chiều cao", "Sữa bột", "All"],
                "description":"- Dành cho trẻ từ 0 - 12 tháng tuổi."
            },
            {
                "id":8,
                "image": "img/milk/tangcc2.jpg",
                "title": "Sữa Vitagrow 0+ (900g)",
                "origin": "New Zealand",
                "price": 450,
                "type": ["All", "Best seller", "Sữa bột", "Sữa tăng chiều cao"],
                "description":"- Dành cho trẻ từ 0 - 12 tháng tuổi."
            },
            {
                "id":9,
                "image": "img/milk/tangcc8.jpg",
                "title": "Sữa Vitagrow 1+ (900g)",
                "origin": "New Zealand",
                "price": 450,
                "type": ["Sữa tăng chiều cao", "Best seller", "Sữa bột", "All"],
                "description":"- Dành cho trẻ từ 1 - 2 tuổi."
            },
            {
                "id":10,
                "image": "img/milk/tangcc9.jpg",
                "title": "Sữa Nutrient Kao 700g",
                "origin": "Hoa Kỳ",
                "price": 430,
                "type": ["Sữa tăng chiều cao", "Sữa bột","All"],
                "description":"- Dành cho trẻ em từ 1 - 10 tuổi. "
            },
            {
                "id":11,
                "image": "img/milk/tangcc10.jpg",
                "title": "Sữa P100 900g",
                "origin": "Hoa Kỳ",
                "price": 450,
                "type": ["All", "Sữa tăng chiều cao", "Sữa tăng cân cho trẻ em", "Sữa bột"],
                "description":"- Dành cho trẻ từ 1 - 10 tuổi. Giúp trẻ tăng chiều cao, cân nặng."
            },
            {
                "id":12,
                "image": "img/milk/tangcc10.jpg",
                "title": "Sữa P100 900g (cho trẻ em biếng ăn)",
                "origin": "Hoa Kỳ",
                "price": 450,
                "type": ["All", "Sữa tăng chiều cao", "Sữa bột", "Sữa tăng cân cho trẻ em"],
                "description":"- Dành cho trẻ từ 1 - 10 tuổi. Giúp trẻ tăng chiều cao, cân nặng."
            },
            {
                "id":13,
                "image": "img/milk/sua-goatlac-ba-gold.jpg",
                "title": "Sữa Dê GOATLAC Gold BA 800g (trẻ biếng ăn)",
                "origin": "Hà Lan",
                "price": 630,
                "type": ["Sữa tăng cân cho trẻ em", "Sữa bột", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":14,
                "image": "img/milk/sua-pediasure.jpg",
                "title": "Sữa Pediasure Abbott bổ sung Arginin & Vitamin K2 850g",
                "origin": "Hoa Kỳ",
                "price": 650,
                "type": ["All", "Sữa tăng cân cho trẻ em"],
                "description":"- Dành cho trẻ từ 1 - 10 tuổi. Giúp trẻ tăng chiều cao, cân nặng."
            },

            {
                "id":15,
                "image": "img/milk/sua-meiji-mama.jpg",
                "title": "Sữa Meiji Mama",
                "origin": "Nhật Bản",
                "price": 450,
                "type": ["All", "Sữa cho mẹ bầu"],
                "description":"- Dinh dưỡng cho mẹ bầu khỏe, bé thông minh."
            },
            {
                "id":16,
                "image": "img/milk/sua-fresubin-renal.jpg",
                "title": "Sữa Fresubin cho người bệnh thận",
                "origin": "Mỹ",
                "price": 450,
                "type": ["All", "Sữa cho người bệnh thận"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":17,
                "image": "img/milk/sua-oc-cho-han-quoc-bich.jpg",
                "title": "Sữa óc chó dạng bịch",
                "origin": "Hàn Quốc",
                "price": 320,
                "type": ["All", "Sữa cho trẻ em"],
                "description":"- Dành cho mọi lứa tuổi."
            },
            {
                "id":18,
                "image": "img/milk/sua-oc-cho-han-quoc-140ml.jpg",
                "title": "Sữa óc chó dạng hộp 140ml",
                "origin": "Hàn Quốc",
                "price": 250,
                "type": ["All", "Sữa cho trẻ em", "Sữa hộp", "Sữa cho mẹ bầu"],
                "description":"- Dành cho mọi lứa tuổi."
            },
            {
                "id":19,
                "image": "img/milk/sua-enfamama-socola.jpg",
                "title": "Sữa Enfamama hương Chocolate 830g",
                "origin": "Mỹ",
                "price": 830,
                "type": ["Best seller","All", "Sữa cho mẹ bầu"],
                "description":"Cho phụ nữ mang thai và cho con bú"
            },
            {
                "id":20,
                "image": "img/milk/sua-oc-cho-hanh-nhan-han-quoc.jpg",
                "title": "Sữa óc chó hạnh nhân dạng hộp 200ml",
                "origin": "Hàn Quốc",
                "price": 300,
                "type": ["All", "Sữa cho trẻ em", "Sữa hộp", "Sữa cho mẹ bầu"],
                "description":"- Dành cho trẻ em và mẹ mang thai. Bổ sung dinh dưỡng cho mẹ và bé."
            },
            {
                "id":21,
                "image": "img/milk/sua-enfamama-vani.jpg",
                "title": "Sữa Enfamama hương vani 830g",
                "origin": "Mỹ",
                "price": 820,
                "type": ["All", "Sữa cho mẹ bầu"],
                "description":"Cho phụ nữ mang thai và cho con bú"
            },
            {
                "id":22,
                "image": "img/milk/sua-nuvi-grow-pha-san-110ml.jpg",
                "title": "Sữa NuviGrow pha sẵn 110ml (24 hộp/thùng)",
                "origin": "Việt Nam",
                "price": 450,
                "type": ["All", "Sữa hộp", "Sữa bột pha sẵn"],
                "description":"- Cho trẻ từ 1-9 tuổi."
            },

            {
                "id":23,
                "image": "img/milk/nutricare-fine-3.jpg",
                "title": "Sữa Nutricare",
                "origin": "Vương Quốc Anh",
                "price": 650,
                "type": ["All", "Sữa cho bệnh nhân ung thư"],
                "description":"- Dành cho người ung thư. "
            },
            {
                "id":24,
                "image": "img/milk/sbps-colos-gain-110ml.jpg",
                "title": "Sữa Colos Gain 110ml (24 hộp/thùng)",
                "origin": "Vương Quốc Anh",
                "price": 500,
                "type": ["Best seller","All", "Sữa hộp", "Sữa bột pha sẵn"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },

            {
                "id":25,
                "image": "img/milk/sua-abbott-glucerna-4.jpg",
                "title": "Sữa Abbott Glucerna hương Vani",
                "origin": "Vương Quốc Anh",
                "price": 650,
                "type": ["All", "Sữa cho bệnh nhân tiểu đường"],
                "description":"- Dành cho người bị đái tháo đường."
            },
            {
                "id":26,
                "image": "img/milk/sua-anlene-gold-1.2kg-moi.jpg",
                "title": "Sữa Anlene Gold dạng hộp 1.2kg ",
                "origin": "Mỹ",
                "price": 480,
                "type": ["Best seller", "All", "Sữa chống loãng xương"],
                "description":"- Dành cho người cao tuổi. Tiết kiệm hơn 170000đ."
            },
            {
                "id":27,
                "image": "img/milk/sua-anlene-gold-4.jpg",
                "title": "Sữa Anlene Gold",
                "origin": "Mỹ",
                "price": 650,
                "type": ["Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":28,
                "image": "img/milk/sua-boostglucose.jpg",
                "title": "Sữa Bootglucose",
                "origin": "Mỹ",
                "price": 650,
                "type": ["All", "Sữa cho người ung thư"],
                "description":"- Dành cho bệnh nhân ung thư."
            },
            {
                "id":29,
                "image": "img/milk/sua-anlene-gold-5x-hop-giay.jpg",
                "title": "Sữa Anlene Gold hộp giấy hương vani",
                "origin": "Mỹ",
                "price": 480,
                "type": ["All", "Sữa hộp", "Sữa chống loãng xương", "Best seller"],
                "description":"- Dành cho người cao tuổi. Tiết kiệm hơn 170000đ."
            },
            {
                "id":30,
                "image": "img/milk/sua-bot-pha-san-oggi-gold.jpg",
                "title": "Sữa Oggi Gold 110ml(48 hộp/thùng)",
                "origin": "Mỹ",
                "price": 500,
                "type": ["All","Best seller", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em"],
                "description":"- Dành cho trẻ em từ 1-10 tuổi."
            },

            {
                "id":31,
                "image": "img/milk/sua-diben.jpg",
                "title": "Sữa Diben",
                "origin": "Mỹ",
                "price": 225,
                "type": ["All", "Sữa cho bệnh nhân ung thư"],
                "description":"- Dành cho bệnh nhân ung thư."
            },
            {
                "id":32,
                "image": "img/milk/sua-diabetcare-gold.jpg",
                "title": "Sữa Diabetcare Gold",
                "origin": "Mỹ",
                "price": 740,
                "type": ["All", "Sữa cho bệnh nhân tiểu đường"],
                "description":"- Dành cho bệnh nhân tiểu đường."
            },
            {
                "id":33,
                "image": "img/milk/sua-ensure-gold-it-ngot.jpg",
                "title": "Sữa Ensure Gold ít đường",
                "origin": "Mỹ",
                "price": 680,
                "type": ["Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":34,
                "image": "img/milk/sua-ensure-uc.jpg",
                "title": "Sữa Ensure Úc",
                "origin": "Austraylia",
                "price": 600,
                "type": ["Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":35,
                "image": "img/milk/sua-eurofit-gold.jpg",
                "title": "Sữa Eurofit Gold",
                "origin": "Mỹ",
                "price": 550,
                "type": ["Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":36,
                "image": "img/milk/sua-forticare-cam-chanh-1.jpg",
                "title": "Sữa Forticare vị cam chanh",
                "origin": "Vương Quốc Anh",
                "price": 580,
                "type": ["Sữa cho người bệnh thận", "All"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":37,
                "image": "img/milk/sua-ensure-gold-vigor.jpg",
                "title": "Sữa Ensure Gold Vigor 270ml (24 chai/thùng)",
                "origin": "Vương Quốc Anh",
                "price": 1000,
                "type": ["Best seller","Sữa chống loãng xương"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":38,
                "image": "img/milk/sua-delical-vani_phap.jpg",
                "title": "Sữa Delical hương vani",
                "origin": "Pháp",
                "price": 550,
                "type": ["Sữa cho người bệnh thận", "All"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":39,
                "image": "img/milk/sua-delical-coffee_0.jpg",
                "title": "Sữa Delical vị cà phê",
                "origin": "Pháp",
                "price": 550,
                "type": ["Sữa cho người bệnh thận", "All"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":40,
                "image": "img/milk/sua-calosure-gold-moi.jpg",
                "title": "Sữa Calosure Gold mới",
                "origin": "Mỹ",
                "price": 650,
                "type": ["Sữa cho bệnh nhân tiểu đường", "All"],
                "description":"- Dành cho bệnh nhân tiểu đường."
            },
            {
                "id":41,
                "image": "img/milk/sua-calosure-america-tieu-duong.jpg",
                "title": "Sữa Calosure America",
                "origin": "Mỹ",
                "price": 650,
                "type": ["Sữa cho bệnh nhân tiểu đường", "All"],
                "description":"- Dành cho bệnh nhân tiểu đường."
            },
            {
                "id":42,
                "image": "img/milk/sbps-nuvigrow-180ml.jpg",
                "title": "Sữa Nuvigrow 180ml (24 hộp/thùng)",
                "origin": "Mỹ",
                "price": 600,
                "type": ["Sữa hộp", "Sữa bột pha sẵn", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dành cho trẻ em từ 1-10 tuổi."
            },
            {
                "id":43,
                "image": "img/milk/sua-bot-pha-san-colos-gain-180ml.jpg",
                "title": "Sữa Colos Gain 180ml (24 hộp/thùng)",
                "origin": "Mỹ",
                "price": 600,
                "type": ["Sữa hộp", "Sữa bột pha sẵn", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":44,
                "image": "img/milk/sua-bot-pha-san-colosbaby-110ml-2.jpg",
                "title": "Sữa ColosBaby 110ml (24 hộp/thùng)",
                "origin": "Mỹ",
                "price": 350,
                "type": ["Sữa hộp","Sữa bột pha sẵn", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":45,
                "image": "img/milk/sua-bot-pha-san-colosbaby.jpg",
                "title": "Sữa ColosBaby 180ml (24 hộp/thùng)",
                "origin": "Mỹ",
                "price": 400,
                "type": ["Sữa hộp","Sữa bột pha sẵn", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":46,
                "image": "img/milk/sua-bot-pha-san-grow-plus-180ml.jpg",
                "title": "Sữa Grow Plus 180ml (24 hộp/thùng)",
                "origin": "Vương Quốc Anh",
                "price": 420,
                "type": ["Sữa hộp", "Sữa bột pha sẵn", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":47,
                "image": "img/milk/sua-bot-pha-san-grow-plus-do-1.jpg",
                "title": "Sữa Grow Plus",
                "origin": "Vương Quốc Anh",
                "price": 450,
                "type": ["Sữa hộp","Sữa bột pha sẵn", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":48,
                "image": "img/milk/sua-bot-pha-san-meta-care-110ml.jpg",
                "title": "Sữa Meta Care 110ml (24 hộp/thùng)",
                "origin": "Mỹ",
                "price": 280,
                "type": ["Sữa hộp","Sữa bột pha sẵn", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":49,
                "image": "img/milk/sua-devondale-200ml-moi.jpg",
                "title": "Sữa Devondale 180ml (48 hộp/thùng)",
                "origin": "Pháp",
                "price": 650,
                "type": ["Sữa hộp", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dành cho trẻ từ 1-10 tuổi và trẻ biếng ăn."
            },
            {
                "id":50,
                "image": "img/milk/sua-enplus-gold.jpg",
                "title": "Sữa Enplus Gold",
                "origin": "Mỹ",
                "price": 760,
                "type": ["Sữa cho người cao tuổi", "Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":51,
                "image": "img/milk/sua-ensure-duc-nk.jpg",
                "title": "Sữa Ensure nhập khẩu",
                "origin": "Đức",
                "price": 920,
                "type": ["Sữa cho người cao tuổi", "Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":52,
                "image": "img/milk/sua-gluvita-gold-900g (1).jpg",
                "title": "Sữa Gluvita Gold 900g (dinh dưỡng cho người bệnh tiểu đường)",
                "origin": "Mỹ",
                "price": 595,
                "type": ["Sữa cho bệnh nhân tiểu đường", "All"],
                "description":"- Dành cho người bệnh tiểu đường."
            },
            {
                "id":53,
                "image": "img/milk/sua-nepro-1-4.jpg",
                "title": "Sữa Nepro",
                "origin": "Vương Quốc Anh",
                "price": 500,
                "type": ["Sữa cho người bệnh thận", "All"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":54,
                "image": "img/milk/sua-nepro-1-400g.jpg",
                "title": "Sữa Nepro 400g",
                "origin": "Vương Quốc Anh",
                "price": 520,
                "type": ["Sữa cho người bệnh thận", "All"],
                "description":"- Dành cho người bệnh thận."
            },
            {
                "id":55,
                "image": "img/milk/sua-nepro-2-4.jpg",
                "title": "Sữa Nepro giàu protein",
                "origin": "Vương Quốc Anh",
                "price": 500,
                "type": ["Sữa cho người bệnh thận", "Tiểu thuyết"],
                "description":"-Dành cho người bệnh thận."
            },

            {
                "id":56,
                "image": "img/milk/sua-blackmores-jnr-balance.jpg",
                "title": "Sữa Blackmores JNR Balance 400g (bé từ 1-10 tuổi)",
                "origin": "Austraylia",
                "price": 390,
                "type": ["Sữa bột", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dinh dưỡng cao năng lượng cho trẻ từ 1-10 tuổi."
            },

            {
                "id":57,
                "image": "img/milk/sua-calokid-0.jpg",
                "title": "Sữa CALOKID Gold 0+ (0-12 tháng)",
                "origin": "Vương Quốc Anh",
                "price": 430,
                "type": ["Sữa bột", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dinh dưỡng cao năng lượng cho trẻ từ 1-10 tuổi."
            },
            {
                "id":58,
                "image": "img/milk/sua-premium.jpg",
                "title": "Sữa Premium 700g",
                "origin": "Việt Nam",
                "price": 700,
                "type": ["Sữa chống loãng xương", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":59,
                "image": "img/milk/sua-bonesure.jpeg",
                "title": "Sữa Bonesure 900g",
                "origin": "Mỹ",
                "price": 700,
                "type": ["Sữa chống loãng xương", "Sữa cho người cao tuổi", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":60,
                "image": "img/milk/sua-kanny.jpg",
                "title": "Sữa Kanny 900g",
                "origin": "Hà Lan",
                "price": 498,
                "type": ["Best seller","Sữa chống loãng xương", "Sữa cho người cao tuổi","All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":61,
                "image": "img/milk/sua-vinamilk.webp",
                "title": "Sữa Vinamilk Sure Prevent 900g",
                "origin": "Việt Nam",
                "price": 430,
                "type": ["Sữa cho người cao tuổi", "All"],
                "description":"- Dành cho người cao tuổi."
            },

            {
                "id":62,
                "image": "img/milk/sua-enfa-grow+.jpg",
                "title": "Sữa Enfa Grow A+ 1.7kg",
                "origin": "Vương Quốc Anh",
                "price": 920,
                "type": ["All", "Sữa bột", "Sữa tăng cân cho trẻ em"],
                "description":"- Hỗ trợ tiêu hóa."
            },
            {
                "id":63,
                "image": "img/milk/sua-ensure-gold-strengthpro.webp",
                "title": "Sữa Abbott Ensure Gold StrengthPro hương Vani ít ngọt (850g)",
                "origin": "Mỹ",
                "price": 910,
                "type": ["Sữa bột", "All"],
                "description":"- Bổ sung dinh dưỡng, phục hồi thể chất và tăng cường sức khỏe."
            },
            {
                "id":64,
                "image": "img/milk/sua-high-weight.jpg",
                "title": "Sữa HiWeight 900g",
                "origin": "Mỹ",
                "price": 905,
                "type": [ "Sữa chống loãng xương", "All"],
                "description":"- Dành cho trẻ nhỏ biếng ăn, người tiêu hóa kém."
            },
            {
                "id":65,
                "image": "img/milk/VNMDD_LON.webp",
                "title": "Sữa bột dinh dưỡng Vinamilk nguyên kem",
                "origin": "Việt Nam",
                "price": 120,
                "type": ["All", "Sữa cho trẻ em"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":66,
                "image": "img/milk/CANXIPRO_900_1.webp",
                "title": "Sữa Vinamilk Canxi Pro 400g",
                "origin": "Việt Nam",
                "price": 250,
                "type": ["Sữa chống loãng xương", "Sữa cho người cao tuổi", "All"],
                "description":"- Dành cho người cao tuổi."
            },
            {
                "id":67,
                "image": "img/milk/dielac-alpha-gold-iq-3-850g.jpg",
                "title": "Sữa Dielac Alpha Gold IQ 3, 850g",
                "origin": "Mỹ",
                "price": 285,
                "type": ["Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":68,
                "image": "img/milk/sua-bot-pha-san-yoko-110ml-loc-4.png",
                "title": "Sữa uống dinh dưỡng Vinamilk Yoko Gold 110ml (Lốc 4 hộp)",
                "origin": "Việt Nam",
                "price": 160,
                "type": ["Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":69,
                "image": "img/milk/sua-vinamilk-colosgold-so-1-350g-0-1-tuoi.jpg",
                "title": "Sữa Vinamilk ColosGold 1 350g",
                "origin": "Việt Nam",
                "price": 270,
                "type": ["Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":70,
                "image": "img/milk/sua-uong-dinh-duong-optimum-gold-110ml-loc-4-hop.jpg",
                "title": "Sữa uống dinh dưỡng Optimum Gold 110ml (Lốc 4 hộp)",
                "origin": "Việt Nam",
                "price": 160,
                "type": ["Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "Sữa bột pha sẵn", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":71,
                "image": "img/milk/sb-vnm-kenko-haru-ht350g.jpg",
                "title": "Sữa bột Vinamilk Kenko Haru hộp 350g",
                "origin": "Nhật Bản",
                "price": 295,
                "type": ["Sữa bột", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em", "All"],
                "description":"- Dành cho trẻ em."
            },

            {
                "id":72,
                "image": "img/milk/san-pham-dinh-duong-pedia-kenji-2-850g.jpg",
                "title": "Sữa Pedia Kenji 2+ 850g",
                "origin": "Nhật Bản",
                "price": 308,
                "type": ["Sữa bột", "Sữa cho trẻ em", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":73,
                "image": "img/milk/loai-sua-bot-tot-nhat-cho-tre-so-sinh-3.jpg",
                "title": "Sữa Similac Neosure",
                "origin": "Mỹ",
                "price": 400,
                "type": ["All", "Sữa cho trẻ em"],
                "description":"- Dành cho trẻ sơ sinh."
            },
            {
                "id":74,
                "image": "img/milk/sua-Frisolac-Gold-1-co-tang-can-khong-1.jpg",
                "title": "Sữa Frisolac Gold",
                "origin": "Mỹ",
                "price": 650,
                "type": ["All", "Sữa tăng chiều cao", "Sữa cho trẻ em", "Sữa tăng cân cho trẻ em"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":75,
                "image": "img/milk/top-12-sua-hop-pha-san-cho-be-1-tuoi-tot-nhat-4-845x500-1.jpg",
                "title": "Sữa Abbott Grow 110ml (4 hộp/lốc)",
                "origin": "Vương Quốc Anh",
                "price": 28,
                "type": ["Sữa bột pha sẵn", "Tiểu thuyết"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":76,
                "image": "img/milk/sua-meta-care-eco-pha-san-180ml.jpg",
                "title": "Sữa Meta Care 180ml (4 hộp/lốc)",
                "origin": "Mỹ",
                "price": 30,
                "type": ["Sữa bột pha sẵn", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":77,
                "image": "img/milk/sua-bot-pha-san-colos-dha-110ml-2.png",
                "title": "Sữa Colos DHA 110ml (4 hộp/lốc)",
                "origin": "Mỹ",
                "price": 30,
                "type": ["Sữa bột pha sẵn", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":78,
                "image": "img/milk/sua-bot-pha-san-cho-be-1-tuoi-6.jpg",
                "title": "Sữa Abbott Similac 110ml (4 hộp/lốc)",
                "origin": "Mỹ",
                "price": 28,
                "type": ["All", "Sữa bột pha sẵn"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":79,
                "image": "img/milk/sua-bot-pha-san-colos-dha-110ml-2.png",
                "title": "Sữa Colos DHA 110ml (4 hộp/lốc)",
                "origin": "Mỹ",
                "price": 30,
                "type": ["Sữa bột pha sẵn", "All"],
                "description":"- Dành cho trẻ em."
            },
            {
                "id":80,
                "image": "img/milk/sua-recova-gold.jpg",
                "title": "Sữa Recova Gold",
                "origin": "Mỹ",
                "price": 240,
                "type":["Sữa cho bệnh nhân ung thư", "All"],
                "description": "- Dành cho bệnh nhân ung thư sau hóa trị và xạ trị."
            },
            {
                "id":81,
                "image": "img/milk/sua-supportan-ung-thu.jpg",
                "title": "Sữa Supportan",
                "origin": "Pháp",
                "price": 224,
                "type":["Sữa cho bệnh nhân ung thư", "All"],
                "description": "- Dành cho bệnh nhân ung thư sau hóa trị và xạ trị."
            },
        ],
        
        vip: [
            {
                "id":500,
                "image": "img/milk/sua-milo-uc-1kg-3.jpg",
                "title": "Sữa Milo 1kg",
                "origin": "Austraylia",
                "price": 330,
                "description": "- Dinh dưỡng dành cho trẻ em và người lớn."
            },
            {
                "id":501,
                "image": "img/milk/sua-nuvi-grow-pha-san-110ml.jpg",
                "title": "Sữa Nuvi Grow 110ml (24 hộp/thùng)",
                "origin": "Vương Quốc Anh",
                "price": 350,
                "type": ["Sữa bột pha sẵn"],
                "description": "- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":502,
                "image": "img/milk/sua-recova-gold.jpg",
                "title": "Sữa Recova Gold",
                "origin": "Mỹ",
                "price": 240,
                "type":["Sữa cho bệnh nhân ung thư", "All"],
                "description": "- Dành cho bệnh nhân ung thư sau hóa trị và xạ trị."
            },
            {
                "id":503,
                "image": "img/milk/sua-supportan-ung-thu.jpg",
                "title": "Sữa Supportan",
                "origin": "Pháp",
                "price": 224,
                "type":["Sữa cho bệnh nhân ung thư", "All"],
                "description": "- Dành cho bệnh nhân ung thư sau hóa trị và xạ trị."
            },
            {
                "id":504,
                "image": "img/milk/sua-peptament-junior.jpg",
                "title": "Sữa Peptament Junior",
                "origin": "Thụy Sĩ",
                "price": 425,
                "type": ["Sữa cho trẻ em"],
                "description": "- Dành cho trẻ từ 1-10 tuổi."
            },
            {
                "id":505,
                "image": "img/milk/sua-prosure.jpg",
                "title": "Sữa Prosure hương vani",
                "origin": "Mỹ",
                "price": 495,
                "description": "- Dành cho bệnh nhân ung thư."
            },
            {
                "id":506,
                "image": "img/milk/sua-famna-so-1-400g.jpg",
                "title": "Sữa Famna số 1 400G (0-6 tháng)",
                "origin": "Thụy Điển",
                "price": 295,
                "description": "- Dành cho trẻ từ 0-6 tháng tuổi."
            },
            {
                "id":507,
                "image": "img/milk/sua-pedia-plus-gold.jpg",
                "title": "Sữa Pedia Plus Gold 900g",
                "origin": "Mỹ",
                "price": 380,
                "description": "- Dành cho trẻ từ 1 tuổi trở lên."
            }
        ]
    });
}