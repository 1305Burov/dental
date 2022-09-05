import {
    CREATE_HEALING,
    REMOVE_HEALING,
    GET_HEALINGS,
    UPDATE_HEALING
} from "./actionTypes";

export function createHealing(healing) {
    return {
        type: CREATE_HEALING,
        payload: healing
    };
}

export function removeHealing(healingId) {
    return {
        type: REMOVE_HEALING,
        payload: healingId
    };
}

export function getHealings(healings) {
    return {
        type: GET_HEALINGS,
        payload: healings
    };
}

export function updateHealing(healing) {
    return {
        type: UPDATE_HEALING,
        payload: healing
    };
}