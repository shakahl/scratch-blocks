/**
 * String representing the variable type of broadcast message blocks.
 * This string, for use in differentiating between types of variables,
 * indicates that the current variable is a broadcast message.
 * @const {string}
 */
const BROADCAST_MESSAGE_VARIABLE_TYPE = 'broadcast_msg';
export {BROADCAST_MESSAGE_VARIABLE_TYPE};


/**
 * String representing the variable type of list blocks.
 * This string, for use in differentiating between types of variables,
 * indicates that the current variable is a list.
 * @const {string}
 */
const LIST_VARIABLE_TYPE = 'list';
export {LIST_VARIABLE_TYPE};

/*
 * The type of all procedure definition blocks.
 * @const {string}
 */
const PROCEDURES_DEFINITION_BLOCK_TYPE = 'procedures_definition';
export {PROCEDURES_DEFINITION_BLOCK_TYPE};

/**
 * The type of all procedure prototype blocks.
 * @const {string}
 */
const PROCEDURES_PROTOTYPE_BLOCK_TYPE = 'procedures_prototype';
export {PROCEDURES_PROTOTYPE_BLOCK_TYPE};

/**
 * The type of all procedure call blocks.
 * @const {string}
 */
const PROCEDURES_CALL_BLOCK_TYPE = 'procedures_call';
export {PROCEDURES_CALL_BLOCK_TYPE};
