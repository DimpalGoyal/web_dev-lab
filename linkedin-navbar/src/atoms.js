import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 104,
})

export const jobAtom = atom({
    key: 'jobAtom',
    default: 0,
})
export const messaageAtom = atom({
    key: 'messageAtom',
    default: 12,
})
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 0,
})

export const totalNotificationSelector= selector({
    key: 'totalNotificationSelector',
    get: ({get}) => {
        const jobAtomCount = get(jobAtom)
        const messaageAtomCount= get(messaageAtom)
        const networkAtomCount = get(networkAtom)
        const notificationAtomCount = get(notificationAtom)
        const totalCount = jobAtomCount + messaageAtomCount + notificationAtomCount + networkAtomCount
        return totalCount
    }
})