//TODO: any type
export default function reducerModal(modalState: any, action: any) {

    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...modalState,
                modalActive: true,
                modalCharacter: action.payload
            }

        case 'HIDE_MODAL':
            return {
                ...modalState,
                modalActive: false,
                modalCharacter: null
            }

        default: return {
            modalActive: false,
            modalCharacter: null
        }
    }
}
