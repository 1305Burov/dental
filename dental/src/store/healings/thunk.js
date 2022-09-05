import { createHealingAxios, deleteHealingAxios, getHealingsAxios, updateHealingAxios } from "../../api/healings";
import { createHealing, getHealings, removeHealing, updateHealing } from "./actionCreators";

export function getHealingsThunk() {
    return (dispatch, getState) => {
        getHealingsAxios()
            .then(healings => dispatch(getHealings(healings)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })
    }
}

export function createHealingThunk(healing) {
    return (dispatch, getState) => {
        createHealingAxios(healing)
            .then(healing => dispatch(createHealing(healing) ))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}



export function deleteHealingThunk(healingId) {
    return (dispatch, getState) => {
        deleteHealingAxios(healingId)
            .then(() => dispatch(removeHealing(healingId)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}