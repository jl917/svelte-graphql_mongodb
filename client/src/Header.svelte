<script>
  import list from './store';
  import toast from './utils/toast';

  let content = '';
  const onSubmit = () => {
    if (content === '') {
      return toast.danger('할일을 입력해주세요.');
    }
    list.add({ content });
    content = '';
    return null;
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="uk-margin" uk-margin>
    <div class="uk-form-controls uk-flex">
      <input
        class="uk-input"
        id="form-stacked-text"
        type="text"
        placeholder="할일을 입력하세요."
        bind:value={content} />
      <button class="uk-button uk-button-primary" uk-icon="icon: plus" />
    </div>
  </div>
</form>
