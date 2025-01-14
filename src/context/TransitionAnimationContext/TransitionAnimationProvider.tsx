import React, { useReducer, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {TransitionAnimationContext} from './TransitionAnimationContext';
import { 
  transitionReducer, 
  initialState, 
} from './TransitionAnimationReducer';
import { TRANSITION_ACTIONS, TRANSITION_DURATION, INTERVAL_DURATION } from './constants';

interface TransitionProviderProps {
  children: React.ReactNode;
}

export const TransitionAnimationProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [state, dispatch] = useReducer(transitionReducer, initialState);

  // Calculate next index
  const nextIndex = (state.activeIndex + 1) % 3;

  const transition = useCallback(() => {
    dispatch({ type: TRANSITION_ACTIONS.SET_IS_TRANSITIONING, payload: true });

    setTimeout(() => {
      dispatch({ type: TRANSITION_ACTIONS.SET_ACTIVE_INDEX, payload: nextIndex });
      dispatch({ type: TRANSITION_ACTIONS.SET_IS_TRANSITIONING, payload: false });
    }, TRANSITION_DURATION);
  }, [nextIndex]);

  // Handle automatic transitions
  useEffect(() => {
    const intervalId = setInterval(transition, INTERVAL_DURATION);
    return () => clearInterval(intervalId);
  }, [transition]);

  // Reset on category change
  useEffect(() => {
    const category = searchParams.get('category');
    dispatch({ 
      type: TRANSITION_ACTIONS.RESET_STATE, 
      payload: { category } 
    });
  }, [searchParams]);

  return (
    <TransitionAnimationContext.Provider 
      value={{ 
        ...state,
        nextIndex,
        dispatch 
      }}
    >
      {children}
    </TransitionAnimationContext.Provider>
  );
};
