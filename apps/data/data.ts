import { ICertification, ICompany, ICompanyCard, IReleaseUpdate } from "@interfaces/index"

export const companyList: ICompany[] =[
    { id: 1, company: "Dipa Inhouse", route: "dipainhouse", thumbnailImage: "dipa/dipateam.jpg" },
    { id: 2, company: "1000 Startup Digital", route: "hacksprint", thumbnailImage: "compressed/hacksprint/hacksprint2.jpg" },
    { id: 3, company: "TeamUp Agency", route: "teamupagency", thumbnailImage: "teamup/teamup1.jpg" },
    // { id: 4, company: "Smeshub Indonesia", route: "smeshub" },
    { id: 5, company: "Karisma Academy", route: "karismaacademy", thumbnailImage: "karisma/karisma2.jpg" },
    // { id: 6, company: "Global Inovasi Ventura", route: "globalinovasiventura" },
]

export const communityList: ICompany[] =[
    { id: 1, company: "Surabaya.js", route: "surabayajs", thumbnailImage: "community/surabayajs2.jpg" },
    { id: 2, company: "IXDA Malang", route: "ixdamalang", thumbnailImage: "community/ixda.jpg" },
    { id: 3, company: "SurabayaDev", route: "surabayadev", thumbnailImage: "community/surabayadev2.jpg" },
    { id: 4, company: "Google Developer", route: "googledeveloper", thumbnailImage: "community/gdsc.jpg" },
    // { id: 4, company: "Smeshub Indonesia", route: "smeshub" },
    // { id: 6, company: "Global Inovasi Ventura", route: "globalinovasiventura" },
]

export const releaseUpdate: IReleaseUpdate[] = [
  {
    id: 4,
    dateUpdate: "11 June 2023",
    listUpdate: [
      "Develop Release timeline update section",
      "Add article about Hacktoberfest 2022"
    ]
  },
    {
      id: 1,
      dateUpdate: "10 June 2023",
      listUpdate: [
        "Adjustment cover image project and post detail",
        "Add technology list in project detail"
      ]
    },
    {
      id: 2,
      dateUpdate: "5 June 2023",
      listUpdate: [
        "Add community photo SurabayaDev and Surabaya.js",
        "Add animation in every photo list"
      ]
    },
    {
      id: 3,
      dateUpdate: "2 June 2023",
      listUpdate: [
        "Update Work Experience",
        "Add animation in Homepage"
      ]
    }
  ]

export const certificationList: ICertification[] = [
    { id: 1, title: "AWS Cloud Quest : Cloud Practitioner", image: "aws.jpg", company: "Amazon Web Services ( AWS )", credential: "2ac3c19d-ae43-4527-bed3-2c053c824b9e", links: "https://www.credly.com/badges/2ac3c19d-ae43-4527-bed3-2c053c824b9e/public_url" },
    { id: 2, title: "Cloud Practitioner Essentials ( Cloud Fundamental )", image: "dicoding.jpg", company: "Dicoding Indonesia", credential: "4EXGN5JK1ZRL", links: "https://www.dicoding.com/certificates/4EXGN5JK1ZRL" },
    { id: 3, title: "Fundamental JavaScript", image: "dicoding.jpg", company: "Dicoding Indonesia", credential: "1OP8068RLXQK", links: "https://www.dicoding.com/certificates/1OP8068RLXQK" },
    { id: 4, title: "StudyJam Frontend Development - React.js", image: "nest.jpg", company: "Nest Academy", credential: "5f3477a4-fdcb-405d-8214-dbfc646a5d7d", links: "https://sertiva.id/credential/5f3477a4-fdcb-405d-8214-dbfc646a5d7d" },
    { id: 5, title: "Workshop Build Your First Blockchain dApp", image: "nest.jpg", company: "Nest Academy", credential: "ef424096-443c-4282-976a-3e5c86f8f663", links:"https://sertiva.id/credential/ef424096-443c-4282-976a-3e5c86f8f663" },
    { id: 6, title: "JavaScript Basic", image: "hackerrank.jpg", company: "HackerRank", credential: "7d8372ba5746", links: "https://www.hackerrank.com/certificates/7d8372ba5746" },
    { id: 7, title: "Problem Solving Basic", image: "hackerrank.jpg", company: "HackerRank", credential: "8afc66d81815", links: "https://www.hackerrank.com/certificates/8afc66d81815" },
]

export const TechList = [
    { id: 1, title: "react-logo", height: 170 },
    { id: 2, title: "tailwindcss", height: 120 },
    { id: 3, title: "framer-logo", height: 170 },
    { id: 4, title: "typescript", height: 170 }
]

