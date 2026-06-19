// ─────────────────────────────────────────
//  Action Type Constants
// ─────────────────────────────────────────
export const ADD_PATIENT = 'ADD_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

// ─────────────────────────────────────────
//  Action Creators
// ─────────────────────────────────────────

/**
 * addPatient
 * Creates an ADD_PATIENT action.
 * Payload carries the patient name and a unique id.
 * The id uses Date.now() so every patient gets a stable
 * unique key — important for React list rendering and
 * for deletion (we delete by id, not by array index).
 */
export const addPatient = (name) => ({
  type: ADD_PATIENT,
  payload: {
    id: Date.now(),   // unique identifier
    name,             // patient name string
  },
});

/**
 * deletePatient
 * Creates a DELETE_PATIENT action.
 * Payload carries only the id — the reducer will filter
 * the patients array to remove the matching entry.
 */
export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  payload: { id },
});