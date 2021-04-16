import { createSelector } from 'reselect';

export const butterSelector = state => state.butter;

export const butterLoadingSelector = createSelector(
  butterSelector,
  ({ loading }) => loading,
);

export const butterPostsSelector = createSelector(
  butterSelector,
  ({ posts }) => posts || [],
);
