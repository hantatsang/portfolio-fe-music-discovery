import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchMusicActionCreator } from '../redux/deezer/actions';
import { SearchMusicRequestPayload } from '../types/SearchMusicRequestPayload';

function SearchForm() {
  const [lastQuery, setLastQuery] = useState<string>('Enter artist');
  let inputEl = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const {
    formState,
    handleSubmit,
    register,
    reset
  } = useForm<SearchMusicRequestPayload>({
    mode: 'onChange',
  });

  const onSubmit = useCallback((data: SearchMusicRequestPayload): void => {
    const query = data.query.trim();
    if (!query) {
      return;
    }

    dispatch(searchMusicActionCreator({ query }));

    // clear form and show placeholder as the last input value
    setLastQuery(query);
    reset();
    unfocusInput();
  }, [dispatch]);

  const unfocusInput = (): void => {
    inputEl
      && inputEl.current
      && inputEl.current.blur();
  }

  const registerInput = (ref: HTMLInputElement | null): void => {
    register(ref, { required: true })
  }

  return <form
    onSubmit={handleSubmit(onSubmit)}
  >
    <input
      autoComplete="off"
      ref={registerInput}
      type="text"
      name="query"
      id="query"
      placeholder={lastQuery}
    />
    <button
      disabled={!formState.isValid}
      type="submit"
    >
      Search
    </button>
  </form>
}

export default SearchForm;
