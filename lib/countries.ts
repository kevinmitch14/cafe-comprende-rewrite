import { z } from "zod";

const COUNTRY_CODES = [
  "CN",
  "IN",
  "US",
  "ID",
  "PK",
  "BR",
  "NG",
  "BD",
  "RU",
  "MX",
  "JP",
  "ET",
  "PH",
  "CD",
  "EG",
  "VN",
  "TR",
  "IR",
  "DE",
  "TH",
  "FR",
  "GB",
  "TZ",
  "IT",
  "ZA",
  "MM",
  "KE",
  "KR",
  "CO",
  "ES",
  "UG",
  "AR",
  "DZ",
  "UA",
  "SD",
  "IQ",
  "AF",
  "CA",
  "PL",
  "MA",
  "SA",
  "UZ",
  "PE",
  "AO",
  "MY",
  "MZ",
  "GH",
  "YE",
  "NP",
  "VE",
  "MG",
  "CM",
  "CI",
  "KP",
  "AU",
  "NE",
  "TW",
  "LK",
  "BF",
  "ML",
  "RO",
  "MW",
  "CL",
  "KZ",
  "ZM",
  "EC",
  "SY",
  "GT",
  "SN",
  "KH",
  "NL",
  "TD",
  "SO",
  "ZW",
  "GN",
  "RW",
  "BJ",
  "BI",
  "TN",
  "BO",
  "BE",
  "HT",
  "CU",
  "SS",
  "DO",
  "GR",
  "CZ",
  "SE",
  "PT",
  "JO",
  "AZ",
  "HN",
  "AE",
  "HU",
  "TJ",
  "BY",
  "IL",
  "PG",
  "AT",
  "CH",
  "TG",
  "SL",
  "HK",
  "LA",
  "PY",
  "BG",
  "RS",
  "LY",
  "LB",
  "NI",
  "KG",
  "SV",
  "TM",
  "DK",
  "SG",
  "CG",
  "FI",
  "SK",
  "NO",
  "ER",
  "OM",
  "CR",
  "NZ",
  "LR",
  "IE",
  "CF",
  "PS",
  "MR",
  "PA",
  "KW",
  "HR",
  "GE",
  "UY",
  "BA",
  "MN",
  "PR",
  "AM",
  "JM",
  "QA",
  "AL",
  "LT",
  "MD",
  "NA",
  "GM",
  "BW",
  "GA",
  "LS",
  "SI",
  "MK",
  "GW",
  "LV",
  "XK",
  "BH",
  "GQ",
  "TT",
  "EE",
  "TL",
  "MU",
  "CY",
  "SZ",
  "DJ",
  "FJ",
  "KM",
  "RE",
  "GY",
  "BT",
  "SB",
  "MO",
  "LU",
  "ME",
  "SR",
  "CV",
  "MV",
  "MT",
  "EH",
  "BN",
  "GP",
  "BZ",
  "BS",
  "MQ",
  "IS",
  "VU",
  "BB",
  "PF",
  "NC",
  "GF",
  "YT",
  "ST",
  "WS",
  "LC",
  "GU",
  "CW",
  "KI",
  "FM",
  "GD",
  "VC",
  "AW",
  "VI",
  "TO",
  "JE",
  "SC",
  "AG",
  "IM",
  "AD",
  "DM",
  "KY",
  "BM",
  "GG",
  "MH",
  "MP",
  "GL",
  "AS",
  "SH",
  "KN",
  "FO",
  "SX",
  "MC",
  "TC",
  "MF",
  "LI",
  "SM",
  "GI",
  "VG",
  "AX",
  "BQ",
  "CK",
  "PW",
  "AI",
  "TV",
  "WF",
  "NR",
  "PM",
  "MS",
  "BL",
  "IO",
  "FK",
  "SJ",
  "NF",
  "CX",
  "NU",
  "TK",
  "AQ",
  "CC",
  "VA",
  "TF",
  "UM",
  "PN",
  "GS",
  "BV",
  "HM",
] as const;