export const LanguageList = [
    { id: 1, flags: "english", name: "English", value: "en" },
    { id: 2, flags: "indonesia", name: "Indonesia", value: "id" },
    // { id: 3, flags: "germany", name: "Deutch", value: "de" },
    // { id: 5, flags: "netherlands", name: "Netherland" },
    // { id: 6, flags: "france", name: "France" },
    // { id: 7, flags: "australia", name: "Australia" },
]

export const dipaImageList: ICompanyCard[] = [
    { id: 1, image: "dipa/dipateam.jpg", title: "Dipa Inhouse Photo Session" },
    { id: 2, image: "dipa/dipa2.jpg", title: "Gather After Hours at Coffee" },
    { id: 3, image: "dipa/dipa3.jpg", title: "Teamwork during Staycation" },
    { id: 4, image: "dipa/dipa4.jpg", title: "Teamwork during Staycation" },
    { id: 5, image: "dipa/dipa5.jpg", title: "While attending a Dipa Staycation" },
]

export const karismaImageList: ICompanyCard[] = [
    { id: 1, image: "karisma/karisma1.jpg", title: "Lead Web Design Workshop Event" },
    { id: 2, image: "karisma/karisma2.jpg", title: "Photo with all workshop participant" },
    { id: 3, image: "karisma/karisma3.jpg", title: "Lead Web Design Workshop Event" }
]

export const hacksprintImageList: ICompanyCard[] = [
    { id: 1, image: "compressed/hacksprint/hacksprint1.jpg", title: "Define problem phase in Design Thinking" },
    { id: 2, image: "compressed/hacksprint/hacksprint2.jpg", title: "Define main problem with Mentor" },
    { id: 3, image: "compressed/hacksprint/hacksprint3.jpg", title: "Design Prototyping for MVP" },
    { id: 4, image: "compressed/hacksprint/hacksprint4.jpg", title: "Work together with team" },
    { id: 5, image: "compressed/hacksprint/hacksprint5.jpg", title: "Sketching Wireframe in paper" },
    { id: 6, image: "compressed/hacksprint/hacksprint6.jpg", title: "Checking UI with Mentor" },
    { id: 7, image: "compressed/hacksprint/hacksprint7.jpg", title: "Work together with cross team" },
    { id: 8, image: "compressed/hacksprint/hacksprint8.jpg", title: "Define User Persona and Point of View" },
    { id: 9, image: "compressed/hacksprint/hacksprint9.jpg", title: "Crazy8 to visualize possible solution" },
]

export const teamupImageList: ICompanyCard[] = [
    { id: 1, image: "teamup/teamup1.jpg", title: "Engineering Team at TeamUp Intern" },
    { id: 2, image: "teamup/teamup2.jpg", title: "Gather After Hours at Coffee" },
    { id: 3, image: "teamup/teamup3.jpg", title: "Hangout with Dinner After Hours" },
    { id: 4, image: "teamup/teamup4.jpg", title: "Watch Movie on the Weekend" },
    { id: 5, image: "teamup/teamup5.jpg", title: "Go on vacation at the Weekend" },
    { id: 6, image: "teamup/teamup6.jpg", title: "Farewell Party in the last month" },
    { id: 7, image: "teamup/teamup7.jpg", title: "Presentation of what has been done" },
    { id: 8, image: "teamup/teamup8.jpg", title: "Farewell Party in the last month" },
    { id: 9, image: "teamup/teamup9.jpg", title: "Presentation of what has been done" },
]

export const surabayajsImageList: ICompanyCard[] = [
    { id: 1, image: "community/surabayajs1.jpg", title: "Workshop Surabayajs x Hacktiv8 Web Scraping" },
    { id: 2, image: "community/surabayajs2.jpg", title: "Workshop Surabayajs x Hacktiv8 Web Scraping" },
    { id: 3, image: "community/surabayajs3.jpg", title: "Workshop Surabayajs x Hacktiv8 Web Scraping" }
]

export const surabayadevImageList: ICompanyCard[] = [
    { id: 1, image: "community/surabayadev1.jpg", title: "SurabayaDevxHacktiv8 Frontend with JavaScript" },
    { id: 2, image: "community/surabayadev2.jpg", title: "SurabayaDevxHacktiv8 Frontend with JavaScript" },
    { id: 3, image: "community/surabayadev3.jpg", title: "SurabayaDevxHacktiv8 Frontend with JavaScript" }
]

export const ixdaMalangImageList: ICompanyCard[] = [
    { id: 1, image: "community/ixda.jpg", title: "CangkrUXan meetup#1 IXDA Malang in DILO" }
]

export const gdscImageList: ICompanyCard[] = [
    { id: 1, image: "community/gdsc.jpg", title: "GDSC Event with Speaker Surahutomo Aziz P." }
]