const finansalVeriler = {
    "butce": {
        baslik: "Bütçe",
        tanim: "Gelecekteki belirli bir dönem için planlanan gelir ve giderlerin tahmin edildiği mali tablodur.",
        bilgi: "Aylık gelirlerin (harçlık, maaş) ve giderlerin (yol, yemek, fatura) önceden hesaplanıp bir plan dahilinde yönetilmesi gerektiği bilgisidir.",
        tutum: "Bütçe yapmanın kısıtlayıcı bir ceza olmadığını, aksine paranı kontrol etmeni sağlayan bir 'finansal özgürlük haritası' olduğuna inanmaktır.",
        davranis: "Ayın ilk günü oturup bir deftere veya telefon uygulamasına 2000 TL gelir, 1000 TL ihtiyaç, 500 TL istek, 500 TL tasarruf şeklinde bir tablo çizmek ve ay boyunca buna sadık kalmaktır."
    },
    "faiz": {
        baslik: "Faiz",
        tanim: "Kiraya verilen paranın kullanım bedeli veya paranın zaman içindeki değeridir.",
        bilgi: "Borç alındığında paranın maliyeti olarak fazladan ödenen, bankaya yatırıldığında ise getiri olarak kazanılan oran olduğunu bilmektir.",
        tutum: "Kredi kartı veya kredi borçlarını geciktirmenin birikerek büyüyen bir maliyet yaratacağının bilincinde olmaktır.",
        davranis: "Borçlanırken faiz oranlarını karşılaştırmak veya birikimlerini enflasyona karşı korumak için faiz/getiri sağlayan hesaplarda değerlendirmektir."
    },
    "enflasyon": {
        baslik: "Enflasyon",
        tanim: "Mal ve hizmet fiyatlarının genel düzeyinde yaşanan sürekli ve hissedilir artış eğilimidir.",
        bilgi: "Enflasyon yükseldikçe paranın alım gücünün düştüğünü, yani bugün 100 TL'ye alınan bir ürünün seneye 100 TL'ye alınamayacağını kavramaktır.",
        tutum: "Parayı sadece nakit olarak kenarda tutmanın, enflasyon karşısında parayı eritmek (değer kaybettirmek) olduğu gerçeğini benimsemektir.",
        davranis: "Birikimleri yastık altında veya vadesiz hesapta boşta bekletmek yerine, enflasyon oranının üzerinde getiri sağlayacak yatırım araçlarına yönlendirmektir."
    },
    "vadeli_mevduat": {
        baslik: "Vadeli Mevduat Hesabı",
        tanim: "Bankaya yatırılan paranın, belirlenen bir süre (vade) boyunca çekilmemesi şartıyla getiri kazandırdığı hesap türüdür.",
        bilgi: "Paranın belirli bir süre bankaya bağlanması karşılığında, önceden belirlenmiş risksiz bir kazanç elde edileceğini bilmektir.",
        tutum: "Güvenli ve risksiz yatırım arayanlar için birikimleri değerlendirmenin en temel yollarından biri olarak görmektir.",
        davranis: "Eldeki boşta duran 10.000 TL'yi hemen harcamayacaksa, 32 günlük vadeli bir hesaba yatırarak ay sonunda ek bir gelir elde etmektir."
    },
    "ihtiyac_istek": {
        baslik: "İhtiyaç mı, İstek mi?",
        tanim: "Harcamaları zorunluluk (ihtiyaç) ve arzu (istek) olarak birbirinden ayırma becerisidir.",
        bilgi: "İhtiyacın yaşamak için zorunlu (barınma, temel gıda), isteğin ise sadece yaşam kalitesini artıran hevesler (marka ayakkabı) olduğunu bilmektir.",
        tutum: "Kaynakların (paranın) sınırlı olduğunun bilincinde olmak ve 'İsteklerimi ertelesem de hayatta kalabilirim' zihniyetini benimsemektir.",
        davranis: "Mağazada çok beğenilen bir ürünü kasaya götürmeden önce 10 saniye durup 'Buna gerçekten ihtiyacım var mı?' diye sormak ve hevesse vazgeçmektir."
    },
    "kredi_karti": {
        baslik: "Doğru Kredi Kartı Kullanımı",
        tanim: "Banka tarafından müşteriye verilen limit dahilinde, nakit yerine geçen ödeme aracının bilinçli kullanımıdır.",
        bilgi: "Kredi kartının bankanın parası olduğunu, ek bir gelir olmadığını ve zamanında ödenmediğinde yüksek faiz işlediğini bilmektir.",
        tutum: "Kredi kartını borçlanma aracı olarak değil, sadece yanımızda nakit taşımamayı sağlayan pratik bir ödeme aracı olarak görmektir.",
        davranis: "Kredi kartıyla sadece vadesi geldiğinde tamamını ödeyebilecek kadar alışveriş yapmak ve ekstredeki asgari tutarı değil, borcun tamamını ödemektir."
    },
    "dijital_cuzdan": {
        baslik: "Dijital Cüzdan Kullanımı",
        tanim: "Kredi kartı veya nakit paranın dijital ortamda şifreli saklanarak, cep telefonu üzerinden hızlı ödeme yapmayı sağlayan yazılımlardır.",
        bilgi: "Fiziksel kart taşımadan, temassız ve hızlı ödeme yapılabildiğini, kampanyalardan anında yararlanılabildiğini bilmektir.",
        tutum: "Teknolojinin getirdiği kolaylıkları güvenli bir şekilde kullanmaya açık olmak, ancak parayı görmediği için harcama hissiyatının kaybolmasına karşı uyanık olmaktır.",
        davranis: "Nakit taşımak yerine güvenilir bir dijital cüzdan uygulaması (Apple Pay, Papara vb.) kullanmak, ancak harcama bildirimlerini açarak limitleri kontrol altında tutmaktır."
    },
    "kripto_para": {
        baslik: "Kripto Paralar",
        tanim: "Merkezi bir otoriteye bağlı olmayan, şifreleme (kriptografi) teknolojisi ile güvence altına alınmış tamamen sanal dijital varlıklardır.",
        bilgi: "Kripto paraların arkasındaki 'Blockchain' (Blokzincir) teknolojisini ve bu piyasaların son derece yüksek riskli ve dalgalı olduğunu bilmektir.",
        tutum: "Hızlı zengin olma hayaliyle değil, teknolojiyi anlama hevesiyle yaklaşmak ve kaybedildiğinde üzülmeyecek miktarlarla risk alınabileceğini düşünmektir.",
        davranis: "Sosyal medyadaki duyumlarla tüm birikimini bir kripto paraya yatırmak yerine, projeyi araştırarak bütçenin çok küçük bir kısmıyla tecrübe edinmektir."
    },
    "tasarruf": {
        baslik: "Tasarruf",
        tanim: "Elde edilen gelirin harcanmayarak, bir kısmının gelecekteki ihtiyaçlar veya beklenmedik durumlar için bir kenara ayrılmasıdır.",
        bilgi: "Tasarrufun 'harcamalardan arta kalan para' değil, 'harcamaya başlamadan önce ilk ayrılması gereken para' olduğunu bilmektir.",
        tutum: "Tasarrufu cimrilik olarak değil, geleceği güvence altına almanın ve finansal hedeflere (ev, araba, eğitim) ulaşmanın tek yolu olarak görmektir.",
        davranis: "Maaş veya harçlık ele geçtiği ilk gün, %10'unu veya %20'sini doğrudan birikim hesabına aktarmak ve kalan parayla ayı geçirmektir."
    },
    "yatirim": {
        baslik: "Yatırım",
        tanim: "Tasarruf edilen paranın, gelecekte kâr veya değer artışı sağlaması amacıyla çeşitli araçlara yönlendirilmesidir.",
        bilgi: "Kenara ayrılan paranın zamanla değer kaybetmemesi (enflasyona yenilmemesi) için çalıştırılması gerektiğini bilmektir.",
        tutum: "Yatırımın bir 'kumar' olmadığını, bilinçli ve sabırlı bir şekilde parayı büyütme stratejisi olduğuna inanmaktır.",
        davranis: "Biriktirilen parayı kumbarada nakit olarak tutmak yerine; risk profiline uygun olarak altın, döviz veya hisse senedi gibi araçlara yatırmaktır."
    },
    "yatirim_turleri": {
        baslik: "Yatırım Türleri",
        tanim: "Parayı değerlendirmek için kullanılabilecek, farklı risk ve getiri potansiyellerine sahip finansal enstrümanlardır.",
        bilgi: "Düşük riskli (Vadeli hesap), orta riskli (Altın, Döviz) ve yüksek riskli (Hisse senedi, Kripto) araçların çalışma mantığını bilmektir.",
        tutum: "'Bütün yumurtaları aynı sepete koymamak' gerektiğine inanmak ve riskleri dağıtmanın (çeşitlendirme) önemini kavramaktır.",
        davranis: "Tüm parasıyla tek bir yatırım türüne girmek yerine; bir kısmıyla altın alıp, bir kısmıyla hisse senedi fonu alarak yatırım sepeti oluşturmaktır."
    },
    "acil_durum_fonu": {
        baslik: "Acil Durum Fonu",
        tanim: "Beklenmedik masraflar (hastalık, işsizlik, kaza, krizler) için önceden ayrılmış, kolayca nakde çevrilebilir paradır.",
        bilgi: "Hayatın sürprizlerle dolu olduğunu ve en az 3 ile 6 aylık zorunlu giderleri karşılayacak bir kalkan paraya ihtiyaç olduğunu bilmektir.",
        tutum: "Bu fonun araba peşinatı veya tatil parası değil, sadece zor günlerde kırılacak bir acil durum camı olduğuna inanmaktır.",
        davranis: "Aylık 10.000 TL zorunlu gideri olan bir ailenin, bir hesapta 30.000 TL nakit parayı hiçbir zaman dokunmamak üzere her an çekilebilir şekilde hazır bekletmesidir."
    }
};