/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as WorkoutHistory} from './workout-history'
export {default as Workout} from './workout'
export {default as Routines} from './routines'
export {default as Navbar} from './Nav'
export {Login, Signup} from './auth-form'
export {default as Home} from './Home'
