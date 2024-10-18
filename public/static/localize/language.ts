interface Language {
  context: any;
  dir: "ltr" | "rtl";
}

const ar_lang: Language = {
  dir: "rtl",
  context: {
    "route.home": "الرئيسية",
    "route.signup": "التسجيل",
    "route.about": "معلومات عنا",
    "route.contact": "تواصل معنا",
    "langauge.arabic": "العربية",
    "langauge.english": "الإنجليزية",
    "input.search.placehholder": "عمَّ تبحث؟",
    "topheader.shownow": "تسوق الآن",
    "topheader.content":
      "تخفيضات الصيف على جميع ملابس السباحة وتوصيل سريع مجاني - خصم 50%!",
    "logo.title" : "Execlusive"

  },
};

const en_lang: Language = {
  dir: "ltr",
  context: {
    "route.home": "home",
    "route.signup": "Sign Up",
    "route.about": "about",
    "route.contact": "contact",
    "langauge.arabic": "Arabic",
    "langauge.english": "English",
    "input.search.placehholder": "What are you looking for?",
    "topheader.shownow": "Shop Now",
    "topheader.content":
      " Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
    "logo.title" : "Execlusive"
  },
};
export type LanguagesType = "en" | "ar";
export const langauge_localize = { en: en_lang, ar: ar_lang };
