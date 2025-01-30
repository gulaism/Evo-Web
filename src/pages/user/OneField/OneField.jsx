// styles
import { FaLinkedin } from "react-icons/fa";
import styles from "./OneField.module.scss";
import FaqList from "../../../components/HomePage/HomeBottom/FaqListQuestions/FaqListQuestions";
import React, { useEffect, useState } from "react";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
} from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import Application from "../../../layouts/user/Header/Application";

// const instructors = [
//   {
//     id: 1,
//     name: "Ağasif Abdullayev",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 2,
//     name: "Mənsurə Ağayeva",
//     job: "Scrum Master / Agile Coach",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 3,
//     name: "Samir Məmmədov",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 4,
//     name: "Aynur Seyfullazadə",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 5,
//     name: "Ağasif Abdullayev",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 6,
//     name: "Mənsurə Ağayeva",
//     job: "Scrum Master / Agile Coach",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 7,
//     name: "Samir Məmmədov",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 8,
//     name: "Aynur Seyfullazadə",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
//   {
//     id: 9,
//     name: "Ruslan Murtuzov",
//     job: "Product Designer / QA Engineer",
//     linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
//     profilePicture: "https://thispersondoesnotexist.com/",
//   },
// ];

// const abilitiesToGet = [
//   {
//     title: "Brendin Vizual Şəxsiyyəti",
//     span: "Brendin",
//     description:
//       "Loqo dizaynı, rəng palitrası, tipografiya və ümumi dizayn elementləri ilə əlaqədar qərarlar verməyi əhatə edəcək.",
//   },
//   {
//     title: "İllustrasiya və Qrafik Elementlər",
//     span: "İllustrasiya",
//     description:
//       " Məsələn, brendin vizual dilini dəstəkləyən ikonlar və şəkillər hazırlanması",
//   },
//   {
//     title: "Çap Materiallarının Dizaynı",
//     span: "Çap",
//     description:
//       "Vizit kartları, broşürlər, afişalar, flayerlərin dizaynı və plakatların çap parametrləri (rəng seçimi, şriftlər, ölçülər və s.) ",
//   },
//   {
//     title: "Video Montaj və Effektlər",
//     span: "Video Montaj",
//     description:
//       "Videoları kəsib montajlamağı və yaradıcı effektlər əlavə etməyi mənimsəyəcəksiniz.",
//   },
//   {
//     title: "Ssenarilərin Vizualizasiyası",
//     span: "Ssenarilərin",
//     description:
//       "Fikirlərinizi animasiya vasitəsilə canlandırmağı və hekayələr yaratmağı öyrənəcəksiniz.",
//   },
//   {
//     title: "Təqdimat və Portfel Yaratma ",
//     span: "Təqdimat",
//     description:
//       "Portfellərin hazırlanmasıı və onlayn mühitdə  peşəkar şəkildə təqdim edilməsi",
//   },
// ];


