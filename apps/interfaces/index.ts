import { ReactNode } from "react"

export interface IStatistics {
    id: number
    count: number | string
    title: string
}

export interface IRecentProject {
    id?: number
    fileImage: string
    title: string
    description: string
    isLight?: boolean
    liveBadge?: boolean
    projectId?: string | any
    projectUrl?: string | any
    variant?:any
}

export interface IExperience {
    id?: number
    position: string
    image: string
    startDate: string
    endDate: string
    company: string
    duration: number
    workStatus: string
    jobStatus: string
    location: string
    description: string | any
    variant?: any
}

export interface IPostCard {
    imagePath: string
    postId: string
    title: string
    description: string
    category: string
    variant?: any
}

export interface IStats {
    count: number | string
    title: string
}

export interface ITextProps {
    children: ReactNode | string,
    isLight?: boolean,
    className?: string
    variant?: any
}

export interface ICompanyCard {
    id?: number
    image: string
    title: string
}

export interface ICompany {
    id?: number
    company: string
    route?: string|any
    thumbnailImage: string
}