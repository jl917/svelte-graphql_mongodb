<script>
  import list from './store';
</script>

<ul class="uk-list uk-list-disc uk-list-primary">
  {#each $list as item (item.uid)}
    <li>
      <div class="uk-form-controls uk-flex">
        <input class="uk-input" type="text" placeholder="Some text..." bind:value={item.content} />
        <button
          class="uk-button uk-button-danger"
          uk-icon="icon: trash"
          on:click={() => list.remove(item)} />
      </div>
    </li>
  {/each}
</ul>

<ul>
  {#each $list as item (item.uid)}
    <li>{item.content}</li>
  {/each}
</ul>