const fields = [
  {
    id: 1,
    name: 'Advanced Front-end',
    description: [
      "Advanced Front-end tədrisi, müasir veb inkişafına dair dərin biliklərə sahib olmağınız üçün nəzərdə tutulmuşdur. Bu proqramda müasir JavaScript, React, Vue.js, TypeScript və digər ön tərəf texnologiyaları üzrə dərslər keçirilir.",
      "Dərslər həm online, həm də əyani formatda keçirilir və sənaye mütəxəssisləri tərəfindən aparılır.",
    ],
    achievements: [
      {
        title: "Müasir JavaScript",
        description:
          "JavaScript-in ən son xüsusiyyətləri və metodları ilə işləmək.",
        span: "JavaScript",
      },
      {
        title: "React və Redux",
        description:
          "React ilə veb tətbiqləri yaratmaq və Redux ilə vəziyyət idarəsini öyrənmək.",
        span: "React",
      },
      {
        title: "Vue.js",
        description:
          "Vue.js ilə müasir ön tərəf tətbiqləri yaratmaq.",
        // span: "Vue.js",
      },
      {
        title: "Web Performance Optimallaşdırma",
        description:
          "Veb səhifələrin sürətini artırmaq üçün optimallaşdırma üsullarını öyrənmək.",
        span: "Optimallaşdırma",
      },
    ],
    program: {
      month: 6,
      hour: 144,
      module: 12,
    },
    tools: [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        name: "React",
      },
      {
        img: "https://miro.medium.com/v2/resize:fit:1358/1*H1gf_lJ_Dg4-FerI80OPeQ.png",
        name: "Redux",
      },
      {
        img: "https://st.fl.ru/users/xw/xwebson/portfolio/f_36961bb5b9a37550.jpg",
        name: "Vue.js",
      },
      {
        img: "https://lucaspro.gallerycdn.vsassets.io/extensions/lucaspro/node-quick-code/1.2.0/1611833103592/Microsoft.VisualStudio.Services.Icons.Default",
        name: "Node.js",
      },
    ],
    modules: [
      {
        name: "Müasir JavaScript",
        description:
          "JavaScript-in yeni xüsusiyyətləri və metodları ilə işləmək.",
      },
      {
        name: "React və Redux",
        description:
          "React ilə veb tətbiqləri yaratmaq və Redux ilə vəziyyət idarəsi.",
      },
      {
        name: "Vue.js",
        description:
          "Vue.js ilə dinamik veb tətbiqləri hazırlamaq.",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Ağasif Abdullayev",
        job: "Frontend Developer",
        linkedinLink: "https://www.linkedin.com/in/agha-abdullayev/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
    ],
    nextGroups: [
      {
        date: "29 yanvar 2025",
        weekPart: "Həftəiçi",
        times: ["11:00-13:00", "19:00-21:00"],
      },
      {
        date: "2 fevral 2025",
        weekPart: "Həftəsonu",
        times: ["11:00-13:00"],
      },
    ],
  },
  {
    id: 2,
    name: "Back-end Java",
    description: [
      "Back-end Java tədrisi ilə server tərəfi inkişafı üzrə dərin biliklər əldə edəcəksiniz. Java dili və onun müasir arxitekturalarını öyrənərək, etibarlı və sürətli server tətbiqləri yaradacaqsınız.",
    ],
    achievements: [
      {
        title: "Java ilə Back-end İnkişafı",
        description: "Java dilində server tətbiqləri hazırlamaq.",
        span: "Java",
      },
      {
        title: "Database Design",
        description:
          "Verilənlər bazası dizaynı və optimallaşdırılması bacarıqları qazanın.",
        span: "Database",
      },
      {
        title: "RESTful API-lar",
        description:
          "RESTful API-lar yaratmaq və inteqrasiya etmək bacarığına sahib olmaq.",
        span: "RESTful",
      },
    ],
    program: {
      month: 6,
      hour: 144,
      module: 12,
    },
    tools: [
      {
        img: "https://blogweb-static.fra1.cdn.digitaloceanspaces.com/images/66aceff2-a3b9-4194-ab80-8ce4e83a3879/blog/i-id-30c0ab51b6234b2d48cb1e5204c91dc0-landn-13",
        name: "Java",
      },
      {
        img: "https://repository-images.githubusercontent.com/167017521/b3672b00-621c-11e9-95f9-55c88786c99f",
        name: "Spring Framework",
      },
      {
        img: "https://php-blog.ru/storage/thumbnail/w1200/uploads/3325609bd3fde9d6f435baf9d30162f3.jpg",
        name: "MySQL",
      },
    ],
    modules: [
      {
        name: "Java ilə Server Tətbiqləri",
        description: "Java dili ilə server tətbiqlərinin inkişafı.",
      },
      {
        name: "Verilənlər Bazası Dizaynı",
        description:
          "Verilənlər bazalarının dizaynı və optimallaşdırılması.",
      },
      {
        name: "RESTful API-lar",
        description:
          "RESTful API-ların yaradılması və inteqrasiyası.",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Mənsurə Ağayeva",
        job: "Back-end Developer",
        linkedinLink: "https://www.linkedin.com/in/mensure-agayeva/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
    ],
    nextGroups: [
      {
        date: "29 yanvar 2025",
        weekPart: "Həftəiçi",
        times: ["11:00-13:00", "19:00-21:00"],
      },
      {
        date: "2 fevral 2025",
        weekPart: "Həftəsonu",
        times: ["11:00-13:00"],
      },
    ],
  },
  {
    id: 3,
    name: "Data Analitika",
    description: [
      "Data analitika üzrə tədris ilə məlumatların toplanması, təhlili və vizualizasiyası sahələrində mütəxəssis olacaqsınız. R, Python, SQL və digər vasitələrlə verilənlər üzərində analizlər aparmağı öyrənəcəksiniz.",
    ],
    achievements: [
      {
        title: "Verilənlər Analizi",
        description:
          "Verilənləri təhlil etmək və nəticələri çıxarmaq üçün Python və R dilini istifadə edərək təcrübə qazanacaqsınız.",
        span: "Analizi",
      },
      {
        title: "SQL ilə Məlumatlar",
        description:
          "SQL sorğuları ilə verilənlər bazasında məlumatları əldə etmək və işləmək.",
        span: "SQL",
      },
      {
        title: "Verilənlər Vizualizasiyası",
        description:
          "Data vizualizasiyası üçün Python və R vasitələrindən istifadə.",
        span: "Vizualizasiyası",
      },
    ],
    program: {
      month: 6,
      hour: 144,
      module: 10,
    },
    tools: [
      {
        img: "https://yt3.googleusercontent.com/ytc/AIdro_nVO0J5OX20crpSoKFjrGBAXokEeHA-ik8Zz3L5R-0WEA=s900-c-k-c0x00ffffff-no-rj",
        name: "R",
      },
      {
        img: "https://miro.medium.com/v2/resize:fit:824/0*xpUr7O3r4f02FJBy.jpg",
        name: "SQL",
      },
      {
        img: "https://d3mxt5v3yxgcsr.cloudfront.net/courses/15007/course_15007_image.png",
        name: "Python",
      },
    ],
    modules: [
      {
        name: "Verilənlər Təhlili",
        description: "Python və R ilə verilənlər üzərində analizlər aparmaq.",
      },
      {
        name: "SQL və Verilənlər Bazası",
        description: "SQL ilə verilənlər bazasında məlumatlar əldə etmək.",
      },
      {
        name: "Verilənlər Vizualizasiyası",
        description: "Python və R ilə verilənləri vizuallaşdırmaq.",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Samir Məmmədov",
        job: "Data Analyst",
        linkedinLink: "https://www.linkedin.com/in/samir-mammadov/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
    ],
    nextGroups: [
      {
        date: "29 yanvar 2025",
        weekPart: "Həftəiçi",
        times: ["11:00-13:00", "19:00-21:00"],
      },
      {
        date: "2 fevral 2025",
        weekPart: "Həftəsonu",
        times: ["11:00-13:00"],
      },
    ],
  },
  {
    id: 4,
    name: "Rəqəmsal Marketinq",
    description: [
      "Rəqəmsal Marketinq proqramı ilə rəqəmsal dünyada marketinq strategiyalarını inkişaf etdirəcəksiniz. SEO, SEM, sosial media və e-poçt marketinqi kimi mövzuları öyrənəcəksiniz.",
    ],
    achievements: [
      {
        title: "SEO və SEM",
        description:
          "SEO və SEM bacarıqları ilə veb saytların axtarış motorlarında yaxşı nəticələr əldə etməyi öyrənmək.",
        span: "SEO",
      },
      {
        title: "Sosial Media Marketinqi",
        description:
          "Sosial media platformalarında marketinq kampaniyaları təşkil etmək və analitik vasitələrdən istifadə etmək.",
        span: "Sosial Media",
      },
      {
        title: "E-poçt Marketinqi",
        description:
          "E-poçt kampaniyalarını yaratmaq və analitikası ilə nəticələri ölçmək.",
        span: "E-poçt",
      },
    ],
    program: {
      month: 6,
      hour: 144,
      module: 10,
    },
    tools: [
      {
        img: "https://avatars.mds.yandex.net/get-altay/7383884/2a00000183ece1511c1ad52b0f54ad5ced0d/XXL_height",
        name: "Google Ads",
      },
      {
        img: "https://www.iebschool.com/blog/wp-content/uploads/2017/05/Facebook-Ads.png",
        name: "Facebook Ads",
      },
      {
        img: "https://i.pinimg.com/originals/b0/43/22/b043224d9f450812f165a4efcfeeb8ac.jpg",
        name: "Instagram",
      },
    ],
    modules: [
      {
        name: "SEO və SEM",
        description:
          "SEO və SEM ilə veb saytların axtarış motorlarında yaxşı nəticələr əldə etmək.",
      },
      {
        name: "Sosial Media Marketinqi",
        description:
          "Sosial media üzərindən marketinq kampaniyaları təşkil etmək.",
      },
      {
        name: "E-poçt Marketinqi",
        description:
          "E-poçt marketinqi və analitikası ilə nəticə ölçmə.",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Aynur Seyfullazadə",
        job: "Digital Marketing Expert",
        linkedinLink: "https://www.linkedin.com/in/aynur-seyfullazade/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
    ],
    nextGroups: [
      {
        date: "29 yanvar 2025",
        weekPart: "Həftəiçi",
        times: ["11:00-13:00", "19:00-21:00"],
      },
      {
        date: "2 fevral 2025",
        weekPart: "Həftəsonu",
        times: ["11:00-13:00"],
      },
    ],
  },
  {
    id: 5,
    name: "Qrafik/Motion Dizayn",
    description: [
      "Evo Academy-də Qrafik və Motion Dizayn tədrisi 6 ay (144 saat) davam edir və qlobal sektor tələblərinə uyğun proqram əsasında keçirilir. Dərslər həm online, həm də əyani formatda təşkil olunur. Təlimçilərimiz 5-10 illik təcrübəyə malik, peşəkar dizaynerlərdir. Həmçinin, mentor dəstəyi praktiki tapşırıqların daha effektiv və keyfiyyətli şəkildə icra olunmasına şərait yaradacaq.",
      "Hazırda akademiyamızda 3 növ endirim mövcuddur: 20% – işsizlər, 30% – tələbələr, 40% – InnoTech təqaüd proqramı.",
    ],
    achievements: [
      {
        title: "Brendin Vizual Şəxsiyyəti",
        description:
          "Loqo dizaynı, rəng palitrası, tipografiya və ümumi dizayn elementləri ilə əlaqədar qərarlar verməyi əhatə edəcək.",
        span: "Brendin",
      },
      {
        title: "İllustrasiya və Qrafik Elementlər",
        description:
          " Məsələn, brendin vizual dilini dəstəkləyən ikonlar və şəkillər hazırlanması",
        span: "Illustrasiya",
      },
      {
        title: "Çap Materiallarının Dizaynı",
        description:
          "Vizit kartları, broşürlər, afişalar, flayerlərin dizaynı və plakatların çap parametrləri (rəng seçimi, şriftlər, ölçülər və s.) ",
        span: "Çap Materiallarının Dizaynı",
      },
      {
        title: "Video Montaj və Effektlər",
        description:
          "Videoları kəsib montajlamağı və yaradıcı effektlər əlavə etməyi mənimsəyəcəksiniz.",
        span: "Video Montaj",
      },
      {
        title: "Ssenarilərin Vizualizasiyası",
        description:
          "Fikirlərinizi animasiya vasitəsilə canlandırmağı və hekayələr yaratmağı öyrənəcəksiniz.",
        span: "Ssenarilərin",
      },
      {
        title: "Təqdimat və Portfel Yaratma ",
        description:
          "Portfellərin hazırlanmasıı və onlayn mühitdə  peşəkar şəkildə təqdim edilməsi",
        span: "Təqdimat",
      },
    ],
    program: {
      month: 6,
      hour: 144,
      module: 15,
    },
    tools: [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
        name: "Adobe Photoshop",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
        name: "Adobe Illustrator",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtNAEyUrL0zgjGvrkqlo3zibAz_l530p8mg&s",
        name: "Adobe InDesign",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
        name: "Adobe After Effects",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Adobe_Dimension_Logo.svg/2101px-Adobe_Dimension_Logo.svg.png",
        name: "Adobe Dimension",
      },
    ],
    modules: [
      {
        name: "Qrafik Dizaynın Əsasları",
        description:
          "Qrafik dizaynın nə olduğunu və onun vizual kommunikasiya aləti kimi rolunu öyrənəcək, dizaynın elementləri (rəng, şəkil, mətn) və prinsipləri (həssaslıq, balans, kontrast, ritm) haqqında məlumat əldə edəcəksən.",
      },
      {
        name: "Vektor və Rastr Qrafikası",
        description:
          "Adobe Illustrator kimi vektor proqramları ilə işləməyi və Adobe Photoshop ilə rastr şəkilləri tənzimləməyi öyrənəcəksən, həmçinin hər iki növ qrafikanı birləşdirərək peşəkar dizaynlar yaratmaq bacarığı qazanacaqsan.",
      },
      {
        name: "Rəng Nəzəriyyəsi",
        description:
          "Rənglər və onların psixologiyası haqqında anlayış qazanacaq, həmçinin, rənglərin brendinq və vizual ünsiyyətdə necə istifadə olunacağını praktiki nümunələrlə tətbiq edəcəksən.",
      },
      {
        name: "Tipografiya və Mətnin Dizaynı",
        description:
          "Mətnin necə düzgün və estetik şəkildə dizayn ediləcəyini öyrənəcək, fərqli font tiplərinin seçilməsi, mətnin sıralanması və oxunabilirliyin təmin edilməsi mövzularında təcrübə qazanacaqsan.",
      },
      {
        name: "Logoların Yaradılması",
        description:
          "Loqonun konseptinin hazırlanması, rəng və forma uyğunluğu, tipoqrafiyanın düzgün seçilməsi və marka dəyərlərini ifadə edən dizayn yaratma üsullarını öyrənəcək və praktiki nümunələrlə tətbiq edəcəksən.",
      },
      {
        name: "Brendinq və Korporativ üslub",
        description:
          "Siz, markaların tanınmasını artıran və vizual davamlılığı təmin edən dizayn elementlərini peşəkar şəkildə hazırlamağı öyrənəcək, brend mesajının düzgün çatdırılması üçün kreativ həllər üzərində işləyəcəksən.",
      },
      {
        name: "Video Montaj və Hərəkətli Qrafiklər",
        description:
          "Bu bölmədə siz video klipləri redaktə etmə, səhnələri birləşdirmə və effektlər əlavə etmə bacarıqlarını öyrənəcək, hərəkətli qrafiklər vasitəsilə dinamik vizual hekayələr yaradacaqsan.",
      },
      {
        name: "Audio-Vizual Sinxronizasiya",
        description:
          "Musiqi, səs və animasiya elementlərini peşəkar şəkildə birləşdirmək və hərəkətli qrafiklərdə səs effektlərinin emosional təsirini artırmaq bacarılarını öyrənəcək və praktiki nümunələrlə tətbiq edəcəksən.",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Ağasif Abdullayev",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 2,
        name: "Mənsurə Ağayeva",
        job: "Scrum Master / Agile Coach",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 3,
        name: "Samir Məmmədov",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 4,
        name: "Aynur Seyfullazadə",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 5,
        name: "Ağasif Abdullayev",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 6,
        name: "Mənsurə Ağayeva",
        job: "Scrum Master / Agile Coach",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 7,
        name: "Samir Məmmədov",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 8,
        name: "Aynur Seyfullazadə",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
      {
        id: 9,
        name: "Ruslan Murtuzov",
        job: "Product Designer / QA Engineer",
        linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
        profilePicture: "https://thispersondoesnotexist.com/",
      },
    ],
    nextGroups: [
      {
        date: "29 yanvar 2025",
        weekPart: "Həftəiçi",
        times: ["11:00-13:00", "19:00-21:00"],
      },
      {
        date: "2 fevral 2025",
        weekPart: "Həftəsonu",
        times: ["11:00-13:00"],
      },
    ],
    students: [
      {
        name: "Elizabeth Bennet",
        job: "Freelance / Qrafik Dizayner",
        saying:
          '"Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə dəstək və motivasiya mənbəyi olan bir ailədir!"',
        portfolio: [
          "https://www.behance.net/search/projects/about%20us%20website?tracking_source=typeahead_search_recent_suggestion",
          "https://www.behance.net/search/projects/about%20us%20website?tracking_source=typeahead_search_recent_suggestion",
          "https://www.behance.net/search/projects/about%20us%20website?tracking_source=typeahead_search_recent_suggestion",
          "https://www.behance.net/search/projects/about%20us%20website?tracking_source=typeahead_search_recent_suggestion",
        ],
      },
    ],
  },
];
const Item = ({ title, span, description }) => {
  const splitTitle =
    span && title
      ? title.split(new RegExp(`(${span})`, "i"))
      : [title]; // If span is null, keep title as is

  return (
    <div className={styles.item}>
      <h3 className={styles.itemTitle}>
        {splitTitle.map((part, index) =>
          span && part.toLowerCase() === span.toLowerCase() ? (
            <span key={index}>{part}</span>
          ) : (
            <React.Fragment key={index}>{part}</React.Fragment>
          )
        )}
      </h3>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  );
};


const OneField = () => {
  const location = useLocation();
  const fieldName = location.state?.field;
  const field = fields.find(fld => String(fld.name).trim().toLowerCase() === String(fieldName).trim().toLowerCase());
  if(fieldName === undefined) {
    return null;
  }
  if(field === undefined) {
    console.log(field, fieldName);
    return (
      <div style={{color: 'red', fontSize: '20px', textAlign: 'center', margin: '5vh auto', fontWeight: 'bold', height: "50vh"}}>Bu sahə kursumuzda hələ ki tədris olunmur.</div>
    );
  }
  const [itemsPerRow, setItemsPerRow] = useState(3);
  useEffect(() => {
    if (window.innerWidth <= 600) setItemsPerRow(1);
    else if (window.innerWidth >= 600 && window.innerWidth <= 1024) {
      setItemsPerRow(2);
    } else setItemsPerRow(3);
  }, []);

  const [clickedIns, setClickedIns] = useState(null);
  const [windowWidth, setWindowWidth] = useState("");

  const rows = Math.ceil(field.achievements.length / itemsPerRow);

  useEffect(() => {
    if (window.innerWidth >= 600 && window.innerWidth <= 1025)
      setWindowWidth("tablet");
    else setWindowWidth("web");
  }, []);

  useEffect(() => {
    console.log(field);
  }, [field]);

  const [hoveredBox, setHoveredBox] = useState(null);

  const handleClickingInsCont = (id) => {
    console.log(id);
    setClickedIns((prevId) => (prevId === id ? null : id));
  };

  const handleMouseEnter = (index) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);

  return (
    fieldName !== undefined && (
      <div className="container">
        <section className={styles.firstSection}>
          <div className={styles.title}>Tədris sahələri</div>
          <div className={styles.description}>
            Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin,
            gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və
            təcrübəni bu gün əldə edin.
          </div>
          <div className={styles.generalInfo}>
            <div className={styles.fieldName}>{field.name}</div>
            <div className={styles.fieldDesc}>
              {field.description.map((desc, index) => (
                <div key={index}>{desc}</div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.whatYouWillGet}>
          <div className={styles.title}>Nələri bacaracaqsan?</div>
          <div className={styles.grid}>
            {Array.from({ length: rows }).map((_, rowIndex) => {
              const start = rowIndex * itemsPerRow;
              const end = Math.min(
                start + itemsPerRow,
                field.achievements.length
              );
              const rowItems = field.achievements.slice(start, end);

              return (
                <div key={rowIndex} className={styles.row}>
                  {rowItems.map((item, itemIndex) => (
                    <Item key={itemIndex} {...item} />
                  ))}
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.program}>
          <div className={styles.title}>Tədris proqramı</div>
          <div className={styles.programDuration}>
            <div>
              <div className={styles.number}>{field.program.month}</div>
              <div className={styles.detail}>Ay</div>
            </div>
            <div>
              <div className={styles.number}>{field.program.hour}</div>
              <div className={styles.detail}>Saat</div>
            </div>
            <div>
              <div className={styles.number}>{field.program.module}</div>
              <div className={styles.detail}>Modul</div>
            </div>
          </div>
          <div className={styles.question}>Hansı alətlərlə işləyəcəksən?</div>
          <div className={styles.tools}>
            {field.tools.map((tool, index) => (
              <div className={styles.tool} key={index}>
                <div>
                  <img src={tool.img} alt="" />
                </div>
                <div>{tool.name}</div>
              </div>
            ))}
          </div>
          <div className={styles.grid}>
            {field.modules.map((mod, index) => (
              <div key={index}>
                <div className={styles.title}>{mod.name}</div>
                <div className={styles.description}>{mod.description}</div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.instruktorss}>
          <div className={styles.instructorsCont}>
            <div className={styles.instructorHeader}>İnstruktorlar</div>
            <div className={styles.description}>
              Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində
              tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz
              texnologiya sahəsindəki yenilikləri yaxından izləyir və öz
              dərslərində müasir yanaşmaları tətbiq edir.
            </div>
            <div className={styles.gridCont}>
              {field.instructors.map((instructor, index) => (
                <div
                  onClick={() => handleClickingInsCont(instructor.id)}
                  className={`${styles.insCont} ${
                    clickedIns === instructor.id ? styles.clicked : ""
                  }`}
                  key={instructor.id}
                  style={
                    clickedIns === instructor.id
                      ? { border: "1px solid #7E8D9C5E" }
                      : {}
                  }
                >
                  <div className={styles.instructor}>
                    <div className={styles.photoCont}>
                      <img
                        src={instructor.profilePicture}
                        alt={`${instructor.name}'s photo`}
                      />
                    </div>
                    <div>
                      <div className={styles.instName}>{instructor.name}</div>
                      <div className={styles.instProf}>{instructor.job}</div>
                      <a href={instructor.linkedinLink}>
                        <FaLinkedin
                          color="#0c65c2"
                          size={windowWidth === "web" ? 32 : 24}
                        />
                      </a>
                    </div>
                  </div>
                  {/* {clickedIns === instructor.id && ( */}
                  <div className={styles.hiddenInfo}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </div>
                  {/* )} */}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.nextGroups}>
          <div className={styles.title}>Növbəti Qruplarımız</div>
          <div className={styles.flex}>
            {field.nextGroups?.map((group, index) => (
              <div key={index}>
                <div className={styles.title}>{group.date}</div>
                <div className={styles.type}>{group.weekPart}</div>
                <div className={styles.time}>
                  {group.times.map((time, index) => (
                    <div key={index}>{time}</div>
                  ))}
                </div>
                <button>Müraciət et</button>
              </div>
            ))}
          </div>
        </section>
        {/* below section only for graphic design students */}
        {field.name === "Qrafik/Motion Dizayn" && (
          <section className={styles.portfolio}>
            <div className={styles.title}>Tədrisdən Yaradıcılığa</div>
            <div className={styles.desc}>
              Tələbələrimizin hazırladığı əl işləri, onların tədris müddətində
              qazandıqları bilik və bacarıqları necə mənimsədiklərini və bu
              bilikləri yaradıcılıqla birləşdirərək real nəticələrə çevirməkdə
              nə dərəcədə uğurlu olduqlarını aydın şəkildə nümayiş etdirir.
            </div>
            <div className={styles.slider}>
              <div>
                <div className={styles.studentInfo}>
                  <div className={styles.img}>
                    <img src="https://thispersondoesnotexist.com" alt="" />
                  </div>
                  <div>
                    <div className={styles.name}>Elizabeth Bennet</div>
                    <div className={styles.job}>
                      Freelance / Qrafik Dizayner
                    </div>
                  </div>
                </div>
                <div className={styles.saying}>
                  "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
                  dəstək və motivasiya mənbəyi olan bir ailədir!"
                </div>
                <div className={styles.grid}>
                  {/* {[0, 1, 2, 3].map((index) => {
                let gridArea;
                console.log(hoveredBox);

                if (hoveredBox === null) {
                  // Default positions when no box is hovered
                  gridArea =
                    index === 0
                      ? "1/1/2/2"
                      : index === 1
                      ? "1/2/2/3"
                      : index === 2
                      ? "2/1/3/2"
                      : "2/2/3/3";
                } else if (hoveredBox === index) {
                  // Enlarge the hovered box
                  gridArea = "1/1/3/3";
                } else if (hoveredBox === 0 || hoveredBox === 1) {
                  // When Box 0 or 1 is hovered, reposition other boxes
                  gridArea =
                    index === 0 || index === 1
                      ? "3/1/4/2"
                      : index === 2
                      ? "3/2/4/3"
                      : "4/1/5/2";
                } else {
                  // When Box 2 or 3 is hovered
                  gridArea =
                    index === 0
                      ? "3/1/4/2"
                      : index === 1
                      ? "3/2/4/3"
                      : index === 2
                      ? "3/2/4/3"
                      : "4/1/5/2";
                }

                return (
                  <div
                    key={index}
                    className={`${styles.box} ${
                      hoveredBox === index ? styles.hovered : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ gridArea }}
                  >
                    <img
                      src={
                        index === 0
                          ? "https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                          : index === 1
                          ? "https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                          : "https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                      }
                      alt=""
                    />
                  </div>
                );
              })} */}

                  {/* <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div>
              <div className={styles.box}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div> */}
                </div>
              </div>
              <div>
                <div className={styles.studentInfo}>
                  <div className={styles.img}>
                    <img src="https://thispersondoesnotexist.com" alt="" />
                  </div>
                  <div>
                    <div className={styles.name}>Elizabeth Bennet</div>
                    <div className={styles.job}>
                      Freelance / Qrafik Dizayner
                    </div>
                  </div>
                </div>
                <div className={styles.saying}>
                  "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
                  dəstək və motivasiya mənbəyi olan bir ailədir!"
                </div>
                <div className={styles.grid}>
                  <div className={styles.box}>
                    <img
                      src="https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.studentInfo}>
                  <div className={styles.img}>
                    <img src="https://thispersondoesnotexist.com" alt="" />
                  </div>
                  <div>
                    <div className={styles.name}>Elizabeth Bennet</div>
                    <div className={styles.job}>
                      Freelance / Qrafik Dizayner
                    </div>
                  </div>
                </div>
                <div className={styles.saying}>
                  "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
                  dəstək və motivasiya mənbəyi olan bir ailədir!"
                </div>
                <div className={styles.grid}>
                  <div className={styles.box}>
                    <img
                      src="https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                      alt=""
                    />
                  </div>
                  <div className={styles.box}>
                    <img
                      src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section>
          <FaqList />
        </section>
      </div>
    )
  );
};

export default OneField;
