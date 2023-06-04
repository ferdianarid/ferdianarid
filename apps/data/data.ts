import { ICertification, ICompany, ICompanyCard } from "@interfaces/index"

export const companyList: ICompany[] =[
    { id: 1, company: "Dipa Inhouse", route: "dipainhouse", thumbnailImage: "dipa/dipateam.jpg" },
    { id: 2, company: "1000 Startup Digital", route: "hacksprint", thumbnailImage: "compressed/hacksprint/hacksprint2.jpg" },
    { id: 3, company: "TeamUp Agency", route: "teamupagency", thumbnailImage: "teamup/teamup1.jpg" },
    // { id: 4, company: "Smeshub Indonesia", route: "smeshub" },
    { id: 5, company: "Karisma Academy", route: "karismaacademy", thumbnailImage: "karisma/karisma2.jpg" },
    // { id: 6, company: "Global Inovasi Ventura", route: "globalinovasiventura" },
]

export const certificationList: ICertification[] = [
    { id: 1, title: "AWS Cloud Quest : Cloud Practitioner", image: "aws.jpg", company: "Amazon Web Services ( AWS )", credential: "Work in progress" },
    { id: 2, title: "Cloud Practitioner Essentials ( Cloud Fundamental )", image: "dicoding.jpg", company: "Dicoding Indonesia", credential: "Work in progress" },
    { id: 3, title: "StudyJam Frontend Development - React.js", image: "nest.jpg", company: "Nest Academy", credential: "Work in progress" },
    { id: 4, title: "Workshop Build Your First Blockchain dApp", image: "nest.jpg", company: "Nest Academy", credential: "Work in progress" },
    { id: 5, title: "JavaScript Basic", image: "hackerrank.jpg", company: "HackerRank", credential: "Work in progress" },
    { id: 6, title: "Problem Solving Basic", image: "hackerrank.jpg", company: "HackerRank", credential: "Work in progress" },
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