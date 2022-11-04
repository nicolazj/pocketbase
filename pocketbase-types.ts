// This file was @generated using pocketbase-typegen

export type IsoDateString = string

export type RecordIdString = string

export type UserIdString = string

export type BaseRecord = {
    id: RecordIdString
    created: IsoDateString
    updated: IsoDateString
    "@collectionId": string
    "@collectionName": string
}

export enum Collections {
	Post = "post",
	Users = "users",
}

export type PostRecord = {
	content: string
	writtenBy: RecordIdString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

export type CollectionRecords = {
	post: PostRecord
	users: UsersRecord
}