export const DETAILED_COUNTRY_INFORMATION = [
  {
    name: {
      common: "China",
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: "中华人民共和国",
          common: "中国",
        },
      },
    },
    countryCode: "CN",
    currencies: {
      CNY: {
        name: "Chinese yuan",
        symbol: "¥",
      },
    },
    languages: {
      zho: "Chinese",
    },
    flag: "🇨🇳",
    population: 1402112000,
  },
  {
    name: {
      common: "India",
      official: "Republic of India",
      nativeName: {
        eng: {
          official: "Republic of India",
          common: "India",
        },
        hin: {
          official: "भारत गणराज्य",
          common: "भारत",
        },
        tam: {
          official: "இந்தியக் குடியரசு",
          common: "இந்தியா",
        },
      },
    },
    countryCode: "IN",
    currencies: {
      INR: {
        name: "Indian rupee",
        symbol: "₹",
      },
    },
    languages: {
      eng: "English",
      hin: "Hindi",
      tam: "Tamil",
    },
    flag: "🇮🇳",
    population: 1380004385,
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
      nativeName: {
        eng: {
          official: "United States of America",
          common: "United States",
        },
      },
    },
    countryCode: "US",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇺🇸",
    population: 329484123,
  },
  {
    name: {
      common: "Indonesia",
      official: "Republic of Indonesia",
      nativeName: {
        ind: {
          official: "Republik Indonesia",
          common: "Indonesia",
        },
      },
    },
    countryCode: "ID",
    currencies: {
      IDR: {
        name: "Indonesian rupiah",
        symbol: "Rp",
      },
    },
    languages: {
      ind: "Indonesian",
    },
    flag: "🇮🇩",
    population: 273523621,
  },
  {
    name: {
      common: "Pakistan",
      official: "Islamic Republic of Pakistan",
      nativeName: {
        eng: {
          official: "Islamic Republic of Pakistan",
          common: "Pakistan",
        },
        urd: {
          official: "اسلامی جمہوریۂ پاكستان",
          common: "پاكستان",
        },
      },
    },
    countryCode: "PK",
    currencies: {
      PKR: {
        name: "Pakistani rupee",
        symbol: "₨",
      },
    },
    languages: {
      eng: "English",
      urd: "Urdu",
    },
    flag: "🇵🇰",
    population: 220892331,
  },
  {
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
      nativeName: {
        por: {
          official: "República Federativa do Brasil",
          common: "Brasil",
        },
      },
    },
    countryCode: "BR",
    currencies: {
      BRL: {
        name: "Brazilian real",
        symbol: "R$",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇧🇷",
    population: 212559409,
  },
  {
    name: {
      common: "Nigeria",
      official: "Federal Republic of Nigeria",
      nativeName: {
        eng: {
          official: "Federal Republic of Nigeria",
          common: "Nigeria",
        },
      },
    },
    countryCode: "NG",
    currencies: {
      NGN: {
        name: "Nigerian naira",
        symbol: "₦",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇳🇬",
    population: 206139587,
  },
  {
    name: {
      common: "Bangladesh",
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: {
          official: "বাংলাদেশ গণপ্রজাতন্ত্রী",
          common: "বাংলাদেশ",
        },
      },
    },
    countryCode: "BD",
    currencies: {
      BDT: {
        name: "Bangladeshi taka",
        symbol: "৳",
      },
    },
    languages: {
      ben: "Bengali",
    },
    flag: "🇧🇩",
    population: 164689383,
  },
  {
    name: {
      common: "Russia",
      official: "Russian Federation",
      nativeName: {
        rus: {
          official: "Российская Федерация",
          common: "Россия",
        },
      },
    },
    countryCode: "RU",
    currencies: {
      RUB: {
        name: "Russian ruble",
        symbol: "₽",
      },
    },
    languages: {
      rus: "Russian",
    },
    flag: "🇷🇺",
    population: 144104080,
  },
  {
    name: {
      common: "Mexico",
      official: "United Mexican States",
      nativeName: {
        spa: {
          official: "Estados Unidos Mexicanos",
          common: "México",
        },
      },
    },
    countryCode: "MX",
    currencies: {
      MXN: {
        name: "Mexican peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇲🇽",
    population: 128932753,
  },
  {
    name: {
      common: "Japan",
      official: "Japan",
      nativeName: {
        jpn: {
          official: "日本",
          common: "日本",
        },
      },
    },
    countryCode: "JP",
    currencies: {
      JPY: {
        name: "Japanese yen",
        symbol: "¥",
      },
    },
    languages: {
      jpn: "Japanese",
    },
    flag: "🇯🇵",
    population: 125836021,
  },
  {
    name: {
      common: "Ethiopia",
      official: "Federal Democratic Republic of Ethiopia",
      nativeName: {
        amh: {
          official: "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ",
          common: "ኢትዮጵያ",
        },
      },
    },
    countryCode: "ET",
    currencies: {
      ETB: {
        name: "Ethiopian birr",
        symbol: "Br",
      },
    },
    languages: {
      amh: "Amharic",
    },
    flag: "🇪🇹",
    population: 114963583,
  },
  {
    name: {
      common: "Philippines",
      official: "Republic of the Philippines",
      nativeName: {
        eng: {
          official: "Republic of the Philippines",
          common: "Philippines",
        },
        fil: {
          official: "Republic of the Philippines",
          common: "Pilipinas",
        },
      },
    },
    countryCode: "PH",
    currencies: {
      PHP: {
        name: "Philippine peso",
        symbol: "₱",
      },
    },
    languages: {
      eng: "English",
      fil: "Filipino",
    },
    flag: "🇵🇭",
    population: 109581085,
  },
  {
    name: {
      common: "DR Congo",
      official: "Democratic Republic of the Congo",
      nativeName: {
        fra: {
          official: "République démocratique du Congo",
          common: "RD Congo",
        },
        kon: {
          official: "Repubilika ya Kongo Demokratiki",
          common: "Repubilika ya Kongo Demokratiki",
        },
        lin: {
          official: "Republiki ya Kongó Demokratiki",
          common: "Republiki ya Kongó Demokratiki",
        },
        lua: {
          official: "Ditunga dia Kongu wa Mungalaata",
          common: "Ditunga dia Kongu wa Mungalaata",
        },
        swa: {
          official: "Jamhuri ya Kidemokrasia ya Kongo",
          common: "Jamhuri ya Kidemokrasia ya Kongo",
        },
      },
    },
    countryCode: "CD",
    currencies: {
      CDF: {
        name: "Congolese franc",
        symbol: "FC",
      },
    },
    languages: {
      fra: "French",
      kon: "Kikongo",
      lin: "Lingala",
      lua: "Tshiluba",
      swa: "Swahili",
    },
    flag: "🇨🇩",
    population: 108407721,
  },
  {
    name: {
      common: "Egypt",
      official: "Arab Republic of Egypt",
      nativeName: {
        ara: {
          official: "جمهورية مصر العربية",
          common: "مصر",
        },
      },
    },
    countryCode: "EG",
    currencies: {
      EGP: {
        name: "Egyptian pound",
        symbol: "£",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇪🇬",
    population: 102334403,
  },
  {
    name: {
      common: "Vietnam",
      official: "Socialist Republic of Vietnam",
      nativeName: {
        vie: {
          official: "Cộng hòa xã hội chủ nghĩa Việt Nam",
          common: "Việt Nam",
        },
      },
    },
    countryCode: "VN",
    currencies: {
      VND: {
        name: "Vietnamese đồng",
        symbol: "₫",
      },
    },
    languages: {
      vie: "Vietnamese",
    },
    flag: "🇻🇳",
    population: 97338583,
  },
  {
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        tur: {
          official: "Türkiye Cumhuriyeti",
          common: "Türkiye",
        },
      },
    },
    countryCode: "TR",
    currencies: {
      TRY: {
        name: "Turkish lira",
        symbol: "₺",
      },
    },
    languages: {
      tur: "Turkish",
    },
    flag: "🇹🇷",
    population: 84339067,
  },
  {
    name: {
      common: "Iran",
      official: "Islamic Republic of Iran",
      nativeName: {
        fas: {
          official: "جمهوری اسلامی ایران",
          common: "ایران",
        },
      },
    },
    countryCode: "IR",
    currencies: {
      IRR: {
        name: "Iranian rial",
        symbol: "﷼",
      },
    },
    languages: {
      fas: "Persian (Farsi)",
    },
    flag: "🇮🇷",
    population: 83992953,
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: {
          official: "Bundesrepublik Deutschland",
          common: "Deutschland",
        },
      },
    },
    countryCode: "DE",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
    },
    flag: "🇩🇪",
    population: 83240525,
  },
  {
    name: {
      common: "Thailand",
      official: "Kingdom of Thailand",
      nativeName: {
        tha: {
          official: "ราชอาณาจักรไทย",
          common: "ประเทศไทย",
        },
      },
    },
    countryCode: "TH",
    currencies: {
      THB: {
        name: "Thai baht",
        symbol: "฿",
      },
    },
    languages: {
      tha: "Thai",
    },
    flag: "🇹🇭",
    population: 69799978,
  },
  {
    name: {
      common: "France",
      official: "French Republic",
      nativeName: {
        fra: {
          official: "République française",
          common: "France",
        },
      },
    },
    countryCode: "FR",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇫🇷",
    population: 67391582,
  },
  {
    name: {
      common: "United Kingdom",
      official: "United Kingdom of Great Britain and Northern Ireland",
      nativeName: {
        eng: {
          official: "United Kingdom of Great Britain and Northern Ireland",
          common: "United Kingdom",
        },
      },
    },
    countryCode: "GB",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇧",
    population: 67215293,
  },
  {
    name: {
      common: "Tanzania",
      official: "United Republic of Tanzania",
      nativeName: {
        eng: {
          official: "United Republic of Tanzania",
          common: "Tanzania",
        },
        swa: {
          official: "Jamhuri ya Muungano wa Tanzania",
          common: "Tanzania",
        },
      },
    },
    countryCode: "TZ",
    currencies: {
      TZS: {
        name: "Tanzanian shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    flag: "🇹🇿",
    population: 59734213,
  },
  {
    name: {
      common: "Italy",
      official: "Italian Republic",
      nativeName: {
        ita: {
          official: "Repubblica italiana",
          common: "Italia",
        },
      },
    },
    countryCode: "IT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
    },
    flag: "🇮🇹",
    population: 59554023,
  },
  {
    name: {
      common: "South Africa",
      official: "Republic of South Africa",
      nativeName: {
        afr: {
          official: "Republiek van Suid-Afrika",
          common: "South Africa",
        },
        eng: {
          official: "Republic of South Africa",
          common: "South Africa",
        },
        nbl: {
          official: "IRiphabliki yeSewula Afrika",
          common: "Sewula Afrika",
        },
        nso: {
          official: "Rephaboliki ya Afrika-Borwa ",
          common: "Afrika-Borwa",
        },
        sot: {
          official: "Rephaboliki ya Afrika Borwa",
          common: "Afrika Borwa",
        },
        ssw: {
          official: "IRiphabhulikhi yeNingizimu Afrika",
          common: "Ningizimu Afrika",
        },
        tsn: {
          official: "Rephaboliki ya Aforika Borwa",
          common: "Aforika Borwa",
        },
        tso: {
          official: "Riphabliki ra Afrika Dzonga",
          common: "Afrika Dzonga",
        },
        ven: {
          official: "Riphabuḽiki ya Afurika Tshipembe",
          common: "Afurika Tshipembe",
        },
        xho: {
          official: "IRiphabliki yaseMzantsi Afrika",
          common: "Mzantsi Afrika",
        },
        zul: {
          official: "IRiphabliki yaseNingizimu Afrika",
          common: "Ningizimu Afrika",
        },
      },
    },
    countryCode: "ZA",
    currencies: {
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      afr: "Afrikaans",
      eng: "English",
      nbl: "Southern Ndebele",
      nso: "Northern Sotho",
      sot: "Southern Sotho",
      ssw: "Swazi",
      tsn: "Tswana",
      tso: "Tsonga",
      ven: "Venda",
      xho: "Xhosa",
      zul: "Zulu",
    },
    flag: "🇿🇦",
    population: 59308690,
  },
  {
    name: {
      common: "Myanmar",
      official: "Republic of the Union of Myanmar",
      nativeName: {
        mya: {
          official: "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
          common: "မြန်မာ",
        },
      },
    },
    countryCode: "MM",
    currencies: {
      MMK: {
        name: "Burmese kyat",
        symbol: "Ks",
      },
    },
    languages: {
      mya: "Burmese",
    },
    flag: "🇲🇲",
    population: 54409794,
  },
  {
    name: {
      common: "Kenya",
      official: "Republic of Kenya",
      nativeName: {
        eng: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
        swa: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
      },
    },
    countryCode: "KE",
    currencies: {
      KES: {
        name: "Kenyan shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    flag: "🇰🇪",
    population: 53771300,
  },
  {
    name: {
      common: "South Korea",
      official: "Republic of Korea",
      nativeName: {
        kor: {
          official: "대한민국",
          common: "한국",
        },
      },
    },
    countryCode: "KR",
    currencies: {
      KRW: {
        name: "South Korean won",
        symbol: "₩",
      },
    },
    languages: {
      kor: "Korean",
    },
    flag: "🇰🇷",
    population: 51780579,
  },
  {
    name: {
      common: "Colombia",
      official: "Republic of Colombia",
      nativeName: {
        spa: {
          official: "República de Colombia",
          common: "Colombia",
        },
      },
    },
    countryCode: "CO",
    currencies: {
      COP: {
        name: "Colombian peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇨🇴",
    population: 50882884,
  },
  {
    name: {
      common: "Spain",
      official: "Kingdom of Spain",
      nativeName: {
        spa: {
          official: "Reino de España",
          common: "España",
        },
      },
    },
    countryCode: "ES",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      spa: "Spanish",
      cat: "Catalan",
      eus: "Basque",
      glc: "Galician",
    },
    flag: "🇪🇸",
    population: 47351567,
  },
  {
    name: {
      common: "Uganda",
      official: "Republic of Uganda",
      nativeName: {
        eng: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
        swa: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
      },
    },
    countryCode: "UG",
    currencies: {
      UGX: {
        name: "Ugandan shilling",
        symbol: "Sh",
      },
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    flag: "🇺🇬",
    population: 45741000,
  },
  {
    name: {
      common: "Argentina",
      official: "Argentine Republic",
      nativeName: {
        grn: {
          official: "Argentine Republic",
          common: "Argentina",
        },
        spa: {
          official: "República Argentina",
          common: "Argentina",
        },
      },
    },
    countryCode: "AR",
    currencies: {
      ARS: {
        name: "Argentine peso",
        symbol: "$",
      },
    },
    languages: {
      grn: "Guaraní",
      spa: "Spanish",
    },
    flag: "🇦🇷",
    population: 45376763,
  },
  {
    name: {
      common: "Algeria",
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: "الجمهورية الديمقراطية الشعبية الجزائرية",
          common: "الجزائر",
        },
      },
    },
    countryCode: "DZ",
    currencies: {
      DZD: {
        name: "Algerian dinar",
        symbol: "د.ج",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇩🇿",
    population: 44700000,
  },
  {
    name: {
      common: "Ukraine",
      official: "Ukraine",
      nativeName: {
        ukr: {
          official: "Україна",
          common: "Україна",
        },
      },
    },
    countryCode: "UA",
    currencies: {
      UAH: {
        name: "Ukrainian hryvnia",
        symbol: "₴",
      },
    },
    languages: {
      ukr: "Ukrainian",
    },
    flag: "🇺🇦",
    population: 44134693,
  },
  {
    name: {
      common: "Sudan",
      official: "Republic of the Sudan",
      nativeName: {
        ara: {
          official: "جمهورية السودان",
          common: "السودان",
        },
        eng: {
          official: "Republic of the Sudan",
          common: "Sudan",
        },
      },
    },
    countryCode: "SD",
    currencies: {
      SDG: {
        name: "Sudanese pound",
        symbol: "",
      },
    },
    languages: {
      ara: "Arabic",
      eng: "English",
    },
    flag: "🇸🇩",
    population: 43849269,
  },
  {
    name: {
      common: "Iraq",
      official: "Republic of Iraq",
      nativeName: {
        ara: {
          official: "جمهورية العراق",
          common: "العراق",
        },
        arc: {
          official: "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ",
          common: "ܩܘܼܛܢܵܐ",
        },
        ckb: {
          official: "کۆماری عێراق",
          common: "کۆماری",
        },
      },
    },
    countryCode: "IQ",
    currencies: {
      IQD: {
        name: "Iraqi dinar",
        symbol: "ع.د",
      },
    },
    languages: {
      ara: "Arabic",
      arc: "Aramaic",
      ckb: "Sorani",
    },
    flag: "🇮🇶",
    population: 40222503,
  },
  {
    name: {
      common: "Afghanistan",
      official: "Islamic Republic of Afghanistan",
      nativeName: {
        prs: {
          official: "جمهوری اسلامی افغانستان",
          common: "افغانستان",
        },
        pus: {
          official: "د افغانستان اسلامي جمهوریت",
          common: "افغانستان",
        },
        tuk: {
          official: "Owganystan Yslam Respublikasy",
          common: "Owganystan",
        },
      },
    },
    countryCode: "AF",
    currencies: {
      AFN: {
        name: "Afghan afghani",
        symbol: "؋",
      },
    },
    languages: {
      prs: "Dari",
      pus: "Pashto",
      tuk: "Turkmen",
    },
    flag: "🇦🇫",
    population: 40218234,
  },
  {
    name: {
      common: "Canada",
      official: "Canada",
      nativeName: {
        eng: {
          official: "Canada",
          common: "Canada",
        },
        fra: {
          official: "Canada",
          common: "Canada",
        },
      },
    },
    countryCode: "CA",
    currencies: {
      CAD: {
        name: "Canadian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
    flag: "🇨🇦",
    population: 38005238,
  },
  {
    name: {
      common: "Poland",
      official: "Republic of Poland",
      nativeName: {
        pol: {
          official: "Rzeczpospolita Polska",
          common: "Polska",
        },
      },
    },
    countryCode: "PL",
    currencies: {
      PLN: {
        name: "Polish złoty",
        symbol: "zł",
      },
    },
    languages: {
      pol: "Polish",
    },
    flag: "🇵🇱",
    population: 37950802,
  },
  {
    name: {
      common: "Morocco",
      official: "Kingdom of Morocco",
      nativeName: {
        ara: {
          official: "المملكة المغربية",
          common: "المغرب",
        },
        ber: {
          official: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
          common: "ⵍⵎⴰⵖⵔⵉⴱ",
        },
      },
    },
    countryCode: "MA",
    currencies: {
      MAD: {
        name: "Moroccan dirham",
        symbol: "د.م.",
      },
    },
    languages: {
      ara: "Arabic",
      ber: "Berber",
    },
    flag: "🇲🇦",
    population: 36910558,
  },
  {
    name: {
      common: "Saudi Arabia",
      official: "Kingdom of Saudi Arabia",
      nativeName: {
        ara: {
          official: "المملكة العربية السعودية",
          common: "العربية السعودية",
        },
      },
    },
    countryCode: "SA",
    currencies: {
      SAR: {
        name: "Saudi riyal",
        symbol: "ر.س",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇸🇦",
    population: 34813867,
  },
  {
    name: {
      common: "Uzbekistan",
      official: "Republic of Uzbekistan",
      nativeName: {
        rus: {
          official: "Республика Узбекистан",
          common: "Узбекистан",
        },
        uzb: {
          official: "O'zbekiston Respublikasi",
          common: "O‘zbekiston",
        },
      },
    },
    countryCode: "UZ",
    currencies: {
      UZS: {
        name: "Uzbekistani soʻm",
        symbol: "so'm",
      },
    },
    languages: {
      rus: "Russian",
      uzb: "Uzbek",
    },
    flag: "🇺🇿",
    population: 34232050,
  },
  {
    name: {
      common: "Peru",
      official: "Republic of Peru",
      nativeName: {
        aym: {
          official: "Piruw Suyu",
          common: "Piruw",
        },
        que: {
          official: "Piruw Ripuwlika",
          common: "Piruw",
        },
        spa: {
          official: "República del Perú",
          common: "Perú",
        },
      },
    },
    countryCode: "PE",
    currencies: {
      PEN: {
        name: "Peruvian sol",
        symbol: "S/ ",
      },
    },
    languages: {
      aym: "Aymara",
      que: "Quechua",
      spa: "Spanish",
    },
    flag: "🇵🇪",
    population: 32971846,
  },
  {
    name: {
      common: "Angola",
      official: "Republic of Angola",
      nativeName: {
        por: {
          official: "República de Angola",
          common: "Angola",
        },
      },
    },
    countryCode: "AO",
    currencies: {
      AOA: {
        name: "Angolan kwanza",
        symbol: "Kz",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇦🇴",
    population: 32866268,
  },
  {
    name: {
      common: "Malaysia",
      official: "Malaysia",
      nativeName: {
        eng: {
          official: "Malaysia",
          common: "Malaysia",
        },
        msa: {
          official: "مليسيا",
          common: "مليسيا",
        },
      },
    },
    countryCode: "MY",
    currencies: {
      MYR: {
        name: "Malaysian ringgit",
        symbol: "RM",
      },
    },
    languages: {
      eng: "English",
      msa: "Malay",
    },
    flag: "🇲🇾",
    population: 32365998,
  },
  {
    name: {
      common: "Mozambique",
      official: "Republic of Mozambique",
      nativeName: {
        por: {
          official: "República de Moçambique",
          common: "Moçambique",
        },
      },
    },
    countryCode: "MZ",
    currencies: {
      MZN: {
        name: "Mozambican metical",
        symbol: "MT",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇲🇿",
    population: 31255435,
  },
  {
    name: {
      common: "Ghana",
      official: "Republic of Ghana",
      nativeName: {
        eng: {
          official: "Republic of Ghana",
          common: "Ghana",
        },
      },
    },
    countryCode: "GH",
    currencies: {
      GHS: {
        name: "Ghanaian cedi",
        symbol: "₵",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇭",
    population: 31072945,
  },
  {
    name: {
      common: "Yemen",
      official: "Republic of Yemen",
      nativeName: {
        ara: {
          official: "الجمهورية اليمنية",
          common: "اليَمَن",
        },
      },
    },
    countryCode: "YE",
    currencies: {
      YER: {
        name: "Yemeni rial",
        symbol: "﷼",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇾🇪",
    population: 29825968,
  },
  {
    name: {
      common: "Nepal",
      official: "Federal Democratic Republic of Nepal",
      nativeName: {
        nep: {
          official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
          common: "नेपाल",
        },
      },
    },
    countryCode: "NP",
    currencies: {
      NPR: {
        name: "Nepalese rupee",
        symbol: "₨",
      },
    },
    languages: {
      nep: "Nepali",
    },
    flag: "🇳🇵",
    population: 29136808,
  },
  {
    name: {
      common: "Venezuela",
      official: "Bolivarian Republic of Venezuela",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela",
        },
      },
    },
    countryCode: "VE",
    currencies: {
      VES: {
        name: "Venezuelan bolívar soberano",
        symbol: "Bs.S.",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇻🇪",
    population: 28435943,
  },
  {
    name: {
      common: "Madagascar",
      official: "Republic of Madagascar",
      nativeName: {
        fra: {
          official: "République de Madagascar",
          common: "Madagascar",
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: "Madagasikara",
        },
      },
    },
    countryCode: "MG",
    currencies: {
      MGA: {
        name: "Malagasy ariary",
        symbol: "Ar",
      },
    },
    languages: {
      fra: "French",
      mlg: "Malagasy",
    },
    flag: "🇲🇬",
    population: 27691019,
  },
  {
    name: {
      common: "Cameroon",
      official: "Republic of Cameroon",
      nativeName: {
        eng: {
          official: "Republic of Cameroon",
          common: "Cameroon",
        },
        fra: {
          official: "République du Cameroun",
          common: "Cameroun",
        },
      },
    },
    countryCode: "CM",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
    flag: "🇨🇲",
    population: 26545864,
  },
  {
    name: {
      common: "Ivory Coast",
      official: "Republic of Côte d'Ivoire",
      nativeName: {
        fra: {
          official: "République de Côte d'Ivoire",
          common: "Côte d'Ivoire",
        },
      },
    },
    countryCode: "CI",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇨🇮",
    population: 26378275,
  },
  {
    name: {
      common: "North Korea",
      official: "Democratic People's Republic of Korea",
      nativeName: {
        kor: {
          official: "조선민주주의인민공화국",
          common: "조선",
        },
      },
    },
    countryCode: "KP",
    currencies: {
      KPW: {
        name: "North Korean won",
        symbol: "₩",
      },
    },
    languages: {
      kor: "Korean",
    },
    flag: "🇰🇵",
    population: 25778815,
  },
  {
    name: {
      common: "Australia",
      official: "Commonwealth of Australia",
      nativeName: {
        eng: {
          official: "Commonwealth of Australia",
          common: "Australia",
        },
      },
    },
    countryCode: "AU",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇦🇺",
    population: 25687041,
  },
  {
    name: {
      common: "Niger",
      official: "Republic of Niger",
      nativeName: {
        fra: {
          official: "République du Niger",
          common: "Niger",
        },
      },
    },
    countryCode: "NE",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇳🇪",
    population: 24206636,
  },
  {
    name: {
      common: "Taiwan",
      official: "Republic of China (Taiwan)",
      nativeName: {
        zho: {
          official: "中華民國",
          common: "台灣",
        },
      },
    },
    countryCode: "TW",
    currencies: {
      TWD: {
        name: "New Taiwan dollar",
        symbol: "$",
      },
    },
    languages: {
      zho: "Chinese",
    },
    flag: "🇹🇼",
    population: 23503349,
  },
  {
    name: {
      common: "Sri Lanka",
      official: "Democratic Socialist Republic of Sri Lanka",
      nativeName: {
        sin: {
          official: "ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය",
          common: "ශ්‍රී ලංකාව",
        },
        tam: {
          official: "இலங்கை சனநாயக சோசலிசக் குடியரசு",
          common: "இலங்கை",
        },
      },
    },
    countryCode: "LK",
    currencies: {
      LKR: {
        name: "Sri Lankan rupee",
        symbol: "Rs  රු",
      },
    },
    languages: {
      sin: "Sinhala",
      tam: "Tamil",
    },
    flag: "🇱🇰",
    population: 21919000,
  },
  {
    name: {
      common: "Burkina Faso",
      official: "Burkina Faso",
      nativeName: {
        fra: {
          official: "République du Burkina",
          common: "Burkina Faso",
        },
      },
    },
    countryCode: "BF",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇧🇫",
    population: 20903278,
  },
  {
    name: {
      common: "Mali",
      official: "Republic of Mali",
      nativeName: {
        fra: {
          official: "République du Mali",
          common: "Mali",
        },
      },
    },
    countryCode: "ML",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇲🇱",
    population: 20250834,
  },
  {
    name: {
      common: "Romania",
      official: "Romania",
      nativeName: {
        ron: {
          official: "România",
          common: "România",
        },
      },
    },
    countryCode: "RO",
    currencies: {
      RON: {
        name: "Romanian leu",
        symbol: "lei",
      },
    },
    languages: {
      ron: "Romanian",
    },
    flag: "🇷🇴",
    population: 19286123,
  },
  {
    name: {
      common: "Malawi",
      official: "Republic of Malawi",
      nativeName: {
        eng: {
          official: "Republic of Malawi",
          common: "Malawi",
        },
        nya: {
          official: "Chalo cha Malawi, Dziko la Malaŵi",
          common: "Malaŵi",
        },
      },
    },
    countryCode: "MW",
    currencies: {
      MWK: {
        name: "Malawian kwacha",
        symbol: "MK",
      },
    },
    languages: {
      eng: "English",
      nya: "Chewa",
    },
    flag: "🇲🇼",
    population: 19129955,
  },
  {
    name: {
      common: "Chile",
      official: "Republic of Chile",
      nativeName: {
        spa: {
          official: "República de Chile",
          common: "Chile",
        },
      },
    },
    countryCode: "CL",
    currencies: {
      CLP: {
        name: "Chilean peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇨🇱",
    population: 19116209,
  },
  {
    name: {
      common: "Kazakhstan",
      official: "Republic of Kazakhstan",
      nativeName: {
        kaz: {
          official: "Қазақстан Республикасы",
          common: "Қазақстан",
        },
        rus: {
          official: "Республика Казахстан",
          common: "Казахстан",
        },
      },
    },
    countryCode: "KZ",
    currencies: {
      KZT: {
        name: "Kazakhstani tenge",
        symbol: "₸",
      },
    },
    languages: {
      kaz: "Kazakh",
      rus: "Russian",
    },
    flag: "🇰🇿",
    population: 18754440,
  },
  {
    name: {
      common: "Zambia",
      official: "Republic of Zambia",
      nativeName: {
        eng: {
          official: "Republic of Zambia",
          common: "Zambia",
        },
      },
    },
    countryCode: "ZM",
    currencies: {
      ZMW: {
        name: "Zambian kwacha",
        symbol: "ZK",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇿🇲",
    population: 18383956,
  },
  {
    name: {
      common: "Ecuador",
      official: "Republic of Ecuador",
      nativeName: {
        spa: {
          official: "República del Ecuador",
          common: "Ecuador",
        },
      },
    },
    countryCode: "EC",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇪🇨",
    population: 17643060,
  },
  {
    name: {
      common: "Syria",
      official: "Syrian Arab Republic",
      nativeName: {
        ara: {
          official: "الجمهورية العربية السورية",
          common: "سوريا",
        },
      },
    },
    countryCode: "SY",
    currencies: {
      SYP: {
        name: "Syrian pound",
        symbol: "£",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇸🇾",
    population: 17500657,
  },
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
      nativeName: {
        spa: {
          official: "República de Guatemala",
          common: "Guatemala",
        },
      },
    },
    countryCode: "GT",
    currencies: {
      GTQ: {
        name: "Guatemalan quetzal",
        symbol: "Q",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇬🇹",
    population: 16858333,
  },
  {
    name: {
      common: "Senegal",
      official: "Republic of Senegal",
      nativeName: {
        fra: {
          official: "République du Sénégal",
          common: "Sénégal",
        },
      },
    },
    countryCode: "SN",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇸🇳",
    population: 16743930,
  },
  {
    name: {
      common: "Cambodia",
      official: "Kingdom of Cambodia",
      nativeName: {
        khm: {
          official: "ព្រះរាជាណាចក្រកម្ពុជា",
          common: "Kâmpŭchéa",
        },
      },
    },
    countryCode: "KH",
    currencies: {
      KHR: {
        name: "Cambodian riel",
        symbol: "៛",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      khm: "Khmer",
    },
    flag: "🇰🇭",
    population: 16718971,
  },
  {
    name: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      nativeName: {
        nld: {
          official: "Koninkrijk der Nederlanden",
          common: "Nederland",
        },
      },
    },
    countryCode: "NL",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      nld: "Dutch",
    },
    flag: "🇳🇱",
    population: 16655799,
  },
  {
    name: {
      common: "Chad",
      official: "Republic of Chad",
      nativeName: {
        ara: {
          official: "جمهورية تشاد",
          common: "تشاد‎",
        },
        fra: {
          official: "République du Tchad",
          common: "Tchad",
        },
      },
    },
    countryCode: "TD",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    flag: "🇹🇩",
    population: 16425859,
  },
  {
    name: {
      common: "Somalia",
      official: "Federal Republic of Somalia",
      nativeName: {
        ara: {
          official: "جمهورية الصومال‎‎",
          common: "الصومال‎‎",
        },
        som: {
          official: "Jamhuuriyadda Federaalka Soomaaliya",
          common: "Soomaaliya",
        },
      },
    },
    countryCode: "SO",
    currencies: {
      SOS: {
        name: "Somali shilling",
        symbol: "Sh",
      },
    },
    languages: {
      ara: "Arabic",
      som: "Somali",
    },
    flag: "🇸🇴",
    population: 15893219,
  },
  {
    name: {
      common: "Zimbabwe",
      official: "Republic of Zimbabwe",
      nativeName: {
        bwg: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        eng: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        kck: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        khi: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        ndc: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        nde: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        nya: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        sna: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        sot: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        toi: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        tsn: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        tso: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        ven: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        xho: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        zib: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
      },
    },
    countryCode: "ZW",
    currencies: {
      ZWL: {
        name: "Zimbabwean dollar",
        symbol: "$",
      },
    },
    languages: {
      bwg: "Chibarwe",
      eng: "English",
      kck: "Kalanga",
      khi: "Khoisan",
      ndc: "Ndau",
      nde: "Northern Ndebele",
      nya: "Chewa",
      sna: "Shona",
      sot: "Sotho",
      toi: "Tonga",
      tsn: "Tswana",
      tso: "Tsonga",
      ven: "Venda",
      xho: "Xhosa",
      zib: "Zimbabwean Sign Language",
    },
    flag: "🇿🇼",
    population: 14862927,
  },
  {
    name: {
      common: "Guinea",
      official: "Republic of Guinea",
      nativeName: {
        fra: {
          official: "République de Guinée",
          common: "Guinée",
        },
      },
    },
    countryCode: "GN",
    currencies: {
      GNF: {
        name: "Guinean franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇬🇳",
    population: 13132792,
  },
  {
    name: {
      common: "Rwanda",
      official: "Republic of Rwanda",
      nativeName: {
        eng: {
          official: "Republic of Rwanda",
          common: "Rwanda",
        },
        fra: {
          official: "République rwandaise",
          common: "Rwanda",
        },
        kin: {
          official: "Repubulika y'u Rwanda",
          common: "Rwanda",
        },
      },
    },
    countryCode: "RW",
    currencies: {
      RWF: {
        name: "Rwandan franc",
        symbol: "Fr",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      kin: "Kinyarwanda",
    },
    flag: "🇷🇼",
    population: 12952209,
  },
  {
    name: {
      common: "Benin",
      official: "Republic of Benin",
      nativeName: {
        fra: {
          official: "République du Bénin",
          common: "Bénin",
        },
      },
    },
    countryCode: "BJ",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇧🇯",
    population: 12123198,
  },
  {
    name: {
      common: "Burundi",
      official: "Republic of Burundi",
      nativeName: {
        fra: {
          official: "République du Burundi",
          common: "Burundi",
        },
        run: {
          official: "Republika y'Uburundi ",
          common: "Uburundi",
        },
      },
    },
    countryCode: "BI",
    currencies: {
      BIF: {
        name: "Burundian franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      run: "Kirundi",
    },
    flag: "🇧🇮",
    population: 11890781,
  },
  {
    name: {
      common: "Tunisia",
      official: "Tunisian Republic",
      nativeName: {
        ara: {
          official: "الجمهورية التونسية",
          common: "تونس",
        },
      },
    },
    countryCode: "TN",
    currencies: {
      TND: {
        name: "Tunisian dinar",
        symbol: "د.ت",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇹🇳",
    population: 11818618,
  },
  {
    name: {
      common: "Bolivia",
      official: "Plurinational State of Bolivia",
      nativeName: {
        aym: {
          official: "Wuliwya Suyu",
          common: "Wuliwya",
        },
        grn: {
          official: "Tetã Volívia",
          common: "Volívia",
        },
        que: {
          official: "Buliwya Mamallaqta",
          common: "Buliwya",
        },
        spa: {
          official: "Estado Plurinacional de Bolivia",
          common: "Bolivia",
        },
      },
    },
    countryCode: "BO",
    currencies: {
      BOB: {
        name: "Bolivian boliviano",
        symbol: "Bs.",
      },
    },
    languages: {
      aym: "Aymara",
      grn: "Guaraní",
      que: "Quechua",
      spa: "Spanish",
    },
    flag: "🇧🇴",
    population: 11673029,
  },
  {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: {
          official: "Königreich Belgien",
          common: "Belgien",
        },
        fra: {
          official: "Royaume de Belgique",
          common: "Belgique",
        },
        nld: {
          official: "Koninkrijk België",
          common: "België",
        },
      },
    },
    countryCode: "BE",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
      fra: "French",
      nld: "Dutch",
    },
    flag: "🇧🇪",
    population: 11555997,
  },
  {
    name: {
      common: "Haiti",
      official: "Republic of Haiti",
      nativeName: {
        fra: {
          official: "République d'Haïti",
          common: "Haïti",
        },
        hat: {
          official: "Repiblik Ayiti",
          common: "Ayiti",
        },
      },
    },
    countryCode: "HT",
    currencies: {
      HTG: {
        name: "Haitian gourde",
        symbol: "G",
      },
    },
    languages: {
      fra: "French",
      hat: "Haitian Creole",
    },
    flag: "🇭🇹",
    population: 11402533,
  },
  {
    name: {
      common: "Cuba",
      official: "Republic of Cuba",
      nativeName: {
        spa: {
          official: "República de Cuba",
          common: "Cuba",
        },
      },
    },
    countryCode: "CU",
    currencies: {
      CUC: {
        name: "Cuban convertible peso",
        symbol: "$",
      },
      CUP: {
        name: "Cuban peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇨🇺",
    population: 11326616,
  },
  {
    name: {
      common: "South Sudan",
      official: "Republic of South Sudan",
      nativeName: {
        eng: {
          official: "Republic of South Sudan",
          common: "South Sudan",
        },
      },
    },
    countryCode: "SS",
    currencies: {
      SSP: {
        name: "South Sudanese pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇸🇸",
    population: 11193729,
  },
  {
    name: {
      common: "Dominican Republic",
      official: "Dominican Republic",
      nativeName: {
        spa: {
          official: "República Dominicana",
          common: "República Dominicana",
        },
      },
    },
    countryCode: "DO",
    currencies: {
      DOP: {
        name: "Dominican peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇩🇴",
    population: 10847904,
  },
  {
    name: {
      common: "Greece",
      official: "Hellenic Republic",
      nativeName: {
        ell: {
          official: "Ελληνική Δημοκρατία",
          common: "Ελλάδα",
        },
      },
    },
    countryCode: "GR",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ell: "Greek",
    },
    flag: "🇬🇷",
    population: 10715549,
  },
  {
    name: {
      common: "Czechia",
      official: "Czech Republic",
      nativeName: {
        ces: {
          official: "Česká republika",
          common: "Česko",
        },
        slk: {
          official: "Česká republika",
          common: "Česko",
        },
      },
    },
    countryCode: "CZ",
    currencies: {
      CZK: {
        name: "Czech koruna",
        symbol: "Kč",
      },
    },
    languages: {
      ces: "Czech",
      slk: "Slovak",
    },
    flag: "🇨🇿",
    population: 10698896,
  },
  {
    name: {
      common: "Sweden",
      official: "Kingdom of Sweden",
      nativeName: {
        swe: {
          official: "Konungariket Sverige",
          common: "Sverige",
        },
      },
    },
    countryCode: "SE",
    currencies: {
      SEK: {
        name: "Swedish krona",
        symbol: "kr",
      },
    },
    languages: {
      swe: "Swedish",
    },
    flag: "🇸🇪",
    population: 10353442,
  },
  {
    name: {
      common: "Portugal",
      official: "Portuguese Republic",
      nativeName: {
        por: {
          official: "República português",
          common: "Portugal",
        },
      },
    },
    countryCode: "PT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇵🇹",
    population: 10305564,
  },
  {
    name: {
      common: "Jordan",
      official: "Hashemite Kingdom of Jordan",
      nativeName: {
        ara: {
          official: "المملكة الأردنية الهاشمية",
          common: "الأردن",
        },
      },
    },
    countryCode: "JO",
    currencies: {
      JOD: {
        name: "Jordanian dinar",
        symbol: "د.ا",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇯🇴",
    population: 10203140,
  },
  {
    name: {
      common: "Azerbaijan",
      official: "Republic of Azerbaijan",
      nativeName: {
        aze: {
          official: "Azərbaycan Respublikası",
          common: "Azərbaycan",
        },
      },
    },
    countryCode: "AZ",
    currencies: {
      AZN: {
        name: "Azerbaijani manat",
        symbol: "₼",
      },
    },
    languages: {
      aze: "Azerbaijani",
    },
    flag: "🇦🇿",
    population: 10110116,
  },
  {
    name: {
      common: "Honduras",
      official: "Republic of Honduras",
      nativeName: {
        spa: {
          official: "República de Honduras",
          common: "Honduras",
        },
      },
    },
    countryCode: "HN",
    currencies: {
      HNL: {
        name: "Honduran lempira",
        symbol: "L",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇭🇳",
    population: 9904608,
  },
  {
    name: {
      common: "United Arab Emirates",
      official: "United Arab Emirates",
      nativeName: {
        ara: {
          official: "الإمارات العربية المتحدة",
          common: "دولة الإمارات العربية المتحدة",
        },
      },
    },
    countryCode: "AE",
    currencies: {
      AED: {
        name: "United Arab Emirates dirham",
        symbol: "د.إ",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇦🇪",
    population: 9890400,
  },
  {
    name: {
      common: "Hungary",
      official: "Hungary",
      nativeName: {
        hun: {
          official: "Magyarország",
          common: "Magyarország",
        },
      },
    },
    countryCode: "HU",
    currencies: {
      HUF: {
        name: "Hungarian forint",
        symbol: "Ft",
      },
    },
    languages: {
      hun: "Hungarian",
    },
    flag: "🇭🇺",
    population: 9749763,
  },
  {
    name: {
      common: "Tajikistan",
      official: "Republic of Tajikistan",
      nativeName: {
        rus: {
          official: "Республика Таджикистан",
          common: "Таджикистан",
        },
        tgk: {
          official: "Ҷумҳурии Тоҷикистон",
          common: "Тоҷикистон",
        },
      },
    },
    countryCode: "TJ",
    currencies: {
      TJS: {
        name: "Tajikistani somoni",
        symbol: "ЅМ",
      },
    },
    languages: {
      rus: "Russian",
      tgk: "Tajik",
    },
    flag: "🇹🇯",
    population: 9537642,
  },
  {
    name: {
      common: "Belarus",
      official: "Republic of Belarus",
      nativeName: {
        bel: {
          official: "Рэспубліка Беларусь",
          common: "Белару́сь",
        },
        rus: {
          official: "Республика Беларусь",
          common: "Беларусь",
        },
      },
    },
    countryCode: "BY",
    currencies: {
      BYN: {
        name: "Belarusian ruble",
        symbol: "Br",
      },
    },
    languages: {
      bel: "Belarusian",
      rus: "Russian",
    },
    flag: "🇧🇾",
    population: 9398861,
  },
  {
    name: {
      common: "Israel",
      official: "State of Israel",
      nativeName: {
        ara: {
          official: "دولة إسرائيل",
          common: "إسرائيل",
        },
        heb: {
          official: "מדינת ישראל",
          common: "ישראל",
        },
      },
    },
    countryCode: "IL",
    currencies: {
      ILS: {
        name: "Israeli new shekel",
        symbol: "₪",
      },
    },
    languages: {
      ara: "Arabic",
      heb: "Hebrew",
    },
    flag: "🇮🇱",
    population: 9216900,
  },
  {
    name: {
      common: "Papua New Guinea",
      official: "Independent State of Papua New Guinea",
      nativeName: {
        eng: {
          official: "Independent State of Papua New Guinea",
          common: "Papua New Guinea",
        },
        hmo: {
          official: "Independen Stet bilong Papua Niugini",
          common: "Papua Niu Gini",
        },
        tpi: {
          official: "Independen Stet bilong Papua Niugini",
          common: "Papua Niugini",
        },
      },
    },
    countryCode: "PG",
    currencies: {
      PGK: {
        name: "Papua New Guinean kina",
        symbol: "K",
      },
    },
    languages: {
      eng: "English",
      hmo: "Hiri Motu",
      tpi: "Tok Pisin",
    },
    flag: "🇵🇬",
    population: 8947027,
  },
  {
    name: {
      common: "Austria",
      official: "Republic of Austria",
      nativeName: {
        bar: {
          official: "Republik Österreich",
          common: "Österreich",
        },
      },
    },
    countryCode: "AT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      de: "German",
    },
    flag: "🇦🇹",
    population: 8917205,
  },
  {
    name: {
      common: "Switzerland",
      official: "Swiss Confederation",
      nativeName: {
        fra: {
          official: "Confédération suisse",
          common: "Suisse",
        },
        gsw: {
          official: "Schweizerische Eidgenossenschaft",
          common: "Schweiz",
        },
        ita: {
          official: "Confederazione Svizzera",
          common: "Svizzera",
        },
        roh: {
          official: "Confederaziun svizra",
          common: "Svizra",
        },
      },
    },
    countryCode: "CH",
    currencies: {
      CHF: {
        name: "Swiss franc",
        symbol: "Fr.",
      },
    },
    languages: {
      fra: "French",
      gsw: "Swiss German",
      ita: "Italian",
      roh: "Romansh",
    },
    flag: "🇨🇭",
    population: 8654622,
  },
  {
    name: {
      common: "Togo",
      official: "Togolese Republic",
      nativeName: {
        fra: {
          official: "République togolaise",
          common: "Togo",
        },
      },
    },
    countryCode: "TG",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇹🇬",
    population: 8278737,
  },
  {
    name: {
      common: "Sierra Leone",
      official: "Republic of Sierra Leone",
      nativeName: {
        eng: {
          official: "Republic of Sierra Leone",
          common: "Sierra Leone",
        },
      },
    },
    countryCode: "SL",
    currencies: {
      SLL: {
        name: "Sierra Leonean leone",
        symbol: "Le",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇸🇱",
    population: 7976985,
  },
  {
    name: {
      common: "Hong Kong",
      official:
        "Hong Kong Special Administrative Region of the People's Republic of China",
      nativeName: {
        eng: {
          official:
            "Hong Kong Special Administrative Region of the People's Republic of China",
          common: "Hong Kong",
        },
        zho: {
          official: "中华人民共和国香港特别行政区",
          common: "香港",
        },
      },
    },
    countryCode: "HK",
    currencies: {
      HKD: {
        name: "Hong Kong dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      zho: "Chinese",
    },
    flag: "🇭🇰",
    population: 7500700,
  },
  {
    name: {
      common: "Laos",
      official: "Lao People's Democratic Republic",
      nativeName: {
        lao: {
          official: "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ",
          common: "ສປປລາວ",
        },
      },
    },
    countryCode: "LA",
    currencies: {
      LAK: {
        name: "Lao kip",
        symbol: "₭",
      },
    },
    languages: {
      lao: "Lao",
    },
    flag: "🇱🇦",
    population: 7275556,
  },
  {
    name: {
      common: "Paraguay",
      official: "Republic of Paraguay",
      nativeName: {
        grn: {
          official: "Tetã Paraguái",
          common: "Paraguái",
        },
        spa: {
          official: "República de Paraguay",
          common: "Paraguay",
        },
      },
    },
    countryCode: "PY",
    currencies: {
      PYG: {
        name: "Paraguayan guaraní",
        symbol: "₲",
      },
    },
    languages: {
      grn: "Guaraní",
      spa: "Spanish",
    },
    flag: "🇵🇾",
    population: 7132530,
  },
  {
    name: {
      common: "Bulgaria",
      official: "Republic of Bulgaria",
      nativeName: {
        bul: {
          official: "Република България",
          common: "България",
        },
      },
    },
    countryCode: "BG",
    currencies: {
      BGN: {
        name: "Bulgarian lev",
        symbol: "лв",
      },
    },
    languages: {
      bul: "Bulgarian",
    },
    flag: "🇧🇬",
    population: 6927288,
  },
  {
    name: {
      common: "Serbia",
      official: "Republic of Serbia",
      nativeName: {
        srp: {
          official: "Република Србија",
          common: "Србија",
        },
      },
    },
    countryCode: "RS",
    currencies: {
      RSD: {
        name: "Serbian dinar",
        symbol: "дин.",
      },
    },
    languages: {
      srp: "Serbian",
    },
    flag: "🇷🇸",
    population: 6908224,
  },
  {
    name: {
      common: "Libya",
      official: "State of Libya",
      nativeName: {
        ara: {
          official: "الدولة ليبيا",
          common: "‏ليبيا",
        },
      },
    },
    countryCode: "LY",
    currencies: {
      LYD: {
        name: "Libyan dinar",
        symbol: "ل.د",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇱🇾",
    population: 6871287,
  },
  {
    name: {
      common: "Lebanon",
      official: "Lebanese Republic",
      nativeName: {
        ara: {
          official: "الجمهورية اللبنانية",
          common: "لبنان",
        },
        fra: {
          official: "République libanaise",
          common: "Liban",
        },
      },
    },
    countryCode: "LB",
    currencies: {
      LBP: {
        name: "Lebanese pound",
        symbol: "ل.ل",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    flag: "🇱🇧",
    population: 6825442,
  },
  {
    name: {
      common: "Nicaragua",
      official: "Republic of Nicaragua",
      nativeName: {
        spa: {
          official: "República de Nicaragua",
          common: "Nicaragua",
        },
      },
    },
    countryCode: "NI",
    currencies: {
      NIO: {
        name: "Nicaraguan córdoba",
        symbol: "C$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇳🇮",
    population: 6624554,
  },
  {
    name: {
      common: "Kyrgyzstan",
      official: "Kyrgyz Republic",
      nativeName: {
        kir: {
          official: "Кыргыз Республикасы",
          common: "Кыргызстан",
        },
        rus: {
          official: "Кыргызская Республика",
          common: "Киргизия",
        },
      },
    },
    countryCode: "KG",
    currencies: {
      KGS: {
        name: "Kyrgyzstani som",
        symbol: "с",
      },
    },
    languages: {
      kir: "Kyrgyz",
      rus: "Russian",
    },
    flag: "🇰🇬",
    population: 6591600,
  },
  {
    name: {
      common: "El Salvador",
      official: "Republic of El Salvador",
      nativeName: {
        spa: {
          official: "República de El Salvador",
          common: "El Salvador",
        },
      },
    },
    countryCode: "SV",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇸🇻",
    population: 6486201,
  },
  {
    name: {
      common: "Turkmenistan",
      official: "Turkmenistan",
      nativeName: {
        rus: {
          official: "Туркменистан",
          common: "Туркмения",
        },
        tuk: {
          official: "Türkmenistan",
          common: "Türkmenistan",
        },
      },
    },
    countryCode: "TM",
    currencies: {
      TMT: {
        name: "Turkmenistan manat",
        symbol: "m",
      },
    },
    languages: {
      rus: "Russian",
      tuk: "Turkmen",
    },
    flag: "🇹🇲",
    population: 6031187,
  },
  {
    name: {
      common: "Denmark",
      official: "Kingdom of Denmark",
      nativeName: {
        dan: {
          official: "Kongeriget Danmark",
          common: "Danmark",
        },
      },
    },
    countryCode: "DK",
    currencies: {
      DKK: {
        name: "Danish krone",
        symbol: "kr",
      },
    },
    languages: {
      dan: "Danish",
    },
    flag: "🇩🇰",
    population: 5831404,
  },
  {
    name: {
      common: "Singapore",
      official: "Republic of Singapore",
      nativeName: {
        eng: {
          official: "Republic of Singapore",
          common: "Singapore",
        },
        zho: {
          official: "新加坡共和国",
          common: "新加坡",
        },
        msa: {
          official: "Republik Singapura",
          common: "Singapura",
        },
        tam: {
          official: "சிங்கப்பூர் குடியரசு",
          common: "சிங்கப்பூர்",
        },
      },
    },
    countryCode: "SG",
    currencies: {
      SGD: {
        name: "Singapore dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      zho: "Chinese",
      msa: "Malay",
      tam: "Tamil",
    },
    flag: "🇸🇬",
    population: 5685807,
  },
  {
    name: {
      common: "Republic of the Congo",
      official: "Republic of the Congo",
      nativeName: {
        fra: {
          official: "République du Congo",
          common: "République du Congo",
        },
        kon: {
          official: "Repubilika ya Kongo",
          common: "Repubilika ya Kongo",
        },
        lin: {
          official: "Republíki ya Kongó",
          common: "Republíki ya Kongó",
        },
      },
    },
    countryCode: "CG",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      kon: "Kikongo",
      lin: "Lingala",
    },
    flag: "🇨🇬",
    population: 5657000,
  },
  {
    name: {
      common: "Finland",
      official: "Republic of Finland",
      nativeName: {
        fin: {
          official: "Suomen tasavalta",
          common: "Suomi",
        },
        swe: {
          official: "Republiken Finland",
          common: "Finland",
        },
      },
    },
    countryCode: "FI",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fin: "Finnish",
      swe: "Swedish",
    },
    flag: "🇫🇮",
    population: 5530719,
  },
  {
    name: {
      common: "Slovakia",
      official: "Slovak Republic",
      nativeName: {
        slk: {
          official: "Slovenská republika",
          common: "Slovensko",
        },
      },
    },
    countryCode: "SK",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      slk: "Slovak",
    },
    flag: "🇸🇰",
    population: 5458827,
  },
  {
    name: {
      common: "Norway",
      official: "Kingdom of Norway",
      nativeName: {
        nno: {
          official: "Kongeriket Noreg",
          common: "Noreg",
        },
        nob: {
          official: "Kongeriket Norge",
          common: "Norge",
        },
        smi: {
          official: "Norgga gonagasriika",
          common: "Norgga",
        },
      },
    },
    countryCode: "NO",
    currencies: {
      NOK: {
        name: "Norwegian krone",
        symbol: "kr",
      },
    },
    languages: {
      nno: "Norwegian Nynorsk",
      nob: "Norwegian Bokmål",
      smi: "Sami",
    },
    flag: "🇳🇴",
    population: 5379475,
  },
  {
    name: {
      common: "Eritrea",
      official: "State of Eritrea",
      nativeName: {
        ara: {
          official: "دولة إرتريا",
          common: "إرتريا‎",
        },
        eng: {
          official: "State of Eritrea",
          common: "Eritrea",
        },
        tir: {
          official: "ሃገረ ኤርትራ",
          common: "ኤርትራ",
        },
      },
    },
    countryCode: "ER",
    currencies: {
      ERN: {
        name: "Eritrean nakfa",
        symbol: "Nfk",
      },
    },
    languages: {
      ara: "Arabic",
      eng: "English",
      tir: "Tigrinya",
    },
    flag: "🇪🇷",
    population: 5352000,
  },
  {
    name: {
      common: "Oman",
      official: "Sultanate of Oman",
      nativeName: {
        ara: {
          official: "سلطنة عمان",
          common: "عمان",
        },
      },
    },
    countryCode: "OM",
    currencies: {
      OMR: {
        name: "Omani rial",
        symbol: "ر.ع.",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇴🇲",
    population: 5106622,
  },
  {
    name: {
      common: "Costa Rica",
      official: "Republic of Costa Rica",
      nativeName: {
        spa: {
          official: "República de Costa Rica",
          common: "Costa Rica",
        },
      },
    },
    countryCode: "CR",
    currencies: {
      CRC: {
        name: "Costa Rican colón",
        symbol: "₡",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇨🇷",
    population: 5094114,
  },
  {
    name: {
      common: "New Zealand",
      official: "New Zealand",
      nativeName: {
        eng: {
          official: "New Zealand",
          common: "New Zealand",
        },
        mri: {
          official: "Aotearoa",
          common: "Aotearoa",
        },
        nzs: {
          official: "New Zealand",
          common: "New Zealand",
        },
      },
    },
    countryCode: "NZ",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      mri: "Māori",
      nzs: "New Zealand Sign Language",
    },
    flag: "🇳🇿",
    population: 5084300,
  },
  {
    name: {
      common: "Liberia",
      official: "Republic of Liberia",
      nativeName: {
        eng: {
          official: "Republic of Liberia",
          common: "Liberia",
        },
      },
    },
    countryCode: "LR",
    currencies: {
      LRD: {
        name: "Liberian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇱🇷",
    population: 5057677,
  },
  {
    name: {
      common: "Ireland",
      official: "Republic of Ireland",
      nativeName: {
        eng: {
          official: "Republic of Ireland",
          common: "Ireland",
        },
        gle: {
          official: "Poblacht na hÉireann",
          common: "Éire",
        },
      },
    },
    countryCode: "IE",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      eng: "English",
      gle: "Irish",
    },
    flag: "🇮🇪",
    population: 4994724,
  },
  {
    name: {
      common: "Central African Republic",
      official: "Central African Republic",
      nativeName: {
        fra: {
          official: "République centrafricaine",
          common: "République centrafricaine",
        },
        sag: {
          official: "Ködörösêse tî Bêafrîka",
          common: "Bêafrîka",
        },
      },
    },
    countryCode: "CF",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      sag: "Sango",
    },
    flag: "🇨🇫",
    population: 4829764,
  },
  {
    name: {
      common: "Palestine",
      official: "State of Palestine",
      nativeName: {
        ara: {
          official: "دولة فلسطين",
          common: "فلسطين",
        },
      },
    },
    countryCode: "PS",
    currencies: {
      EGP: {
        name: "Egyptian pound",
        symbol: "E£",
      },
      ILS: {
        name: "Israeli new shekel",
        symbol: "₪",
      },
      JOD: {
        name: "Jordanian dinar",
        symbol: "JD",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇵🇸",
    population: 4803269,
  },
  {
    name: {
      common: "Mauritania",
      official: "Islamic Republic of Mauritania",
      nativeName: {
        ara: {
          official: "الجمهورية الإسلامية الموريتانية",
          common: "موريتانيا",
        },
      },
    },
    countryCode: "MR",
    currencies: {
      MRU: {
        name: "Mauritanian ouguiya",
        symbol: "UM",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇲🇷",
    population: 4649660,
  },
  {
    name: {
      common: "Panama",
      official: "Republic of Panama",
      nativeName: {
        spa: {
          official: "República de Panamá",
          common: "Panamá",
        },
      },
    },
    countryCode: "PA",
    currencies: {
      PAB: {
        name: "Panamanian balboa",
        symbol: "B/.",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇵🇦",
    population: 4314768,
  },
  {
    name: {
      common: "Kuwait",
      official: "State of Kuwait",
      nativeName: {
        ara: {
          official: "دولة الكويت",
          common: "الكويت",
        },
      },
    },
    countryCode: "KW",
    currencies: {
      KWD: {
        name: "Kuwaiti dinar",
        symbol: "د.ك",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇰🇼",
    population: 4270563,
  },
  {
    name: {
      common: "Croatia",
      official: "Republic of Croatia",
      nativeName: {
        hrv: {
          official: "Republika Hrvatska",
          common: "Hrvatska",
        },
      },
    },
    countryCode: "HR",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      hrv: "Croatian",
    },
    flag: "🇭🇷",
    population: 4047200,
  },
  {
    name: {
      common: "Georgia",
      official: "Georgia",
      nativeName: {
        kat: {
          official: "საქართველო",
          common: "საქართველო",
        },
      },
    },
    countryCode: "GE",
    currencies: {
      GEL: {
        name: "lari",
        symbol: "₾",
      },
    },
    languages: {
      kat: "Georgian",
    },
    flag: "🇬🇪",
    population: 3714000,
  },
  {
    name: {
      common: "Uruguay",
      official: "Oriental Republic of Uruguay",
      nativeName: {
        spa: {
          official: "República Oriental del Uruguay",
          common: "Uruguay",
        },
      },
    },
    countryCode: "UY",
    currencies: {
      UYU: {
        name: "Uruguayan peso",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    flag: "🇺🇾",
    population: 3473727,
  },
  {
    name: {
      common: "Bosnia and Herzegovina",
      official: "Bosnia and Herzegovina",
      nativeName: {
        bos: {
          official: "Bosna i Hercegovina",
          common: "Bosna i Hercegovina",
        },
        hrv: {
          official: "Bosna i Hercegovina",
          common: "Bosna i Hercegovina",
        },
        srp: {
          official: "Босна и Херцеговина",
          common: "Босна и Херцеговина",
        },
      },
    },
    countryCode: "BA",
    currencies: {
      BAM: {
        name: "Bosnia and Herzegovina convertible mark",
        symbol: "",
      },
    },
    languages: {
      bos: "Bosnian",
      hrv: "Croatian",
      srp: "Serbian",
    },
    flag: "🇧🇦",
    population: 3280815,
  },
  {
    name: {
      common: "Mongolia",
      official: "Mongolia",
      nativeName: {
        mon: {
          official: "Монгол улс",
          common: "Монгол улс",
        },
      },
    },
    countryCode: "MN",
    currencies: {
      MNT: {
        name: "Mongolian tögrög",
        symbol: "₮",
      },
    },
    languages: {
      mon: "Mongolian",
    },
    flag: "🇲🇳",
    population: 3278292,
  },
  {
    name: {
      common: "Puerto Rico",
      official: "Commonwealth of Puerto Rico",
      nativeName: {
        eng: {
          official: "Commonwealth of Puerto Rico",
          common: "Puerto Rico",
        },
        spa: {
          official: "Estado Libre Asociado de Puerto Rico",
          common: "Puerto Rico",
        },
      },
    },
    countryCode: "PR",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      spa: "Spanish",
    },
    flag: "🇵🇷",
    population: 3194034,
  },
  {
    name: {
      common: "Armenia",
      official: "Republic of Armenia",
      nativeName: {
        hye: {
          official: "Հայաստանի Հանրապետություն",
          common: "Հայաստան",
        },
      },
    },
    countryCode: "AM",
    currencies: {
      AMD: {
        name: "Armenian dram",
        symbol: "֏",
      },
    },
    languages: {
      hye: "Armenian",
    },
    flag: "🇦🇲",
    population: 2963234,
  },
  {
    name: {
      common: "Jamaica",
      official: "Jamaica",
      nativeName: {
        eng: {
          official: "Jamaica",
          common: "Jamaica",
        },
        jam: {
          official: "Jamaica",
          common: "Jamaica",
        },
      },
    },
    countryCode: "JM",
    currencies: {
      JMD: {
        name: "Jamaican dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      jam: "Jamaican Patois",
    },
    flag: "🇯🇲",
    population: 2961161,
  },
  {
    name: {
      common: "Qatar",
      official: "State of Qatar",
      nativeName: {
        ara: {
          official: "دولة قطر",
          common: "قطر",
        },
      },
    },
    countryCode: "QA",
    currencies: {
      QAR: {
        name: "Qatari riyal",
        symbol: "ر.ق",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇶🇦",
    population: 2881060,
  },
  {
    name: {
      common: "Albania",
      official: "Republic of Albania",
      nativeName: {
        sqi: {
          official: "Republika e Shqipërisë",
          common: "Shqipëria",
        },
      },
    },
    countryCode: "AL",
    currencies: {
      ALL: {
        name: "Albanian lek",
        symbol: "L",
      },
    },
    languages: {
      sqi: "Albanian",
    },
    flag: "🇦🇱",
    population: 2837743,
  },
  {
    name: {
      common: "Lithuania",
      official: "Republic of Lithuania",
      nativeName: {
        lit: {
          official: "Lietuvos Respublikos",
          common: "Lietuva",
        },
      },
    },
    countryCode: "LT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      lit: "Lithuanian",
    },
    flag: "🇱🇹",
    population: 2794700,
  },
  {
    name: {
      common: "Moldova",
      official: "Republic of Moldova",
      nativeName: {
        ron: {
          official: "Republica Moldova",
          common: "Moldova",
        },
      },
    },
    countryCode: "MD",
    currencies: {
      MDL: {
        name: "Moldovan leu",
        symbol: "L",
      },
    },
    languages: {
      ron: "Romanian",
    },
    flag: "🇲🇩",
    population: 2617820,
  },
  {
    name: {
      common: "Namibia",
      official: "Republic of Namibia",
      nativeName: {
        afr: {
          official: "Republiek van Namibië",
          common: "Namibië",
        },
        deu: {
          official: "Republik Namibia",
          common: "Namibia",
        },
        eng: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        her: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        hgm: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        kwn: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        loz: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        ndo: {
          official: "Republic of Namibia",
          common: "Namibia",
        },
        tsn: {
          official: "Lefatshe la Namibia",
          common: "Namibia",
        },
      },
    },
    countryCode: "NA",
    currencies: {
      NAD: {
        name: "Namibian dollar",
        symbol: "$",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      afr: "Afrikaans",
      deu: "German",
      eng: "English",
      her: "Herero",
      hgm: "Khoekhoe",
      kwn: "Kwangali",
      loz: "Lozi",
      ndo: "Ndonga",
      tsn: "Tswana",
    },
    flag: "🇳🇦",
    population: 2540916,
  },
  {
    name: {
      common: "Gambia",
      official: "Republic of the Gambia",
      nativeName: {
        eng: {
          official: "Republic of the Gambia",
          common: "Gambia",
        },
      },
    },
    countryCode: "GM",
    currencies: {
      GMD: {
        name: "dalasi",
        symbol: "D",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇲",
    population: 2416664,
  },
  {
    name: {
      common: "Botswana",
      official: "Republic of Botswana",
      nativeName: {
        eng: {
          official: "Republic of Botswana",
          common: "Botswana",
        },
        tsn: {
          official: "Lefatshe la Botswana",
          common: "Botswana",
        },
      },
    },
    countryCode: "BW",
    currencies: {
      BWP: {
        name: "Botswana pula",
        symbol: "P",
      },
    },
    languages: {
      eng: "English",
      tsn: "Tswana",
    },
    flag: "🇧🇼",
    population: 2351625,
  },
  {
    name: {
      common: "Gabon",
      official: "Gabonese Republic",
      nativeName: {
        fra: {
          official: "République gabonaise",
          common: "Gabon",
        },
      },
    },
    countryCode: "GA",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇬🇦",
    population: 2225728,
  },
  {
    name: {
      common: "Lesotho",
      official: "Kingdom of Lesotho",
      nativeName: {
        eng: {
          official: "Kingdom of Lesotho",
          common: "Lesotho",
        },
        sot: {
          official: "Kingdom of Lesotho",
          common: "Lesotho",
        },
      },
    },
    countryCode: "LS",
    currencies: {
      LSL: {
        name: "Lesotho loti",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      eng: "English",
      sot: "Sotho",
    },
    flag: "🇱🇸",
    population: 2142252,
  },
  {
    name: {
      common: "Slovenia",
      official: "Republic of Slovenia",
      nativeName: {
        slv: {
          official: "Republika Slovenija",
          common: "Slovenija",
        },
      },
    },
    countryCode: "SI",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      slv: "Slovene",
    },
    flag: "🇸🇮",
    population: 2100126,
  },
  {
    name: {
      common: "North Macedonia",
      official: "Republic of North Macedonia",
      nativeName: {
        mkd: {
          official: "Република Северна Македонија",
          common: "Македонија",
        },
      },
    },
    countryCode: "MK",
    currencies: {
      MKD: {
        name: "denar",
        symbol: "den",
      },
    },
    languages: {
      mkd: "Macedonian",
    },
    flag: "🇲🇰",
    population: 2077132,
  },
  {
    name: {
      common: "Guinea-Bissau",
      official: "Republic of Guinea-Bissau",
      nativeName: {
        por: {
          official: "República da Guiné-Bissau",
          common: "Guiné-Bissau",
        },
        pov: {
          official: "República da Guiné-Bissau",
          common: "Guiné-Bissau",
        },
      },
    },
    countryCode: "GW",
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      por: "Portuguese",
      pov: "Upper Guinea Creole",
    },
    flag: "🇬🇼",
    population: 1967998,
  },
  {
    name: {
      common: "Latvia",
      official: "Republic of Latvia",
      nativeName: {
        lav: {
          official: "Latvijas Republikas",
          common: "Latvija",
        },
      },
    },
    countryCode: "LV",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      lav: "Latvian",
    },
    flag: "🇱🇻",
    population: 1901548,
  },
  {
    name: {
      common: "Kosovo",
      official: "Republic of Kosovo",
      nativeName: {
        sqi: {
          official: "Republika e Kosovës",
          common: "Kosova",
        },
        srp: {
          official: "Република Косово",
          common: "Косово",
        },
      },
    },
    countryCode: "XK",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      sqi: "Albanian",
      srp: "Serbian",
    },
    flag: "🇽🇰",
    population: 1775378,
  },
  {
    name: {
      common: "Bahrain",
      official: "Kingdom of Bahrain",
      nativeName: {
        ara: {
          official: "مملكة البحرين",
          common: "‏البحرين",
        },
      },
    },
    countryCode: "BH",
    currencies: {
      BHD: {
        name: "Bahraini dinar",
        symbol: ".د.ب",
      },
    },
    languages: {
      ara: "Arabic",
    },
    flag: "🇧🇭",
    population: 1701583,
  },
  {
    name: {
      common: "Equatorial Guinea",
      official: "Republic of Equatorial Guinea",
      nativeName: {
        fra: {
          official: "République de la Guinée Équatoriale",
          common: "Guinée équatoriale",
        },
        por: {
          official: "República da Guiné Equatorial",
          common: "Guiné Equatorial",
        },
        spa: {
          official: "República de Guinea Ecuatorial",
          common: "Guinea Ecuatorial",
        },
      },
    },
    countryCode: "GQ",
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    languages: {
      fra: "French",
      por: "Portuguese",
      spa: "Spanish",
    },
    flag: "🇬🇶",
    population: 1402985,
  },
  {
    name: {
      common: "Trinidad and Tobago",
      official: "Republic of Trinidad and Tobago",
      nativeName: {
        eng: {
          official: "Republic of Trinidad and Tobago",
          common: "Trinidad and Tobago",
        },
      },
    },
    countryCode: "TT",
    currencies: {
      TTD: {
        name: "Trinidad and Tobago dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇹🇹",
    population: 1399491,
  },
  {
    name: {
      common: "Estonia",
      official: "Republic of Estonia",
      nativeName: {
        est: {
          official: "Eesti Vabariik",
          common: "Eesti",
        },
      },
    },
    countryCode: "EE",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      est: "Estonian",
    },
    flag: "🇪🇪",
    population: 1331057,
  },
  {
    name: {
      common: "Timor-Leste",
      official: "Democratic Republic of Timor-Leste",
      nativeName: {
        por: {
          official: "República Democrática de Timor-Leste",
          common: "Timor-Leste",
        },
        tet: {
          official: "Repúblika Demokrátika Timór-Leste",
          common: "Timór-Leste",
        },
      },
    },
    countryCode: "TL",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      por: "Portuguese",
      tet: "Tetum",
    },
    flag: "🇹🇱",
    population: 1318442,
  },
  {
    name: {
      common: "Mauritius",
      official: "Republic of Mauritius",
      nativeName: {
        eng: {
          official: "Republic of Mauritius",
          common: "Mauritius",
        },
        fra: {
          official: "République de Maurice",
          common: "Maurice",
        },
        mfe: {
          official: "Republik Moris",
          common: "Moris",
        },
      },
    },
    countryCode: "MU",
    currencies: {
      MUR: {
        name: "Mauritian rupee",
        symbol: "₨",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      mfe: "Mauritian Creole",
    },
    flag: "🇲🇺",
    population: 1265740,
  },
  {
    name: {
      common: "Cyprus",
      official: "Republic of Cyprus",
      nativeName: {
        ell: {
          official: "Δημοκρατία της Κύπρος",
          common: "Κύπρος",
        },
        tur: {
          official: "Kıbrıs Cumhuriyeti",
          common: "Kıbrıs",
        },
      },
    },
    countryCode: "CY",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ell: "Greek",
      tur: "Turkish",
    },
    flag: "🇨🇾",
    population: 1207361,
  },
  {
    name: {
      common: "Eswatini",
      official: "Kingdom of Eswatini",
      nativeName: {
        eng: {
          official: "Kingdom of Eswatini",
          common: "Eswatini",
        },
        ssw: {
          official: "Umbuso weSwatini",
          common: "eSwatini",
        },
      },
    },
    countryCode: "SZ",
    currencies: {
      SZL: {
        name: "Swazi lilangeni",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    languages: {
      eng: "English",
      ssw: "Swazi",
    },
    flag: "🇸🇿",
    population: 1160164,
  },
  {
    name: {
      common: "Djibouti",
      official: "Republic of Djibouti",
      nativeName: {
        ara: {
          official: "جمهورية جيبوتي",
          common: "جيبوتي‎",
        },
        fra: {
          official: "République de Djibouti",
          common: "Djibouti",
        },
      },
    },
    countryCode: "DJ",
    currencies: {
      DJF: {
        name: "Djiboutian franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    flag: "🇩🇯",
    population: 988002,
  },
  {
    name: {
      common: "Fiji",
      official: "Republic of Fiji",
      nativeName: {
        eng: {
          official: "Republic of Fiji",
          common: "Fiji",
        },
        fij: {
          official: "Matanitu Tugalala o Viti",
          common: "Viti",
        },
        hif: {
          official: "रिपब्लिक ऑफ फीजी",
          common: "फिजी",
        },
      },
    },
    countryCode: "FJ",
    currencies: {
      FJD: {
        name: "Fijian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      fij: "Fijian",
      hif: "Fiji Hindi",
    },
    flag: "🇫🇯",
    population: 896444,
  },
  {
    name: {
      common: "Comoros",
      official: "Union of the Comoros",
      nativeName: {
        ara: {
          official: "الاتحاد القمري",
          common: "القمر‎",
        },
        fra: {
          official: "Union des Comores",
          common: "Comores",
        },
        zdj: {
          official: "Udzima wa Komori",
          common: "Komori",
        },
      },
    },
    countryCode: "KM",
    currencies: {
      KMF: {
        name: "Comorian franc",
        symbol: "Fr",
      },
    },
    languages: {
      ara: "Arabic",
      fra: "French",
      zdj: "Comorian",
    },
    flag: "🇰🇲",
    population: 869595,
  },
  {
    name: {
      common: "Réunion",
      official: "Réunion Island",
      nativeName: {
        fra: {
          official: "Ile de la Réunion",
          common: "La Réunion",
        },
      },
    },
    countryCode: "RE",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇷🇪",
    population: 840974,
  },
  {
    name: {
      common: "Guyana",
      official: "Co-operative Republic of Guyana",
      nativeName: {
        eng: {
          official: "Co-operative Republic of Guyana",
          common: "Guyana",
        },
      },
    },
    countryCode: "GY",
    currencies: {
      GYD: {
        name: "Guyanese dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇾",
    population: 786559,
  },
  {
    name: {
      common: "Bhutan",
      official: "Kingdom of Bhutan",
      nativeName: {
        dzo: {
          official: "འབྲུག་རྒྱལ་ཁབ་",
          common: "འབྲུག་ཡུལ་",
        },
      },
    },
    countryCode: "BT",
    currencies: {
      BTN: {
        name: "Bhutanese ngultrum",
        symbol: "Nu.",
      },
      INR: {
        name: "Indian rupee",
        symbol: "₹",
      },
    },
    languages: {
      dzo: "Dzongkha",
    },
    flag: "🇧🇹",
    population: 771612,
  },
  {
    name: {
      common: "Solomon Islands",
      official: "Solomon Islands",
      nativeName: {
        eng: {
          official: "Solomon Islands",
          common: "Solomon Islands",
        },
      },
    },
    countryCode: "SB",
    currencies: {
      SBD: {
        name: "Solomon Islands dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇸🇧",
    population: 686878,
  },
  {
    name: {
      common: "Macau",
      official:
        "Macao Special Administrative Region of the People's Republic of China",
      nativeName: {
        por: {
          official:
            "Região Administrativa Especial de Macau da República Popular da China",
          common: "Macau",
        },
        zho: {
          official: "中华人民共和国澳门特别行政区",
          common: "澳门",
        },
      },
    },
    countryCode: "MO",
    currencies: {
      MOP: {
        name: "Macanese pataca",
        symbol: "P",
      },
    },
    languages: {
      por: "Portuguese",
      zho: "Chinese",
    },
    flag: "🇲🇴",
    population: 649342,
  },
  {
    name: {
      common: "Luxembourg",
      official: "Grand Duchy of Luxembourg",
      nativeName: {
        deu: {
          official: "Großherzogtum Luxemburg",
          common: "Luxemburg",
        },
        fra: {
          official: "Grand-Duché de Luxembourg",
          common: "Luxembourg",
        },
        ltz: {
          official: "Groussherzogtum Lëtzebuerg",
          common: "Lëtzebuerg",
        },
      },
    },
    countryCode: "LU",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      deu: "German",
      fra: "French",
      ltz: "Luxembourgish",
    },
    flag: "🇱🇺",
    population: 632275,
  },
  {
    name: {
      common: "Montenegro",
      official: "Montenegro",
      nativeName: {
        cnr: {
          official: "Црна Гора",
          common: "Црна Гора",
        },
      },
    },
    countryCode: "ME",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      cnr: "Montenegrin",
    },
    flag: "🇲🇪",
    population: 621718,
  },
  {
    name: {
      common: "Suriname",
      official: "Republic of Suriname",
      nativeName: {
        nld: {
          official: "Republiek Suriname",
          common: "Suriname",
        },
      },
    },
    countryCode: "SR",
    currencies: {
      SRD: {
        name: "Surinamese dollar",
        symbol: "$",
      },
    },
    languages: {
      nld: "Dutch",
    },
    flag: "🇸🇷",
    population: 586634,
  },
  {
    name: {
      common: "Cape Verde",
      official: "Republic of Cabo Verde",
      nativeName: {
        por: {
          official: "República de Cabo Verde",
          common: "Cabo Verde",
        },
      },
    },
    countryCode: "CV",
    currencies: {
      CVE: {
        name: "Cape Verdean escudo",
        symbol: "Esc",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇨🇻",
    population: 555988,
  },
  {
    name: {
      common: "Maldives",
      official: "Republic of the Maldives",
      nativeName: {
        div: {
          official: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
          common: "ދިވެހިރާއްޖޭގެ",
        },
      },
    },
    countryCode: "MV",
    currencies: {
      MVR: {
        name: "Maldivian rufiyaa",
        symbol: ".ރ",
      },
    },
    languages: {
      div: "Maldivian",
    },
    flag: "🇲🇻",
    population: 540542,
  },
  {
    name: {
      common: "Malta",
      official: "Republic of Malta",
      nativeName: {
        eng: {
          official: "Republic of Malta",
          common: "Malta",
        },
        mlt: {
          official: "Repubblika ta ' Malta",
          common: "Malta",
        },
      },
    },
    countryCode: "MT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      eng: "English",
      mlt: "Maltese",
    },
    flag: "🇲🇹",
    population: 525285,
  },
  {
    name: {
      common: "Western Sahara",
      official: "Sahrawi Arab Democratic Republic",
      nativeName: {
        ber: {
          official: "Sahrawi Arab Democratic Republic",
          common: "Western Sahara",
        },
        mey: {
          official: "الجمهورية العربية الصحراوية الديمقراطية",
          common: "الصحراء الغربية",
        },
        spa: {
          official: "República Árabe Saharaui Democrática",
          common: "Sahara Occidental",
        },
      },
    },
    countryCode: "EH",
    currencies: {
      DZD: {
        name: "Algerian dinar",
        symbol: "دج",
      },
      MAD: {
        name: "Moroccan dirham",
        symbol: "DH",
      },
      MRU: {
        name: "Mauritanian ouguiya",
        symbol: "UM",
      },
    },
    languages: {
      ber: "Berber",
      mey: "Hassaniya",
      spa: "Spanish",
    },
    flag: "🇪🇭",
    population: 510713,
  },
  {
    name: {
      common: "Brunei",
      official: "Nation of Brunei, Abode of Peace",
      nativeName: {
        msa: {
          official: "Nation of Brunei, Abode Damai",
          common: "Negara Brunei Darussalam",
        },
      },
    },
    countryCode: "BN",
    currencies: {
      BND: {
        name: "Brunei dollar",
        symbol: "$",
      },
      SGD: {
        name: "Singapore dollar",
        symbol: "$",
      },
    },
    languages: {
      msa: "Malay",
    },
    flag: "🇧🇳",
    population: 437483,
  },
  {
    name: {
      common: "Guadeloupe",
      official: "Guadeloupe",
      nativeName: {
        fra: {
          official: "Guadeloupe",
          common: "Guadeloupe",
        },
      },
    },
    countryCode: "GP",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇬🇵",
    population: 400132,
  },
  {
    name: {
      common: "Belize",
      official: "Belize",
      nativeName: {
        bjz: {
          official: "Belize",
          common: "Belize",
        },
        eng: {
          official: "Belize",
          common: "Belize",
        },
        spa: {
          official: "Belice",
          common: "Belice",
        },
      },
    },
    countryCode: "BZ",
    currencies: {
      BZD: {
        name: "Belize dollar",
        symbol: "$",
      },
    },
    languages: {
      bjz: "Belizean Creole",
      eng: "English",
      spa: "Spanish",
    },
    flag: "🇧🇿",
    population: 397621,
  },
  {
    name: {
      common: "Bahamas",
      official: "Commonwealth of the Bahamas",
      nativeName: {
        eng: {
          official: "Commonwealth of the Bahamas",
          common: "Bahamas",
        },
      },
    },
    countryCode: "BS",
    currencies: {
      BSD: {
        name: "Bahamian dollar",
        symbol: "$",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇧🇸",
    population: 393248,
  },
  {
    name: {
      common: "Martinique",
      official: "Martinique",
      nativeName: {
        fra: {
          official: "Martinique",
          common: "Martinique",
        },
      },
    },
    countryCode: "MQ",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇲🇶",
    population: 378243,
  },
  {
    name: {
      common: "Iceland",
      official: "Iceland",
      nativeName: {
        isl: {
          official: "Ísland",
          common: "Ísland",
        },
      },
    },
    countryCode: "IS",
    currencies: {
      ISK: {
        name: "Icelandic króna",
        symbol: "kr",
      },
    },
    languages: {
      isl: "Icelandic",
    },
    flag: "🇮🇸",
    population: 366425,
  },
  {
    name: {
      common: "Vanuatu",
      official: "Republic of Vanuatu",
      nativeName: {
        bis: {
          official: "Ripablik blong Vanuatu",
          common: "Vanuatu",
        },
        eng: {
          official: "Republic of Vanuatu",
          common: "Vanuatu",
        },
        fra: {
          official: "République de Vanuatu",
          common: "Vanuatu",
        },
      },
    },
    countryCode: "VU",
    currencies: {
      VUV: {
        name: "Vanuatu vatu",
        symbol: "Vt",
      },
    },
    languages: {
      bis: "Bislama",
      eng: "English",
      fra: "French",
    },
    flag: "🇻🇺",
    population: 307150,
  },
  {
    name: {
      common: "Barbados",
      official: "Barbados",
      nativeName: {
        eng: {
          official: "Barbados",
          common: "Barbados",
        },
      },
    },
    countryCode: "BB",
    currencies: {
      BBD: {
        name: "Barbadian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇧🇧",
    population: 287371,
  },
  {
    name: {
      common: "French Polynesia",
      official: "French Polynesia",
      nativeName: {
        fra: {
          official: "Polynésie française",
          common: "Polynésie française",
        },
      },
    },
    countryCode: "PF",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇵🇫",
    population: 280904,
  },
  {
    name: {
      common: "New Caledonia",
      official: "New Caledonia",
      nativeName: {
        fra: {
          official: "Nouvelle-Calédonie",
          common: "Nouvelle-Calédonie",
        },
      },
    },
    countryCode: "NC",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇳🇨",
    population: 271960,
  },
  {
    name: {
      common: "French Guiana",
      official: "Guiana",
      nativeName: {
        fra: {
          official: "Guyane",
          common: "Guyane française",
        },
      },
    },
    countryCode: "GF",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇬🇫",
    population: 254541,
  },
  {
    name: {
      common: "Mayotte",
      official: "Department of Mayotte",
      nativeName: {
        fra: {
          official: "Département de Mayotte",
          common: "Mayotte",
        },
      },
    },
    countryCode: "YT",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇾🇹",
    population: 226915,
  },
  {
    name: {
      common: "São Tomé and Príncipe",
      official: "Democratic Republic of São Tomé and Príncipe",
      nativeName: {
        por: {
          official: "República Democrática do São Tomé e Príncipe",
          common: "São Tomé e Príncipe",
        },
      },
    },
    countryCode: "ST",
    currencies: {
      STN: {
        name: "São Tomé and Príncipe dobra",
        symbol: "Db",
      },
    },
    languages: {
      por: "Portuguese",
    },
    flag: "🇸🇹",
    population: 219161,
  },
  {
    name: {
      common: "Samoa",
      official: "Independent State of Samoa",
      nativeName: {
        eng: {
          official: "Independent State of Samoa",
          common: "Samoa",
        },
        smo: {
          official: "Malo Saʻoloto Tutoʻatasi o Sāmoa",
          common: "Sāmoa",
        },
      },
    },
    countryCode: "WS",
    currencies: {
      WST: {
        name: "Samoan tālā",
        symbol: "T",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
    },
    flag: "🇼🇸",
    population: 198410,
  },
  {
    name: {
      common: "Saint Lucia",
      official: "Saint Lucia",
      nativeName: {
        eng: {
          official: "Saint Lucia",
          common: "Saint Lucia",
        },
      },
    },
    countryCode: "LC",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇱🇨",
    population: 183629,
  },
  {
    name: {
      common: "Guam",
      official: "Guam",
      nativeName: {
        cha: {
          official: "Guåhån",
          common: "Guåhån",
        },
        eng: {
          official: "Guam",
          common: "Guam",
        },
        spa: {
          official: "Guam",
          common: "Guam",
        },
      },
    },
    countryCode: "GU",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      cha: "Chamorro",
      eng: "English",
      spa: "Spanish",
    },
    flag: "🇬🇺",
    population: 168783,
  },
  {
    name: {
      common: "Curaçao",
      official: "Country of Curaçao",
      nativeName: {
        eng: {
          official: "Country of Curaçao",
          common: "Curaçao",
        },
        nld: {
          official: "Land Curaçao",
          common: "Curaçao",
        },
        pap: {
          official: "Pais Kòrsou",
          common: "Pais Kòrsou",
        },
      },
    },
    countryCode: "CW",
    currencies: {
      ANG: {
        name: "Netherlands Antillean guilder",
        symbol: "ƒ",
      },
    },
    languages: {
      eng: "English",
      nld: "Dutch",
      pap: "Papiamento",
    },
    flag: "🇨🇼",
    population: 155014,
  },
  {
    name: {
      common: "Kiribati",
      official: "Independent and Sovereign Republic of Kiribati",
      nativeName: {
        eng: {
          official: "Independent and Sovereign Republic of Kiribati",
          common: "Kiribati",
        },
        gil: {
          official: "Ribaberiki Kiribati",
          common: "Kiribati",
        },
      },
    },
    countryCode: "KI",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
      KID: {
        name: "Kiribati dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      gil: "Gilbertese",
    },
    flag: "🇰🇮",
    population: 119446,
  },
  {
    name: {
      common: "Micronesia",
      official: "Federated States of Micronesia",
      nativeName: {
        eng: {
          official: "Federated States of Micronesia",
          common: "Micronesia",
        },
      },
    },
    countryCode: "FM",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇫🇲",
    population: 115021,
  },
  {
    name: {
      common: "Grenada",
      official: "Grenada",
      nativeName: {
        eng: {
          official: "Grenada",
          common: "Grenada",
        },
      },
    },
    countryCode: "GD",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇩",
    population: 112519,
  },
  {
    name: {
      common: "Saint Vincent and the Grenadines",
      official: "Saint Vincent and the Grenadines",
      nativeName: {
        eng: {
          official: "Saint Vincent and the Grenadines",
          common: "Saint Vincent and the Grenadines",
        },
      },
    },
    countryCode: "VC",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇻🇨",
    population: 110947,
  },
  {
    name: {
      common: "Aruba",
      official: "Aruba",
      nativeName: {
        nld: {
          official: "Aruba",
          common: "Aruba",
        },
        pap: {
          official: "Aruba",
          common: "Aruba",
        },
      },
    },
    countryCode: "AW",
    currencies: {
      AWG: {
        name: "Aruban florin",
        symbol: "ƒ",
      },
    },
    languages: {
      nld: "Dutch",
      pap: "Papiamento",
    },
    flag: "🇦🇼",
    population: 106766,
  },
  {
    name: {
      common: "United States Virgin Islands",
      official: "Virgin Islands of the United States",
      nativeName: {
        eng: {
          official: "Virgin Islands of the United States",
          common: "United States Virgin Islands",
        },
      },
    },
    countryCode: "VI",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇻🇮",
    population: 106290,
  },
  {
    name: {
      common: "Tonga",
      official: "Kingdom of Tonga",
      nativeName: {
        eng: {
          official: "Kingdom of Tonga",
          common: "Tonga",
        },
        ton: {
          official: "Kingdom of Tonga",
          common: "Tonga",
        },
      },
    },
    countryCode: "TO",
    currencies: {
      TOP: {
        name: "Tongan paʻanga",
        symbol: "T$",
      },
    },
    languages: {
      eng: "English",
      ton: "Tongan",
    },
    flag: "🇹🇴",
    population: 105697,
  },
  {
    name: {
      common: "Jersey",
      official: "Bailiwick of Jersey",
      nativeName: {
        eng: {
          official: "Bailiwick of Jersey",
          common: "Jersey",
        },
        fra: {
          official: "Bailliage de Jersey",
          common: "Jersey",
        },
        nrf: {
          official: "Bailliage dé Jèrri",
          common: "Jèrri",
        },
      },
    },
    countryCode: "JE",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      JEP: {
        name: "Jersey pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nrf: "Jèrriais",
    },
    flag: "🇯🇪",
    population: 100800,
  },
  {
    name: {
      common: "Seychelles",
      official: "Republic of Seychelles",
      nativeName: {
        crs: {
          official: "Repiblik Sesel",
          common: "Sesel",
        },
        eng: {
          official: "Republic of Seychelles",
          common: "Seychelles",
        },
        fra: {
          official: "République des Seychelles",
          common: "Seychelles",
        },
      },
    },
    countryCode: "SC",
    currencies: {
      SCR: {
        name: "Seychellois rupee",
        symbol: "₨",
      },
    },
    languages: {
      crs: "Seychellois Creole",
      eng: "English",
      fra: "French",
    },
    flag: "🇸🇨",
    population: 98462,
  },
  {
    name: {
      common: "Antigua and Barbuda",
      official: "Antigua and Barbuda",
      nativeName: {
        eng: {
          official: "Antigua and Barbuda",
          common: "Antigua and Barbuda",
        },
      },
    },
    countryCode: "AG",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇦🇬",
    population: 97928,
  },
  {
    name: {
      common: "Isle of Man",
      official: "Isle of Man",
      nativeName: {
        eng: {
          official: "Isle of Man",
          common: "Isle of Man",
        },
        glv: {
          official: "Ellan Vannin or Mannin",
          common: "Mannin",
        },
      },
    },
    countryCode: "IM",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      IMP: {
        name: "Manx pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      glv: "Manx",
    },
    flag: "🇮🇲",
    population: 85032,
  },
  {
    name: {
      common: "Andorra",
      official: "Principality of Andorra",
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: "Andorra",
        },
      },
    },
    countryCode: "AD",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      cat: "Catalan",
    },
    flag: "🇦🇩",
    population: 77265,
  },
  {
    name: {
      common: "Dominica",
      official: "Commonwealth of Dominica",
      nativeName: {
        eng: {
          official: "Commonwealth of Dominica",
          common: "Dominica",
        },
      },
    },
    countryCode: "DM",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇩🇲",
    population: 71991,
  },
  {
    name: {
      common: "Cayman Islands",
      official: "Cayman Islands",
      nativeName: {
        eng: {
          official: "Cayman Islands",
          common: "Cayman Islands",
        },
      },
    },
    countryCode: "KY",
    currencies: {
      KYD: {
        name: "Cayman Islands dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇰🇾",
    population: 65720,
  },
  {
    name: {
      common: "Bermuda",
      official: "Bermuda",
      nativeName: {
        eng: {
          official: "Bermuda",
          common: "Bermuda",
        },
      },
    },
    countryCode: "BM",
    currencies: {
      BMD: {
        name: "Bermudian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇧🇲",
    population: 63903,
  },
  {
    name: {
      common: "Guernsey",
      official: "Bailiwick of Guernsey",
      nativeName: {
        eng: {
          official: "Bailiwick of Guernsey",
          common: "Guernsey",
        },
        fra: {
          official: "Bailliage de Guernesey",
          common: "Guernesey",
        },
        nfr: {
          official: "Dgèrnésiais",
          common: "Dgèrnésiais",
        },
      },
    },
    countryCode: "GG",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
      GGP: {
        name: "Guernsey pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nfr: "Guernésiais",
    },
    flag: "🇬🇬",
    population: 62999,
  },
  {
    name: {
      common: "Marshall Islands",
      official: "Republic of the Marshall Islands",
      nativeName: {
        eng: {
          official: "Republic of the Marshall Islands",
          common: "Marshall Islands",
        },
        mah: {
          official: "Republic of the Marshall Islands",
          common: "M̧ajeļ",
        },
      },
    },
    countryCode: "MH",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      mah: "Marshallese",
    },
    flag: "🇲🇭",
    population: 59194,
  },
  {
    name: {
      common: "Northern Mariana Islands",
      official: "Commonwealth of the Northern Mariana Islands",
      nativeName: {
        cal: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
        cha: {
          official: "Sankattan Siha Na Islas Mariånas",
          common: "Na Islas Mariånas",
        },
        eng: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
      },
    },
    countryCode: "MP",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      cal: "Carolinian",
      cha: "Chamorro",
      eng: "English",
    },
    flag: "🇲🇵",
    population: 57557,
  },
  {
    name: {
      common: "Greenland",
      official: "Greenland",
      nativeName: {
        kal: {
          official: "Kalaallit Nunaat",
          common: "Kalaallit Nunaat",
        },
      },
    },
    countryCode: "GL",
    currencies: {
      DKK: {
        name: "krone",
        symbol: "kr.",
      },
    },
    languages: {
      kal: "Greenlandic",
    },
    flag: "🇬🇱",
    population: 56367,
  },
  {
    name: {
      common: "American Samoa",
      official: "American Samoa",
      nativeName: {
        eng: {
          official: "American Samoa",
          common: "American Samoa",
        },
        smo: {
          official: "Sāmoa Amelika",
          common: "Sāmoa Amelika",
        },
      },
    },
    countryCode: "AS",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
    },
    flag: "🇦🇸",
    population: 55197,
  },
  {
    name: {
      common: "Saint Helena, Ascension and Tristan da Cunha",
      official: "Saint Helena, Ascension and Tristan da Cunha",
      nativeName: {
        eng: {
          official: "Saint Helena, Ascension and Tristan da Cunha",
          common: "Saint Helena, Ascension and Tristan da Cunha",
        },
      },
    },
    countryCode: "SH",
    currencies: {
      GBP: {
        name: "Pound sterling",
        symbol: "£",
      },
      SHP: {
        name: "Saint Helena pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇸🇭",
    population: 53192,
  },
  {
    name: {
      common: "Saint Kitts and Nevis",
      official: "Federation of Saint Christopher and Nevis",
      nativeName: {
        eng: {
          official: "Federation of Saint Christopher and Nevis",
          common: "Saint Kitts and Nevis",
        },
      },
    },
    countryCode: "KN",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇰🇳",
    population: 53192,
  },
  {
    name: {
      common: "Faroe Islands",
      official: "Faroe Islands",
      nativeName: {
        dan: {
          official: "Færøerne",
          common: "Færøerne",
        },
        fao: {
          official: "Føroyar",
          common: "Føroyar",
        },
      },
    },
    countryCode: "FO",
    currencies: {
      DKK: {
        name: "Danish krone",
        symbol: "kr",
      },
      FOK: {
        name: "Faroese króna",
        symbol: "kr",
      },
    },
    languages: {
      dan: "Danish",
      fao: "Faroese",
    },
    flag: "🇫🇴",
    population: 48865,
  },
  {
    name: {
      common: "Sint Maarten",
      official: "Sint Maarten",
      nativeName: {
        eng: {
          official: "Sint Maarten",
          common: "Sint Maarten",
        },
        fra: {
          official: "Saint-Martin",
          common: "Saint-Martin",
        },
        nld: {
          official: "Sint Maarten",
          common: "Sint Maarten",
        },
      },
    },
    countryCode: "SX",
    currencies: {
      ANG: {
        name: "Netherlands Antillean guilder",
        symbol: "ƒ",
      },
    },
    languages: {
      eng: "English",
      fra: "French",
      nld: "Dutch",
    },
    flag: "🇸🇽",
    population: 40812,
  },
  {
    name: {
      common: "Monaco",
      official: "Principality of Monaco",
      nativeName: {
        fra: {
          official: "Principauté de Monaco",
          common: "Monaco",
        },
      },
    },
    countryCode: "MC",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇲🇨",
    population: 39244,
  },
  {
    name: {
      common: "Turks and Caicos Islands",
      official: "Turks and Caicos Islands",
      nativeName: {
        eng: {
          official: "Turks and Caicos Islands",
          common: "Turks and Caicos Islands",
        },
      },
    },
    countryCode: "TC",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇹🇨",
    population: 38718,
  },
  {
    name: {
      common: "Saint Martin",
      official: "Saint Martin",
      nativeName: {
        fra: {
          official: "Saint-Martin",
          common: "Saint-Martin",
        },
      },
    },
    countryCode: "MF",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇲🇫",
    population: 38659,
  },
  {
    name: {
      common: "Liechtenstein",
      official: "Principality of Liechtenstein",
      nativeName: {
        deu: {
          official: "Fürstentum Liechtenstein",
          common: "Liechtenstein",
        },
      },
    },
    countryCode: "LI",
    currencies: {
      CHF: {
        name: "Swiss franc",
        symbol: "Fr",
      },
    },
    languages: {
      deu: "German",
    },
    flag: "🇱🇮",
    population: 38137,
  },
  {
    name: {
      common: "San Marino",
      official: "Republic of San Marino",
      nativeName: {
        ita: {
          official: "Repubblica di San Marino",
          common: "San Marino",
        },
      },
    },
    countryCode: "SM",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
    },
    flag: "🇸🇲",
    population: 33938,
  },
  {
    name: {
      common: "Gibraltar",
      official: "Gibraltar",
      nativeName: {
        eng: {
          official: "Gibraltar",
          common: "Gibraltar",
        },
      },
    },
    countryCode: "GI",
    currencies: {
      GIP: {
        name: "Gibraltar pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇮",
    population: 33691,
  },
  {
    name: {
      common: "British Virgin Islands",
      official: "Virgin Islands",
      nativeName: {
        eng: {
          official: "Virgin Islands",
          common: "British Virgin Islands",
        },
      },
    },
    countryCode: "VG",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇻🇬",
    population: 30237,
  },
  {
    name: {
      common: "Åland Islands",
      official: "Åland Islands",
      nativeName: {
        swe: {
          official: "Landskapet Åland",
          common: "Åland",
        },
      },
    },
    countryCode: "AX",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      swe: "Swedish",
    },
    flag: "🇦🇽",
    population: 29458,
  },
  {
    name: {
      common: "Caribbean Netherlands",
      official: "Bonaire, Sint Eustatius and Saba",
      nativeName: {
        nld: {
          official: "Bonaire, Sint Eustatius en Saba",
          common: "Caribisch Nederland",
        },
        pap: {
          official: "Boneiru, Sint Eustatius y Saba",
          common: "Boneiru, Sint Eustatius y Saba",
        },
      },
    },
    countryCode: "BQ",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      nld: "Dutch",
      pap: "Papiamento",
    },
    flag: "🇧🇶",
    population: 25987,
  },
  {
    name: {
      common: "Cook Islands",
      official: "Cook Islands",
      nativeName: {
        eng: {
          official: "Cook Islands",
          common: "Cook Islands",
        },
        rar: {
          official: "Kūki 'Āirani",
          common: "Kūki 'Āirani",
        },
      },
    },
    countryCode: "CK",
    currencies: {
      CKD: {
        name: "Cook Islands dollar",
        symbol: "$",
      },
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      rar: "Cook Islands Māori",
    },
    flag: "🇨🇰",
    population: 18100,
  },
  {
    name: {
      common: "Palau",
      official: "Republic of Palau",
      nativeName: {
        eng: {
          official: "Republic of Palau",
          common: "Palau",
        },
        pau: {
          official: "Beluu er a Belau",
          common: "Belau",
        },
      },
    },
    countryCode: "PW",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      pau: "Palauan",
    },
    flag: "🇵🇼",
    population: 18092,
  },
  {
    name: {
      common: "Anguilla",
      official: "Anguilla",
      nativeName: {
        eng: {
          official: "Anguilla",
          common: "Anguilla",
        },
      },
    },
    countryCode: "AI",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇦🇮",
    population: 13452,
  },
  {
    name: {
      common: "Tuvalu",
      official: "Tuvalu",
      nativeName: {
        eng: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
        tvl: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
      },
    },
    countryCode: "TV",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
      TVD: {
        name: "Tuvaluan dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      tvl: "Tuvaluan",
    },
    flag: "🇹🇻",
    population: 11792,
  },
  {
    name: {
      common: "Wallis and Futuna",
      official: "Territory of the Wallis and Futuna Islands",
      nativeName: {
        fra: {
          official: "Territoire des îles Wallis et Futuna",
          common: "Wallis et Futuna",
        },
      },
    },
    countryCode: "WF",
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇼🇫",
    population: 11750,
  },
  {
    name: {
      common: "Nauru",
      official: "Republic of Nauru",
      nativeName: {
        eng: {
          official: "Republic of Nauru",
          common: "Nauru",
        },
        nau: {
          official: "Republic of Nauru",
          common: "Nauru",
        },
      },
    },
    countryCode: "NR",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      nau: "Nauru",
    },
    flag: "🇳🇷",
    population: 10834,
  },
  {
    name: {
      common: "Saint Pierre and Miquelon",
      official: "Saint Pierre and Miquelon",
      nativeName: {
        fra: {
          official: "Collectivité territoriale de Saint-Pierre-et-Miquelon",
          common: "Saint-Pierre-et-Miquelon",
        },
      },
    },
    countryCode: "PM",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇵🇲",
    population: 6069,
  },
  {
    name: {
      common: "Montserrat",
      official: "Montserrat",
      nativeName: {
        eng: {
          official: "Montserrat",
          common: "Montserrat",
        },
      },
    },
    countryCode: "MS",
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇲🇸",
    population: 4922,
  },
  {
    name: {
      common: "Saint Barthélemy",
      official: "Collectivity of Saint Barthélemy",
      nativeName: {
        fra: {
          official: "Collectivité de Saint-Barthélemy",
          common: "Saint-Barthélemy",
        },
      },
    },
    countryCode: "BL",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇧🇱",
    population: 4255,
  },
  {
    name: {
      common: "British Indian Ocean Territory",
      official: "British Indian Ocean Territory",
      nativeName: {
        eng: {
          official: "British Indian Ocean Territory",
          common: "British Indian Ocean Territory",
        },
      },
    },
    countryCode: "IO",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇮🇴",
    population: 3000,
  },
  {
    name: {
      common: "Falkland Islands",
      official: "Falkland Islands",
      nativeName: {
        eng: {
          official: "Falkland Islands",
          common: "Falkland Islands",
        },
      },
    },
    countryCode: "FK",
    currencies: {
      FKP: {
        name: "Falkland Islands pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇫🇰",
    population: 2563,
  },
  {
    name: {
      common: "Svalbard and Jan Mayen",
      official: "Svalbard og Jan Mayen",
      nativeName: {
        nor: {
          official: "Svalbard og Jan Mayen",
          common: "Svalbard og Jan Mayen",
        },
      },
    },
    countryCode: "SJ",
    currencies: {
      NOK: {
        name: "krone",
        symbol: "kr",
      },
    },
    languages: {
      nor: "Norwegian",
    },
    flag: "🇸🇯",
    population: 2562,
  },
  {
    name: {
      common: "Norfolk Island",
      official: "Territory of Norfolk Island",
      nativeName: {
        eng: {
          official: "Territory of Norfolk Island",
          common: "Norfolk Island",
        },
        pih: {
          official: "Teratri of Norf'k Ailen",
          common: "Norf'k Ailen",
        },
      },
    },
    countryCode: "NF",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      pih: "Norfuk",
    },
    flag: "🇳🇫",
    population: 2302,
  },
  {
    name: {
      common: "Christmas Island",
      official: "Territory of Christmas Island",
      nativeName: {
        eng: {
          official: "Territory of Christmas Island",
          common: "Christmas Island",
        },
      },
    },
    countryCode: "CX",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇨🇽",
    population: 2072,
  },
  {
    name: {
      common: "Niue",
      official: "Niue",
      nativeName: {
        eng: {
          official: "Niue",
          common: "Niue",
        },
        niu: {
          official: "Niuē",
          common: "Niuē",
        },
      },
    },
    countryCode: "NU",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      niu: "Niuean",
    },
    flag: "🇳🇺",
    population: 1470,
  },
  {
    name: {
      common: "Tokelau",
      official: "Tokelau",
      nativeName: {
        eng: {
          official: "Tokelau",
          common: "Tokelau",
        },
        smo: {
          official: "Tokelau",
          common: "Tokelau",
        },
        tkl: {
          official: "Tokelau",
          common: "Tokelau",
        },
      },
    },
    countryCode: "TK",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
      smo: "Samoan",
      tkl: "Tokelauan",
    },
    flag: "🇹🇰",
    population: 1411,
  },
  {
    name: {
      common: "Antarctica",
      official: "Antarctica",
      nativeName: {},
    },
    countryCode: "AQ",
    currencies: {},
    languages: {},
    flag: "🇦🇶",
    population: 1000,
  },
  {
    name: {
      common: "Cocos (Keeling) Islands",
      official: "Territory of the Cocos (Keeling) Islands",
      nativeName: {
        eng: {
          official: "Territory of the Cocos (Keeling) Islands",
          common: "Cocos (Keeling) Islands",
        },
      },
    },
    countryCode: "CC",
    currencies: {
      AUD: {
        name: "Australian dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇨🇨",
    population: 544,
  },
  {
    name: {
      common: "Vatican City",
      official: "Vatican City State",
      nativeName: {
        ita: {
          official: "Stato della Città del Vaticano",
          common: "Vaticano",
        },
        lat: {
          official: "Status Civitatis Vaticanæ",
          common: "Vaticanæ",
        },
      },
    },
    countryCode: "VA",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      ita: "Italian",
      lat: "Latin",
    },
    flag: "🇻🇦",
    population: 451,
  },
  {
    name: {
      common: "French Southern and Antarctic Lands",
      official: "Territory of the French Southern and Antarctic Lands",
      nativeName: {
        fra: {
          official:
            "Territoire des Terres australes et antarctiques françaises",
          common: "Terres australes et antarctiques françaises",
        },
      },
    },
    countryCode: "TF",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    languages: {
      fra: "French",
    },
    flag: "🇹🇫",
    population: 400,
  },
  {
    name: {
      common: "United States Minor Outlying Islands",
      official: "United States Minor Outlying Islands",
      nativeName: {
        eng: {
          official: "United States Minor Outlying Islands",
          common: "United States Minor Outlying Islands",
        },
      },
    },
    countryCode: "UM",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇺🇲",
    population: 300,
  },
  {
    name: {
      common: "Pitcairn Islands",
      official: "Pitcairn Group of Islands",
      nativeName: {
        eng: {
          official: "Pitcairn Group of Islands",
          common: "Pitcairn Islands",
        },
      },
    },
    countryCode: "PN",
    currencies: {
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇵🇳",
    population: 56,
  },
  {
    name: {
      common: "South Georgia",
      official: "South Georgia and the South Sandwich Islands",
      nativeName: {
        eng: {
          official: "South Georgia and the South Sandwich Islands",
          common: "South Georgia",
        },
      },
    },
    countryCode: "GS",
    currencies: {
      SHP: {
        name: "Saint Helena pound",
        symbol: "£",
      },
    },
    languages: {
      eng: "English",
    },
    flag: "🇬🇸",
    population: 30,
  },
  {
    name: {
      common: "Bouvet Island",
      official: "Bouvet Island",
      nativeName: {
        nor: {
          official: "Bouvetøya",
          common: "Bouvetøya",
        },
      },
    },
    countryCode: "BV",
    currencies: {},
    languages: {
      nor: "Norwegian",
    },
    flag: "🇧🇻",
    population: 0,
  },
  {
    name: {
      common: "Heard Island and McDonald Islands",
      official: "Heard Island and McDonald Islands",
      nativeName: {
        eng: {
          official: "Heard Island and McDonald Islands",
          common: "Heard Island and McDonald Islands",
        },
      },
    },
    countryCode: "HM",
    currencies: {},
    languages: {
      eng: "English",
    },
    flag: "🇭🇲",
    population: 0,
  },
] as const;

export const countryCodeSchema = z.enum(COUNTRY_CODES);
export type CountryCode = z.infer<typeof countryCodeSchema>;
// TODO default it to ""
