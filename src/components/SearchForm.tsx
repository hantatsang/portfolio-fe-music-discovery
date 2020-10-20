import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchMusicActionCreator } from '../redux/deezer/actions';
import { SearchMusicRequestPayload } from '../types/SearchMusicRequestPayload';
import TextInput from './ui/TextInput';

function SearchForm() {
  const [lastQuery, setLastQuery] = useState<string>('Enter to search songs');
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
    console.log(inputEl)
    inputEl
      && inputEl.current
      && inputEl.current.blur();
  }

  const registerInput = (ref: HTMLInputElement | null): void => {
    inputEl.current = ref;
    register(ref, { required: true })
  }

  return <form
    onSubmit={handleSubmit(onSubmit)}
  >
    <TextInput
      autoComplete="off"
      ref={registerInput}
      type="text"
      name="query"
      id="query"
      placeholder={lastQuery}
    />
  </form>
}

export default SearchForm;
