/**
 * TODO: Move all game state into a reducer
 *
 * Back Story:
 * Initially only had experience gain that incremented every second to worry about.
 *
 * Now with the store and upgrades, I introduced more state, like digimoney, and things
 * that will influence gain rate of resources. Currently the state is separated into
 * different useEffects. It would be a pain to pass in updater functions to each useEffect
 * to apply upgrade effects/pay for things.
 *
 * Thus moving it into a reducer, where an action has access to and can update multiple parts
 * of state would make this so much simpler!
 **/

const useGameState = () => {};

export default useGameState;
